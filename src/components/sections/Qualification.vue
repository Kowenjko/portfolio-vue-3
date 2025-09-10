<script setup lang="ts">
import TitleCategory from '@/components/TitleCategory.vue'
import TabsQualification from '@/components/TabsQualification.vue'
import type { Qualification } from '@/interfaces/QualificationInterface'

const qualification: Qualification = {
  educations: [
    {
      title: 'Automation and computer-integrated technologies',
      city: 'Rivne - NUWEE',
      date: '2001 - 2006',
    },
    {
      title: 'Development of Web projects on Python',
      city: 'Rivne - IT Academy Step',
      date: '2020 - 2021',
    },
  ],
  works: [
    {
      title: 'Volunteer work',
      city: 'Rivne - IT Academy Step',
      date: '2021',
    },
    {
      title: 'Web Development',
      city: 'Nexoft UG',
      date: '2021 - 2023',
    },
    {
      title: 'Web Development',
      city: 'ABVV.Group',
      date: '2023 - 2025',
    },
  ],
}
</script>
<template>
  <section class="dark:bg-[#201F38] bg-[#F8FAFC]">
    <div class="max-w-screen-lg mx-auto pt-14 pb-52 md:py-24">
      <TitleCategory category="Qualification" title="My personal journey" />
      <TabsQualification :qualification="qualification" />
    </div>
  </section>
</template>

<style scoped></style>
