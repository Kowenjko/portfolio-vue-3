<template>
  <div class="dots">
    <div class="dot" style="--delay: 0.2s"></div>
    <div class="dot" style="--delay: 0.3s"></div>
    <div class="dot" style="--delay: 0.4s"></div>
  </div>
</template>

<style lang="scss" scoped>
.dots {
  @apply inline-flex gap-1;
  .dot {
    animation: animateDots 1.5s var(--delay) ease-in-out infinite;
    @apply w-1.5 h-1.5 opacity-70 bg-blue-2 dark:bg-blue-5 rounded-full;
  }
}

@keyframes animateDots {
  0%,
  44% {
    transform: translateY(0px);
  }
  22% {
    opacity: 0.4;
    transform: translateY(-4px);
  }
  44% {
    opacity: 0.2;
  }
}
</style>
