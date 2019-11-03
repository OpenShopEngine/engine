import Controller from '@ember/controller';

export default Controller.extend({
  creds: {
    username: '',
    password: ''
  },
  actions: {
    updateCred(e) {
      this.creds[e.target.id.replace('login-', '')] = e.target.value;
    },
    login() {
      const oXHR = new XMLHttpRequest();
      oXHR.open("GET", `/api/sessions/login?username=${this.creds.username}&password=${this.creds.password}`, true);

      oXHR.onreadystatechange = function (oEvent) {
        if (oXHR.readyState === 4) {
          if (oXHR.status === 200) {
            window.dispatchEvent(new Event("openShop-admin-authorization"))
          }
        }
      };
      oXHR.send(null);
    }
  }
});
