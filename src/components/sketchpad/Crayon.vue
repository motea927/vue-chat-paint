<template>
    <div class="crayon">
        <ul class="crayonsList">
            <li v-for="crayon in crayons" 
                :key="crayon.name" 
                @click="selectCrayon(crayon.name)"
                class="crayonsItem"
                :class="{ 'crayonsItem--active': crayon.active }">
                <svg class="crayonsIcon">
                    <use :xlink:href="'./src/assets/img/sprites.svg#' + crayon.name"></use>
                </svg>
            </li>
        </ul>
    </div>
</template>

<script>
import bus from '../../assets/eventBus.js'

export default {
    data() {
        return {
            crayons: [
                { name: 'red', color: '#800000', active:true},
                { name: 'orange', color: '#DD7013', active: false },
                { name: 'yellow', color: '#C9C71A', active: false },
                { name: 'green', color: '#18981D', active: false },
                { name: 'tiffany', color: '#19A79B', active: false },
                { name: 'blue', color: '#1D2089', active: false },
                { name: 'purple', color: '#5C2E9B', active: false },
                { name: 'pink', color: '#930192', active: false },
                { name: 'gray', color: '#B18D73', active: false },
                { name: 'brown', color: '#5b3f33', active: false },
                { name: 'black', color: '#000000', active: false },
                { name: 'sliver', color: '#aaaaaa', active: false },
                { name: 'white', color: '#ffffff', active: false }
            ]
        };
    },
    methods: {
        selectCrayon(name) {
            for(let i=0;i<this.crayons.length;i++){
                if (this.crayons[i].name === name) {
                    this.crayons[i].active = true;
                    bus.$emit('selectCrayon', this.crayons[i].color);
                } else {
                    this.crayons[i].active = false;
                }
            }
        }
    }
}
</script>

<style lang="scss">
.crayon {
    grid-row: 1 / 2;
}
.crayonsList {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(13, min-content);
    font-size: .2rem;
    height: 100%;
}

.crayonsItem {
    width: .65rem;
    height: .65rem;
    cursor: pointer;
    margin-top: .1rem;

    &:hover {
        transform: translateY(2px);
    }
    
    &--active {
        transform: translateY(10px);
        &:hover {
            transform: translateY(10px);
        }
    }

    @media only screen and (max-width: 1800px) {
        width: .6rem;
        height: .6rem;
    }

    @media only screen and (max-width: 1650px) {
        width: .55rem;
        height: .55rem;
    }

    @media only screen and (max-width: 1480px) {
        width: .5rem;
        height: .5rem;
    }

    @media only screen and (max-width: 1350px) {
        width: .4rem;
        height: .4rem;
    }

    @media only screen and (max-width: 1020px) {
        width: .3rem;
        height: .3rem;
    }
    
    &:not(:first-child) {
        margin-left: -.1rem;
    }   

    
}




.crayonsIcon {
    height: 100%;
    width: 100%;
}

</style>
