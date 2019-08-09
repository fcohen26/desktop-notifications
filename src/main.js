window.addEventListener('load', function () {
  if ('serviceWorker' in navigator) {
    this.navigator.serviceWorker.register('/src/sw.js').then(function(registration) {
      console.log("service worker registration succeeded: ", registration);
      Notification.requestPermission();
      if (window.Notification && Notification.permission !== "granted") {
        console.log(Notification.permission);
        Notification.requestPermission(function (status) {
          if (Notification.permission !== status) {
            Notification.permission = status;
          }
        });
        if (window.Notification && Notification.permission === "granted") {
          registration.showNotification("hi", {"actions": [{action: "accept-action", title: "Accept"}, {action: "reject-action", title: "Reject"}]});
        }
      }

    }, function(error) {
      console.log("service worker registration failed: ", error);
    });
  } else {
    this.console.log("service workers are not supported");
  }
}
  //console.log(Notification.maxActions);
   // navigator.serviceWorker
   //      .register('index.js')
   //      .then(registration => {
   //          console.log(
   //              "ServiceWorker registered with scope:",
   //              registration.scope
   //          );
   //      })
   //      .catch(e => console.error("ServiceWorker failed:", e));
  // Notification.requestPermission();
  // //console.log(Notification.permission);
  // // At first, let's check if we have permission for notification
  // // If not, let's ask for it
  // if (window.Notification && Notification.permission !== "granted") {
  //   console.log(Notification.permission);
  //   Notification.requestPermission(function (status) {
  //     if (Notification.permission !== status) {
  //       Notification.permission = status;
  //     }
  //   });
  // }

//   var button = document.getElementsByTagName('button')[0];

//   button.addEventListener('click', function () {
//     // If the user agreed to get notified
//     // Let's try to send ten notifications
// //     self.registration.showNotification("New mail from Alice", {
// //   actions: [
// //     {
// //       action: 'archive',
// //       title: 'Archive'
// //     }
// //   ]
// // });
//     if (window.Notification && Notification.permission === "granted") {
//       self.registration.showNotification("hi", {"actions": [{action: "accept-action", title: "Accept"}, {action: "reject-action", title: "Reject"}]});
//      	// let n = new Notification("Chat request from visitor X");
//       // n.onclick = function(event) {
//       //   console.log("here");
//       //   //event.preventDefault(); // prevent the browser from focusing the Notification's tab
//       //   //parent.focus();
//       //   window.focus();
//       //   this.close();
//       // }

//     }

//     // If the user hasn't told if he wants to be notified or not
//     // Note: because of Chrome, we are not sure the permission property
//     // is set, therefore it's unsafe to check for the "default" value.
//     else if (window.Notification && Notification.permission !== "denied") {
//       Notification.requestPermission(function (status) {
//         // If the user said okay
//         if (status === "granted") {
//           var n = new Notification("Chat Request from Visitor X");
//           n.onclick = function(event) {
//             console.log("here");
//             //event.preventDefault(); // prevent the browser from focusing the Notification's tab
//             //parent.focus();
//             window.focus();
//             this.close();
//           }

//         }

//         // Otherwise, we can fallback to a regular modal alert
//         else {
//           alert("Hi!");
//         }
//       });
//     }

//     // If the user refuses to get notified
//     else {
//       // We can fallback to a regular modal alert
//       alert("Hi!");
//     }
//   });
// });