import React from 'react';
import '../App.css';
import Cronometro from '../components/cronometro/cronometro';
import Formulario from '../components/form/form';
import Lista from '../components/lista/lista';
import { useState } from 'react';
import  style  from './App.module.scss';
import { iTarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<iTarefa[]>([]);
  const [selecionado, setSelecionado] = useState<iTarefa>();
  function selecionarTarefa(tarefaSelecionada:iTarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>(
      {
        ...tarefa,
        selecionado:tarefa.id === tarefaSelecionada.id ? true : false
      })));
    }
  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefaAnteriores => tarefaAnteriores.map(tarefa =>{
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado:false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }
    return (
      <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}></Formulario>
      <Cronometro 
        selecionado={selecionado}
        FinalizarTarefa={finalizarTarefa}
       ></Cronometro>
      <Lista
       tarefas={tarefas} 
        selecionaTarefa={selecionarTarefa}
      ></Lista>
    </div>
  );
}

export default App;
