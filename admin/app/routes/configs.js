import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    const oXHR = new XMLHttpRequest();
    oXHR.open("GET", "/api/sessions/is_admin", true);

    oXHR.onreadystatechange = function (oEvent) {
      if (oXHR.readyState === 4) {
        if (oXHR.status !== 200) {
          this.transitionTo('login');
        }
      }
    }.bind(this);
    oXHR.send(null);
  },
  model() {
    return {
      config: this.store.findAll('config'),
      locale: this.store.findAll('locale'),
      paymentsystems: this.store.findAll('payment_system')
    }
  }
});
