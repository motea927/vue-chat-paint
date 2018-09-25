<template>
    <div class="canvasAndOption">
        <canvas class="canvas"
                @mousedown="mouseDown"
                @mousemove="mouseMove"
                @mouseup="mouseUp"
                ref="canvas">
            Sorry, your browser doesn't support the &lt;canvas&gt; element.
        </canvas>

        <app-option></app-option>
    </div>
    
    
</template>

<script>
var _canvas, ctx;
import bus from '../../assets/eventBus.js'
import Option from './Option';

var ws = new WebSocket('ws://localhost:8080');

ws.onmessage = (evt) => {
    var msg = JSON.parse(evt.data);

    if (msg.type === 'mouseDown') {
        ctx.strokeStyle = msg.color;
        ctx.lineWidth = msg.width;
        ctx.beginPath();
        ctx.moveTo(msg.pos.x, msg.pos.y);

    } else if (msg.type === 'mouseMove') {

        ctx.lineTo(msg.pos.x, msg.pos.y);
        ctx.stroke();
    }
}

export default {

    data() {
        return {
            canvas: {
                color: '#0000ff',
                drawing: false,
                penSize: 3
            }
        }
    },
    components: {
        appOption: Option
    },
    mounted() {
        _canvas = this.$refs.canvas;
        ctx = _canvas.getContext('2d');
        _canvas.height = _canvas.clientHeight;
        _canvas.width = _canvas.clientWidth;
        bus.$on('erase', this.erase);
        bus.$on('selectCrayon', this.selectCrayon);
        bus.$on('changePenSize', this.changePenSize);
    },
    methods: {
        mouseDown($event) {
            //取得畫布
            _canvas = $event.target;
            ctx = _canvas.getContext('2d');
            //設定顏色
            ctx.strokeStyle = this.canvas.color;
            ctx.lineCap = "round";
            ctx.lineWidth = this.canvas.penSize;
            //取得座標
            var mousePos = this.getMousePos(_canvas, $event);
            //建立path物件
            ctx.beginPath();
            ctx.moveTo(mousePos.x, mousePos.y);  
            $event.preventDefault();
            this.canvas.drawing = true;

            //傳送ws座標訊息
            var msg = {
                type: "mouseDown",
                color: ctx.strokeStyle,
                width: this.canvas.penSize,
                pos: mousePos
            }

            ws.send(JSON.stringify(msg));
        },
        getMousePos(_canvas, $event) {
            var rect = _canvas.getBoundingClientRect();
            return {
                x: $event.clientX - rect.left,
                y: $event.clientY - rect.top
            };
        },
        mouseMove($event) {
                if (this.canvas.drawing) {
                    var mousePos = this.getMousePos(_canvas, $event);
                    ctx.lineTo(mousePos.x, mousePos.y);
                    ctx.stroke();


                    //傳送ws座標訊息
                    var msg = {
                        type: "mouseMove",
                        pos: mousePos
                    }

                    ws.send(JSON.stringify(msg));

                }






                

        },
        mouseUp() {
             this.canvas.drawing = false;
        },
        erase() {
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, _canvas.width, _canvas.height);
        },
        selectCrayon(color) {
            this.canvas.color = color;
        },
        changePenSize(val) {
            this.canvas.penSize = val;
        }
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

