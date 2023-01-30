<!-- eslint-disable prettier/prettier -->
<template>
  <div id="certifications" class="section">
    <div class="container">
      <h2 class="section_title" v-html="text.title"></h2>
      <hr />

      <div class="section_block" v-for="(item, index) in text.blocks" :key="index">
        <h4 class="block_subtitle"><span class="second_color">+</span>&nbsp;<span v-html="item.title"></span>&nbsp;<span class="second_color">+</span></h4>
        <h5 class="block_info"><span v-html="item.company"></span><!-- | <span v-html="item.dates"></span> --></h5>
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
