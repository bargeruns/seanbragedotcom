import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('resume-skills-tech', 'Integration | Component | resume skills tech', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{resume-skills-tech}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#resume-skills-tech}}
      template block text
    {{/resume-skills-tech}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
