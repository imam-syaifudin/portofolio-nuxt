<template>
  <div>
    <div class="grid lg:grid-cols-2 mx-auto text-center place-items-center grid-cols-1 gap-4 lg:w-[80%] w-[100%]" >
      <div class="lg:mt-20">
        <h1 class="text-white font-bold lg:text-[4rem] md:text-[2rem] text-[2rem] text-shadow mt-10" >
          <Icon name="icon-park-outline:find-one" class="text-green-500" />
          Contact <span class="text-green-500">Me</span>
        </h1>
        <p class="lg:text-lg sm:text-sm lg:w-[70%] mx-auto md:w-[80%] w-[90%] text-[#9fa8b7] mt-2 text-shadow text-center" >
          Interested in collaborating with me? You can contact the contact below
          or via email, whatever is important is polite, if you are polite, we
          are reluctant
        </p>
        <div class="flex justify-center items-center mt-10 px-10 flex-wrap">
          <UtilsButton
            v-for="(data, index) in list"
            :key="index"
            :text="data.name"
            :icon="data.icon"
            :type="data.type"
          />
        </div>
      </div>
      <div class="w-[80%] mt-10">
        <form class="w-full">
          <label for="website-admin" class="block mb-2 text-sm text-start font-medium text-white" >Email</label >
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm border border-e-0 rounded-s-md bg-gray-600 text-gray-400 border-gray-600" >
              <Icon name="clarity:email-solid" />
            </span>
            <input
              type="email"
              id="website-admin"
              class="rounded-none rounded-e-lg block flex-1 min-w-0 w-full text-sm p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="imam.syaifudin@mail.com"
            />
          </div>
          <label for="website-admin" class="block mb-2 text-sm text-start font-medium text-white mt-5" >Subject</label >
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm border border-e-0 rounded-s-md bg-gray-600 text-gray-400 border-gray-600" >
              <Icon name="material-symbols:subject" />
            </span>
            <input
              type="text"
              id="website-admin"
              class="rounded-none rounded-e-lg block flex-1 min-w-0 w-full text-sm p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Subject"
            />
          </div>
          <label for="website-admin" class="block mb-2 text-sm text-start font-medium text-white mt-5" >Message</label >
          <div class="flex">
            <span class="inline-flex px-3 items-center text-sm border border-e-0 rounded-s-md bg-gray-600 text-gray-400 border-gray-600" >
              <Icon name="bxs:message" />
            </span>
            <textarea
              id="udin-gtg"
              rows="5"
              class="rounded-none rounded-e-lg block flex-1 min-w-0 w-full text-sm p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Message"
            ></textarea>
          </div>
          <button class="text-gray-90 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 w-full me-2 mb-2 text-white bg-[#16a34a]" >
          <Icon name="akar-icons:send"/>
          Send Message
        </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import list from "../list/list-contact";
</script>

<style lang="scss" scoped></style>
