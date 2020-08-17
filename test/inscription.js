let contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit',function(e) {

    let myPseudo = document.getElementById('pseudo');
    let myRegex = /^[a-zA-Z-\s]+$/;

    if (myPseudo.value.trim() = ""){
        let myError = document.getElementById('error');
        myError.innerHTML = "Un pseudo est requis";
        myError.style.color = "red";
         e.preventDefault();
    } else if(myRegex.test(myPseudo.value) = false) {
        let myError = document.getElementById('error');
        myError.innerHTML = "Votre pseudo doit comporter uniquement des lettres et des tirets";
        myError.style.color = "red";
        e.preventDefault();

    }

})