import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reports: [],
    sentEmails: [],
    recipients: [],
    selectedEmail: {
      id: 0
    },
  },
  mutations: {
    saveQueryState(state, response) {
      let reportObject = JSON.parse(response.body);
      state.reports = reportObject.reports[0].data.rows;
    },
    saveSentEmailsState(state, response) {
      state.sentEmails = response.sent;
    },
    saveRecipientsState(state, response) {
      state.recipients = response.emails;
    },
  },
  actions: {
    queryReports({commit}) {
      var VIEW_ID = '173437602';
      gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
          reportRequests: [
            {
              viewId: VIEW_ID,
              dateRanges: [
                {
                  startDate: '7daysAgo',
                  endDate: 'today'
                }
              ],
              metrics: [
                {
                  expression: 'ga:uniqueEvents'
                }
              ],
              dimensions: [
                {
                  name: "ga:eventLabel"
                }]
            }
          ]
        }
      })
      .then(response => commit('saveQueryState', response));
    },
    querySentEmails({commit}) {
      fetch('https://gmail-db.herokuapp.com/sent')
        .then(response => response.json())
        .then(response => commit('saveSentEmailsState', response))
    },
    queryRecipients({ commit }) {
      fetch('https://gmail-db.herokuapp.com/emails')
        .then(response => response.json())
        .then(response => commit('saveRecipientsState', response))
    },
  },
  getters: {
    reports: state => state.reports,
    sentEmails: state => state.sentEmails,
    recipients: state => state.recipients,
    selectedEmail: state => state.selectedEmail,
  }
})
