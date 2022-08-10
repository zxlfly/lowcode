<script setup>
import Botton from '../../../components/Button.vue'
</script>

<template>
  <div class="con">
    <Botton />
  </div>
</template>

<style scoped>
  .con{
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 180px;
    bottom: 0;
    background: #fff;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 10px;
  }
</style>
