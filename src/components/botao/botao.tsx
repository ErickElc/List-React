import React from "react";
import style  from "./botao.module.scss";

interface props{
    children?:  React.ReactNode
    onClick?: ( ) => void
    type?: "button" | "submit" | "reset" | undefined
}
function Botao( {onClick, type , children}: props){
    return(
        <div>
            <button onClick={onClick} type={type} className={style.botao}>
                {children}
            </button>
        </div>
    )
}
export default Botao;