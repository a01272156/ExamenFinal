import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('conceptos-nuevos', 'Integration | Component | conceptos nuevos', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{conceptos-nuevos}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#conceptos-nuevos}}
      template block text
    {{/conceptos-nuevos}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
