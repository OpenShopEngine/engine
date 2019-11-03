import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    window.addEventListener("openShop-admin-authorization", function (e) {
      this.willRender();
      location.hash = "";
    }.bind(this))
  },
  state: {
    isAuthorized: false
  },
  willRender() {
    const oXHR = new XMLHttpRequest();
    oXHR.open("GET", `/api/sessions/is_admin`, true);

    oXHR.onreadystatechange = function (oEvent) {
      if (oXHR.readyState === 4) {
        set(this.state, "isAuthorized", oXHR.status === 200);
      }
    }.bind(this);
    oXHR.send(null);
  },
  actions: {
    logout() {
      const oXHR = new XMLHttpRequest();
      oXHR.open("GET", `/api/sessions/logout`, true);

      oXHR.onreadystatechange = function (oEvent) {
        if (oXHR.readyState === 4) {
          if (oXHR.status === 200) {
            set(this.state, "isAuthorized", false);
            location.hash = "";
          }
        }
      }.bind(this);
      oXHR.send(null);
    }
  }
});
