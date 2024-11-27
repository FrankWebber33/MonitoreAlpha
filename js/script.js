function validateLogin(event) {
    event.preventDefault();
    
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const loginInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');
    
    // Remove previous error styles
    loginInput.classList.remove('input-error');
    passwordInput.classList.remove('input-error');
    errorMessage.style.display = 'none';
    
    if (login === 'Estudante01' && password === '14012') {
        // Successful login
        window.location.href = './Perfis/perfil-aluno.html'; // Redirect to profile page
    } else {
        // Show error
        errorMessage.style.display = 'block';
        loginInput.classList.add('input-error');
        passwordInput.classList.add('input-error');
        
        // Clear password field
        passwordInput.value = '';
    }
    
    if (login === 'Gestor01' && password === '14012') {
        // Successful login
        window.location.href = './Perfis/perfil-gestor.html'; // Redirect to profile page
    } else {
        // Show error
        errorMessage.style.display = 'block';
        loginInput.classList.add('input-error');
        passwordInput.classList.add('input-error');
        
        // Clear password field
        passwordInput.value = '';
    }

    if (login === 'Professor01' && password === '14012') {
        // Successful login
        window.location.href = './Perfis/perfil-professor.html'; // Redirect to profile page
    } else {
        // Show error
        errorMessage.style.display = 'block';
        loginInput.classList.add('input-error');
        passwordInput.classList.add('input-error');
        
        // Clear password field
        passwordInput.value = '';
    }

    if (login === 'Pai01' && password === '14012') {
        // Successful login
        window.location.href = './Perfis/perfil-pai.html'; // Redirect to profile page
    } else {
        // Show error
        errorMessage.style.display = 'block';
        loginInput.classList.add('input-error');
        passwordInput.classList.add('input-error');
        
        // Clear password field
        passwordInput.value = '';
    }

    return false;
}

// Add input event listeners to remove error styling when user starts typing
document.getElementById('login').addEventListener('input', function() {
    this.classList.remove('input-error');
    document.getElementById('errorMessage').style.display = 'none';
});

document.getElementById('password').addEventListener('input', function() {
    this.classList.remove('input-error');
    document.getElementById('errorMessage').style.display = 'none';
});