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
            if (($("#telefono").val().length < 9) || ($("#telefono").val().length > 9)) {
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
    $("#selCiudad").click(function () {
        $.getJSON(
            'https://api.datos.observatoriologistico.cl/api/v2/datastreams/COMUN-POR-REGIO/data.json/?auth_key=YOUR_API_KEY&limit=50',//URL api
            function (data) {


                $.each(data, function (i, item) {
                    $("#selCiudad").append('<option value=" ' + item.nombre_region + '"></option>');
                }
                )
            })



        if ($('#selCiudad').val().trim() === '') {
            alert('Debe seleccionar una opción');

        } else {

        }

        event.preventDefault();


    });



//radioButton

var rut = document.getElementById('rut');
// evento para el input radio del "rut"
document.getElementById('selRut').addEventListener('click', function (e) {
    console.log('Vamos a habilitar el input text');

    //RUT
    $("errorRut").hide()
    $("#rut").blur(function () {
        console.log("no focuseado")


        var Fn = {
            // Valida el rut con su cadena completa "XXXXXXXX-X"
            validaRut: function (rutCompleto) {
                rutCompleto = rutCompleto.replace("‐", "-");
                if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
                    return false;
                var tmp = rutCompleto.split('-');
                var digv = tmp[1];
                var rut = tmp[0];
                if (digv == 'K') digv = 'k';

                return (Fn.dv(rut) == digv);
            },
            dv: function (T) {
                var M = 0, S = 1;
                for (; T; T = Math.floor(T / 10))
                    S = (S + T % 10 * (9 - M++ % 6)) % 11;
                return S ? S - 1 : 'k';
            }
        }

        if (Fn.validaRut($("#rut").val())) {
            // $("#errorRut").html("El rut ingresado es válido");
        } else {
            $("#errorRut").html("El Rut no es válido. Debe ingresar rut sin puntos y con guión ej:11111111-1");
            $("#errorRut").fadeIn()

        }
    })
    $("#rut").focus(function () {
        console.log("focuseado")
        $("#errorRut").fadeOut()

        event.preventDefault();
    });

});

// evento para el input radio del "pasaporte"
document.getElementById('selPasaporte').addEventListener('click', function (e) {
    console.log('Vamos a deshabilitar el input text');

});




//que el formulario no se envie a menos que cumpla la validacion en este caso la contraseña
$("#form1").submit(function () {
    console.log("submit")
    var pass = $("txt2").val()
    if (pass.length < 8) {
        $("error2").html("contraseña debe tener 8 caracteres")
        event.preventDefault()
    }
})

});//

