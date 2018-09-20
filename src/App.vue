<template>
  <div class="grid">
    <div class="container">
      <app-header></app-header>
      <app-sketchpad></app-sketchpad>
    </div>
    
  </div>
</template>

<script>
import Header from './components/Header';
import Sketchpad from './components/sketchpad/Sketchpad';

export default {
  components: {
    appHeader: Header,
    appSketchpad: Sketchpad
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px
  }
  .grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 70% 1fr;
    grid-template-rows: 1fr 90vh 1fr;
  }
  .container {
    background-color: rgb(244, 245, 235);
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    border-radius: $border-radius;
  }
</style>
