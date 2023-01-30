<!-- eslint-disable prettier/prettier -->
<template>
  <div id="skills" class="section">
    <div class="container">
      <h2 class="section_title" v-html="text.title"></h2>
      <hr />

      <div class="section_block" v-for="(item, index) in text.blocks" :key="index">
        <h4 class="block_subtitle"><span v-html="item.title"></span>&nbsp;[&nbsp;<span><i v-for="(itm, idx) in item.icons" :key="idx" :class="itm" class="inline-icon"></i></span>&nbsp;]</h4>
      </div>

      <span><i class="fas fa-terminal"></i></span>
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
