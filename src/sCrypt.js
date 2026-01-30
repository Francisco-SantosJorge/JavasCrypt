let A_randomTable = [];

for (let i = 0; i < 20; i++) {
    A_randomTable.push(Math.round(Math.random() * (41 + 10) - 10));
}

console.log(A_randomTable);

const O_resultat = document.getElementById("output");

let I_cpt = -1;
const I_idInterval = setInterval(() => {
    let O_toDelete = document.getElementById("alert");
    if (O_toDelete != null) {
        O_toDelete.remove();
    }
    I_cpt++;
    const O_alert = document.createElement('p')
    O_alert.id = "alert";
    O_alert.role = "alert";
    O_resultat.innerText = A_randomTable[I_cpt].toString();
    O_resultat.classList.remove("blue", "green", "orange", "red");
    if (A_randomTable[I_cpt] < 0) {
        O_resultat.classList.add("blue");
        O_alert.innerText = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        O_resultat.before(O_alert);
    }
    else if (A_randomTable[I_cpt] < 20) {
        O_resultat.classList.add("green");
    }
    else if (A_randomTable[I_cpt] < 30) {
        O_resultat.classList.add("orange");
    }
    else {
        O_resultat.classList.add("red");
        O_alert.innerText = "Caliente ! Vamos a la playa, ho hoho hoho !!";
        O_resultat.before(O_alert);
    }
    if (I_cpt >= A_randomTable.length - 1) clearInterval(I_idInterval);
}, 4000);