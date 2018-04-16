<template>
  <div id="app">
    <Header />
    <Menu />
    <emailInfo/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from './components/header.vue';
import Menu from './components/menu.vue';
import emailInfo from './components/emailInfo.vue';

  export default {
  name: 'app',
  components: {
    Header,
    Menu,
    emailInfo
  },
  data() {
    return {
    };
  },
  computed: mapGetters([
  ]),
  methods: mapActions([
     'queryRecipients',
     'querySentEmails'
  ]),
  mounted() {
    this.queryRecipients();
    this.querySentEmails();
  }
};
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Questrial');
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  #app {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 80px 80px 80px 360px;
  }
</style>
