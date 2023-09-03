<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import Card from './Card.vue'
import SlidesButtons from './SlidesButtons.vue'
import ModalPortfolio from '../ModalPortfolio.vue'

import type { Project } from '@/interfaces/ProjectsInterface'
import { useWindowSize, useSwipe } from '@vueuse/core'
import type { UseSwipeDirection } from '@vueuse/core'

interface Props {
  projects: Project[]
}

const props = defineProps<Props>()

const positionSlider = ref(0)
const itemsCount = ref(0)
const itemWidth = ref(0)

const projectPortfolio = ref<Project | null>(props.projects.at(0) || null)
const slidesToShow = ref(3)

const containerRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)
const modalRef = ref<InstanceType<typeof ModalPortfolio> | null>(null)

const { width: windowWidth } = useWindowSize()

const SLIDES_TO_SCROLL = 1

const movePosition = computed(() => SLIDES_TO_SCROLL * itemWidth.value)
const disabledPrev = computed(() => positionSlider.value === 0)
const disabledNext = computed(() => positionSlider.value <= -(itemsCount.value - slidesToShow.value) * itemWidth.value)

const changeSlidesToShow = () => {
  if (windowWidth.value <= 768) slidesToShow.value = 1
  if (windowWidth.value > 768 && windowWidth.value < 1024) {
    slidesToShow.value = 2
  }
  if (windowWidth.value >= 1024) {
    slidesToShow.value = 3
  }
}

const calcPosition = (itemsLeft: number) =>
  itemsLeft >= SLIDES_TO_SCROLL ? movePosition.value : itemsLeft * itemWidth.value

const nextSlide = () => {
  const itemsLeft =
    itemsCount.value - (Math.abs(positionSlider.value) + slidesToShow.value * itemWidth.value) / itemWidth.value
  positionSlider.value = positionSlider.value - calcPosition(itemsLeft)
}

const prevSlide = () => {
  const itemsLeft = Math.abs(positionSlider.value) / itemWidth.value
  positionSlider.value = positionSlider.value + calcPosition(itemsLeft)
}

const openModal = (data: Project) => {
  projectPortfolio.value = data
  modalRef.value?.showModal()
}

const correctWithSlider = () => {
  changeSlidesToShow()
  if (containerRef.value instanceof HTMLElement) {
    itemWidth.value = containerRef.value.clientWidth / slidesToShow.value
  }

  positionSlider.value = 0
}

onMounted(() => {
  itemsCount.value = trackRef.value?.childElementCount || 0
  if (containerRef.value instanceof HTMLElement) {
    itemWidth.value = containerRef.value.clientWidth / slidesToShow.value
  }
  changeSlidesToShow()
  correctWithSlider()
})

watch(windowWidth, correctWithSlider)

useSwipe(trackRef, {
  passive: false,
  onSwipeEnd(e: TouchEvent, direction: UseSwipeDirection) {
    if (direction === 'right') prevSlide()
    if (direction === 'left') nextSlide()
  },
})
</script>

<template>
  <div class="slides">
    <SlidesButtons :disabledNext="disabledNext" :disabledPrev="disabledPrev" @prev="prevSlide" @next="nextSlide" />
    <div ref="containerRef" class="slides__container">
      <div ref="trackRef" class="slides__container-track" :style="`transform: translateX(${positionSlider}px)`">
        <div v-for="project in projects" :key="project.title" :style="`min-width:${itemWidth}px`">
          <Card @openModal="openModal" :project="project" />
        </div>
      </div>
    </div>
  </div>
  <ModalPortfolio v-if="projectPortfolio" ref="modalRef" :project="projectPortfolio" />
</template>

<style lang="scss" scoped>
.slides {
  @apply relative mx-5 md:mx-0;
  &__container {
    @apply overflow-hidden py-10;
    &-track {
      @apply flex transition-all duration-1000;
    }
  }
}
</style>
