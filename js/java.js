// 1. GESTIÓN DE PESTAÑAS (HISTORIA)
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));

    button.classList.add('active');
    const targetTab = button.getAttribute('data-tab');
    document.getElementById(targetTab).classList.add('active');
  });
});

// 2. LÓGICA DEL TEST PROFESIONAL
function evaluarPerfil(preferencia) {
  const resultDiv = document.getElementById('quizResult');

  switch (preferencia) {
    case 'diseno':
      resultDiv.innerHTML = "🎨 <strong>Tu perfil ideal: Desarrollo Frontend / UX-UI</strong><br>Te encajaría genial diseñar la parte interactiva y el estilo visual de aplicaciones web usando HTML, CSS, JavaScript y bibliotecas modernas.";
      break;
    case 'logica':
      resultDiv.innerHTML = "⚙️ <strong>Tu perfil ideal: Desarrollo Backend / Base de Datos</strong><br>Lo tuyo es la lógica de negocio interna, crear APIs REST y optimizar bases de datos con lenguajes como Python, Java o Node.js.";
      break;
    case 'seguridad':
      resultDiv.innerHTML = "🛡️ <strong>Tu perfil ideal: Ciberseguridad &amp; Pentesting</strong><br>Tu fuerte sería analizar vulnerabilidades informáticas, auditar infraestructuras y proteger redes contra ciberataques.";
      break;
    case 'datos':
      resultDiv.innerHTML = "📊 <strong>Tu perfil ideal: Ciencia de Datos e Inteligencia Artificial</strong><br>Te enfocarías en encontrar patrones en grandes volúmenes de información y entrenar modelos de Machine Learning.";
      break;
    default:
      resultDiv.textContent = "Haz clic en una opción superior para calcular tu perfil tecnológico.";
  }
}