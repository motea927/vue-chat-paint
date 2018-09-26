<template>
    <div class="chat" ref="chat">
        <ul class="chatList">
            <li v-for="chatList in chatLists" class="chatItem">
                <p>{{ chatList.from }}: {{ chatList.content}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
var ws = new WebSocket('ws://localhost:8080');

export default {
    props: ['room'],
    data() {
        return {
            chatLists:[]
        }
    },
    methods: {
        scrollToBottom() {
            var chat = this.$refs.chat;
            var scrollHeight = chat.scrollHeight;

            chat.scrollTop = chat.scrollHeight - chat.getBoundingClientRect().height;
        }
    },
    mounted() {
        ws.onmessage = (evt) => {
            var msg = JSON.parse(evt.data);
            if (msg.type === 'sentMsg') {
                if (this.room === msg.room) {
                    this.chatLists.push({from: msg.from, content: msg.content});
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
        overflow-y: scroll;
    }

    .chatList {
        height: 100%;
        list-style: none;
    }

    .chatItem {
        padding: .05rem;
        font-size: .18rem;
    }
</style>


