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
self.addEventListener('notificationclick', function(event) {
    console.dir("NOTIFICATION CLICKED --SELF:")
    console.dir(self);
    console.dir("hi notification clicked");
    console.dir(event.action);
    console.log("IS DEFAULT PREVENTED");
    console.log(event.defaultPrevented);
    let winR = clients.openWindow('http://www.facebook.com');
    winR.close();
    //notification.close();
    //window.focus();
    //window.open().close();
    console.log("notification click");
    if (!event.action) {
        let win = event.returnValue;
        console.log(win);
        win.close();
        console.dir('Notification click');
        return;
    }
    if (event.action === 'accept-action') {
        console.dir('accept action clicked');
        clients.openWindow("https://www.facebook.com");
        event.notification.close();
    }
    if (event.action === 'reject-action') {
        console.dir('reject action clicked')
        clients.openWindow('https://www.google.com');
        event.notification.close();
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