let div_root = document.querySelector(".root")
div_root.innerHTML = `
<div class="container">
<div class="image-section">
    <!-- Aquí puedes colocar una imagen -->
</div>
<div class="login-section">
    <div class="login-header">
        <h2>Hola</h2>
        <p>Bienvenido a multitasking</p>
    </div>
    <h3>Iniciar Sesión</h3>
    <form>
        <label for="email">Usuario o correo</label>
        <input type="email" id="email" name="email" required>
        
        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" required>

        <div class="buttons">


            <div type="button" class="beta-button">Probar Beta</div>
            <button         >Iniciar</button>




        </div>
    </form>
    <a href="#" class="create-account">Crea Cuenta</a>
</div>
</div>
<div class="github-link">
<a href="#">GitHub</a>
</div>
`


document.querySelector(".beta-button").addEventListener("click", function(){
    window.location.href = 'pagina.html';
})
