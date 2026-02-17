import homeTemplate from "../templates/home.html?raw";
import layoutTemplate from "../templates/layout.html?raw";
import { getFechaActual } from "../helpers/fechaActual";

export function renderHomePage(appContainer) {
  appContainer.innerHTML = layoutTemplate;

  const currentDate = document.getElementById("current-date");
  const viewTitle = document.getElementById("view-title");
  currentDate.textContent = getFechaActual();
  viewTitle.textContent = "!Bienvenido de nuevo!";
}
