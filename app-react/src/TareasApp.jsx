import { useState } from 'react'

function TareasApp() {
  const [tareas, setTareas] = useState([])
  const [texto, setTexto] = useState('')

  function agregarTarea() {
    if (texto.trim() === '') return
    setTareas([...tareas, texto])
    setTexto('')
  }

  function eliminarTarea(index) {
    setTareas(prevTareas => prevTareas.filter((_, i) => i !== index))
  }

  function manejarTecla(e) {
    if (e.key === 'Enter') agregarTarea()
  }

  return (
    <div className="tareas-app">
      <h2>Mi lista de tareas ({tareas.length})</h2>

      <div className="tareas-input">
        <input
          type="text"
          value={texto}
          placeholder="Escribí una tarea..."
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={manejarTecla}
        />
        <button onClick={agregarTarea} disabled={texto.trim() === ''}>
          Agregar
        </button>
      </div>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {tareas.length === 0 && <p>No hay tareas cargadas todavía.</p>}
    </div>
  )
}

export default TareasApp