<script setup lang="ts">
import FormContact from '../FormContact.vue'
import { Contact } from '@/interfaces/ContactInterface'
const contacts: Contact[] = [
  { name: 'Address', info: 'Rivne', icon: 'uil-location-point' },
  {
    name: 'Telegram',
    info: 'https://t.me/VasyaKow',
    icon: 'uil-telegram-alt',
  },
  { name: 'Email', info: 'ortoswt@gmail.com', icon: 'uil-envelope-alt' },
]
</script>

<template>
  <section id="contact" class="contact anchor">
    <div class="contact__wrapper container">
      <div class="contact__wrapper-info">
        <div class="left">
          <FormContact />
        </div>
        <ul class="right">
          <li v-for="contact in contacts" class="right__list">
            <div class="right__list-icon">
              <i :class="`uil ${contact.icon}`"></i>
            </div>
            <div class="right__list-description">
              <h5 class="name">{{ contact.name }}</h5>
              <p class="info">
                {{ contact.info }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  @apply dark:bg-purple-3 bg-blue-3;
  &__wrapper {
    @apply pt-14 pb-5 md:py-40;
    &-info {
      @apply flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 mx-5;
      .left,
      .right {
        @apply w-full md:w-1/2;
        &__list {
          @apply flex items-center gap-6 my-10;
          &-icon {
            @apply flex justify-center items-center w-14 h-14 bg-blue-4 text-xl rounded-2xl text-blue-1;
          }
          &-description {
            @apply flex flex-col;
            .name {
              @apply dark:text-white font-medium;
            }
            .info {
              @apply text-sm text-gray-3;
            }
          }
        }
      }
    }
  }
}
</style>
