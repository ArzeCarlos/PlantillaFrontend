import { renderEquiposPage } from "./pages/Equipos";
import { renderHomePage } from "./pages/home";
import { renderTicketsPage } from "./pages/Tickets";
import "./style.css";

const routes = [
  { path: "/home", view: renderHomePage },
  { path: "/equipos", view: renderEquiposPage },
  { path: "/tickets", view: renderTicketsPage },
];

class Router {
  static instance;

  constructor(routes) {
    this.routes = routes;
    Router.instance = this;
    this.currentCleanup = null;
  }

  init() {
    this.render(window.location.pathname, false);

    window.addEventListener("popstate", () => {
      const path = window.location.pathname;
      this.render(path, false);
    });
  }

  async render(path, addHistory = true) {
    if (addHistory && window.location.pathname !== path) {
      history.pushState({ route: path }, "", path);
    }

    if (this.currentCleanup) {
      this.currentCleanup();
      this.currentCleanup = null;
    }

    const layoutContainer = document.getElementById("app");
    if (!layoutContainer) throw new Error("Contenedor principal no encontrado");

    const match = this.routes.find((r) => r.path === path);

    if (match) {
      await match.view(layoutContainer);

      // Inicializar iconos de Lucide después de renderizar
      if (window.lucide) {
        window.lucide.createIcons();
      }
    } else {
      layoutContainer.innerHTML = `
        <h1 style="color:black;">404 - Página no encontrada</h1>
      `;
      console.warn("RUTA NO ENCONTRADA:", path);
    }
  }

  static navigate(path) {
    if (Router.instance) {
      Router.instance.render(path, true);
    }
  }
}

// Inicializar router
const router = new Router(routes);
router.init();
