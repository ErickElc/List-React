export function tempoParaSegundos(tempo:string){
    const [horas = '0' , min = '0', seg = '0'] = tempo.split(':')
    const horasEmSeg = Number(horas) * 3600;
    const minEmSeg = Number(min) * 60;
    return horasEmSeg + minEmSeg + Number(seg); 

} 