let A_randomTable = [];

for (let i = 0; i < 20; i++) {
    A_randomTable.push(Math.round(Math.random() * (41 + 10) - 10));
}

console.log(A_randomTable);

const O_resultat = document.getElementById("output");

let I_cpt = -1;
const I_idInterval = setInterval(() => {
    I_cpt++;
    O_resultat.innerText = A_randomTable[I_cpt].toString();
    O_resultat.classList.remove("blue", "green", "orange", "red");
    if (A_randomTable[I_cpt] < 0) O_resultat.classList.add("blue");
    else if (A_randomTable[I_cpt] < 20) O_resultat.classList.add("green");
    else if (A_randomTable[I_cpt] < 30) O_resultat.classList.add("orange");
    else O_resultat.classList.add("red");
    if (I_cpt >= A_randomTable.length - 1) clearInterval(I_idInterval);
}, 2000);