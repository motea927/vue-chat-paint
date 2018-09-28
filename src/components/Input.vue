<template>
    <div class="input">
        <textarea name="" id="" cols="30" rows="10" class="inputBox" v-model="content" @keydown.enter.prevent="submit"></textarea>
        <button class="submit" @click="submit">傳送</button>
    </div>
</template>

<script>
import ws from '../../socket.js'
import bus from '../assets/eventBus.js'

export default {
    props:['id','room'],
    data() {
        return {
            content: ''
        };
    },
    methods: {
        submit() {
            var msg = {
                type: "sentMsg",
                content: this.content,
                from: this.id,
                room: this.room
            }
            bus.$emit('sentMsg', this.content);
            ws.send(JSON.stringify(msg));
            this.content ='';
        }
    }
}
</script>

<style lang="scss">
    .input {
        grid-row: input-start / input-end;
        display: flex;
        align-items: flex-end;
        width: 60%;
        margin: 0 auto;
    }

    .inputBox {
        height: 100%;
        width: 90%;
        resize: none;
    }

    .submit {
        width: .4rem;
        height: .4rem;
        margin-left: .1rem;
    }
</style>
