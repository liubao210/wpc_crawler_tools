<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <MySelect></MySelect>
    <router-view/>
  </div>
</template>

<script>import MySelect from './components/MySelect.vue'
export default {
  name: 'App',
  components:
  {MySelect}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
