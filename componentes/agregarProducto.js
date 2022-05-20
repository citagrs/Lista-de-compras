const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far");
    i.classList.add("fa-check-square");
    i.classList.add("icon");
    i.addEventListener("click",productoCompleto);
    return i;
}

const productoCompleto = (event) =>{
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}

export default checkComplete;