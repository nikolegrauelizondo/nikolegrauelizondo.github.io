'use strict';

window.addEventListener('load', init, false);

function init() {
    let name = document.getElementById('nameText');
    let email = document.getElementById('emailText');
    let subject = document.getElementById('serviceText');
    let message = document.getElementById('messageText');
    let buttonSend = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    buttonSend.onclick = function () {
        name = nameText.value;
        email = emailText.value;
        subject = serviceText.value;
        message = messageText.value;

        if (name === '' && email === '' && subject === '' && message === '') {
            Swal.fire({
                html: '<iframe width="125" heigth="125" src="https://embed.lottiefiles.com/animation/131874"></iframe>',
                title: 'Debe de llenar todos los campos.',
                timer: 5000,
                showCancelButton: false,
                showConfirmButton: false
            });

        } else if (name === '') {
            Swal.fire({
                html: '<iframe width="125" heigth="125" src="https://embed.lottiefiles.com/animation/131874"></iframe>',
                title: 'El campo "Nombre Completo" está vacío.',
                timer: 5000,
                showCancelButton: false,
                showConfirmButton: false
            });

        } else if (email === '') {
            Swal.fire({
                html: '<iframe width="125" heigth="125" src="https://embed.lottiefiles.com/animation/131874"></iframe>',
                title: 'El campo "Correo Electrónico" está vacío.',
                timer: 5000,
                showCancelButton: false,
                showConfirmButton: false
            });

        } else if (expressionEmail.test(email) === false) {
            Swal.fire({

                html: '<iframe width="125" heigth="125" src="https://embed.lottiefiles.com/animation/131874"></iframe>',
                title: 'El correo electrónico es inválido.',
                timer: 5000,
                showCancelButton: false,
                showConfirmButton: false
            });

        } else if (subject === '') {
            Swal.fire({
                html: '<iframe width="125" heigth="125" src="https://embed.lottiefiles.com/animation/131874"></iframe>',
                title: 'El campo "Servicio Requerido" está vacío.',
                timer: 5000,
                showCancelButton: false,
                showConfirmButton: false
            });

        } else if (message === '') {
            Swal.fire({
                html: '<iframe width="125" heigth="125" src="https://embed.lottiefiles.com/animation/131874"></iframe>',
                title: 'El campo "Mensaje" está vacío.',
                timer: 5000,
                showCancelButton: false,
                showConfirmButton: false
            });

        } else {
            Swal.fire({
                html: '<iframe width="125" heigth="125" src="https://embed.lottiefiles.com/animation/131875"></iframe>',
                title: '¡Se ha enviado el formulario exitosamente!',
                timer: 5000,
                showCancelButton: false,
                showConfirmButton: false
            });

            emailjs.sendForm('service_g8sendb', 'template_nkdhbm7', '#contactForm', 'T7U5_T7YFgA7JQXAt');
            cleanInputs();
        }
    }

    function cleanInputs() {
        nameText.value = '';
        emailText.value = '';
        serviceText.value = '';
        messageText.value = '';
    }
}