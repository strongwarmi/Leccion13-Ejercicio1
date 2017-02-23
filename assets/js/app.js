function Imprimir(){
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var dni = document.getElementById("dni").value;
  var direccion = document.getElementById("direccion").value;
  document.getElementById('resultado').innerHTML = "<ul><li> Nombre : " + nombre + "</li> <li>Apellido: " + apellido + "</li><li> DNI: "+ dni + "</li><li> Dirección: " + direccion + "</li></ul>"
}
