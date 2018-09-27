<template>
    <div class="header">
        <h1 class="header__title">即時通</h1>
    </div>
</template>

<script>
export default {
    props:['userList']
}
</script>

<style lang="scss">
    .header {
        background-color: rgb(121, 120, 197);
        grid-row: header-start / header-end;
        color: white;
        width: 100%;
        height: 100%;
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
        font-size: .1rem;
        display: flex;
        align-items: center;
    }
    .header__title {
        margin-left: .1rem;
        line-height: .1rem;
    }
</style>


