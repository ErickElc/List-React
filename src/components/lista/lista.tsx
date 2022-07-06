import Item from "./item/item";
import style from "./lista.module.scss";
import { iTarefa } from "../../types/tarefa";
interface props{
    tarefas: iTarefa[],
    selecionaTarefa: (tarefaSelecionada: iTarefa) => void
}
function Lista({tarefas, selecionaTarefa} : props){
    return (
        <div>
            <aside className={style.listaTarefas}>
                <h2>Estudos do Dia</h2>
                <ul>
                    {tarefas.map((item:any)=>(
                        <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}/>
                    ))}
                </ul>
            </aside>
        </div>
    )
}

export default Lista;