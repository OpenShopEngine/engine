import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  photo: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  available: DS.attr('number'),
  total_price: computed('price', 'available', function() {
    return parseFloat((this.price * this.available).toFixed(2));
  })
});
