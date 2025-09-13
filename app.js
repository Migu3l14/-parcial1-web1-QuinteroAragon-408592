document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const section = e.target.dataset.section;
    loadSection(section);
  });
});

function loadSection(section) {
  const content = document.getElementById("content");
  switch (section) {
    case "muro":
      content.innerHTML = `
        <h2>Muro</h2>
        <p>Publicaciones recientes de Miguel Aragón...</p>
        <p>¡Bienvenido a mi perfil!</p>
      `;
      break;
    case "info":
      content.innerHTML = `
        <h2>Información</h2>
        <p><strong>Nombre:</strong> Miguel Aragón</p>
        <p><strong>Código:</strong> 408592</p>
        <p><strong>Ubicación:</strong> Colombia</p>
        <p><strong>Ocupación:</strong> Estudiante de Programación Web</p>
      `;
      break;
    case "photos":
      content.innerHTML = `
        <h2>Fotos</h2>
        <div class="photos-grid">
          <img src="assets/foto1.jpg" alt="Foto 1" />
          <img src="assets/foto2.jpg" alt="Foto 2" />
          <img src="assets/foto3.jpg" alt="Foto 3" />
        </div>
      `;
      break;
    case "boxes":
      content.innerHTML = `
        <h2>Cajas</h2>
        <div class="boxes-grid">
          <div class="box">Caja 1</div>
          <div class="box">Caja 2</div>
          <div class="box">Caja 3</div>
        </div>
      `;
      break;
    default:
      content.innerHTML = `<p>Sección no encontrada.</p>`;
  }
}
