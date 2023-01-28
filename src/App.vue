<template>
  <RouterView :lang="lang" @toggleLang="toggleLang" />
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import strings from "./assets/strings.json";

export default {
  data() {
    return {
      lang: "en",
    };
  },
  computed: {},
  mounted() {
    const route = useRoute();
    const targetLang = (route.params.lang as string).toLowerCase() || "";
    if (
      targetLang &&
      Object.prototype.hasOwnProperty.call(strings, targetLang)
    ) {
      this.lang = targetLang;
    }
  },
  methods: {
    toggleLang(lang: string) {
      this.lang = lang;
    },
  },
};
</script>

<style scoped></style>
