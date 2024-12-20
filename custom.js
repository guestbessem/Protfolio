document.querySelector(".form-container").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Sélection des champs
    const nameField = document.querySelector("input[placeholder='Name *']");
    const emailField = document.querySelector("input[placeholder='Email *']");
    const messageField = document.querySelector("textarea[placeholder='Message *']");

    let isValid = true; // Indicateur de validité

    // Fonction pour afficher un message d'erreur
    function showError(field, message) {
        let errorElement = field.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains("error")) {
            errorElement = document.createElement("div");
            errorElement.classList.add("error");
            errorElement.style.color = "red";
            errorElement.style.fontSize = "0.875em";
            field.parentElement.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }

    // Fonction pour nettoyer les erreurs
    function clearError(field) {
        const errorElement = field.nextElementSibling;
        if (errorElement && errorElement.classList.contains("error")) {
            errorElement.remove();
        }
    }

    // Validation du champ "Name"
    clearError(nameField);
    if (nameField.value.trim() === "") {
        showError(nameField, "Le champ Prénom est requis.");
        isValid = false;
    }

    // Validation du champ "Email"
    clearError(emailField);
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailField.value)) {
        showError(emailField, "Veuillez entrer une adresse e-mail valide.");
        isValid = false;
    }

    // Validation du champ "Message"
    clearError(messageField);
    if (messageField.value.trim().length < 10) {
        showError(messageField, "Le message doit comporter au moins 10 caractères.");
        isValid = false;
    }

    // Si tout est valide, soumettez le formulaire
    if (isValid) {
        alert("Formulaire envoyé avec succès !");
        this.submit(); // Soumet le formulaire
    }
});