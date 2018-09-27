<template>
    <div class="chat">
        <ul class="chatList" ref="chatList">
            <li v-for="chatList in chatLists" class="chatItem">
                <p>{{ chatList.from }}: <span :class="{ 'ring': chatList.isRing }">{{ chatList.content}}</span></p>
            </li>
        </ul>
        <audio src="./src/assets/audio/doorbell.wav" ref="ringAudio">
        </audio>
    </div>
</template>

<script>
const HOST = location.origin.replace(/^http/, 'ws');
const ws = new WebSocket(HOST);

export default {
    props: ['room'],
    data() {
        return {
            chatLists:[]
        }
    },
    methods: {
        scrollToBottom() {
            var chat = this.$refs.chatList;
            var height = chat.scrollHeight;
            setTimeout(() => {
                chat.scrollTop = height
            }, 0);
        }
    },
    mounted() {
        ws.onmessage = (evt) => {
            
            var msg = JSON.parse(evt.data);

            if (this.room === msg.room) {
                if (msg.type === 'sentMsg') {
                    this.chatLists.push({from: msg.from, content: msg.content});
                    console.log('push finish');
                    this.scrollToBottom();
                } else if (msg.type === 'sentRing') {
                        this.chatLists.push({from: msg.from, content: msg.content, isRing: true});
                        this.scrollToBottom();
                        this.$refs.ringAudio.play();
                        this.$emit('ringWindow');
                }
            }

        }
    }
    
}


</script>

<style lang="scss">
    .chat{
        background-color: #fff;
        grid-row: chat-start / chat-end;
        border:1px solid rgb(146, 159, 165);
        border-top: none;
        width: 60%;
        margin: 0 auto;
        padding: 0 .2rem .2rem .2rem;
        
    }

    .chatList {
        height: 100%;
        list-style: none;
        overflow-y: scroll;
        height: 100%;
    }

    .chatItem {
        padding: .05rem;
        font-size: .18rem;
    }

    .ring {
        color: red;
        font-weight: 600;
    }
</style>


