define('Hello'
, [
    'Hello.Router'
  ]
, function (
    Router
  )
{
  'use strict';

  return {

    mountToApp: function(application) {
      return new Router(application);
    }

  }
});


//https://checkout.na0.netsuite.com/c.xxxxxx/sbe-dev-kilimanjaro/my_account.ssp?n=6#/hello

//local

//https://checkout.na0.netsuite.com/c.xxxxxx/sbe-dev-kilimanjaro/my_account-local.ssp?n=6#/hello