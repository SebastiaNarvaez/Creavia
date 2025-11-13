const form = document.getElementById('registro-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
        nombres: formData.get('nombres'),
        apellidos: formData.get('apellidos'),
        telefono: formData.get('telefono'),
        correo: formData.get('correo'),
        contrasena: formData.get('contrasena'),
    };

    try {
        const response = await fetch('http://localhost:3000/registrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            showNotification(result.message); // Notificación en vez de alert
            form.reset();
        } else {
            showNotification(result.message); // Notificación en vez de alert
        }
    } catch (error) {
        showNotification('Error al conectar con el servidor.'); // Notificación en vez de alert
        console.error(error);
    }
});
