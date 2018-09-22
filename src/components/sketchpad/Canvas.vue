<template>
    <div class="canvasAndOption">
        <canvas class="canvas" id="canvas">
            Sorry, your browser doesn't support the &lt;canvas&gt; element.
        </canvas>

        <app-option></app-option>
    </div>
    
    
</template>

<script>

import Option from './Option';

export default {

    data() {
        return {
            canvas: {
                color: '#800000'
            }
        }
    },
    components: {
        appOption: Option
    }


        
}
</script>

<style lang="scss">
    .canvasAndOption {
        grid-row: 2 / 3;
        width: 100%;
        display: grid;
        grid-template-columns: calc(100% - .8rem) .8rem;
        grid-template-rows: 100%;
    }

    .canvas {
        background-color: white;
        width: 100%;
        height: 100%;
    }
</style>

