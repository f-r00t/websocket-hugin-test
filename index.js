import SockJS from "sockjs-client";
import Stomp from "stompjs";

 var socket = new SockJS('https://techy.ddns.net/ws');
    const stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log(`Connected to  🤖`)

        stompClient.subscribe('/topic/posts-encrypted', function (post) {
            try {
                let json = JSON.parse(post.body);
		console.log(json);
            } catch (err) {
                console.log(err)
            }
        });
    });

    socket.onclose = () => {
        console.log('Connection closed')
    }
