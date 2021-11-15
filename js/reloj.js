const mostrarReloj = ()=>{
    let fecha = new Date ();
    let hrs = formatoHora (fecha.getHours());
    let minutos= formatoHora (fecha.getMinutes());
    let seconds= formatoHora (fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hrs}:${minutos}:${seconds}`

    const meses= ['enero','febrero', 'marzo', ' abril', 'mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    const dias= ['domiengo','lunes','martes','miercoles',' jueves','viernes','sabado'];
    let diaSemana = dias[fecha.getDay()]
    let dia = fecha.getDate();
    let mes =  meses[fecha.getMonth()];
    let year = [fecha.getFullYear()]
    let fechaTexto = `${diaSemana} ${dia} de ${mes} de ${year}`
    document.getElementById ('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar')
}
const formatoHora= (hora) =>{
    if (hora < 10)
    hora = '0' + hora;
    return hora;

}
setInterval(mostrarReloj,1000)