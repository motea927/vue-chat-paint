<template>
    <div class="features">
        <svg class="features__icon">
            <use xlink:href="../src/assets/img/sprites.svg#smiling"></use>
        </svg>
        <svg class="features__icon--small">
            <use xlink:href="./src/assets/img/sprites.svg#ring"></use>
        </svg>
    </div>
</template>



<script>
export default {
    
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
            margin-left: -.2rem;
            width: .4rem;
            height: .4rem;

            &--small {
                width: .3rem;
                height: .3rem;
            }
        }

        
    }

</style>

