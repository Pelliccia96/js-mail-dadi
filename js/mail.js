const userMail = prompt ("Inserisci la tua email");
console.log(userMail);

let listaMail = ["pippo@gmail.com" , "ciccio@gmail.com" , "franco@gmail.com" , "siepi@gmail.com"];
console.log(listaMail);

let mailTrovata = "";

for (let i = 0; i < listaMail.length; i++) {
    console.log(i);
    console.log( listaMail [i]);

    if (userMail === listaMail [i]) {
        mailTrovata = "gg easy";
    }
}

if (mailTrovata !== "") {
    alert("L'email è registrata, puoi accedere.");
} else {
    alert("L'email non è registrata, non puoi accedere.");
}
