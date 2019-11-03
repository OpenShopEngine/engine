import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  username: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date')
});
