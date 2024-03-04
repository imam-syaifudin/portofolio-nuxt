<template>
  <div>
    <div class="hero-section">
      <TestTab />
    </div>
    <div class="hero-section">
      <HeroSection />
    </div>
    <div class="skils">
      <SkilsSection />
    </div>
    <div class="experience">
      <Experience />
    </div>
    <div class="project">
      <Project/>
    </div>
    <div class="contact">
      <Contact/>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "layout",
});

useHead({
  title: "Muhammad Imam - Full Stack Developer",
});

</script>
<style scoped>

.hero {
  background-image: url("https://cpwebassets.codepen.io/assets/packs/lines-3-4541e35a1939230404d773f7eeddcc9b.svg");
  background-size: 70%;
}



</style>
