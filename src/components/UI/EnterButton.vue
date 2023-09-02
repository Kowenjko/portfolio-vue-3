<template>
  <button class="button-enter">
    <i class="icon uil uil-enter"></i>
  </button>
</template>
<style scoped lang="scss">
.button-enter {
  @apply absolute top-3 right-5 z-10;
  .icon {
    @apply text-xl cursor-pointer hover:opacity-60 transition-all text-purple-4;
  }
}
</style>
