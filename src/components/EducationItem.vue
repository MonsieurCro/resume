<!-- eslint-disable prettier/prettier -->
<template>
  <div id="education" class="section">
    <div class="container">
      <h2 class="section_title" v-html="text.title"></h2>
      <hr />

      <div class="section_block" v-for="(item, index) in text.blocks" :key="index">
        <h3 class="block_title" v-html="item.title"></h3>
        <h5 class="block_info"><span class="upper" v-html="item.company"></span> | <span v-html="item.location"></span> | <span v-html="item.dates"></span></h5>
          <p class="block_text" v-for="(itm, idx) in item.content" :key="idx" v-html="itm"></p>
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
