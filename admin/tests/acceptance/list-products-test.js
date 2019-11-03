import { module, test } from 'qunit';
import {click, currentURL, visit} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list products', function (hooks) {
  setupApplicationTest(hooks);

  test('should show products as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/products', 'should redirect automatically');
  });

  test('should link to information about the company', async function(assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact information', async function(assert) {
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});
