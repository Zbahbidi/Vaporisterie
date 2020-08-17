let contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {

    let myPseudo = document.getElementById('pseudo');
    let regexPseudo = /^[a-zA-Z-\s]+$/;

    if (myPseudo.value.trim() == "") {
        let errorPseudo = document.getElementById('errorPseudo');
        errorPseudo.innerHTML = "Un pseudo est requis";
        errorPseudo.style.color = "red";
        errorPseudo.style.fontSize = "x-large";
        errorPseudo.style.fontWeight = "bold";
        e.preventDefault();
    } else if (regexPseudo.test(myPseudo.value) == false) {
        let errorPseudo = document.getElementById('errorPseudo');
        errorPseudo.innerHTML = "Votre pseudo doit comporter uniquement des lettres et des tirets";
        errorPseudo.style.color = "red";
        errorPseudo.style.fontSize = "x-large";
        errorPseudo.style.fontWeight = "bold";
        e.preventDefault();

    }

});




// let contactForm = document.getElementById('contact-form');

// contactForm.addEventListener('submit', function(e) {

//     let myEmail = document.getElementById('email');
//     let regexMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

//     if (myEmail.value.trim() == "") {
//         let errorEmail = document.getElementById('errorEmail');
//         errorEmail.innerHTML = "Une adresse email est requise";
//         errorEmail.style.color = "red";
//         e.preventDefault();
//     } else if (regexEmail.test(myEmail.value) == false){
//         let errorEmail = document.getElementById('errorEmail');
//         errorEmail.innerHTML = "Votre adresse email est invalide";
//         errorEmail.style.color = "red";
//         e.preventDefault();
//     }
// })



// let contactForm = document.getElementById('contact-form');

// contactForm.addEventListener('submit', function(e) {

//     let myPassword = document.getElementById('password'); 
//     let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

//     if (myPassword.value.trim() == ""){
//         let errorPassword = document.getElementById('errorPassword');
//         errorPassword.innerHTML = "Un mot de passe est requis";
//         errorPassword.style.color = "red";
//         e.preventDefault();
//     } else if (regexPassword.test(myPassword.value) == false){
//         let errorPassword = document.getElementById('errorPassword');
//         errorPassword.innerHTML = "Votre mot de passe doit contenir 8 caractères dont une lettre, un nombre et un caractère spécial";
//         errorPassword.style.color = "red";
//         e.preventDefault();
//     }


// })