const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

const app = express();

const subscription = {
    endpoint: 'https://wns2-bn3p.notify.windows.com/w/?token=BQYAAAA%2bDYntPvrAOGvMQEMFzizWGHBAyqNr1YL37gdHDawVyS8398480fumuJ%2fyyK1S7oM7LI%2bTcKgLFfzhJAhifV6y1EfhqR1Ybck0bLdYsCX3x5Z8Bq16CZM6a4FlPlwBLwp%2fk7fQbjR6YnolRqQrtMzzcN61%2fnfZv6gDTbgPakVyCnK9QbczY3jXGkwntcY9AnlNv49s%2bzzUbQPFHRvZ5OQTs0rTpNRztJGMNAUcOLGwwGJPBS01c0NCzIN%2ffzo7bhf47nzbL2pzmCqqcauOa5MVZrzKxtN8M%2f2zzI19wBD9rHmTWF1cE25lgZEAf3RWIkY%3d',
    expirationTime: null,
    keys: {
      p256dh: 'BB8ibcO--Eq5DgHj2EhLlWazvUtjYLxjYuGKpxlvsiZIUcYMbocVRfj4hnuxi6NLyrekz2b85tHC84yRU-tQTW0',
      auth: 'J6NBxSfasuC-AAgSb1mK1g'
    }
}

const vapidKeys = {
    "publicKey":"BLc9WbgLUz7OJBAdpijydSliDk3SXaZghxNHt8K_S6QZmLhbKtoYzd2_35X3h23gFHQohSjXsHidwEUE3iU844M",
    "privateKey":"LiO70pyxJK5-xE7lN_SzGpTfrrDTLBS7xWShiwwb3k0"
  }

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

webpush.setVapidDetails('mailto:jotace.026@example.com',
    vapidKeys.publicKey, 
    vapidKeys.privateKey)

app.get('/', (req, res) => {
    const payload = JSON.stringify(
        {
            title: "Notificacion del Server", 
            message: "Esta es una notificacion que llega desde el servidor"
        }
    )
    webpush.sendNotification(subscription,payload)
    res.send("Todo funcionando bien")
})

app.post('/subscription', (req, res ) => {
    const {pushSubscription} = req.body;
    console.log(pushSubscription);
    res.sendStatus(200);
})

app.post('/custom-notification', (req, res ) => {
    const {title, message} = req.body;
    const payload = JSON.stringify({
        title,
        message
    } )
    webpush.sendNotification(subscription,payload)
    res.send("Todo ok, notificacion enviada")
})

const port = 8000;

app.listen(port, () => console.log(`Server en ${port}`));