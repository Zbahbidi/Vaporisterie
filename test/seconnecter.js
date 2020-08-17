let connexionForm = document.getElementById('connexion-form');

connexionForm.addEventListener('submit', function (f) {

    let myPseudo = document.getElementById('pseudo');
    let regexPseudo = /^[a-zA-Z-\s]+$/;

    if (myPseudo.value.trim() == "") {
        let errorPseudo = document.getElementById('errorPseudo');
        errorPseudo.innerHTML = "Un pseudo est requis";
        errorPseudo.style.color = "red";
        errorPseudo.style.fontSize = "x-large";
        errorPseudo.style.fontWeight = "bold";
        f.preventDefault();
    } else if (regexPseudo.test(myPseudo.value) == false) {
        let errorPseudo = document.getElementById('errorPseudo');
        errorPseudo.innerHTML = "Votre pseudo doit comporter uniquement des lettres et des tirets";
        errorPseudo.style.color = "red";
        errorPseudo.style.fontSize = "x-large";
        errorPseudo.style.fontWeight = "bold";
        f.preventDefault();

    }

});

