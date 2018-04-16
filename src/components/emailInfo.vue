<template>
  <div id="emailInfo">
    <div  id="email-div" v-for="email in sentEmails" v-if="selectedEmail.id === email.id" v-bind:key=email.id>
        <div id="date">
            <h1>Date Sent:</h1>
            <h2>{{email.emailSent}}</h2>
        </div>
        <div id="subject">
            <h1>Email Subject:</h1>
            <h2>{{email.subject}}</h2>
        </div>
        <div id="recipients">
            <h1>Recipients:</h1>
            <ul>
                <li v-for="recipient in email.recipients.recipients"  :id=recipient v-bind:key=recipient>
                    <h3 v-for="email in recipients" v-if="email.id === recipient" v-bind:key=email.id>{{email.email}}</h3>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
  export default {
  name: 'emailInfo',
  components: {
  },
  data() {
    return {
    };
  },
  computed: mapGetters([
       'sentEmails',
      'selectedEmail',
      'recipients'
  ]),
  methods: mapActions([
     
  ]),
  mounted() {
      
  }
};
</script>


<style scoped>
 #emailInfo {
        grid-row: 3/4;
        grid-column: 1/2;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        align-items: center;
 }

 #email-div {
     width: 100%;
     height: 100%;
     display: grid;
     grid-template-rows: 100%;
     grid-template-columns: 15% 35% 50%;
 }

 h1 {
     margin-bottom: .5rem;
     font-size: 1rem;
     font-family: 'Questrial', sans-serif;
     font-weight: bold;
 }

 h2 {
     font-size: 1rem;
     height: 1.5rem;
     border: solid hsl(0 , 0%, 40%) 1px;
     width: 80%;
     text-align: center;
     padding: 5px;
     box-shadow: 5px 5px  hsl(0 , 0%, 40%);
 }

 #date {
     width: 100%;
     height: 100%;
     grid-row: 1/2;
     grid-column: 1/2;
     display: flex;
     flex-flow: column;
     justify-content: center;
     align-items: center;
 }

  #subject {
     width: 100%;
     height: 100%;
     grid-row: 1/2;
     grid-column: 2/3;
     display: flex;
     flex-flow: column;
     justify-content: center;
     align-items: center;
 }

    #recipients {
        width: 100%;
        height: 100%;
        grid-row: 1/2;
        grid-column: 3/4;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }

    #recipients ul {
        border: solid hsl(0 , 0%, 40%) 1px;
        width: 90%;
        height: 1.5rem;
        text-align: center;
        padding: 5px;
        box-shadow: 5px 5px  hsl(0 , 0%, 40%);
        display: flex;
        flex-flow: row;
        overflow: scroll;
    }

    #recipients li {
        margin-right: .8rem;
        font-size: 1rem;
    }


</style>