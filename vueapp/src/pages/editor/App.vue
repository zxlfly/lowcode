<script setup>
import ComList from './components/ComList.vue'
import Attrs from './components/Attrs.vue'
import Preview from './components/Preview.vue'

</script>

<template>
  <div class="container">
    <ComList />
    <Preview />
    <Attrs />
  </div>
</template>

<style scoped>
.container{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  background: #f9f9f9;
}
</style>
