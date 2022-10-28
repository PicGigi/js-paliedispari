const parola = prompt("Inserisci una parola e ti dirò se è palindroma");

const lunghezzaParola = parola.length;

console.log("La parola \'"+ parola + "\' contiene " + lunghezzaParola + " lettere.");
console.log("")

let risultato = true;
function checkLettere(primaLettera, secondaLettera)
{
    if(primaLettera === secondaLettera){
        risultato = true;
        console.log("Ok! Queste coincidono!")
    }
    else{
        risultato = false;
        console.log("Oh no! Queste non coincidono!")
        console.log("")
        console.log("Questa parola non è palindroma!")
    }

    return risultato;
}

for(i=0; i<(parseInt(lunghezzaParola / 2)) && risultato == true; i++)
{
    console.log("La lettera nella posizione " + (i + 1) + " è: " + parola[i]);
    console.log("La lettera nella posizione " + (lunghezzaParola - i) + " è: " + parola[lunghezzaParola - 1 - i]);
    checkLettere(parola[i], parola[lunghezzaParola - 1 - i]);
    console.log("")
}

if(risultato == true){
    console.log("Questa parola è palindroma!")
    console.log("")
}



let pariDispari = prompt("Ora giochiamo a pari o dispari! Scegli tu per primo, pari o dispari?");
let scelta = 0;

while(pariDispari !="pari" && pariDispari !="Pari" && pariDispari !="PARI" && pariDispari !="dispari" && pariDispari !="Dispari" && pariDispari !="DISPARI"){
    pariDispari = prompt("DEVI SCEGLIERE TRA PARI O DISPARI!!!");
}

if(pariDispari == "pari" || pariDispari == "Pari" || pariDispari == "PARI"){
    console.log("Hai scelto pari!")
    scelta = "pari";
}
else if(pariDispari == "dispari" || pariDispari == "Dispari" || pariDispari == "DISPARI"){
    console.log("Hai scelto dispari!")
    scelta = "dispari";
}

let mioNumero = parseInt(prompt("Ora scegli un numero tra 1 e 5!"))
while(mioNumero!=1 && mioNumero!=2 && mioNumero!=3 && mioNumero!=4 && mioNumero!=5){
    mioNumero = parseInt(prompt("DEVI SCEGLIERE UN NUMERO TRA 1 E 5!!!"));
}
console.log("Hai scelto " + mioNumero)

const cpuNumero = Math.floor(Math.random() * 5) + 1;
console.log("Il computer ha scelto " + cpuNumero)

if( ((mioNumero + cpuNumero) % 2 === 0 && scelta === "pari") || ((mioNumero + cpuNumero) % 2 === 1 && scelta === "dispari") ){
    console.log("Hai vinto!")
}
else{
    console.log("Hai perso!")
}