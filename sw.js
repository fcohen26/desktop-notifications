self.addEventListener('install', function(event) {
    console.log('hiiii from service worker');
    //self.registration.showNotification("Chat request from Visitor X", {"actions": [{action: "accept-action", title: "Accept"}, {action: "reject-action", title: "Reject"}]});

})
// console.log('hi from service worker');

//self.registration.showNotification("hi", {"actions": [{action: "accept-action", title: "Accept"}, {action: "reject-action", title: "Reject"}]});

// self.onnotificationclick = function(event) {
//     console.log('On notification click: ', event.notification.tag);
//     var messageId = event.notification.data;
  
//     event.notification.close();
  
//     if (event.action === 'accept-action') {
//       console.log("accept clicked");
//     }
//     else if (event.action === 'reject-action') {
//       console.log("reject clicked")
//     }
//   };



// self.addEventListener('notificationclick', function(event) {
//     console.dir("hi notification clicked");
//     console.dir(event.action);
//     //clients.openWindow('http://www.facebook.com');
//     //notification.close();
//     console.log("notification click");
//     if (!event.action) {
//         //clients.openWindow('www.facebook.com');
//         console.dir('Notification click');
//         return;
//     }
//     if (event.action === 'accept-action') {
//         console.dir('accept action clicked');
//         clients.openWindow('https://www.google.com/search?source=hp&ei=VudNXdWWIuua0gK9nbagCw&q=accept&oq=accept&gs_l=psy-ab.3..0l2j0i131j0l7.486.1681..1881...0.0..0.189.481.6j1......0....1..gws-wiz.kcsHLt0F8D4&ved=0ahUKEwjVmcK53_bjAhVrjVQKHb2ODbQQ4dUDCAc&uact=5');
//         event.notification.close();
//     }
//     if (event.action === 'reject-action') {
//         console.dir('reject action clicked')
//         clients.openWindow('https://www.google.com/search?ei=WOdNXfqpMKms0gKplrKwDw&q=reject&oq=reject&gs_l=psy-ab.3..0i67l3j0l2j0i67j0i131l2j0j0i67.25780.27712..27836...0.0..0.160.537.7j1......0....1..gws-wiz.....6..0i71j0i308i154.x9DIIongoTw&ved=0ahUKEwj6tcq63_bjAhUpllQKHSmLDPYQ4dUDCAo&uact=5');
//         event.notification.close();
//     }
// });



//   self.onnotificationclick = function(event) {
//     console.log('On notification click: ', event.notification.tag);
//     event.notification.close();
  
//     // This looks to see if the current is already open and
//     // focuses if it is
//     event.waitUntil(clients.matchAll({
//       type: "window"
//     }).then(function(clientList) {
//       for (var i = 0; i < clientList.length; i++) {
//         var client = clientList[i];
//         if (client.url == '/' && 'focus' in client)
//           return client.focus();
//       }
//       if (clients.openWindow)
//         return clients.openWindow('/');
//     }));
//   };