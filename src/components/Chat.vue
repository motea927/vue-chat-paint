<template>
    <div class="chat">
        <ul class="chatList">
            <li v-for="chatList in chatLists" class="chatItem">
                <p >{{ chatList.from }}: {{ chatList.content}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chatLists:[
                {
                    from: 'nick',
                    content:'Hi!'
                },{
                    from: 'gg3be0',
                    content: 'Hello!'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .chat{
        background-color: #fff;
        grid-row: chat-start / chat-end;
        width: 60%;
        margin: 0 auto;
        padding: 0 .2rem .2rem .2rem;
    }

    .chatList {
        list-style: none;
    }

    .chatItem {
        padding: .05rem;
        font-size: .14rem;
    }
</style>


