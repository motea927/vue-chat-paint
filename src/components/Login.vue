<template>
    <main>
        <div class="container">
            <div class="des">
                <p class="des__text"> Pating Chat 是一款類Y即時通的線上聊天室，只需輸入暱稱及好友所在的房間即可進行繪畫與聊天。</p>
            </div>
            <div class="form">
                <h1 class="form__title">Pating Chat</h1>
                <div class="form__group">
                    <label for="name" class="form__label">Name</label>
                    <input id="name" type="text" placeholder="Peter" class="form__input">
                </div>
                <div class="form__group">
                    <label for="room" class="form__label">Room</label>
                    <input id="room" type="text" placeholder="55687" class="form__input">
                </div>
                <button class="form__submit">Chat</button>
            </div>
        </div>
    </main>
    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    $color-primary:#7978c5;

    main {
        font-size: .18rem;
        background: #857567;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .container {
        background-color: #fff;
        width: 6rem;
        height: 4rem;
        box-shadow: 0 0 10px rgba(56, 54, 53, 0.5);
        border-radius: 2px;
        display: flex;
    }
    .des {
        height: 100%;
        width: 50%;
        background-image: linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url('../../src/assets/img/indexbackground.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        &__text {
            color: #fff;
            font-size: .18rem;
            padding: .15rem;
            font-weight: 800;
        }
    }
    .form {
        
        
        padding: .15rem;
        display: flex;
        align-items: center;
        width: 50%;
        height: 100%;
        flex-direction: column;

        & > * {
            margin: .15rem;
        }

        &__title {
            font-size: .25rem;
            color: $color-primary;
        }

        &__label {
            color: #fff;
            display: block;
            font-size: .2rem;
            padding: .1rem;
            background-color: $color-primary;
        }

        &__group {
            display: flex;
            border-radius: 2px;
            overflow: hidden;
        }

        &__input {
            border: 1px solid $color-primary;
            width:100%;
            padding: 0px 6px;
        }

        &__submit {
            font-size: .2rem;
            padding: .05rem;
            border: 1px solid $color-primary;
            background-color: $color-primary;
            border-radius: 2px;
            color: #fff;
        }
    }

</style>
