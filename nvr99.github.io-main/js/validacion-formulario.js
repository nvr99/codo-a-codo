function validateForm() {
    var fechaInicio = new Date(document.getElementById('fechaInicio').value);
    var fechaFin = new Date(document.getElementById('fechaFin').value);
    var fechaActual = new Date();
  
    fechaInicio.setHours(0, 0, 0, 0);
  
    if (fechaInicio < fechaActual) {
      alert("La fecha de inicio no puede ser anterior a la fecha actual.");
      return false;
    }
  
    if (fechaFin < fechaInicio) {
      alert("La fecha de fin no puede ser anterior a la fecha de inicio.");
      return false;
    }
  
    var mountainBike = parseInt(document.getElementById('mountainBike').value);
    var playeraBike = parseInt(document.getElementById('playeraBike').value);
    var dobleBike = parseInt(document.getElementById('dobleBike').value);
  
    if (mountainBike < 0 || playeraBike < 0 || dobleBike < 0) {
      alert("La cantidad de mountain bikes, playeras o dobles no puede ser negativa.");
      return false;
    }
  
    return true;
}
  
  
  