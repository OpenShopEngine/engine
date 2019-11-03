import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  property: DS.attr('string'),
  value: DS.attr('string')
});
