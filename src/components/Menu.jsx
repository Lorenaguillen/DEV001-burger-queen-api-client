import { Productos } from './Productos'
import { useEffect, useState } from 'react'
export function Menu () {
  const [db, setdb] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/productos') // hacemos peticion get
      .then(resp => resp.json())
      .then(resp => setdb(resp))
  }, [])

  return (
    <div>
      {
     db.map(el => {
       return (
         <Productos key={el.id} nombre={el.name} precio={el.price} tipo={el.type} />
       )
     })

      }
      <p>Total</p>
      <button> Pagar</button>
    </div>
  )
}