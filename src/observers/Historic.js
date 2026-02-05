class Historic {
    update(I_val) {
        const O_historic = document.createElement('li');
        O_historic.innerText = I_val + 'ºC';
        document.getElementById("historic").append(O_historic);
    }
}