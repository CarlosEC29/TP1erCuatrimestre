const esEmailValido = (email) => {
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return emailRegex.test(email);
}

const enviarFormulario = () => {
    let formularioCorrecto = true;
    console.log("Validando campos ")
    console.log("Formulario correcto " + formularioCorrecto);


    //validar nombre
    const nombreInput = document.getElementById('nombre');
    if (nombreInput.value.trim() == "") {
        // error de required
        document.getElementById('error-nombre').innerHTML = "El nombre es requerido";
        nombreInput.classList.add('is-invalid');
        formularioCorrecto = false;
    } else if (nombreInput.value.trim().length < 5) {
        // error de minLength
        document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 5 caracteres";
        nombreInput.classList.add('is-invalid');
        formularioCorrecto = false;

    } else {
        document.getElementById('error-nombre').innerHTML = "";
        nombreInput.classList.remove('is-invalid');
    }

    //validar apellido
    const apellidoInput = document.getElementById('apellido');
    if (apellidoInput.value.trim() == "") {
        // error de required
        document.getElementById('error-apellido').innerHTML = "El apellido es requerido";
        apellidoInput.classList.add('is-invalid');
        formularioCorrecto = false;

    } else if (apellidoInput.value.trim().length < 5) {
        // error de minLength
        document.getElementById('error-apellido').innerHTML = "El apellido debe tener al menos 5 caracteres";
        apellidoInput.classList.add('is-invalid');
        formularioCorrecto = false;

    } else {
        document.getElementById('error-apellido').innerHTML = "";
        apellidoInput.classList.remove('is-invalid');
    }


    //validar email
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

    //validar conoceer a la empresa
    const conocerEmpresaSelect = document.getElementById("validationCustom01");
    let conocerEmpresaValue = conocerEmpresaSelect.options[conocerEmpresaSelect.selectedIndex].value;
    if (conocerEmpresaValue == "") {
        document.getElementById("conocerALaEmpresa-error").innerHTML = "Debe seleccionar una opción";
        formularioCorrecto = false;
    }

    //validar trato ///validar esto
    const tratoSelected = document.querySelector('input[name="directivos"]:checked');
    if (!tratoSelected) {
        document.getElementById('error-directivos').innerHTML = "Debe seleccionar una opción";
        formularioCorrecto = false;
    }

    //validar tipo servicio
    let tipoServSelected = document.getElementById("validationCustom03");
    let tipoServSelectedValue = tipoServSelected.options[tipoServSelected.selectedIndex].value;
    if (tipoServSelectedValue == "no-value") {
        document.getElementById("tipo-servicio-error").innerHTML = "Debe seleccionar una opción";
    }

    //validar atencion 
    const atencionSelected = document.querySelector('input[name="atencion"]:checked');
    if (!atencionSelected) {
        document.getElementById('error-atencion').innerHTML = "Debe seleccionar una opción";
    }

    //validar materiales
    const materialesSelected = document.querySelector('input[name="materiales"]:checked');
    if (!materialesSelected) {
        document.getElementById('error-materiales').innerHTML = "Debe seleccionar una opción";
        formularioCorrecto = false;
    }

    //validar tiempo d atencion
    let tAtencionSelected = document.querySelector('input[name="tAtencion"]:checked');
    if (!tAtencionSelected) {
        document.getElementById('error-tAtencion').innerHTML = "Debe seleccionar una opción";
        formularioCorrecto = false;
    }

    //validar capacitacion 
    let capacitacionSelected = document.querySelector('input[name="capacitacion"]:checked');
    if (!capacitacionSelected) {
        document.getElementById('error-capacitacion').innerHTML = "Debe seleccionar una opción";
        formularioCorrecto = false;
    }

    //validar recomendacion
    let recomendacionSelected = document.querySelector('input[name="recomendacion"]:checked');
    if (!recomendacionSelected) {
        document.getElementById('error-recomendacion').innerHTML = "Debe seleccionar una opción";
        formularioCorrecto = false;
    }

    console.log("Formulario correcto " + formularioCorrecto);

    if(formularioCorrecto) {
        console.log("Nombre: ", nombreInput.value);
        console.log("Apellido: ", apellidoInput.value);
        console.log("Email: ", emailInput.value);
        console.log("1) ¿C+omo conocio a la empresa?: ", conocerEmpresaValue);
        console.log("2) ¿Cómo valoraría el trato con los directivos de la empresa?: ", tratoSelected.value);
        console.log("3) ¿Cuál fue el servicio/trabajo contratado?: ", tipoServSelectedValue);
        console.log("4) ¿Cómo valoraría la atención brindada por el personal?: ", atencionSelected.value);
        console.log("6) En cuanto a la calidad de los materiales utilizados, ¿qué opinión tiene al respecto?: ", materialesSelected.value);
        console.log("7) ¿Cómo valoraría el tiempo demorado en la realización de la tarea ó venta de productos?: ", tAtencionSelected.value);
        console.log("8) ¿Considera que el personal interviniente estaba capacitado para realizar la tarea?: ", capacitacionSelected.value);
        console.log("9) ¿Recomendaría a la empresa?: ", recomendacionSelected.value);

    }

}

const inicializarJs = () => {
    const boton = document.getElementById("btn-enviar");
    boton.addEventListener('click', function (e) {
        enviarFormulario();
    });

}

window.addEventListener('load', inicializarJs);