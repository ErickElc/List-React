import React, { useState } from "react";
import { iTarefa } from "../../types/tarefa";
import Botao from "../botao/botao";
import style from "./form.module.scss";
import {v4 as uuidv4} from "uuid"
interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<iTarefa[]>>
}
function Formulario ({setTarefas}:Props){
    const [tarefa, setTarefa] = useState("");
    const [ tempo , setTempo] = useState("00:00");
    function addTarefa(e: React.FormEvent){
        e.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas,
                {
                    tarefa,
                    tempo,
                    selecionado:false,
                    completado: false,
                    id: uuidv4()
                }
            ])
        setTarefa('');
        setTempo("00:00")
    }
    return(
        <div>
            <form action="" className={style.novaTarefa} onSubmit={addTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="">Adicione um novo estudo: </label>
                    <input 
                        type="text" 
                        name="Tarefa" 
                        id={style.tarefa}
                        value={tarefa}
                        onChange={evento => setTarefa(evento.target.value)}
                        placeholder="O que Você quer estudar??" required>    
                    </input>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="">Tempo:</label>
                    <input
                    step="1"
                    type="time" 
                    name="tempo" 
                    value={tempo}
                    onChange={evento => setTempo (evento.target.value)}
                    id={style.tempo} 
                    min="00:00:00"
                    max="01:30:00" required>
                    </input>
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
        </div>
    )
}
export default Formulario;