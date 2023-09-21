<script setup >
const props = defineProps({
  modelValue: { type: String, default: '' },
  name: { type: String, default: 'message' },
  error: { type: Array, default: [] },
  placeholder: { type: String, required: true },
  label: { type: String, default: '' },
  width: { type: String, default: '100%' },
  height: { type: String, default: '176px' },
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <div class="form-area" :style="{ width }">
    <textarea
      class="area-text"
      :class="{ '!outline-[3px] !outline-red-3': error.length > 0 }"
      :style="{ 'min-height': height }"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input.trim="updateValue"
    />
    <label :for="name" class="area-label">{{ label }}</label>
    <TransitionGroup>
      <div class="form-error" v-for="element of error" :key="element.$uid">
        <div class="form-error__message">{{ element.$message }}</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
.form {
  &-area {
    @apply relative;
    .area {
      &-text {
        @apply pl-4 pr-10 pt-3 rounded-lg w-full outline-none relative z-[8] resize-none;

        &:focus {
          @apply outline-[3px] outline-blue-5;
          & + .area-label {
            @apply z-20 -top-6 opacity-100;
          }
          &:not(:placeholder-shown) {
            & + .area-label {
              @apply z-20 -top-6 opacity-100;
            }
          }
        }
      }
      &-label {
        @apply block absolute -z-10 top-1 transition-all opacity-0 duration-300 font-bold text-sm dark:text-white text-black;
      }
    }
  }
  &-error {
    @apply p-2 text-sm rounded-md absolute w-full dark:bg-red-4 dark:text-red-2 bg-red-1 text-red-3;
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
