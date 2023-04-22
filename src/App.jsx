import React, { useEffect, useState } from "react";
import { Global } from "./styles/Global";
import * as C from "./styles";
import { useForm } from "react-hook-form";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
function App() {
  const { register, handleSubmit } = useForm();
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [editTarefa, setEditTarefa] = useState(null)

  useEffect(() => {
    const data = localStorage.getItem("dados");
    if (data) {
      setTarefas(JSON.parse(data));
    }
  }, []);
  const updateLocalStorage = (tarefas) => {
    localStorage.setItem("dados",JSON.stringify(tarefas))
  };

  const handleAdd = (e) => {

    const dados = {
      nome: e.tarefas,
      id: Math.floor(Math.random() * 100),
      status : false
    };
    if(input == ""){
      alert("Digite a tarefa")
    }else{
      setTarefas([...tarefas, dados]);
      updateLocalStorage([...tarefas,dados])
      setInput("");
    }

  };
  const handleRemove = (id) => {
    const newTarefa = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(newTarefa);
    updateLocalStorage(newTarefa);
  };

  const handleStartEdit = (tarefa) => {
    setEdit(true)
    setEditTarefa(tarefa)
  }
  const handleEdit = (e) => {
    const updateTarefa = tarefas.map((tarefa) =>
        tarefa.id === editTarefa.id ? editTarefa : tarefa  
    )
    setTarefas(updateTarefa);
    updateLocalStorage(updateTarefa)
    setEdit(false)
    setEditTarefa(null)
  }
  const handleDone = (tarefa) => {
    const newTarefa = tarefas.map((t) => {
      if(t.id === tarefa.id){
        return{
          ...t, status: !t.status
        }
      }
      return t;
    })
    setTarefas(newTarefa)
    updateLocalStorage(newTarefa)
  }
  return (
    <>
        <C.Container>
          <h1>TodoList</h1>
          <C.TodoList>
            <form onSubmit={handleSubmit(handleAdd)}>
              <input
                type="text"
                placeholder="Digite a tarefa:"
                {...register("tarefas")}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">Enviar</button>
            </form>
          </C.TodoList>
          {edit && (
            <C.TodoList>
              <form onSubmit={handleSubmit(handleEdit)}>
                <input type="text" placeholder="Editar tarefa: "{...register("tarefas")}
                value={editTarefa.nome}
                onChange={(e) => setEditTarefa({...editTarefa, nome: e.target.value})}
                />
                <button type="submit">Salvar</button>
              </form>
            </C.TodoList>
          )}

          {tarefas.map((tarefa, index) => (
            <C.Lista key={index}>
              {tarefa.status ? (<li className="ativo" key={index}>{tarefa.nome}</li>): (<li key={index}>{tarefa.nome}</li>)}
              <div>
                <button onClick={() => handleDone(tarefa)}>{tarefa.status ? "Desfazer" : "Concluido"}</button>


                <button className="remover">
                  <AiOutlineClose onClick={() => handleRemove(tarefa.id)} />
                </button>
                <button className="edit">
                  <AiOutlineEdit onClick={() => handleStartEdit(tarefa)} />
                </button>
              </div>
            </C.Lista>
          ))}
        </C.Container>
        <Global />
    </>
  );
}

export default App;
