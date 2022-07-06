import { iTarefa } from "../../../types/tarefa";
import style from "./item.module.scss";

interface props extends iTarefa{
    selecionaTarefa: (tarefaSelecionada: iTarefa) => void
}
function Item(
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa
    }:props){
    return(
        <li 
            className={`
                ${style.item} 
                ${selecionado ? style.itemSelecionado : ""} 
                ${completado ? style.itemCompletado : ''}`
            } 
            onClick={()=> !completado && selecionaTarefa(
            {
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            }
        )}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido}
            aria-label=""
            ></span>}
        </li>
    )
}
export default Item;