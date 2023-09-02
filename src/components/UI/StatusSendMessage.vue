<script setup lang="ts">
interface Props {
  statusSend: string
}

defineProps<Props>()
</script>
<template>
  <p v-if="statusSend && statusSend === 'OK'" class="status-ok">Your message has been successfully sent.</p>
  <p v-if="statusSend && statusSend !== 'OK'" class="status-error">
    <span v-if="statusSend"> {{ statusSend }}</span>
    <span v-else> An error occurred while sending the message.</span>
  </p>
</template>

<style lang="scss" scoped>
.status-ok {
  @apply bg-gray-1 text-green-1 text-sm rounded-lg py-2 px-5 mb-4 absolute -top-12 w-full;
}
.status-error {
  @apply dark:bg-red-4 dark:text-red-2 text-sm bg-red-1 text-red-3 rounded-lg px-5 py-2 mb-4 absolute -top-12 w-full;
}
</style>
