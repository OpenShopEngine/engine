import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    const oXHR = new XMLHttpRequest();
    oXHR.open("GET", "/api/sessions/is_admin", true);

    oXHR.onreadystatechange = function (oEvent) {
      if (oXHR.readyState === 4) {
        if (oXHR.status === 200) {
          this.transitionTo('products');
        }
      }
    }.bind(this);
    oXHR.send(null);
  }
});
