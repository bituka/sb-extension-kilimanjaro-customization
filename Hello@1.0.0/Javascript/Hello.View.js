define('Hello.View'
, [
    'hello.tpl'
  , 'Backbone'
  ]
, function HelloView(
    helloTpl
  , Backbone
  )
{
  'use strict';

  return Backbone.View.extend({

    template: helloTpl

  , getContext: function getContext() {
      return {
        example: 'Hello World'
      }
    }
    
  });

  console.log('console log in View'); //this is not working
});

console.log('console log in View end line');