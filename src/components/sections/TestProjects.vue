<script setup lang="ts">
import TitleCategory from '@/components/TitleCategory.vue'
import Slides from '@/components/UI/Slides.vue'
import { Project } from '@/interfaces/ProjectsInterface'
const testProjects: Project[] = [
  {
    title: 'Todo',
    isGit: true,
    href: 'https://github.com/Kowenjko/todo-list-vue.git',
    keywords: ['Vue 3 composition'],
    category: 'Todo list',
    description: 'Demonstration site of the capabilities of Vue 3 composition.',
    imageUrl: '/webp/todo-vue.webp',
  },
  {
    title: 'Game Marine Battle',
    isGit: true,
    href: 'https://github.com/Kowenjko/See_batle_v2.git',
    keywords: ['HTML', 'CSS', 'JavaScript'],
    category: 'Game',
    description:
      'The game is written on JS, the placement of ships can be automatic or manually. Rules are standard. Wins someone who will find all ships.',
    imageUrl: '/webp/mb.webp',
  },
  {
    title: 'Movie Viewing',
    isGit: true,
    href: 'https://github.com/Kowenjko/Kursova_2_JS_Kowenjko.git',
    keywords: ['HTML', 'CSS', 'JavaScript'],
    category: 'Video',
    description:
      'The demonstration site is written on a clean JS without libraries, a minimum of HTML. An animation is present. Source News API.',
    imageUrl: '/webp/movie_js.webp',
  },
  {
    title: 'Electro Shop',
    isGit: true,
    href: 'https://github.com/Kowenjko/Kursova_JS_Kowenjko.git',
    keywords: ['Django', 'Python', 'PostgreSQL'],
    category: 'Shop',
    description: 'The demo site of the store is written in Django, the PostgeSQL database is used.',
    imageUrl: '/webp/django.webp',
  },
  {
    title: 'World News',
    isGit: true,
    href: 'https://github.com/Kowenjko/Kursova_JS_Kowenjko.git',
    keywords: ['HTML', 'CSS', 'JavaScript'],
    category: 'News',
    description:
      'The demonstration site is written on a clean JS without libraries, a minimum of HTML. An animation is present. Source News API.',
    imageUrl: '/webp/news.webp',
  },
  {
    title: 'React-Bootstrap',
    isGit: true,
    href: 'https://github.com/Kowenjko/React_Bootstrap.git',
    keywords: ['React', 'Bootstrap'],
    category: 'Info',
    description:
      'In this project, the main components of REACT-BOOTSTRAP are used. To demonstrate the theme `History of Windows`.',
    imageUrl: '/webp/bootstrap_react.webp',
  },
  {
    title: 'Contact List',
    isGit: true,
    href: 'https://github.com/Kowenjko/React_Homework_1_Kowenjko.git',
    keywords: ['React', 'Redux', 'Bootstrap', 'FireBase'],
    category: 'List',
    description:
      'Demonstration site with contacts written on REACT - Redux + React - Bootstrap + React - Fontawesome. The list is written and read from FireBase.',
    imageUrl: '/webp/List.webp',
  },
  {
    title: 'Material-UI',
    isGit: true,
    href: 'https://github.com/Kowenjko/React_Material_UI.git',
    keywords: ['React', 'Material-UI'],
    category: 'Info',
    description: 'The demonstration site on React where Material-UI is used.',
    imageUrl: '/webp/Material_ui.webp',
  },
  {
    title: 'Yourcar',
    isGit: true,
    href: 'https://github.com/Kowenjko/React_Yourcar.git',
    keywords: ['React', 'Styled-Components', 'Tailwind'],
    category: 'Info',
    description: 'The demonstration site is written on React where Styled-Components are used, Tailwind CSS.',
    imageUrl: '/webp/car.webp',
  },
  {
    title: 'Internet-shop',
    isGit: true,
    href: 'https://github.com/Kowenjko/React_Yourcar.git',
    keywords: ['React', 'Redux'],
    category: 'Shop',
    description:
      'The demonstration site of the online store of computer technology with the ability to add or remove goods from the basket. Written on React, Redux, Middleware.',
    imageUrl: '/webp/Shop.webp',
  },
  {
    title: 'Movie React',
    isGit: true,
    href: 'https://github.com/Kowenjko/Movie_React.git',
    keywords: ['React', 'Styled-Components'],
    category: 'Video',
    description:
      'Demonstration site on React + Hooks + Styled-Components. Outputs information about movies. TMDB API source.',
    imageUrl: '/webp/Movie_React.webp',
  },
]
</script>

<template>
  <section class="test-projects">
    <div class="test-projects__wrapper container">
      <div class="test-projects__wrapper-title">
        <div>
          <TitleCategory category="My Test Works" title="Portfolios" />
        </div>
      </div>
      <Slides :projects="testProjects" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.test-projects {
  @apply dark:bg-purple-2;
  &__wrapper {
    @apply py-14 md:py-24;
  }
  &-title {
    @apply flex justify-between items-center mx-5 md:mx-0;
  }
}
</style>
