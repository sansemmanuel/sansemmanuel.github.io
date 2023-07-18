$(document).ready(function() {
    // Inicializar AOS (Animate On Scroll)
    AOS.init();

    // Smooth scrolling y resaltado del enlace activo
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Función para cambiar el color de fondo de la barra de navegación al hacer scroll
    function handleScroll() {
        const header = document.getElementById('main-header');
        const navContainer = document.querySelector('.nav-container');
        const scrollY = window.scrollY;
        const breakpoint = 100; // Puedes ajustar este valor según cuándo deseas que cambie el color de fondo

        if (scrollY >= breakpoint) {
            header.classList.add('scrolled');
            navContainer.style.backgroundColor = "#000000";
        } else {
            header.classList.remove('scrolled');
            navContainer.style.backgroundColor = "transparent";
        }
    }

    // Escuchar el evento de scroll y llamar a la función handleScroll
    window.addEventListener('scroll', handleScroll);

});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validar el formulario antes de enviar
        if (validateForm()) {
            // Enviar el formulario (Simulado en este ejemplo)
            setTimeout(function() {
                form.reset();
                confirmationMessage.style.display = 'block';
            }, 1000); // Simulación de envío, puedes remplazar con la lógica de envío real
        }
    });

    function validateForm() {
        let valid = true;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        // Validar que los campos no estén vacíos
        if (name === '' || email === '' || message === '') {
            valid = false;
            alert('Por favor, completa todos los campos.');
        }

        // Validar el formato del correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            valid = false;
            alert('Por favor, ingresa un correo electrónico válido.');
        }

        return valid;
    }
  
});
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento del texto que queremos animar
    const typingText = document.getElementById('typing-text');

    // Agregar la clase 'start-typing' para activar la animación
    typingText.classList.add('start-typing');
});