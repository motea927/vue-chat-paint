<template>
    <div class="sketchpad">
        <app-crayon></app-crayon>
        <app-canvas></app-canvas>
    </div>
    
</template>

<script>
import Crayon from './Crayon.vue';
import Canvas from './Canvas.vue';
import Option from './Option.vue';

export default {
    components: {
        appCrayon: Crayon,
        appCanvas: Canvas
    }
}
</script>

<style lang="scss">
    .sketchpad {
        background-color: rgb(244, 245, 235);
        margin: 0 auto;
        grid-row: sketchpad-start / sketchpad-end;
        display: grid;
        grid-template-rows: 25% 75%;
        border:1px solid lightgray;
        width: 60%;
        padding: 0 .2rem .2rem .2rem;
    }
</style>

