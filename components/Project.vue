<template>
  <div class="container mx-auto px-1">
    <div class="grid grid-cols-1 text-center">
      <p class="font-bold lg:text-[3rem] md:text-[2rem] text-[2rem] text-shadow text-white" >
        <Icon name="fontisto:ampproject" class="text-green-500" />
        My <span class="text-green-500">Projects</span>
      </p>
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
      <UtilsCardProject
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :tech="project.tech"
        :imageSrc="project.imageSrc"
        :linkProject="project.linkProject"
        :isPrivat="project.isPrivat"
      />
    </div>
  </div>
</template>

<script setup>
import projects from "../list/project";
</script>

<style lang="scss" scoped></style>
