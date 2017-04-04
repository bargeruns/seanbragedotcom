import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('resume-skills-soft', 'Integration | Component | resume skills soft', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{resume-skills-soft}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#resume-skills-soft}}
      template block text
    {{/resume-skills-soft}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
