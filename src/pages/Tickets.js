import ticketTemplate from "../templates/tickets.html?raw";
import layoutTemplate from "../templates/layout.html?raw";
import { getFechaActual } from "../helpers/fechaActual";

export function renderTicketsPage(appContainer) {
  appContainer.innerHTML = layoutTemplate;

  const currentDate = document.getElementById("current-date");
  currentDate.textContent = getFechaActual();
  const viewTitle = document.getElementById("view-title");
  viewTitle.textContent = "Gestión de Tickets";
  const contentContainer = document.getElementById("main-content-container");
  contentContainer.innerHTML = ticketTemplate;
}
