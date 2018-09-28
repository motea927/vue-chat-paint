import Vue from "vue"
const HOST = location.origin.replace(/^http/, 'ws');
//const HOST = 'ws://localhost:8081';
const socket = new WebSocket(HOST);

const emitter = new Vue({
  methods:{
    send(message){
      if (1 === socket.readyState)
        socket.send(message);
    }
  }
})

socket.onmessage = (msg) => {
  emitter.$emit("message", msg.data);
}
socket.onerror = (err) =>{
  emitter.$emit("error", err);
}


export default emitter