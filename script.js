document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // Remover la clase "active" de todos los enlaces
            navLinks.forEach(nav => nav.classList.remove("active"));

            // Añadir la clase "active" al enlace actual
            this.classList.add("active");

            // Obtener el id de la sección que debe mostrarse
            const targetSection = this.getAttribute("href").substring(1);

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.style.display = "none";
            });

            // Mostrar la sección seleccionada
            document.getElementById(targetSection).style.display = "block";
        });
    });
});
