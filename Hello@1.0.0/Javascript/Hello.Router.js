define('Hello.Router'
, [
    'Hello.View'
  , 'Backbone'
  ]
, function HelloRouter(
    HelloView
  , Backbone
  )
{
  'use strict';

  return Backbone.Router.extend({

    routes: {
      'hello': 'hello',
    }

  , initialize: function initialize(application) {
      this.application = application;
    }

  , hello: function helllo() {
      var view = new HelloView({
        application: this.application
      });

      console.log('hello function called');

      view.showContent();
    }
  });
});