const express = require("express")
const cors = require("cors")
const webpush = require("web-push")

//Middlewares
const app = express();


app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Constantes
const pushSubscription = {
    endpoint: 'https://wns2-bn3p.notify.windows.com/w/?token=BQYAAADJxGjT%2bVcsCec6F5HRGzr2aAM2WEK%2fDUX1%2b%2frvS4MnD1wTGs9UiCrU6yHB74OnqL8LjtDKavOwTJ0JsAKlqe7yDIMcqK%2fDHfoKl3DcQi428lzdPHVOZ2TVBZxOq5GGel5lKT82YBJcAz1eTauqSfJ4phhwxUxaMckh3vUJVPHsumIylmwVX%2buWXexuJ7fsJa0qENg3tXTLoovGaOa2AWtY4s9d6Grup5hQulM%2bzQUhzGTTXjnPi9jhdrQYrQ2FsLRW3QXUGZiR0nXZ9wd%2bVsaoB%2bKmQhdw6n%2fo5e0P3HSvcDaGGVQXSsglXZGTizlfvmN7qcRvzHrTQN3L8%2bcyIukZ',       
    expirationTime: null,
    keys: {
        p256dh: 'BG6FazQ6EhvyyTYbdPtOh-SYdakYWc0GihjdXGd9QFfb0Zdo_eQN0K6P_p0acoG3b3Sgv_ZK_DhALChx8CO_2Wo',
        auth: 'UVvGPEuF6ry00QmfoZyhbg'
    }
}

const vapidKeys = {
    publicKey: "BExD5XzCen8maxJzhS8ZzymEO1XF6EEOvECB9DpDL8ImEZSppN_XosAFUqgORtI_QYdrZ2f_T7EOi3nnZCrEz4g",
    privateKey: "K3E_yY-rWI48b2aOt39haOzO1cidOR06WQa6i1pmV7k"
};

webpush.setVapidDetails(
    'mailto:jotace@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

// Routes
app.get('/',async (req, res) => {
    // Primero, envía una respuesta al cliente

    const payload = JSON.stringify({title:"Titulo de noti", message: "Mensaje de notificacion"})
    try {
        await webpush.sendNotification(pushSubscription, payload)
        await res.send("Enviado");
    } catch (error) {
        console.log(error)
    }
    
    
   
})

app.post('/subscription',(req,res) => {
    console.log(req.body)
    res.sendStatus(200).json()
})

app.listen(8000, () => console.log("Server en 8000"))