<!-- eslint-disable prettier/prettier -->
<template>
  <div id="about" class="section">
    <div class="container">
      <h2 class="section_title" v-html="text.title"></h2>
      <hr />

      <div class="section_block">
        <p class="block_text justified" v-html="text.description"></p>
      </div>

      <a href="#experience" target="_self"><div class="next"><i class="fas fa-angle-double-down"></i></div></a>
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
</style>
