<!-- eslint-disable prettier/prettier -->
<template>
  <div id="interview" class="section">
    <div class="container">
      <span><i class="fas fa-trophy"></i></span>
      <!-- <p class="block_text smaller" v-html="text.end"></p> -->
      <h2 class="section_title" v-html="text.subtitle"></h2>
      <hr />

      <p class="block_text bigger upper bold" v-html="text.title"></p>

      <a :href="'mailto:' + text.mail + '?subject=' + text.subject" target="_top">
        <div class="section_block block_inline block_button">
          <span class="upper"><i class="smaller fa-solid fa-paper-plane fa-fw"></i>&nbsp;<span v-html="text.cta"></span></span>
        </div>
      </a>
    </div>
    <SmileCanvas v-if="canvas" id="congrats" />
  </div>
</template>

<script lang="ts">
import SmileCanvas from "../components/SmileCanvas.vue";

export default {
  components: {
    SmileCanvas,
  },
  props: {
    text: {
      type: Object,
      default() {
        return {};
      },
    },
    canvas: {
      type: Boolean,
      default: false,
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
</style>
