class Alert {
    update(I_val) {
        if (document.getElementById('alert') != null) {
            document.getElementById('alert').remove();
        }
        const O_alert = document.createElement('p');
        if (I_val < 0) {
            O_alert.innerText = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
            document.getElementById('output').before(O_alert);
        }
        else if (I_Val => 30) {
            O_alert.innerText = "Caliente ! Vamos a la playa, ho hoho hoho !!";
            document.getElementById('output').before(O_alert);
        }
    }
}