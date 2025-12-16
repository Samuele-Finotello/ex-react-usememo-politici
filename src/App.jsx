import React, { useState, useEffect, useMemo } from "react"

function PoliticianCard({ name, position, image, biography }) {
  console.log('card')
  return (
    <li className="card">
      <h2 className="pt-20">{name} ({position})</h2>
      <div className="d-flex">
        <img src={image} alt={name} />
        <p className="mx-10">{biography}</p>
      </div>
    </li>
  )
}

const MemoizedPoliticianCard = React.memo(PoliticianCard)

function App() {

  const [politicians, setPoliticians] = useState([])
  const [text, setText] = useState('')
  const [selectedPosition, setSelectedPosition] = useState('')

  useEffect(() => {
    fetch('http://localhost:3333/politicians')
      .then(res => res.json())
      .then(data => setPoliticians(data))
      .catch(error => console.error(error))
  }, [])

  const filteredPoliticians = useMemo(() => {
    return politicians.filter(politician => {
      const isInName = politician.name.toLowerCase().includes(text.toLowerCase())
      const isInBio = politician.biography.toLowerCase().includes(text.toLowerCase())
      const isPosition = selectedPosition === '' || selectedPosition === politician.position
      return (isInName || isInBio) && isPosition;
    })
  }, [politicians, text, selectedPosition])

  const positions = useMemo(() => {
    return politicians.reduce((acc, politician) => {
      if (!acc.includes(politician.position)) {
        return [...acc, politician.position]
      }
      return acc;
    }, [])
  }, [politicians])

  return (
    <div>
      <h1>Lista di politici</h1>
      <input type="text"
        placeholder="Inserisci ricerca"
        value={text}
        onChange={e => setText(e.target.value)} />
      <select className="ms-10" value={selectedPosition} onChange={e => setSelectedPosition(e.target.value)}>
        <option value="">Filtra per posizione</option>
        {positions.map((position, index) => {
          return (
            <option key={index} value={position}>{position}</option>
          )
        })}
      </select>
      <ul>
        {filteredPoliticians.map(politician => {
          return <MemoizedPoliticianCard key={politician.id} {...politician} />
        })}
      </ul>
    </div>
  )
}

export default App
