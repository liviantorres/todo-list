import TodoItem from "./TodoItem"
import { useState } from "react"

const TodoList = () => {
    const [tarefas, setTarefas] = useState([])
    const [descricaoDaTarefa, setDescricaoDaTarefa] = useState('')
    const [tituloDaTarefa, setTituloDaTarefa] = useState('')

    function addTarefa(event){
        event.preventDefault()
        setTarefas((tarefas) => {
            const novaTarefa = {
                titulo: tituloDaTarefa,
                descricao: descricaoDaTarefa
            }
            return [...tarefas, novaTarefa]
        })

        setTituloDaTarefa('')
        setDescricaoDaTarefa('')
    }

    return (
        <main>
        <h1>Lista de tarefas</h1>
        <div className="addTarefa">
            <form onSubmit={addTarefa}>
                <span>
                <label htmlFor="title"> Titulo da tarefa: </label>
                <input 
                    type="text"
                    value={tituloDaTarefa}
                    onChange={(e) => setTituloDaTarefa(e.target.value)}
                />
                </span>
                <span>
                <label htmlFor="descricao">Descrição da Tarefa: </label>
                <textarea 
                    name="descricao" 
                    value={descricaoDaTarefa}
                    onChange={ (e) => setDescricaoDaTarefa(e.target.value)}
                ></textarea>
                </span>
                <button type="submit" >Adicionar</button>
            </form>
        </div>
        <div className="item-tarefa">
            {tarefas?.map((item, index)=>(
                    <TodoItem 
                    key={index}
                    titulo={item.titulo}
                    descricao={item.descricao}
                    >   
                    </TodoItem>
            ))}
        </div>

        </main>
    )
}

export default TodoList