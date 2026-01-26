const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    
    const emailData = email.value.trim();
    const passwordData = password.value.trim();
    if (emailData === '' || passwordData === '') {
        alert("All fields must be filled!");
        return;
    }

    const formData = { email: emailData, password: passwordData };
    console.log(formData);
    event.currentTarget.reset();
})

