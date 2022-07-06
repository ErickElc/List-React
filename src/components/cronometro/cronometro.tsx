import Botao from "../botao/botao";
import Relogio from "./Relogio/relogio";
import style from "./cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { iTarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";
interface Props {
    selecionado: iTarefa | undefined,
    FinalizarTarefa: () => void 
}

function Cronometro({selecionado, FinalizarTarefa}: Props){
    const [ tempo, setTempo] = useState<number>((tempoParaSegundos (String(selecionado?.tempo))))
    useEffect(()=>{
       if((selecionado?.tempo)){
        setTempo(tempoParaSegundos(selecionado.tempo))
       }
    },[selecionado])
    function regressiva(contador : number = 0){
        setTimeout(()=>{
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            FinalizarTarefa();
        },1000)
    }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={()=>{regressiva(tempo)}}>
                Começar!
            </Botao>
        </div>
    )
}

export default Cronometro;