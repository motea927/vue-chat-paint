<template>
    <div class="option">
        <h2 class="option__title">Crayon Size</h2>
        <button v-for="btn in btns" 
                :key="btn.name" 
                class="btn"
                :class="'btn--' + btn.name"
                @click="changePenSize(btn.val)">
                <span v-if="btn.active" class="btn--active"></span>
        </button>
        
        <p class="erase" @click="erase">Erase Page</p>
        <p>Extras</p>
        <p>Print</p>
    </div>
    
</template>

<script>
import bus from '../../assets/eventBus.js'
export default {
    data() {
        return {
            btns:[
                {
                    name: 'small',
                    val: 3,
                    active: true
                },{
                    name: 'medium',
                    val: 7,
                    active: false
                },{
                    name: 'large',
                    val: 11,
                    active: false
                }
            ]
        };  
    },
    methods: {
        erase() {
            bus.$emit('erase');
        },
        changePenSize(val) {
            bus.$emit('changePenSize', val);
            for (let i =0; i<=this.btns.length; i++) {
                if (this.btns[i].val === val) {
                    this.btns[i].active = true;
                } else {
                    this.btns[i].active = false;
                }
            }
        }
    }
}
</script>

<style lang="scss">
    .option {
        width: .2rem;

        display: grid;
        grid-template-rows: repeat(7, 1fr);
        justify-items: center;
        align-items: center;
        text-align: center;
        margin-left: .1rem;
        &__title{
            font-size: .2rem;
        }

        & p {
            font-size: .2rem;
        }
    }
    .btn {
        position: relative;
        background-color: black;
        border:none;
        border-radius: 50%;
        cursor: pointer;
 

        &--small{
            width: 5px;
            height: 5px;
        }

        &--medium{
            width: 10px;
            height: 10px;
        }

        &--large{
            width: 15px;
            height: 15px;
        }
    }
    .erase {
        cursor: pointer;
    }
</style>

