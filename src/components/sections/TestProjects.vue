<script setup lang="ts">
import TitleCategory from '@/components/TitleCategory.vue'
import Slides from '@/components/UI/Slides.vue'
import type { Project } from '@/interfaces/ProjectsInterface'
const testProjects: Project[] = [
  {
    title: 'Nuxt 4 Calendar',
    isGit: true,
    href: 'https://github.com/Kowenjko/nuxt4-calendar',
    url: 'https://nuxt4-calendar.vercel.app',
    keywords: ['Nuxt 4', 'Drizzle', 'Neon database', 'Tailwindcss'],
    category: 'Calendar',
    description: 'Test program for Nuxt 4 for creating events.',
    imageUrl: '/webp/calendar.png',
  },
  {
    title: 'Nuxt 4 Auth',
    isGit: true,
    href: 'https://github.com/Kowenjko/nuxt-4-auth',
    url: '#',
    keywords: ['Nuxt 4', 'Drizzle', 'Nuxt/ui', 'Nuxt-auth'],
    category: 'Auth',
    description: 'Authorization using Nuxt 3 and drizzle.',
    imageUrl: '/webp/nuxt-a-auth.png',
  },
  {
    title: 'Nuxt Whatsapp Clone',
    isGit: true,
    href: 'https://github.com/Kowenjko/nuxt-whatsapp-clone',
    url: 'https://nuxt-whatsapp-clone.vercel.app',
    keywords: ['Nuxt 3', 'Tailwind', 'Convex', 'Clerk', 'Zegocloud', 'Emoji', 'Pinia', 'OpenAI', 'Radix'],
    category: 'Chat',
    description: 'The messenger clone uses the following tools: convex, zegocloud, clerk, openai, emoji, shadcn.',
    imageUrl: '/webp/whatsapp.png',
  },
  {
    title: 'Nuxt Auth MongoDB',
    isGit: true,
    href: 'https://github.com/Kowenjko/nuxt-auth-mongo',
    url: 'https://nuxt-auth-mongo.vercel.app',
    keywords: ['Nuxt 3', 'Tailwind', 'Motion', 'Resend', 'MongoDB', 'Mailtrap', 'Pinia'],
    category: 'Auth',
    description: 'Authorization using Nuxt 3 and mongoDB with the option of confirmation via email by entering a code.',
    imageUrl: '/webp/auth-mongo.png',
  },
  {
    title: 'Zoom Clone',
    isGit: true,
    href: 'https://github.com/Kowenjko/nuxt-zoom-clone',
    url: '#',
    keywords: ['Nuxt 3', 'Tailwind', 'Shadcn', 'Clerk', 'Stream-IO'],
    category: 'Chat',
    description: 'A primitive copy of a meeting on Zoom with video and chat functionality.',
    imageUrl: '/webp/zoom.png',
  },
  {
    title: 'Nuxt MongoDB Trello',
    isGit: true,
    href: 'https://github.com/Kowenjko/nuxt-mongodb-trello',
    url: '#',
    keywords: ['Nuxt 3', 'Vuedraggable', 'MongoDB', 'Stripe', 'Next-Auth'],
    category: 'Info',
    description: 'Minimal copy of Trello is used MongoDB.',
    imageUrl: '/webp/mongodb-trello.png',
  },
  {
    title: 'Nuxt Trello',
    isGit: true,
    href: 'https://github.com/Kowenjko/nuxt-dashboard-trello',
    url: 'https://nuxt-dashboard-trello.vercel.app',
    keywords: ['Nuxt 3', 'Pinia', 'Tailwind', 'Shadcn', 'Clerk'],
    category: 'Info',
    description: 'Minimal copy of Trello is used localeStorage.',
    imageUrl: '/webp/trello.png',
  },
  {
    title: 'Jotion',
    isGit: true,
    href: 'https://github.com/Kowenjko/nuxt-notion-clone',
    url: '#',
    keywords: ['Nuxt 3', 'Appwrite', 'Pinia', 'Tailwind', 'Shadcn', 'Clerk'],
    category: 'Documents',
    description: 'Your Ideas, Documents, & Plans. Unified.',
    imageUrl: '/webp/notion.png',
  },
  {
    title: 'Chat Appwrite',
    isGit: true,
    href: 'https://github.com/Kowenjko/vue-realtime-chat-appwrite',
    url: 'https://vue-realtime-chat-appwrite.vercel.app',
    keywords: ['Vue 3', 'Appwrite', 'Pinia'],
    category: 'Chat',
    description: 'Real-time chat made with Vue 3 composition and Appwrite',
    imageUrl: '/webp/chat-appwrite.png',
  },
  {
    title: 'Genius AI',
    isGit: true,
    href: 'https://github.com/Kowenjko/nuxt-saas-ai',
    url: 'https://nuxt-saas-ai.vercel.app/',
    keywords: ['Nuxt 3', 'Clerk', 'Stripe', 'Tailwind', 'OpenAI', 'Radix', 'Pinia'],
    category: 'AI',
    description:
      'AI chat and generation of images, videos, music, and code, as well as subscription registration via Stripe.',
    imageUrl: '/webp/genius.png',
  },
  {
    title: 'Estate',
    isGit: true,
    href: 'https://github.com/Kowenjko/mevn-estate',
    keywords: ['Vue', 'Mongodb', 'Node', 'Tailwind', 'Firebase'],
    category: 'Info',
    description: 'Modern real estate marketplace from scratch with jwt authentication and toolkit ',
    imageUrl: '/webp/mevn-estate.png',
  },
  {
    title: 'Insove',
    isGit: true,
    href: 'https://github.com/Kowenjko/vue-insore',
    keywords: ['Vue 3', 'Pinia', 'Swiper', 'Tailwind'],
    category: 'Info',
    description: 'One-page doctor service page.',
    imageUrl: '/webp/insove.png',
  },
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
