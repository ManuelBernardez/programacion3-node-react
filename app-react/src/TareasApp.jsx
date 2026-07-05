import { useState } from 'react'

function TareasApp() {
  const [tareas, setTareas] = useState([])
  const [texto, setTexto] = useState('')

  function agregarTarea() {
    if (texto.trim() === '') return
    setTareas([...tareas, { texto, completada: false }])
    setTexto('')
  }

  function eliminarTarea(index) {
    setTareas(tareas.filter((_, i) => i !== index))
  }

  function alternarCompletada(index) {
    setTareas(
      tareas.map((tarea, i) =>
        i === index ? { ...tarea, completada: !tarea.completada } : tarea
      )
    )
  }

  function manejarTecla(e) {
    if (e.key === 'Enter') agregarTarea()
  }

  const pendientes = tareas.filter((t) => !t.completada).length
  const completadas = tareas.length - pendientes

  return (
    <div className="tareas-app">
      <h2>Mi lista</h2>
      <p className="contador">
        {pendientes} pendientes · {completadas} completadas
      </p>

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
          <li key={index} className={tarea.completada ? 'completada' : ''}>
            <label className="tarea-texto">
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => alternarCompletada(index)}
              />
              {tarea.texto}
            </label>
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {tareas.length === 0 && <p>No hay tareas cargadas todavía.</p>}
    </div>
  )
}

export default TareasApp