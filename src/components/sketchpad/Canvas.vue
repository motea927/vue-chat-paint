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
import ws from '../../../socket.js'

export default {
    props: ['room'],
    data() {
        return {
            canvas: {
                color: '#800000',
                drawing: false,
                penSize: 3
            }
        }
    },
    components: {
        appOption: Option
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
                pos: mousePos,
                canvasHeight: _canvas.height,
                canvasWidth: _canvas.width,
                room: this.room
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
                        pos: mousePos,
                        canvasHeight: _canvas.height,
                        canvasWidth: _canvas.width,
                        room: this.room
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

            ws.send(JSON.stringify({ type: 'erase', room: this.room}));
        },
        print() {
            var _url = _canvas.toDataURL();
            bus.$emit('receivePrintImg', _url);
        },
        selectCrayon(color) {
            this.canvas.color = color;
        },
        changePenSize(val) {
            this.canvas.penSize = val;
        },
        setCanvasSize() {
            console.log('resize');
            _canvas.height = _canvas.clientHeight;
            _canvas.width = _canvas.clientWidth;
        }
    },
    created() {
        ws.$on('message', (data) => {
            console.log(msg);
            var msg = JSON.parse(data);
            
            if (msg.room === this.room) {

                var ratioX,ratioY = 0;
                //因應不同解析度換算比率
                ratioX = msg.canvasWidth / _canvas.width;
                ratioY = msg.canvasHeight / _canvas.height;
        
                if (msg.type === 'mouseDown') {
                    ctx.strokeStyle = msg.color;
                    ctx.lineWidth = msg.width;
                    ctx.beginPath();
                    ctx.moveTo(msg.pos.x / ratioX, msg.pos.y / ratioY);
                } else if (msg.type === 'mouseMove') {
                    ctx.lineTo(msg.pos.x / ratioX, msg.pos.y / ratioY);
                    ctx.stroke();
                } else if (msg.type === 'erase') {
                    ctx.fillStyle = "white";
                    ctx.fillRect(0, 0, _canvas.width, _canvas.height);
                }
            }
        });
    },
    mounted() {
        
        
        

        window.onresize = () => {
            this.setCanvasSize();
        }

        _canvas = this.$refs.canvas;
        ctx = _canvas.getContext('2d');
        this.setCanvasSize();

        bus.$on('erase', this.erase);
        bus.$on('print', this.print);
        bus.$on('selectCrayon', this.selectCrayon);
        bus.$on('changePenSize', this.changePenSize);
        
        
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
        border: 2px solid rgb(151, 158, 150);
    }
</style>

