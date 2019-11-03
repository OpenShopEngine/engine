import Component from '@ember/component';

export default Component.extend({
  edited: {},
  actions: {
    preUpdateValue(e) {
      const keys = e.target.id.split('-');

      if(this.edited[keys[2]] === undefined) {
        this.edited[keys[2]] = {}
      }

      this.edited[keys[2]][keys[1]] = e.target.value;
    },
    update() {
      const conf = this.edited;
      this.edited = {};

      const result = Object.keys(conf).map(function(key) {
        return [parseInt(key), conf[key]];
      });

      result.forEach((v) => {
        this.store.findRecord('payment-system', v[0]).then(function(config) {
          Object.keys(v[1]).forEach(key => {
            config.set(key, v[1][key]);
          });
          config.save();
        });
      });
    }
  }
});
