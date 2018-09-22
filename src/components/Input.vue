<template>
    <div class="input">
        <textarea name="" id="" cols="30" rows="10" class="inputBox"></textarea>
        <button class="submit">傳送</button>
    </div>
</template>

<script>
export default {
    
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
        margin-left: -.2rem;
        width: 90%;
        resize: none;
    }

    .submit {
        width: .4rem;
        height: .4rem;
        margin-left: .1rem;
    }
</style>
