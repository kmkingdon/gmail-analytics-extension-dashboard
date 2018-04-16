<template>
  <div id="header">
    <img id="logo" src="../../public/icon128.png"/>
    <h1 id="title">GMAIL ANALYTICS</h1>
    <p id="login" class="g-signin2" data-onsuccess="queryReports"></p>
  </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
  export default {
  name: 'Header',
  components: {
  },
  data() {
    return {
    };
  },
  computed: {

  },
    methods: mapActions([
      'queryReports'
    ])
};
</script>

<style scoped>

    #header {
        grid-row: 1/2;
        grid-column: 1/2;
        background-color: hsl(0 , 0%, 70%);
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        align-items: center;
    }

    #logo {
        height: 70px;
        margin-bottom: 8px;
    }

    #title {
        font-size: 3rem;
        font-family: 'Questrial', sans-serif;
    }

    #login {
      margin-bottom: 8px;
    }
</style>
