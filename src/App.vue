<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from '@/layouts/Default.vue'
</script>

<template>
  <suspense>
    <default-layout>
      <router-view> </router-view>
    </default-layout>
  </suspense>
</template>

<style scoped></style>
