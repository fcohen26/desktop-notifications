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

// Notification click event listener--triggered when notification is clicked anywhere
self.addEventListener('notificationclick', function(event) {
    event.preventDefault();

    // focus tab where notification came  from
    event.waitUntil(clients.matchAll({
        type: "window",
    })
    .then(clientList => {
        if (clientList.length) {
            clientList[0].focus();
        }
    }))

    // case for general notification click (not on accept or reject)
    if (!event.action) {
        console.dir('Notification click');
        return;
    }
    // case for notification click on accept button (in this case open google search for "accept")
    if (event.action === 'accept-action') {
        console.dir('accept action clicked');
        // window.focus();
        // this.close();
        clients.openWindow("https://www.google.com/search?q=accept&rlz=1C1CHBF_enUS861US861&oq=accept&aqs=chrome..69i57j0l5.1106j1j4&sourceid=chrome&ie=UTF-8");
        // event.notification.close();
    }
    // case for notification click on accept button (in this case open google search for "reject")
    if (event.action === 'reject-action') {
        console.dir('reject action clicked');
        window.alert("Chat rejectd");

        clients.openWindow('https://www.google.com/search?rlz=1C1CHBF_enUS861US861&ei=zxtfXeLpEMeV0PEPzvCY0A8&q=reject&oq=reject&gs_l=psy-ab.3..0i67i70i249j0i67l2j0l2j0i67j0j0i67j0l2.38718.39413..39615...0.3..0.262.644.4j1j1....2..0....1..gws-wiz.......0i71j0i131.RitfVJR2Wgs&ved=0ahUKEwiijd7wx5fkAhXHCjQIHU44BvoQ4dUDCAo&uact=5');
        event.notification.close();
    }
});