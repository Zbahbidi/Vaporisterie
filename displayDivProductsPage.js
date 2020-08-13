var element = document.getElementById('unid'); //La div possède l'id "unid" qui sert à la repérer
// element.innerHTML = 'ceci est du texte'; //On écrit "ceci est du texte" dans la div


var list_div = new Array('page1', 'page2', 'page3', 'page4');

//Au chargement de la page, on ne laisse affichée que la première div
window.onload = function () {
    for (var i = 1; i < list_div.length; i++) { //On commence la boucle à 1 pour ne pas modifier la première div de la liste
        var div = document.getElementById(list_div[i]);
        div.style.display = 'none';
    }
}

function displayDiv(id) {
    for (var i = 0; i < list_div.length; i++) {
        var div = document.getElementById(list_div[i]);
        //On rend la div visible si son id est le même que celui passé en paramètre de la fonction, sinon on la masque
        div.style.display = (div.id == id ? '' : 'none');
    }
}

function showAvis() {
    var div = document.getElementById("contentAvis");
    if (div.style.display == "none") {
        div.style.display = "inline";
    } else {
        div.style.display = "none";
    }
}
function participate() {
    var div = document.getElementById("contentParticipate");
    if (div.style.display == "none") {
        div.style.display = "inline";
    } else {
        div.style.display = "none";
    }
}

function incrementThumbsUp() {
    var value = parseInt(document.getElementById('numberThumbsUp').value, 0);
    value = isNaN(value) ? 0 : value;
    value = value + 1;
    document.getElementById('numberThumbsUp').value = value;
    document.getElementById('numberThumbsUp').style = "color:green;";

}

function incrementThumbsDown() {
    var value = parseInt(document.getElementById('numberThumbsDown').value, 0);
    value = isNaN(value) ? 0 : value;
    value = value + 1;
    document.getElementById('numberThumbsDown').value = value;
    document.getElementById('numberThumbsDown').style = "color:red;";


}




