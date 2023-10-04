// Función para mostrar el contador
function updateCounter() {
    // Define la fecha de inicio (4 de octubre de 2023)
    var startDate = new Date('2023-10-04');

    // Define la fecha de finalización (4 de octubre de 2023)
    var endDate = new Date('2023-11-04');

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now and the end date
      var distance = endDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="time-counter"
      document.getElementById('time-counter').innerHTML =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        // Uncomment the following line if you want the counter to restart
        // updateCounter(); // Restart the counter
      }
    }, 1000);
  }

  // Inicia el contador cuando se carga la página
  updateCounter();