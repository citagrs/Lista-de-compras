const borrarIcono = () =>{
    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon","icon");
    i.addEventListener("click", borrarProducto);
    return i;
}

const borrarProducto = (evento)=>{
    const parent = evento.target.parentElement;
    parent.remove();
}

export default borrarIcono;