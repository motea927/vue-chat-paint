<template>
    <div class="option">
        <h2 class="option__title">Crayon Size</h2>
        <button v-for="btn in btns" 
                :key="btn.name" 
                class="btn"
                :class="'btn--' + btn.name">
        </button>
        <p>Erase Page</p>
        <p>Extras</p>
        <p>Print</p>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            btns:[
                {
                    name: 'small',
                    val: '.05rem'
                },{
                    name: 'medium',
                    val: '.1rem'
                },{
                    name: 'large',
                    val: '.15rem'
                }
            ]
        };
        
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
</style>

