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

  useEffect(() => {
    fetch('http://localhost:3333/politicians')
      .then(res => res.json())
      .then(data => setPoliticians(data))
      .catch(error => console.error(error))
  }, [])

  const filteredPoliticians = useMemo(() => {
    return politicians.filter(politician => {
      const isInFilter = politician.name.toLowerCase().includes(text.toLowerCase()) || politician.biography.toLowerCase().includes(text.toLowerCase())
      return isInFilter;
    })
  }, [politicians, text])

  return (
    <div>
      <h1>Lista di politici</h1>
      <input type="text"
        placeholder="Inserisci ricerca"
        value={text}
        onChange={e => setText(e.target.value)} />
      <ul>
        {filteredPoliticians.map(politician => {
          return <MemoizedPoliticianCard key={politician.id} {...politician} />
        })}
      </ul>
    </div>
  )
}

export default App
