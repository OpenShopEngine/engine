import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | configs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:configs');
    assert.ok(route);
  });
});
