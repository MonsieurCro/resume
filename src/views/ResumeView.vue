<!-- eslint-disable prettier/prettier -->
<template>
  <div id="frame" ref="scrollContainer">
    <!-- Toggle -->
    <div id="toggle">
      <div class="toggle" v-for="(lang, index) in langs" :key="index" @click="$emit('toggleLang', lang)">{{ lang.toUpperCase() }}</div>
    </div>

    <!-- Journey -->
    <div id="journey">
      <a v-for="(item, key, index) in text" :key="index" :href="'#' + key" class="bigger" :class="{ 'current' : String(key) === currentSection }">
        <span class="smaller" v-html="item.title"></span>&nbsp;<i :class="[ index === Object.keys(text).length -1 ? 'fa-check-circle' : 'fa-circle', String(key) === currentSection ? 'fas' : 'far' ]"></i>
      </a>
    </div>

    <!-- Header -->
    <div id="welcome" class="section">
      <div class="container">
        <div id="logo">
          <img class="good" src="../assets/profile.jpg" title="" alt="CT" />
          <a href="https://drive.google.com/file/d/1hh8Pe0Lg_vwgOCKh4-EigJ8WhFI_r-Xb/view?usp=sharing" target="_blank" :title="text.welcome.pdf"><span><i class="fas fa-clipboard-check"></i><br />PDF</span></a>
        </div>

        <div id="infos">
          <h1 v-html="text.welcome.title"></h1>
          <span class="bigger upper" v-html="text.welcome.subtitle"></span>
        </div>

        <hr />

        <div id="contact">
          <a v-if="false" :href="'tel:' + text.welcome.phone" target="_top"><span class="smaller bold block"><i class="fas fa-phone-alt fa-fw"></i>&nbsp;{{ text.welcome.phone }}</span></a>
          <a :href="'mailto:' + text.welcome.mail" target="_top"><span class="smaller bold block"><i class="fas fa-envelope fa-fw"></i>&nbsp;{{ text.welcome.mail }}</span></a>
          <a :href="'https://www.linkedin.com/in/' + text.welcome.linkedin + '/'" target="_blank"><span class="smaller bold block"><i class="fab fa-linkedin fa-fw"></i>&nbsp;linkedin.com/in/{{ text.welcome.linkedin }}</span></a>
        </div>
      </div>

      <div id="start">
        <a href="#about" target="_self"><i class="fas fa-long-arrow-alt-down"></i></a>
      </div>
    </div>

    <!-- About -->
    <div id="about" class="section">
      <div class="container">
        <h2 class="section_title" v-html="text.about.title"></h2>
        <hr />

        <div class="section_block">
          <p class="block_text justified" v-html="text.about.description"></p>
        </div>

        <a href="#experience" target="_self"><div class="next"><i class="fas fa-angle-double-down"></i></div></a>
      </div>
    </div>

    <!-- Experience -->
    <div id="experience" class="section">
      <div class="container">
        <h2 class="section_title" v-html="text.experience.title"></h2>
        <hr />

        <div class="section_block" v-for="(item, index) in text.experience.blocks" :key="index">
          <h3 class="block_title" v-html="item.title"></h3>
          <h5 class="block_info"><span class="upper" v-html="item.company"></span> | <span v-html="item.location"></span> | <span v-html="item.dates"></span></h5>
          <ul class="block_text">
            <li v-for="(itm, idx) in item.content" :key="idx" v-html="itm"></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div id="education" class="section">
      <div class="container">
        <h2 class="section_title" v-html="text.education.title"></h2>
        <hr />

        <div class="section_block" v-for="(item, index) in text.education.blocks" :key="index">
          <h3 class="block_title" v-html="item.title"></h3>
          <h5 class="block_info"><span class="upper" v-html="item.company"></span> | <span v-html="item.location"></span> | <span v-html="item.dates"></span></h5>
            <p class="block_text" v-for="(itm, idx) in item.content" :key="idx" v-html="itm"></p>
        </div>
      </div>
    </div>

    <!-- Certifications -->
    <div id="certifications" class="section">
      <div class="container">
        <h2 class="section_title" v-html="text.certifications.title"></h2>
        <hr />

        <div class="section_block" v-for="(item, index) in text.certifications.blocks" :key="index">
          <h4 class="block_subtitle"><span class="second_color">+</span>&nbsp;<span v-html="item.title"></span>&nbsp;<span class="second_color">+</span></h4>
          <h5 class="block_info"><span v-html="item.company"></span><!-- | <span v-html="item.dates"></span> --></h5>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div id="skills" class="section">
      <div class="container">
        <h2 class="section_title" v-html="text.skills.title"></h2>
        <hr />

        <div class="section_block" v-for="(item, index) in text.skills.blocks" :key="index">
          <h4 class="block_subtitle"><span v-html="item.title"></span>&nbsp;[&nbsp;<span><i v-for="(itm, idx) in item.icons" :key="idx" :class="itm" class="inline-icon"></i></span>&nbsp;]</h4>
        </div>

        <span><i class="fas fa-terminal"></i></span>
      </div>
    </div>

    <!-- Languages -->
    <div id="languages" class="section">
      <div class="container">
        <h2 class="section_title" v-html="text.languages.title"></h2>
        <hr />

        <div class="section_block block_inline" v-for="(item, index) in text.languages.blocks" :key="index">
          <h4 class="block_subtitle"><span v-html="item.title"></span>&nbsp;<span class="second_color">\</span>&nbsp;<span class="bold" v-html="item.level"></span></h4>
          <p class="block_text"><i v-for="(itm, idx) in item.icons" :key="idx" :class="itm" class="inline-icon"></i></p>
        </div>
      </div>
    </div>

    <!-- Interview -->
    <div id="interview" class="section">
      <div class="container">
        <span><i class="fas fa-trophy"></i></span>
        <!-- <p class="block_text smaller" v-html="text.interview.end"></p> -->
        <h2 class="section_title" v-html="text.interview.title"></h2>
        <hr />

        <p class="block_text bigger upper bold" v-html="text.interview.subtitle"></p>

        <a :href="'mailto:' + text.welcome.mail + '?subject=' + text.interview.subject" target="_top">
          <div class="section_block block_inline block_button">
            <span class="upper"><i class="smaller fa-solid fa-paper-plane fa-fw"></i>&nbsp;<span v-html="text.interview.cta"></span></span>
          </div>
        </a>
      </div>
      <canvas id="congrats" width="100%" height="100%"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
declare interface StringObject {
  [key: string]: any;
}

import strings from "../assets/strings.json";

export default {
  components: {},
  props: {
    lang: {
      type: String,
      default: "en",
    },
  },
  emits: ["toggleLang"],
  data() {
    return {
      strings: strings as StringObject,
      currentSection: "welcome",
    };
  },
  computed: {
    text() {
      return this.strings[this.lang];
    },
    langs() {
      return Object.keys(this.strings).filter((key) => key !== this.lang);
    },
  },
  mounted() {
    const container = this.$refs.scrollContainer as HTMLDivElement;
    const options = {
      root: container,
      threshold: [0.75],
    };
    const observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      options
    );
    const sections = container.getElementsByClassName("section");
    for (let i = 0; i < sections.length; i++) {
      observer.observe(sections[i]);
    }
  },
  methods: {
    handleIntersection(entries: IntersectionObserverEntry[]) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.currentSection = entry.target.id;
          break;
        }
      }
    },
  },
};
</script>

<!-- var canvas = false;
    dispatchEvent(new CustomEvent('draw', {}));
    canvas = true; -->

<style scoped>
@charset "UTF-8";
.good {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
/* Layout */
.section {
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 0.75em 1.5em;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.section:nth-of-type(2n + 1) {
  background-color: #f2f2f2;
}
.section::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(../assets/paper-texture.png);
  background-size: 15em;
  background-repeat: repeat;
  background-position: center;
  z-index: 1;
  opacity: 0.25;
}
.section:last-of-type {
  background-image: url(../assets/congrats.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: bottom center;
}
.container {
  width: 95%;
  max-width: 720px;
  height: auto;
  margin: auto;
  padding: 0.5em 0.25em;
  text-align: center;
  position: relative;
  z-index: 2;
}
.next {
  height: 2.5em;
  width: 2.5em;
  margin: auto;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  border-radius: 50%;
  overflow: hidden;
  color: white;
  background-color: rgba(227, 152, 37, 0.75);
  text-align: center;
  font-size: 100%;
  line-height: 2.5em;
  transition: all 0.3s ease;
}
.next:hover {
  color: #e39825;
  background-color: #225794;
}
#toggle {
  position: fixed;
  top: 0.5em;
  right: 0.375em;
  bottom: auto;
  left: auto;
  z-index: 10000;
}
.toggle {
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  margin: auto 0.125em;
  padding: 0.075em 0.25em;
  border: 0.075em solid transparent;
  transition: all 0.3s ease;
}
.toggle:hover,
.toggle:focus {
  border-color: #e39825;
}
#journey {
  position: fixed;
  right: 0.625em;
  top: 50%;
  left: auto;
  bottom: auto;
  transform: translateY(-50%);
  z-index: 9999;
}
#journey a {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
}
#journey a.current {
  pointer-events: none;
}
#journey a span {
  transform: translateX(200%);
  transition: all 0.3s ease;
}
#journey a:hover span {
  transform: none;
}
/* Content */
#logo {
  height: 7.5em;
  width: 7.5em;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
  position: relative;
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
#congrats {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.section_title {
  font-size: 115%;
  padding-top: 1em;
}
.section_block {
  padding: 1em 1.25em;
  margin: 1.25em 0;
  border: 0.125em solid transparent;
  transition: all 0.3s ease;
}
.section_block:hover {
  border-color: #225794;
}
.block_inline {
  display: inline-block;
}
.block_title {
  font-size: 105%;
}
.block_info {
  font-size: 85%;
  padding-top: 0.75em;
}
.block_text {
  font-size: 95%;
}
.block_text:not(.justified) {
  padding-top: 0.67em;
}
.block_button:not(:hover) {
  border-color: #e39825;
  animation: pulse 3s infinite 0.5s;
}
.inline-icon:not(:first-of-type) {
  margin-left: 0.125em;
}
.inline-icon:not(:last-of-type) {
  margin-right: 0.125em;
}
/* Keyframes */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(227, 152, 37, 0.75);
  }
  70% {
    box-shadow: 0 0 0 0.5em rgba(227, 152, 37, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(227, 152, 37, 0);
  }
}
/* Queries */
@media screen and (min-width: 1920px) {
  #container {
    max-width: 900px;
  }
}
@media screen and (max-width: 900px) {
  #journey a span {
    display: none;
  }
}
@media screen and (max-width: 600px) {
  .second_color_border {
    border-color: transparent;
    padding: inherit;
  }
}
@media screen and (max-width: 450px) {
  .block_inline {
    display: block;
  }
}
/*IE10+ fix*/
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .section,
  .container {
    height: 100%;
  }
  .container {
    display: table-cell;
    vertical-align: middle;
  }
}
</style>
