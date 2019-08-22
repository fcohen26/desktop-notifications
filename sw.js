// Notification click event listener--triggered when notification is clicked anywhere
self.addEventListener('notificationclick', function(event) {
    event.preventDefault();
    event.notification.close();

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
        clients.openWindow("https://www.google.com/search?q=accept&rlz=1C1CHBF_enUS861US861&oq=accept&aqs=chrome..69i57j0l5.1106j1j4&sourceid=chrome&ie=UTF-8");
    }
    // case for notification click on accept button (in this case open google search for "reject")
    if (event.action === 'reject-action') {
        console.dir('reject action clicked');
        clients.openWindow('https://www.google.com/search?rlz=1C1CHBF_enUS861US861&ei=zxtfXeLpEMeV0PEPzvCY0A8&q=reject&oq=reject&gs_l=psy-ab.3..0i67i70i249j0i67l2j0l2j0i67j0j0i67j0l2.38718.39413..39615...0.3..0.262.644.4j1j1....2..0....1..gws-wiz.......0i71j0i131.RitfVJR2Wgs&ved=0ahUKEwiijd7wx5fkAhXHCjQIHU44BvoQ4dUDCAo&uact=5');
    }
});