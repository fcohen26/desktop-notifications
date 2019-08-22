window.addEventListener('load', function () {
  //register service worker on load and log progress
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
    if(registration.installing) {
      console.log('Service worker installing');
    } else if(registration.waiting) {
      console.log('Service worker installed');
    } else if(registration.active) {
      console.log('Service worker active');
      console.log('service worker scope is:');
      console.log(registration.scope);
    }
      console.log("service worker registration succeeded: ", registration);
    }, function(error) {
      console.log("service worker registration failed: ", error);
    });
    var button = document.getElementsByTagName('button')[0];
    //event listener on button to trigger notification
    button.addEventListener('click', function () {
          if (window.Notification && Notification.permission !== "granted") {
            //request permission to show notifications
            Notification.requestPermission(function (status) {
              if (Notification.permission !== status) {
                Notification.permission = status;
              }
            });
          }
          //if notification permission has been granted, send notification 
          if (window.Notification && Notification.permission === "granted") {
            //send desktop notification on service worker registration
            navigator.serviceWorker.getRegistration('/sw.js').then(function(registration) {
              registration.showNotification("Incoming Chat From Visitor X", {"actions": [{action: "accept-action", title: "Accept"}, {action: "reject-action", title: "Reject"}]});
            });
          }
    });
  }
});
