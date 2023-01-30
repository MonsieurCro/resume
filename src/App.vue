<template>
  <RouterView :lang="lang" @toggleLang="toggleLang" />
</template>

<script lang="ts">
import config from "./stores/config.json";

export default {
  data() {
    return {
      lang: "en",
    };
  },
  computed: {},
  mounted() {
    const targetLang = (this.$route.params.lang as string).toLowerCase() || "";
    if (
      targetLang &&
      targetLang !== this.lang &&
      config.availableLangs.includes(targetLang)
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
