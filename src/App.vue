<template>
  <div class="grid">
    <div class="container">
      <app-header></app-header>
      <app-sketchpad></app-sketchpad>
      <app-chat></app-chat>
      <app-features></app-features>
      <app-input></app-input>
    </div>
    
  </div>
</template>

<script>
import Header from './components/Header';
import Sketchpad from './components/sketchpad/Sketchpad';
import Chat from './components/Chat';
import Features from './components/Features';
import Input from './components/Input';

export default {
  components: {
    appHeader: Header,
    appSketchpad: Sketchpad,
    appChat: Chat,
    appFeatures: Features,
    appInput: Input
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html, body {
    height: 100%;
  }

  html{
    box-sizing: border-box;
    font-size: 625%;
  }

  
  .grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 70% 1fr;
    grid-template-rows: 1fr 90vh 1fr;
  }
  .container {
    background-color: rgba(231, 238, 246, 0.932);
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    border-radius: $border-radius;
    display: grid;
    grid-template-rows: [header-start] .35rem [header-end sketchpad-start] calc(60% - .35rem) [sketchpad-end chat-start] 25% [chat-end features-start] 6% [features-end input-start] 8% [input-end];
    grid-template-columns: 100%;
  }
</style>
