import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'my-app/tests/helpers/start-app';

var application;

module('Acceptance | hello world', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /hello-world', function(assert) {
  visit('/hello-world');

  andThen(function() {
    assert.equal(currentURL(), '/hello-world');
  });
});
