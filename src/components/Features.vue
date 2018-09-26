<template>
    <div class="features">
        <svg class="features__icon">
            <use xlink:href="../src/assets/img/sprites.svg#smiling"></use>
        </svg>
        <svg class="features__icon" @click="ring">
            <use xlink:href="../src/assets/img/sprites.svg#ring"></use>
        </svg>
    </div>
</template>



<script>
var ws = new WebSocket('ws://localhost:8080');

export default {
    props:['id','room'],
    methods: {
        ring() {
            var msg = {
                type: "sentRing",
                content: "叮咚, 有人在家嗎～～～～",
                from: this.id,
                room: this.room
            }

            ws.send(JSON.stringify(msg));
        }
    }
}
</script>

<style lang="scss">
    .features {
        grid-row: features-start / features-end;
        display: flex;
        align-items: center;
        justify-items: start;
        margin: 0 auto;
        height: 100%;
        width: 60%;
        &__icon {
            width: .3rem;
            height: .3rem;
            cursor: pointer;
            &:not(:first-child) {
                margin-left: .1rem;
            }
        }
        
    }

</style>

