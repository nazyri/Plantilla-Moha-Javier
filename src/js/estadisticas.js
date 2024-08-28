document.addEventListener('DOMContentLoaded', () => {
    // Data sample
    const consultas = [
        { estudiante: 'Juan Pérez', fecha: '2024-08-27', hora: '14:30', detalle: 'Consulta sobre el proyecto.' },
        { estudiante: 'María López', fecha: '2024-08-28', hora: '09:00', detalle: 'Consulta sobre la tarea.' }
    ];

    const consultasBody = document.getElementById('consultasBody');

    function renderTable() {
        consultasBody.innerHTML = '';

        consultas.forEach((consulta, index) => {
            const row = document.createElement('tr');

            // Actions cell
            const actionsCell = document.createElement('td');
            actionsCell.innerHTML = `
                <button class="edit" onclick="editRow(${index})">Editar</button>
                <button class="delete" onclick="deleteRow(${index})">Eliminar</button>
                <button class="done" onclick="markAsDone(${index})">Listo</button>
            `;

            // Data cells
            const estudianteCell = document.createElement('td');
            estudianteCell.textContent = consulta.estudiante;

            const fechaCell = document.createElement('td');
            fechaCell.textContent = consulta.fecha;

            const horaCell = document.createElement('td');
            horaCell.textContent = consulta.hora;

            const detalleCell = document.createElement('td');
            detalleCell.textContent = consulta.detalle;

            row.appendChild(actionsCell);
            row.appendChild(estudianteCell);
            row.appendChild(fechaCell);
            row.appendChild(horaCell);
            row.appendChild(detalleCell);

            consultasBody.appendChild(row);
        });
    }

    // Function to edit a row
    window.editRow = (index) => {
        const newDetails = prompt('Ingrese los nuevos detalles:', consultas[index].detalle);
        if (newDetails) {
            consultas[index].detalle = newDetails;
            renderTable();
        }
    };

    // Function to delete a row
    window.deleteRow = (index) => {
        if (confirm('¿Está seguro de que desea eliminar esta consulta?')) {
            consultas.splice(index, 1);
            renderTable();
        }
    };

    // Function to mark a row as done
    window.markAsDone = (index) => {
        alert('Consulta marcada como lista');
        // Implement additional logic if needed
    };

    renderTable();
});
