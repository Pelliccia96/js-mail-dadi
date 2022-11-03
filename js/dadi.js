const dadiUser = (Math.floor(Math.random() * 6) + 1);
const dadiPc = (Math.floor(Math.random() * 6) + 1);

console.log (`Dado Utente: ${dadiUser} vs Dado Computer: ${dadiPc}`);

if (dadiUser > dadiPc) {
    console.log("Vince l'Utente: " + dadiUser);
} else if (dadiUser < dadiPc) {
    console.log("Vince il Computer: " + dadiPc);
} else {
    console.log("Pareggio, ritirare i dadi.");
}
