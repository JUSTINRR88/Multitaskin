let roor2 = document.querySelector(".segunda")

roor2.innerHTML = `
<div class="task-panel">
    <header class="panel-header">
        <div class="logo">
            <img src="icon.png" alt="Logo">
            <h1>Multitasking</h1>
        </div>
        <div class="search-add">
            <input type="text" placeholder="Buscar">
            <button class="add-btn">+</button>
        </div>
    </header>
    <table class="task-table">
        <thead>
            <tr>
                <th>Nombre de la Tarea</th>
                <th>Asignado</th>
                <th>Fecha de entrega</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Nombre de la tarea en general</td>
                <td><img src="avatar1.png" alt="Asignado"></td>
                <td>Agosto 14</td>
                <td><button class="status-btn">En progreso</button></td>
            </tr>
            <!-- Más filas aquí -->
        </tbody>
    </table>
</div>
<div class="task-panel">
    <!-- Código previo... -->
    <div class="form-container" id="formContainer">
        <form id="taskForm">
            <h2>Crear Nueva Tarea</h2>
            <label for="taskName">Nombre de la tarea:</label>
            <input type="text" id="taskName" name="taskName">
            
            <label for="assignedUser">Asignado a:</label>
            <input type="text" id="assignedUser" name="assignedUser">

            <label for="dueDate">Fecha de entrega:</label>
            <input type="date" id="dueDate" name="dueDate">

            <label for="status">Estado:</label>
            <select id="status" name="status">
                <option value="en_progreso">En progreso</option>
                <option value="completado">Completado</option>
            </select>

            <button type="submit">Agregar Tarea</button>
        </form>
    </div>
</div>

`

    const addBtn = document.querySelector('.add-btn');
    const formContainer = document.getElementById('formContainer');

    addBtn.addEventListener('click', () => {
        formContainer.style.display = formContainer.style.display === 'none' || formContainer.style.display === '' ? 'block' : 'none';
    });

    // Puedes agregar un listener para manejar el envío del formulario
    const taskForm = document.getElementById('taskForm');
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí puedes agregar el código para crear la nueva tarea
        alert('Tarea agregada!');

        // Oculta el formulario después de agregar la tarea
        formContainer.style.display = 'none';
    });
