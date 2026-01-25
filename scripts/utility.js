function getElementTextById(elementID){
    const element = document.getElementById(elementID);
    const text = element.innerText;
    return text;
}

function removeClassListById(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}