'use strict';

define("admin/tests/acceptance/list-products-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | list products', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('should show products as the home page', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/products', 'should redirect automatically');
    });
    (0, _qunit.test)('should link to information about the company', async function (assert) {
      await (0, _testHelpers.visit)('/');
      await (0, _testHelpers.click)(".menu-about");
      assert.equal((0, _testHelpers.currentURL)(), '/about', 'should navigate to about');
    });
    (0, _qunit.test)('should link to contact information', async function (assert) {
      await (0, _testHelpers.visit)('/');
      await (0, _testHelpers.click)(".menu-contact");
      assert.equal((0, _testHelpers.currentURL)(), '/contact', 'should navigate to contact');
    });
  });
});
define("admin/tests/integration/components/application-links-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | application-links', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ApplicationLinks />
      */
      {
        id: "YCOYLVsf",
        block: "{\"symbols\":[],\"statements\":[[5,\"application-links\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ApplicationLinks>
              template block text
            </ApplicationLinks>
          
      */
      {
        id: "FCHfer3K",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"application-links\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("admin/tests/integration/components/configs-config-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | configs-config', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ConfigsConfig />
      */
      {
        id: "3s0mvUm0",
        block: "{\"symbols\":[],\"statements\":[[5,\"configs-config\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ConfigsConfig>
              template block text
            </ConfigsConfig>
          
      */
      {
        id: "ExIHeeVt",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"configs-config\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("admin/tests/integration/components/configs-locale-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | configs-locale', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ConfigsLocale />
      */
      {
        id: "ewPl9CTB",
        block: "{\"symbols\":[],\"statements\":[[5,\"configs-locale\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ConfigsLocale>
              template block text
            </ConfigsLocale>
          
      */
      {
        id: "YRCIY1Bp",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"configs-locale\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("admin/tests/integration/components/configs-paymentsystems-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | configs-paymentsystems', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ConfigsPaymentsystems />
      */
      {
        id: "rTbPkvCi",
        block: "{\"symbols\":[],\"statements\":[[5,\"configs-paymentsystems\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ConfigsPaymentsystems>
              template block text
            </ConfigsPaymentsystems>
          
      */
      {
        id: "pUsyVUI8",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"configs-paymentsystems\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("admin/tests/integration/components/product-listing-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | product-listing', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ProductListing />
      */
      {
        id: "pSwDbhjW",
        block: "{\"symbols\":[],\"statements\":[[5,\"product-listing\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ProductListing>
              template block text
            </ProductListing>
          
      */
      {
        id: "stakW3UD",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"product-listing\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("admin/tests/integration/components/user-listing-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | user-listing', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <UserListing />
      */
      {
        id: "ZHaJ1zXn",
        block: "{\"symbols\":[],\"statements\":[[5,\"user-listing\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <UserListing>
              template block text
            </UserListing>
          
      */
      {
        id: "fpGTuOon",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"user-listing\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("admin/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass ESLint\n\n9:25 - Use `import { underscore } from \'@ember/string\';` instead of using Ember.String.underscore (ember/new-module-imports)\n9:25 - \'Ember\' is not defined. (no-undef)');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/application-links.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/application-links.js should pass ESLint\n\n7:71 - \'e\' is defined but never used. (no-unused-vars)\n12:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n19:41 - \'oEvent\' is defined but never used. (no-unused-vars)\n31:43 - \'oEvent\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('components/configs-config.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/configs-config.js should pass ESLint\n\n4:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });
  QUnit.test('components/configs-locale.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/configs-locale.js should pass ESLint\n\n4:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });
  QUnit.test('components/configs-paymentsystems.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/configs-paymentsystems.js should pass ESLint\n\n4:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });
  QUnit.test('components/product-listing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/product-listing.js should pass ESLint\n\n');
  });
  QUnit.test('components/user-listing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/user-listing.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/configs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/configs.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/login.js should pass ESLint\n\n4:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n16:43 - \'oEvent\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('models/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/config.js should pass ESLint\n\n');
  });
  QUnit.test('models/locale.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/locale.js should pass ESLint\n\n');
  });
  QUnit.test('models/payment-system.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/payment-system.js should pass ESLint\n\n');
  });
  QUnit.test('models/product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/product.js should pass ESLint\n\n');
  });
  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/configs.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/configs.js should pass ESLint\n\n8:41 - \'oEvent\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass ESLint\n\n8:41 - \'oEvent\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/login.js should pass ESLint\n\n8:41 - \'oEvent\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('routes/products.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/products.js should pass ESLint\n\n8:41 - \'oEvent\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('routes/users.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/users.js should pass ESLint\n\n8:41 - \'oEvent\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('serializers/api.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/api.js should pass ESLint\n\n');
  });
});
define("admin/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('admin/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'admin/templates/application.hbs should pass TemplateLint.\n\nadmin/templates/application.hbs\n  2:4  error  Incorrect indentation for `<ApplicationLinks>` beginning at L2:C4. Expected `<ApplicationLinks>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<div>` beginning at L3:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n');
  });
  QUnit.test('admin/templates/components/application-links.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'admin/templates/components/application-links.hbs should pass TemplateLint.\n\nadmin/templates/components/application-links.hbs\n  3:6  error  Incorrect indentation for `<h1>` beginning at L3:C6. Expected `<h1>` to be at an indentation of 4 but was found at 6.  block-indentation\n  6:6  error  Incorrect indentation for `<div>` beginning at L6:C6. Expected `<div>` to be at an indentation of 4 but was found at 6.  block-indentation\n  16:10  error  Incorrect indentation for `<a>` beginning at L16:C10. Expected `<a>` to be at an indentation of 8 but was found at 10.  block-indentation\n  8:0  error  Incorrect indentation for `            \u0422\u043E\u0432\u0430\u0440\u044B\n` beginning at L8:C0. Expected `            \u0422\u043E\u0432\u0430\u0440\u044B\n` to be at an indentation of 10 but was found at 12.  block-indentation\n  11:0  error  Incorrect indentation for `            \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438\n` beginning at L11:C0. Expected `            \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438\n` to be at an indentation of 10 but was found at 12.  block-indentation\n  14:0  error  Incorrect indentation for `            \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438\n` beginning at L14:C0. Expected `            \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438\n` to be at an indentation of 10 but was found at 12.  block-indentation\n  16:47  error  Incorrect indentation for `\n              \u0412\u044B\u0439\u0442\u0438\n          ` beginning at L16:C47. Expected `\n              \u0412\u044B\u0439\u0442\u0438\n          ` to be at an indentation of 12 but was found at 14.  block-indentation\n  16:22  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('admin/templates/components/configs-config.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'admin/templates/components/configs-config.hbs should pass TemplateLint.\n\nadmin/templates/components/configs-config.hbs\n  3:4  error  Incorrect indentation for `<tr>` beginning at L3:C4. Expected `<tr>` to be at an indentation of 2 but was found at 4.  block-indentation\n  13:4  error  Incorrect indentation for `<tr>` beginning at L13:C4. Expected `<tr>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:8  error  Incorrect indentation for `<th>` beginning at L4:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:8  error  Incorrect indentation for `<th>` beginning at L5:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:6  error  Incorrect indentation for `<tr>` beginning at L8:C6. Expected `<tr>` to be at an indentation of 4 but was found at 6.  block-indentation\n  9:10  error  Incorrect indentation for `<td>` beginning at L9:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  10:10  error  Incorrect indentation for `<td>` beginning at L10:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  14:8  error  Incorrect indentation for `<td>` beginning at L14:C8. Expected `<td>` to be at an indentation of 6 but was found at 8.  block-indentation\n  14:24  error  elements cannot have inline styles  no-inline-styles\n  10:87  error  Unnecessary string concatenation. Use {{config.value}} instead of "{{config.value}}".  no-unnecessary-concat\n  2:0  error  Tables must have a table group (thead, tbody or tfoot).  table-groups\n');
  });
  QUnit.test('admin/templates/components/configs-locale.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'admin/templates/components/configs-locale.hbs should pass TemplateLint.\n\nadmin/templates/components/configs-locale.hbs\n  3:4  error  Incorrect indentation for `<tr>` beginning at L3:C4. Expected `<tr>` to be at an indentation of 2 but was found at 4.  block-indentation\n  13:4  error  Incorrect indentation for `<tr>` beginning at L13:C4. Expected `<tr>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:8  error  Incorrect indentation for `<th>` beginning at L4:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:8  error  Incorrect indentation for `<th>` beginning at L5:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:6  error  Incorrect indentation for `<tr>` beginning at L8:C6. Expected `<tr>` to be at an indentation of 4 but was found at 6.  block-indentation\n  9:10  error  Incorrect indentation for `<td>` beginning at L9:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  10:10  error  Incorrect indentation for `<td>` beginning at L10:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  14:8  error  Incorrect indentation for `<td>` beginning at L14:C8. Expected `<td>` to be at an indentation of 6 but was found at 8.  block-indentation\n  14:24  error  elements cannot have inline styles  no-inline-styles\n  9:87  error  Unnecessary string concatenation. Use {{locale.title}} instead of "{{locale.title}}".  no-unnecessary-concat\n  10:88  error  Unnecessary string concatenation. Use {{locale.locale}} instead of "{{locale.locale}}".  no-unnecessary-concat\n  2:0  error  Tables must have a table group (thead, tbody or tfoot).  table-groups\n');
  });
  QUnit.test('admin/templates/components/configs-paymentsystems.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'admin/templates/components/configs-paymentsystems.hbs should pass TemplateLint.\n\nadmin/templates/components/configs-paymentsystems.hbs\n  3:4  error  Incorrect indentation for `<tr>` beginning at L3:C4. Expected `<tr>` to be at an indentation of 2 but was found at 4.  block-indentation\n  13:4  error  Incorrect indentation for `<tr>` beginning at L13:C4. Expected `<tr>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:8  error  Incorrect indentation for `<th>` beginning at L4:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:8  error  Incorrect indentation for `<th>` beginning at L5:C8. Expected `<th>` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:6  error  Incorrect indentation for `<tr>` beginning at L8:C6. Expected `<tr>` to be at an indentation of 4 but was found at 6.  block-indentation\n  9:10  error  Incorrect indentation for `<td>` beginning at L9:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  10:10  error  Incorrect indentation for `<td>` beginning at L10:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  14:8  error  Incorrect indentation for `<td>` beginning at L14:C8. Expected `<td>` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:47  error  elements cannot have inline styles  no-inline-styles\n  14:24  error  elements cannot have inline styles  no-inline-styles\n  9:89  error  Unnecessary string concatenation. Use {{ps.name}} instead of "{{ps.name}}".  no-unnecessary-concat\n  10:134  error  Unnecessary string concatenation. Use {{ps.provider}} instead of "{{ps.provider}}".  no-unnecessary-concat\n  2:0  error  Tables must have a table group (thead, tbody or tfoot).  table-groups\n');
  });
  QUnit.test('admin/templates/components/product-listing.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'admin/templates/components/product-listing.hbs should pass TemplateLint.\n\nadmin/templates/components/product-listing.hbs\n  2:4  error  Incorrect indentation for `<img>` beginning at L2:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<div>` beginning at L3:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:8  error  Incorrect indentation for `<h3>` beginning at L4:C8. Expected `<h3>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:8  error  Incorrect indentation for `<div>` beginning at L5:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:8  error  Incorrect indentation for `<div>` beginning at L8:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  11:8  error  Incorrect indentation for `<div>` beginning at L11:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  14:8  error  Incorrect indentation for `<div>` beginning at L14:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  17:8  error  Incorrect indentation for `<div>` beginning at L17:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  20:8  error  Incorrect indentation for `<div>` beginning at L20:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  6:12  error  Incorrect indentation for `<span>` beginning at L6:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  9:12  error  Incorrect indentation for `<span>` beginning at L9:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  12:12  error  Incorrect indentation for `<span>` beginning at L12:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  15:12  error  Incorrect indentation for `<span>` beginning at L15:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  18:12  error  Incorrect indentation for `<span>` beginning at L18:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  22:0  error  Incorrect indentation for `              \u270F\uFE0F \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\n` beginning at L22:C0. Expected `              \u270F\uFE0F \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\n` to be at an indentation of 12 but was found at 14.  block-indentation\n  25:0  error  Incorrect indentation for `              \uD83D\uDDD1\uFE0F \u0423\u0434\u0430\u043B\u0438\u0442\u044C\n` beginning at L25:C0. Expected `              \uD83D\uDDD1\uFE0F \u0423\u0434\u0430\u043B\u0438\u0442\u044C\n` to be at an indentation of 12 but was found at 14.  block-indentation\n');
  });
  QUnit.test('admin/templates/components/user-listing.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'admin/templates/components/user-listing.hbs should pass TemplateLint.\n\nadmin/templates/components/user-listing.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<h3>` beginning at L3:C8. Expected `<h3>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:8  error  Incorrect indentation for `<div>` beginning at L4:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  7:8  error  Incorrect indentation for `<div>` beginning at L7:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:8  error  Incorrect indentation for `<div>` beginning at L10:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:12  error  Incorrect indentation for `<span>` beginning at L5:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  8:12  error  Incorrect indentation for `<span>` beginning at L8:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  12:0  error  Incorrect indentation for `              \u270F\uFE0F \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\n` beginning at L12:C0. Expected `              \u270F\uFE0F \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\n` to be at an indentation of 12 but was found at 14.  block-indentation\n  15:0  error  Incorrect indentation for `              \uD83D\uDDD1\uFE0F \u0423\u0434\u0430\u043B\u0438\u0442\u044C\n` beginning at L15:C0. Expected `              \uD83D\uDDD1\uFE0F \u0423\u0434\u0430\u043B\u0438\u0442\u044C\n` to be at an indentation of 12 but was found at 14.  block-indentation\n');
  });
  QUnit.test('admin/templates/configs.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'admin/templates/configs.hbs should pass TemplateLint.\n\nadmin/templates/configs.hbs\n  2:4  error  Incorrect indentation for `<h2>` beginning at L2:C4. Expected `<h2>` to be at an indentation of 2 but was found at 4.  block-indentation\n');
  });
  QUnit.test('admin/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'admin/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('admin/templates/login.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'admin/templates/login.hbs should pass TemplateLint.\n\nadmin/templates/login.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<h2>` beginning at L3:C4. Expected `<h2>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:4  error  Incorrect indentation for `<form>` beginning at L4:C4. Expected `<form>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:8  error  Incorrect indentation for `<Input>` beginning at L5:C8. Expected `<Input>` to be at an indentation of 6 but was found at 8.  block-indentation\n  6:8  error  Incorrect indentation for `<br>` beginning at L6:C8. Expected `<br>` to be at an indentation of 6 but was found at 8.  block-indentation\n  7:8  error  Incorrect indentation for `<Input>` beginning at L7:C8. Expected `<Input>` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:8  error  Incorrect indentation for `<br>` beginning at L8:C8. Expected `<br>` to be at an indentation of 6 but was found at 8.  block-indentation\n  9:8  error  Incorrect indentation for `<button>` beginning at L9:C8. Expected `<button>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:10  error  Interaction added to non-interactive element  no-invalid-interactive\n  6:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  8:8  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
  QUnit.test('admin/templates/products.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'admin/templates/products.hbs should pass TemplateLint.\n\nadmin/templates/products.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<h2>` beginning at L3:C4. Expected `<h2>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:4  error  Incorrect indentation for `<p>` beginning at L4:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  8:4  error  Incorrect indentation for `<ProductListing>` beginning at L8:C4. Expected `<ProductListing>` to be at an indentation of 2 but was found at 4.  block-indentation\n');
  });
  QUnit.test('admin/templates/users.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'admin/templates/users.hbs should pass TemplateLint.\n\nadmin/templates/users.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<h2>` beginning at L3:C4. Expected `<h2>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:4  error  Incorrect indentation for `<p>` beginning at L4:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n');
  });
});
define("admin/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/list-products-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/list-products-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/application-links-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/application-links-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/configs-config-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/configs-config-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/configs-locale-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/configs-locale-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/configs-paymentsystems-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/configs-paymentsystems-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/product-listing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/product-listing-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/user-listing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/user-listing-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/configs-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/configs-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/config-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/config-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/locale-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/locale-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/payment-system-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/payment-system-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/paymentsystem-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/paymentsystem-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/product-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/product-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/configs-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/configs-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/products-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/products-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/users-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/users-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/api-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/api-test.js should pass ESLint\n\n');
  });
});
define("admin/tests/test-helper", ["admin/app", "admin/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("admin/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("admin/tests/unit/controllers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define("admin/tests/unit/controllers/configs-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | configs', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:configs');
      assert.ok(controller);
    });
  });
});
define("admin/tests/unit/controllers/login-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:login');
      assert.ok(controller);
    });
  });
});
define("admin/tests/unit/models/config-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | config', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('config', {});
      assert.ok(model);
    });
  });
});
define("admin/tests/unit/models/locale-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | locale', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('locale', {});
      assert.ok(model);
    });
  });
});
define("admin/tests/unit/models/payment-system-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | payment system', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('payment-system', {});
      assert.ok(model);
    });
  });
});
define("admin/tests/unit/models/paymentsystem-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | paymentsystem', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('paymentsystem', {});
      assert.ok(model);
    });
  });
});
define("admin/tests/unit/models/product-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | product', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('product', {});
      assert.ok(model);
    });
  });
});
define("admin/tests/unit/models/user-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('user', {});
      assert.ok(model);
    });
  });
});
define("admin/tests/unit/routes/about-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define("admin/tests/unit/routes/configs-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | configs', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:configs');
      assert.ok(route);
    });
  });
});
define("admin/tests/unit/routes/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact');
      assert.ok(route);
    });
  });
});
define("admin/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("admin/tests/unit/routes/login-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define("admin/tests/unit/routes/products-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | products', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:products');
      assert.ok(route);
    });
  });
});
define("admin/tests/unit/routes/users-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | users', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:users');
      assert.ok(route);
    });
  });
});
define("admin/tests/unit/serializers/api-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | api', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('api');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('api', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define('admin/config/environment', [], function() {
  var prefix = 'admin';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('admin/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
