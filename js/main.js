import { tareas } from './data_todo.js';

function cargarTareas() {
    const cuadrosTareas = document.querySelector('.list_tareas');
    cuadrosTareas.innerHTML = ''; 

    tareas.forEach((cadaTarea) => {
        const divTarea = document.createElement('div');
        divTarea.classList.add('div_tareas');
        divTarea.innerHTML = `
        <div class="imagen"> 
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg" alt="">
        </div>
        <div class="usuario">
         <p class="texto">${cadaTarea.texto}</p>
        <p class="categoria">${cadaTarea.categoria}</p>
        </div>
        <div class="num_asignaciones">3</div>
        <button class="estado"> +</button>
        <div class="nuevo-tarea-formulario"></div>
    `;

        const estadoBtn = divTarea.querySelector('.estado');
        estadoBtn.addEventListener('click', () => mostrarFormularioTarea(divTarea));

        cuadrosTareas.appendChild(divTarea);
    });
}

function mostrarFormularioTarea(divTarea) {
    const formularioDiv = divTarea.querySelector('.nuevo-tarea-formulario');
    formularioDiv.innerHTML = `
        <div class="form-tarea">
            <div class="btn_cerrar_form">x</div>
            <input type="text" class="entrada-nueva-tarea" placeholder="Nombre de la tarea">
            <button class="btn_crear_tarea">Crear tarea</button>
        </div>
    `;

    const btnCerrarForm = formularioDiv.querySelector('.btn_cerrar_form');
    btnCerrarForm.addEventListener('click', () => {
        formularioDiv.innerHTML = '';
    });

    const btnCrearTarea = formularioDiv.querySelector('.btn_crear_tarea');
    btnCrearTarea.addEventListener('click', () => {
        const nuevaTareaNombre = formularioDiv.querySelector('.entrada-nueva-tarea').value;
        if (nuevaTareaNombre) {
            const nuevaTareaDiv = document.createElement('div');
            nuevaTareaDiv.classList.add('nueva-tarea');
            nuevaTareaDiv.textContent = nuevaTareaNombre;
            divTarea.appendChild(nuevaTareaDiv);
            formularioDiv.innerHTML = '';
        } else {
            alert('Por favor, ingrese el nombre de la tarea.');
        }
    });
}

function cargarBotones() {
    const cajaBtn = document.querySelector('.botones');
    cajaBtn.innerHTML = '<div class="btn_mas">Agregar Nuevo Usuario</div>';

    const btnFormulario = document.querySelector('.btn_mas');
    btnFormulario.addEventListener('click', cargarFormulario);
}

function cargarFormulario() {
    const ventanaFormulario = document.querySelector('.formulario');
    ventanaFormulario.classList.add('activar_b');

    ventanaFormulario.innerHTML = `
        <div class="btn_cerrar">x</div>
        <div class="div_formulario">
            <span class="registro"> Registro</span>
          <div class="nombre_crear"> Nombre:  <input type="text" class="entrada-tarea" placeholder="Descripción de la tarea"></div>  
          <div class="nombre_crear"> Correo <input type="text" class="entrada-categoria" placeholder="Categoría"> </div>  
        </div>
        <div class="btn_ok">Enviar</div>
    `;

    const btnCerrar = document.querySelector('.btn_cerrar');
    btnCerrar.addEventListener('click', () => {
        ventanaFormulario.classList.remove('activar_b');
    });

    const btnCrear = document.querySelector('.btn_ok');
    btnCrear.addEventListener('click', () => {
        const tarea = document.querySelector('.entrada-tarea').value;
        const categoria = document.querySelector('.entrada-categoria').value;
    
        if (tarea && categoria) {
            tareas.push({ texto: tarea, categoria: categoria, estado: false });
            cargarTareas();
            ventanaFormulario.classList.remove('activar_b');
        } else {
            alert('Por favor, complete la tarea y la categoría.');
        }
    });
}

cargarTareas();
cargarBotones();
