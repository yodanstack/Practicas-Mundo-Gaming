$(document).ready(function() {
    $('#formulario').submit(function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto
        
        // Obtener los valores de los campos
        const datosUsuario = {
            "nombre": $('#nombre').val(),
            "apellidos": $('#apellidos').val(),
            "fecha": $('#fecha').val(),
            "correo": $('#correo').val(),
            "edad": $('#edad').val()
        };
        
        console.log(datosUsuario)

        if(datosUsuario.edad < 18) {
            alert('Eres menor de edad')
            return
        }
        if(datosUsuario.edad >= 18) {
            window.location.href = 'contizacion_tattoo.html'
        }
        
        // Puedes resetear el formulario después del envío
        $('#formulario')[0].reset();
    });
});



