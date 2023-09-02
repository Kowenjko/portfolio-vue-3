<script setup lang="ts">
import ServicesSpecialized from '@/components/ServicesSpecialized.vue'
import ServicesTecnologies from '@/components/ServicesTecnologies.vue'
</script>

<template>
  <section id="services" class="services anchor">
    <div class="container pt-14 md:pt-24">
      <ServicesSpecialized />
      <ServicesTecnologies />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services {
  @apply dark:bg-purple-3 bg-blue-3;
}
</style>
