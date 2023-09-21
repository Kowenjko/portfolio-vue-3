<script setup lang="ts">
import { ref, computed } from 'vue'

import TitleCategory from '@/components/TitleCategory.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import ResumeButton from '@/components/UI/ResumeButton.vue'

import { getYearsAtWork } from '@/helpers/dates'
import { useMouseInElement } from '@vueuse/core'

const { years, months } = getYearsAtWork()

const avtarRef = ref(null)
const { elementY, elementHeight, elementWidth, elementX, isOutside } = useMouseInElement(avtarRef)

const cardTransform = computed(() => {
  const MAX_ROTATION = 10

  const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)
  const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

  return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>
<template>
  <section id="home" class="hero anchor">
    <div class="hero__wrapper container">
      <div class="hero__wrapper__left relative cursor-pointer">
        <div class="relative">
          <div class="hero__wrapper__left-back"></div>
          <div class="hero__wrapper__left-image" ref="avtarRef" :style="{ transform: cardTransform }">
            <div class="avatar">
              <img src="/i-4.webp" alt="Kovenko" />
            </div>
            <img class="lines" src="/lines.webp" alt="line" />
          </div>
        </div>
      </div>
      <div class="hero__wrapper__right">
        <TitleCategory category="My name is" />
        <div class="title">Vasya <span class="text-blue-1">Kovenko</span></div>
        <p class="description">
          Front-end developer with more than {{ years }} year {{ months }} months of experience in a corporate company.
          I am proficient in JavaScript, Vue, React and Python.
        </p>
        <div class="flex items-center justify-between lg:w-[538px]">
          <SocialLinks />
          <ResumeButton />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  @apply dark:bg-purple-2 px-2;
  &__wrapper {
    @apply flex flex-col md:flex-row space-x-2 items-center justify-center pt-32 md:pt-40 pb-14 md:pb-24 gap-7;
    &__left {
      @apply w-full md:w-1/3 md:order-1 flex md:block justify-center;
      &:hover &-back {
        @apply rotate-0 opacity-0;
      }
      &:hover &-image {
        @apply rotate-0 bg-purple-2 shadow-xl shadow-purple-4;
        .avatar {
          @apply -left-4 rounded-none;
        }
        .lines {
          @apply -right-40 opacity-0 -top-40;
        }
      }

      &-back {
        @apply h-[350px] w-72 md:h-96 md:w-80 bg-blue-1 transition-all duration-300 rounded-2xl -rotate-6 shadow-md shadow-blue-2;
      }

      &-image {
        @apply h-[350px] w-72 md:h-96 md:w-80 bg-purple-1 absolute rounded-2xl top-0 left-0 overflow-hidden shadow-lg shadow-gray-5 transition-all duration-300;
        .avatar {
          @apply absolute -bottom-10 -left-28  rounded-full overflow-hidden bg-purple-2 shadow-xl shadow-purple-2 transition-all duration-300;
          img {
            filter: drop-shadow(1px 1px 10px #393861);
            @apply w-[346px];
          }
        }
        .lines {
          @apply absolute -top-2 -right-2 md:top-0 md:right-0 scale-[0.9] md:scale-100 transition-all duration-300;
        }
      }
    }
    &__right {
      @apply w-full md:w-2/3 px-3 md:px-0;
      .title {
        @apply text-4xl md:text-5xl font-bold dark:text-white text-black;
      }
      .description {
        @apply dark:text-white py-8 md:w-auto lg:w-[538px] leading-8;
      }
    }
  }
}
</style>
