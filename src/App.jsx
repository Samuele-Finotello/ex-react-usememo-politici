import { useState, useEffect } from "react"

function App() {

  const [politicians, setPoliticians] = useState([])

  useEffect(() => {
    fetch('http://localhost:3333/politicians')
      .then(res => res.json())
      .then(data => setPoliticians(data))
      .catch(error => console.error(error))
  }, [])

  console.log(politicians)

  return (
    <div>
      <h1>Lista di politici</h1>
      <ul>
        {politicians.map(politician => {
          return (
            <li className="card" key={politician.id}>
              <h2 className="pt-20">{politician.name} ({politician.position})</h2>
              <div className="d-flex">
                <img src={politician.image} alt={politician.name} />
                <p className="ms-10">{politician.biography}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
