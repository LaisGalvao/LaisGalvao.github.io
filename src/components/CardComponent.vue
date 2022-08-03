<template>
  <div class="flex justify-center">
    <div class="rounded-lg shadow-lg bg-white max-w-sm">
      <a href="#!">
        <img
          class="rounded-t-lg"
          :src="imgSrc"
          alt=""
        />
      </a>
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2">{{ title }}</h5>
        <p class="text-gray-700 text-base mb-4">
          {{ desc }}
        </p>
        <button
          type="button"
          class="
            inline-block
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          <a :href="link" target="_blank">Veja</a>
        </button>
        <button
          type="button"
          class="
            inline-block
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          <a :href="repo" target="_blank">Repositório</a>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    desc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    repo:{
      type: String,
      required: true
    },
    imgSrc:{
      type: String,
      required: true
    }
  },
};
</script>