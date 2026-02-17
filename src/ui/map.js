import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

export class SimpleMap {
  constructor(options) {
    this.map = L.map(options.containerId).setView(options.center, options.zoom);

    const tileUrl =
      options.tileUrl || "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution =
      options.attribution ||
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    L.tileLayer(tileUrl, {
      attribution,
    }).addTo(this.map);
  }

  addMarker(lat, lng, popupText) {
    const marker = L.marker([lat, lng]).addTo(this.map);
    if (popupText) {
      marker.bindPopup(popupText);
    }
  }

  setView(lat, lng, zoom) {
    if (zoom !== undefined) {
      this.map.setView([lat, lng], zoom);
    } else {
      this.map.setView([lat, lng]);
    }
  }

  getMapInstance() {
    return this.map;
  }
}
