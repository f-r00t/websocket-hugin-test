import {WebSocket} from "ws";

const socket = new WebSocket('wss://techy.ddns.net/ws');

export const startWebsocket = () => {
    console.log(`Connecting..`)
    // Open connection wit Cache
    socket.addEventListener('open', function (event) {
        console.log(`Connected 🤖`)

        //Ping cache to keep Websocket alive
        setInterval(() => {
            socket.send(JSON.stringify("ping"))
            console.log('ping')
        }, 30000)
    });

    socket.addEventListener('close', () => {
        console.log('Connection closed')
    })

// Listen for messages
    socket.addEventListener('message', function (event) {
        let data = event.data

        try {

            let json = JSON.parse(data)
            console.log(json);

        } catch (err) {
            console.log(err)
        }

    });
}

startWebsocket();