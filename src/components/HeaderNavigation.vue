<script setup lang="ts">
import { NavigationLink } from '@/interfaces/Navigation'
import { ref, watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

interface Props {
  links: NavigationLink[]
}

const route = useRoute()

const props = defineProps<Props>()
const activeLink = ref<string>('')

const { y: scrollY } = useWindowScroll()
const { auth } = useAuth()

const activeLinkNavigation = (): any => {
  const anchors = document.querySelectorAll<HTMLElement>('.anchor')
  const sections: HTMLElement[] = [...anchors].filter((elem: HTMLElement) => elem.hasAttribute('id'))

  sections.forEach((current: HTMLElement) => {
    if (current instanceof HTMLElement) {
      const sectionTop = current.offsetTop - 282

      if (scrollY.value >= sectionTop) {
        activeLink.value = '/#' + current.getAttribute('id')
      }
    }
  })
}

watch(scrollY, activeLinkNavigation)

watch(
  () => route.name,
  (name) => {
    activeLink.value = name === 'home' ? '/#home' : ''
  }
)
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li v-for="link in links" :key="link.name">
        <a
          class="nav__list-item link-underline"
          :class="{ '!text-blue-1 !font-medium': activeLink === link.url }"
          :href="link.url"
          >{{ link.name }}
        </a>
      </li>
      <li key="chat" v-if="auth.id">
        <router-link class="nav__list-item link-underline" @click="activeLink = ''" to="/chat"> Chat </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  @apply items-center;
  &__list {
    @apply inline-flex flex-col md:flex-row md:items-center gap-7 md:gap-7 lg:gap-14;
    &-item {
      @apply transition-all duration-300 font-medium cursor-pointer text-black dark:text-white;
      &.router-link-active,
      &.router-link-exact-active {
        @apply text-blue-1;
      }
    }
  }

  .link-underline {
    @apply inline-block relative;
    &:after {
      content: '';
      background: none repeat scroll 0 0 transparent;
      @apply transition-all absolute -bottom-0.5 left-1/2 block h-0.5 w-0 bg-blue-1 hover:w-full hover:left-0 rounded-sm;
    }
  }
}
</style>
