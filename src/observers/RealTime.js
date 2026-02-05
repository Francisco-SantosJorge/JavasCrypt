class RealTime {
    update(I_val) {
        const O_resultat = document.getElementById("output");
        O_resultat.innerText = I_val + 'ºC';
        O_resultat.classList.remove("blue", "green", "orange", "red");
        if (I_val < 0) {
            O_resultat.classList.add("blue");
        }
        else if (I_val < 20) {
            O_resultat.classList.add("green");
        }
        else if (I_val < 30) {
            O_resultat.classList.add("orange");
        }
        else {
            O_resultat.classList.add("red");
        }
    }
}