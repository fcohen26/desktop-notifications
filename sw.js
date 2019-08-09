self.addEventListener('install', function(event) {
    console.log('hi from service worker');
    self.registration.showNotification("Chat request from Visitor X", {"actions": [{action: "accept-action", title: "Accept"}, {action: "reject-action", title: "Reject"}]});

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
self.addEventListener('notificationclick', function(event) {
    console.log("notification click");
    if (!event.action) {
        console.log('Notification click');
        return;
    }
    switch (event.action) {
        case 'accept-action':
            console.log("accept action clicked");
            break;
        case 'reject-action':
            console.log('reject action clicked');
            break;
    }
});

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