import DS from 'ember-data';
import { pluralize } from 'ember-inflector';
import APISerializer from '../serializers/api';

export default DS.JSONAPIAdapter.extend({
  namespace: '/api',
  defaultSerializer: APISerializer,
  pathForType: function(type) {
    const underscored = Ember.String.underscore(type);
    return pluralize(underscored);
  }
});
