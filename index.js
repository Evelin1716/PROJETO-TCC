const usuario={
    xp:120,
    nível:"Iniciante Verde",
    pontos:300

};

function atualizarDashboard(){
    document.getElementByld("pontos").innerText=usuario.pontos;
}

atualizarDashboard();
