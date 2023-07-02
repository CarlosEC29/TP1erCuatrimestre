const esEmailValido = (email) => {
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return emailRegex.test(email);
}

const validarNombre = () => {
    const nombreInput = document.getElementById('nombre');
    if (nombreInput.value.trim() == "") {
        // error de required
        document.getElementById('error-nombre').innerHTML = "El nombre es requerido";
        nombreInput.classList.add('is-invalid');
    } else if (nombreInput.value.trim().length < 5) {
        // error de minLength
        document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 5 caracteres";
        nombreInput.classList.add('is-invalid');
    } else {
        document.getElementById('error-nombre').innerHTML = "";
        nombreInput.classList.remove('is-invalid');
    }
}

const validarApellido = () => {
    const Input = document.getElementById('apellido');
    if (Input.value.trim() == "") {
        // error de required
        document.getElementById('error-apellido').innerHTML = "El apellido es requerido";
        Input.classList.add('is-invalid');
    } else if (Input.value.trim().length < 5) {
        // error de minLength
        document.getElementById('error-apellido').innerHTML = "El apellido debe tener al menos 5 caracteres";
        Input.classList.add('is-invalid');
    } else {
        document.getElementById('error-apellido').innerHTML = "";
        Input.classList.remove('is-invalid');
    }
}

const validarEmail = () => {
    const emailInput = document.getElementById('email');
    if (emailInput.value.trim() == "") {
        // error de required
        document.getElementById('error-email').innerHTML = "El email es requerido";
        formularioCorrecto = false;
    } else if (!esEmailValido(emailInput.value)) {
        // error de minLength
        document.getElementById('error-email').innerHTML = "Direccion de email incorrecta";
        formularioCorrecto = false;
    } else {
        document.getElementById('error-email').innerHTML = "";
    }
}

const validarTrato = () => {
    const opciones = document.getElementsByName('opciones');
    
    console.log('opciones ' + opciones);

    let seleccionado = false;
    for (var i = 0; i < opciones.length; i++) {

        if ( opciones[i] === "radio") {
            console.log('opciones ' + opciones[i]);

            seleccionado = true;
            break;
        }
    }

    if (!seleccionado) {
        document.getElementById('error-opciones-trato').innerHTML = "Debe seleccionar una opción";
    }
    return seleccionado;
}



const enviarFormulario = () => {
    let formularioCorrecto = true;
    let validaTrato = validarTrato()
    console.log( 'trato ' + validaTrato );
    }




const inicializarJs = () => {
    const boton = document.getElementById("btn-enviar");
    boton.addEventListener('click', function (e) {
        enviarFormulario();
    });

    document.getElementById('nombre').addEventListener('blur', function (e) {
        validarNombre();
    })
    document.getElementById('apellido').addEventListener('blur', function (e) {
        validarApellido();
    })
    document.getElementById('email').addEventListener('blur', function (e) {
        esEmailValido();
    })

}

window.addEventListener('load', inicializarJs);