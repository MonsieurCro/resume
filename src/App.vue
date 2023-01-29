<template>
  <RouterView :lang="lang" @toggleLang="toggleLang" />
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import config from "./stores/config.json";

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
