// Trova l'elemento body nella pagina
const bodyEl = document.querySelector("body");

// Aggiunge un evento che si attiva quando si muove il mouse
bodyEl.addEventListener("mousemove", (event) => {
  // Ottiene la posizione orizzontale del mouse rispetto alla pagina
  const xPos = event.pageX;
  // Ottiene la posizione verticale del mouse rispetto alla pagina
  const yPos = event.pageY;

  // Crea un nuovo elemento <span> per il cuore
  const spanEl = document.createElement("span");

  // Imposta la posizione del cuore creata alla posizione del mouse
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";

  // Aggiunge il nuovo cuore all'elemento body
  bodyEl.appendChild(spanEl);

  // Rimuove il cuore dopo 1 secondo per evitare di riempire la pagina di cuori
  setTimeout(() => {
    spanEl.remove();
  }, 1000);
});
