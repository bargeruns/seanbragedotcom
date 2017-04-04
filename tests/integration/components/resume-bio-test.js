import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('resume-bio', 'Integration | Component | resume bio', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{resume-bio}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#resume-bio}}
      template block text
    {{/resume-bio}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
