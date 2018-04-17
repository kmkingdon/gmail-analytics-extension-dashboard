<template>
  <div id="analytics">
      <div v-if="reports.length === 0" id="placeholder">
          <h1>Import Google Analytics Data </h1>
      </div>
      <div v-for="email in sentEmails" v-if="email.id === selectedEmail.id" v-bind:key="email.id">
          <Doughnut v-for="data in reports" v-if="data.dimensions[0] === email.eventLabel" v-bind:data="[parseInt(data.metrics[0].values[0]), (email.recipients.recipients.length - data.metrics[0].values)]" v-bind:key="data.dimensions[0]" />
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Doughnut from './doughnut.vue';

  export default {
  name: 'Analytics',
  components: {
      Doughnut,
  },
  data() {
    return {
    };
  },
  computed: mapGetters([
      'sentEmails',
      'selectedEmail',
      'recipients',
      'reports'
  ]),
  methods: mapActions([
     
  ]),
  mounted() {
      
  }
};
</script>


<style scoped>
 #analytics {
        grid-row: 3/4;
        grid-column: 2/3;
 }

 #placeholder {
     width: 100%;
     height: 100%;
     display: flex;
     flex-flow: column;
     justify-content: center;
     align-items: center;
 }

 #placeholder h1 {
     font-size: 2rem;
     width: 50%;
     margin-bottom: 3rem;
     font-family: 'Questrial', sans-serif;
 }

</style>