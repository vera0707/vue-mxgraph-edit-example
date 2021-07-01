<template>
  <router-view/>
</template>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: 'Arial','PingFang SC','Microsoft Yahei','sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
