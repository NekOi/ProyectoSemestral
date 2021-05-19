$(document).ready(function () {
    $("#error1").hide()
    $("#nomCompleto").blur(function () {
        console.log("no focuseado")
    //nombre
        if ($("#nomCompleto").val().trim().length == 0) {
            $("#error1").html("campo obligatorio")
            $("#error1").fadeIn()
        }
    });

    $("#nomCompleto").focus(function () {
        console.log("focuseado")
        $("#error1").fadeOut()

        event.preventDefault();

    });

    //correo
    $("error2").hide()
    $("#mail").blur(function () {
        console.log("no focuseado")

        var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

        if ($("#mail").val().trim().length == 0) {
            $("#error2").html("campo obligartorio")
            $("#error2").fadeIn()
        } else {
            if (regex.test($('#mail').val().trim())) {

            } else {
                alert('La direccón de correo no es válida');
            }
        }

    })

    $("#mail").focus(function () {
        console.log("focuseado")
        $("#error2").fadeOut()

        event.preventDefault();
    });


    //  telefono era opcional pero weno~

    $("error3").hide()
    $("#telefono").blur(function () {
        console.log("no focuseado")

        if ($("#telefono").val().trim().length == 0) {
            $("#error3").html("campo obligatorio")
            $("#error3").fadeIn()
        } else {
            if (($("#telefono").val().length < 9) || ($("#telefono").val().length > 9)){
                alert("El teléfono debe tener 9 caracteres.Ej: 999999999");
                
            } else {
                return
            }            
        }
    })

    $("#telefono").focus(function () {
        console.log("focuseado")
        $("#error3").fadeOut()

        event.preventDefault();
    });

    //seleccionar
    $("#selCiudad").click(function(){
    
        if ($('#selCiudad').val().trim() === '') {
            alert('Debe seleccionar una opción');

        } else {
            alert('Campo correcto');
        }

        event.preventDefault();
    });





});//

