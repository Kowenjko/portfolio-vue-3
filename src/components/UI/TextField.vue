<script setup >
import { ref } from 'vue'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  modelValue: { type: String, default: '' },
  error: { type: Array, default: [] },
  name: { type: String, required: true },
  type: { type: String, default: 'text' },
  placeholder: { type: String, required: true },
  label: { type: String, required: true },
  width: { type: String, default: '100%' },
})

const emit = defineEmits(['update:modelValue'])

const tempType = ref(props.type || 'text')

const updateValue = (e) => {
  emit('update:modelValue', e.target.value)
}

const changeType = () => (tempType.value = tempType.value === 'text' ? 'password' : 'text')
</script>

<template>
  <div class="form-input" :style="{ width: width }">
    <input
      class="input-text"
      autocomplete="off"
      :class="{ '!outline-[3px] !outline-red-3': error.length > 0 }"
      :type="tempType"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
    />
    <label :for="name" class="input-label">{{ label }}</label>
    <button v-if="type === 'password'" @click="changeType" class="input-eye">
      <EyeIcon v-if="tempType !== 'password'" />
      <EyeSlashIcon v-else />
    </button>

    <TransitionGroup>
      <div class="form-error" v-for="element of error" :key="element.$uid">
        <div class="form-error__message">{{ element.$message }}</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
.form {
  &-input {
    @apply relative;
    .input {
      &-text {
        @apply pl-4 h-12 rounded-lg w-full outline-none relative z-[8];

        &:focus {
          @apply outline-[3px] outline-blue-5;
          & + .input-label {
            @apply z-20 -top-6 opacity-100;
          }
          &:not(:placeholder-shown) {
            & + .input-label {
              @apply z-20 -top-6 opacity-100;
            }
          }
        }
      }
      &-label {
        @apply block absolute -z-10 top-1 transition-all opacity-0 duration-300 font-bold text-sm dark:text-white text-black;
      }
      &-eye {
        @apply w-4 h-4 absolute z-10 top-6 right-3 -translate-y-1/2 hover:text-blue-2 text-blue-1 transition-all;
      }
    }
  }
  &-error {
    @apply p-2 text-sm rounded-md mt-2 w-full dark:bg-red-4 dark:text-red-2 bg-red-1 text-red-3;
  }
}

.v-enter-active,
.v-leave-active {
  @apply transition-all duration-500;
}
.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}
</style>
