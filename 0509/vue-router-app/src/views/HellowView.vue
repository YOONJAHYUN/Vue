<template>
  <div>
    <h1>hello, {{ userName }}</h1>

  </div>
</template>

<script>
export default {
  name:'HelloView',
  data() {
    return {
      userName: this.$router.params.userName
    }
  }

}
</script>

<style>

</style>