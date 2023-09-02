<script setup lang="ts">
interface Props {
  isShow: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="w-[7%] md:w-[4%] pl-[0.2%] md:pl-[1.2%]">
    <span class="w-3 h-3 bg-blue-1 block rounded-full"></span>
    <span class="inline-block w-[1px] bg-blue-1 h-full translate-x-[6px] -translate-y-[7px]"> </span>
    <span v-if="isShow" class="w-3 h-3 bg-blue-1 inline-block rounded-full"> </span>
  </div>
</template>
