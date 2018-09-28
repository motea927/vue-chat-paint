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
import ws from '../../socket.js'
import bus from '../assets/eventBus.js'

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
        },
        ring (msg) {
            var chatObject = {
                from: this.$route.params.id,
                content: "叮咚, 有人在家嗎～～",
                isRing: true
            }
            if (msg) {
                chatObject.from = msg.from,
                chatObject.content = msg.content
            }
            this.chatLists.push(chatObject);
            this.scrollToBottom();
            this.$refs.ringAudio.play();
            this.$emit('ringWindow');
        },
        sentMsg (msg) {
            var isServer = msg.from? true : false;
            if (isServer) {
                var msgObject = {
                    from: msg.from,
                    content: msg.content
                }
            } else {
                var msgObject = {
                    from: this.$route.params.id,
                    content: msg
                }
            }
            this.chatLists.push(msgObject);
            this.scrollToBottom();
        }
    },
    created() {
        bus.$on('ring', this.ring);
        bus.$on('sentMsg', this.sentMsg);
    },
    mounted() {
        ws.$on('message', (data) => {
            
            var msg = JSON.parse(data);

            if (this.room === msg.room) {
                if (msg.type === 'sentMsg') {
                    this.sentMsg(msg);
                } else if (msg.type === 'sentRing') {
                    this.ring(msg);
                }
            }

        });
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


