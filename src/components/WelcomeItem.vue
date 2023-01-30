<!-- eslint-disable prettier/prettier -->
<template>
  <div id="welcome" class="section">
    <div class="container">
      <div id="logo">
        <img src="../assets/profile.jpg" title="" alt="CT" />
        <a href="https://drive.google.com/file/d/1hh8Pe0Lg_vwgOCKh4-EigJ8WhFI_r-Xb/view?usp=sharing" target="_blank" :title="text.pdf"><span><i class="fas fa-clipboard-check"></i><br />PDF</span></a>
      </div>

      <div id="infos">
        <h1 v-html="text.title"></h1>
        <span class="bigger upper" v-html="text.subtitle"></span>
      </div>

      <hr />

      <div id="contact">
        <a v-if="false" :href="'tel:' + text.phone" target="_top"><span class="smaller bold block"><i class="fas fa-phone-alt fa-fw"></i>&nbsp;{{ text.phone }}</span></a>
        <a :href="'mailto:' + text.mail" target="_top"><span class="smaller bold block"><i class="fas fa-envelope fa-fw"></i>&nbsp;{{ text.mail }}</span></a>
        <a :href="'https://www.linkedin.com/in/' + text.linkedin + '/'" target="_blank"><span class="smaller bold block"><i class="fab fa-linkedin fa-fw"></i>&nbsp;linkedin.com/in/{{ text.linkedin }}</span></a>
      </div>
    </div>

    <div id="start">
      <a href="#about" target="_self"><i class="fas fa-long-arrow-alt-down"></i></a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  props: {
    text: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
#logo {
  height: 7.5em;
  width: 7.5em;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
  position: relative;
}
#logo img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
#logo span {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  color: white;
  background-color: rgba(227, 152, 37, 0.75);
  text-align: center;
  font-size: 150%;
  line-height: 1.25em;
  padding: 1em;
  opacity: 0;
  transition: all 0.3s ease;
}
#logo:hover span {
  opacity: 1;
}
#logo span i {
  color: white;
}
#infos {
  margin: 0.75em auto;
}
#start {
  position: absolute;
  bottom: 5vh;
  top: auto;
  left: 0;
  right: 0;
  z-index: 3;
  font-size: 1.5em;
  text-align: center;
}
</style>
