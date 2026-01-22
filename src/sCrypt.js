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
    if (I_cpt >= A_randomTable.length - 1) clearInterval(I_idInterval);
}, 2000);