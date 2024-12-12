 const link = document.getElementById("link");
 const acortar = document.getElementById("acortar");
 const resultado = document.getElementById("resultado");


acortar.addEventListener("click", async () => {
    if (!link.value) {
        resultado.textContent = "Por favor ingresa un link válido";
        return;
    }

    try {
        
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(link.value)}`);
        
        if (!response.ok) {
            throw new Error('Error al acortar el link');
        }

        const shortUrl = await response.text();
        
        
        resultado.innerHTML = `
            <p>Link acortado: <a href="${shortUrl}" target="_blank">${shortUrl}</a></p>
        `;
        link.value = "";
        link.focus();

    } catch (error) {
        resultado.textContent = "Ocurrió un error al acortar el link. Intenta nuevamente.";
    }
});
