document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){

if(localStorage.getItem("kirjautunut") === 'kylla'){
    document.getElementById('tervetuloa_teksti').textContent += localStorage.getItem("nimi");
    
}
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}

function kirjauduUlos(){
    localStorage.setItem("kirjautunut ulos", document.getElementById("kylla").value);
}