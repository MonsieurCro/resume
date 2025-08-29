<!-- eslint-disable prettier/prettier -->
<template>
  <div id="frame" ref="scrollContainer">
    <div id="toggle">
      <div class="toggle" v-for="(lang, index) in langs" :key="index" @click="$emit('toggleLang', lang)">{{ lang.toUpperCase() }}</div>
    </div>

    <div id="journey">
      <a v-for="(item, index) in Object.keys(text)" :key="index" :href="'#' + item" class="bigger" :class="{ 'current' : String(item) === currentSection }">
        <span class="smaller" v-html="text[item].title"></span>&nbsp;<i :class="[ index === Object.keys(text).length -1 ? 'fa-check-circle' : 'fa-circle', String(item) === currentSection ? 'fas' : 'far' ]"></i>
      </a>
    </div>

    <WelcomeItem :text="text.welcome" />
    <AboutItem :text="text.about" />
    <ExperienceItem :text="text.experience" />
    <EducationItem :text="text.education" />
    <CertificationsItem :text="text.certifications" />
    <SkillsItem :text="text.skills" />
    <LanguagesItem :text="text.languages" />
    <InterviewItem :text="text.interview" :canvas="displayCanvas" />
  </div>
</template>

<script lang="ts">
declare interface StringObject {
  [key: string]: any;
}

import WelcomeItem from "../components/WelcomeItem.vue";
import AboutItem from "../components/AboutItem.vue";
import ExperienceItem from "../components/ExperienceItem.vue";
import EducationItem from "../components/EducationItem.vue";
import CertificationsItem from "../components/CertificationsItem.vue";
import SkillsItem from "../components/SkillsItem.vue";
import LanguagesItem from "../components/LanguagesItem.vue";
import InterviewItem from "../components/InterviewItem.vue";

import AppStrings from "../assets/strings.json";

export default {
  components: {
    WelcomeItem,
    AboutItem,
    ExperienceItem,
    EducationItem,
    CertificationsItem,
    SkillsItem,
    LanguagesItem,
    InterviewItem,
  },
  props: {
    lang: {
      type: String,
      default: "en",
    },
  },
  emits: ["toggleLang"],
  data() {
    return {
      strings: AppStrings as StringObject,
      currentSection: "welcome",
      displayCanvas: false,
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
      if (sections[i]) observer.observe(sections[i] as Element);
    }
  },
  methods: {
    handleIntersection(entries: IntersectionObserverEntry[]) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.currentSection = entry.target.id;

          if (this.currentSection === "interview" && !this.displayCanvas) {
            this.displayCanvas = true;
          }

          break;
        }
      }
    },
  },
};
</script>

<style>
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
