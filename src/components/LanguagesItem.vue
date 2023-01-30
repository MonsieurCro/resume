<!-- eslint-disable prettier/prettier -->
<template>
  <div id="languages" class="section">
    <div class="container">
      <h2 class="section_title" v-html="text.title"></h2>
      <hr />

      <div class="section_block block_inline" v-for="(item, index) in text.blocks" :key="index">
        <h4 class="block_subtitle"><span v-html="item.title"></span>&nbsp;<span class="second_color">\</span>&nbsp;<span class="bold" v-html="item.level"></span></h4>
        <p class="block_text"><i v-for="(itm, idx) in item.icons" :key="idx" :class="itm" class="inline-icon"></i></p>
      </div>
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

<style scoped></style>
