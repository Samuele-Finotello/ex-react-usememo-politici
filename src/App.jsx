import { useState, useEffect, useMemo } from "react"

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
          return (
            <li className="card" key={politician.id}>
              <h2 className="pt-20">{politician.name} ({politician.position})</h2>
              <div className="d-flex">
                <img src={politician.image} alt={politician.name} />
                <p className="mx-10">{politician.biography}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
