<template>
  <div id="menu">
      <div id="email-select">
        <h1>Select an Email</h1>
        <select v-model="selectedEmail.id" name="" id="">
             <option value="">Select an Email Subject</option>
            <option v-for="email in sentEmails" :value=email.id v-bind:key=email.id>{{email.subject}}</option>
        </select>
      </div>
      <button v-on:click="queryReports">Import Google Analytics Data</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
  export default {
  name: 'Menu',
  components: {
  },
  data() {
    return {
    };
  },
  computed: mapGetters([
      'sentEmails',
      'selectedEmail'
  ]),
  methods: mapActions([
      'queryReports',
  ]),
  mounted() {
      
  }
};
</script>


<style scoped>
 #menu {
        grid-row: 2/3;
        grid-column: 1/3;
        background-color: hsl(0 , 0%, 50%);
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        align-items: center;
    }

 #email-select {
     width: 40%;
     display: flex;
     flex-flow: row;
     justify-content: space-around;
     align-items: center;
 }

 #email-select h1 {
     font-size: 1rem;
     font-family: 'Questrial', sans-serif;
 }

 #email-select select {
     height: 2rem;
     width: 50%;
     border: 1px solid;
     box-shadow: 5px 5px  hsl(0 , 0%, 40%);
 }

 button {
     height: 2rem;
     width: 30%;
     font-size: 1rem;
     font-family: 'Questrial', sans-serif;
     cursor: pointer;
     border: 1px solid;
     box-shadow: 5px 5px  hsl(0 , 0%, 40%);
 }
</style>