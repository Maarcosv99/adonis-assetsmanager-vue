<template>
  <div>
    <h1>Not Found</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  mounted() {
    console.log('App has been mounted!!!')
  }
})
</script>

<style lang="scss">
a {
  border: 1px solid black;
  width: 100px;
  background: gray;
  padding: 5px 10px;
  text-align: center;
  &.active {
    background: tomato;
  }
}
</style>