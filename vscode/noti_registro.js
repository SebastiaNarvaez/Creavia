contraseñadocument.getElementById('registro-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Capturar los datos del formulario
    const formData = new FormData(e.target);
    const data = {
        nombres: formData.get('nombres'),
        apellidos: formData.get('apellidos'),
        telefono: formData.get('telefono'),
        correo: formData.get('correo'),
        contrasena: formData.get('contrasena')
    };

    try {
        const response = await fetch('/registrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            window.location.href = 'login.html';
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Hubo un problema al registrar. Intenta más tarde.');
    }
});