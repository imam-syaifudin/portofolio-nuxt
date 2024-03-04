<template>
  <div>
    <div class="md:flex p-10">
      <ul class="flex-column space-y space-y-4 text-sm font-medium text-gray-400 md:me-4 mb-4 md:mb-0" >
        <li v-for="(tab, index) in tabs" :key="index">
          <a href="#" v-if="tab.is_active" class="inline-flex items-center px-4 py-3 text-white rounded-lg active w-full bg-blue-600" >
            <Icon :name="tab.icon" class="text-xl mr-2" />
            {{ tab.name }}
          </a>
          <a href="#" v-else class="inline-flex items-center px-4 py-3 rounded-lg w-full bg-gray-800 text-white" >
            <Icon :name="tab.icon" class="text-xl mr-2" />
            {{ tab.name }}
          </a>
        </li>
      </ul>
      <div class="p-6 text-medium text-gray-500 bg-gray-800 rounded-lg w-full">
        <h3 class="text-lg font-bold text-white mb-2">Profile Tab</h3>
        <p class="mb-2">
          This is some placeholder content the Profile tab's associated content,
          clicking another tab will toggle the visibility of this one for the
          next.
        </p>
        <p>
          The tab JavaScript swaps classes to control the content visibility and
          styling.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type tabType = {
  name: string;
  is_active: boolean;
  icon: string;
};

const tabs: Ref<tabType[]> = ref([
  { name: "Profile", is_active: true, icon: "iconamoon:profile-circle-duotone", },
  { name: "Skills",  is_active: false, icon: "mage:dashboard" },
]);
</script>

<style lang="scss" scoped></style>
