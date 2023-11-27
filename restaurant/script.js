function validateForm() {
    var nume = document.getElementById('nume').value;
    var telefon = document.getElementById('telefon').value;
    var mesaj = document.getElementById('mesaj').value;
    var errorMessage = document.getElementById('error-message');
    var successPopup = document.getElementById('success-popup');

    // Validare pentru nume 
    if (nume.trim() === '') {
        showError('Te rog să introduci numele.');
        return false;
    }

    // Validare pentru telefon
    var telefonPattern = /^[0-9]{9,}$/;
    if (!telefonPattern.test(telefon)) {
        showError('Te rog să introduci un număr de telefon valid cu cel puțin 9 cifre.');
        return false;
    }

    // Validare pentru mesaj 
    if (mesaj.trim() === '') {
        showError('Te rog să introduci un mesaj.');
        return false;
    }

    // Resetarea mesajului de eroare
    errorMessage.style.display = 'none';

    // Afiseaza pop-up-ul de succes cu mesajul corespunzător
    showSuccess('Datele au fost trimise cu succes!');

    // Golește formularul
    document.getElementById('nume').value = '';
    document.getElementById('telefon').value = '';
    document.getElementById('mesaj').value = '';

    // Întoarce false pentru a opri trimiterea formularului 
    return false;
}

function showError(message) {
    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(function () {
        errorMessage.style.display = 'none';
    }, 3000); // Afișează mesajul de eroare pentru 3 secunde
}

function showSuccess(message) {
    var successPopup = document.getElementById('success-popup');
    successPopup.textContent = message;
    successPopup.style.display = 'block';
    setTimeout(function () {
        successPopup.style.display = 'none';
    }, 3000); // Afișează mesajul de succes pentru 3 secunde
}


// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element 
    document.getElementById("countdown").innerHTML = days + " "+"Zile " + " " + hours + " " + "Ore " + " "
        + minutes + " "+ "Minute " + " " + seconds + " "+ "Secunde ";

    // If the count down is finished
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);