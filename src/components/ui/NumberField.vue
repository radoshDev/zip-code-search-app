<script setup lang="ts">
type Props = {
  modelValue: string
  label: string
  placeholder?: string
  maxLength?: number
}
defineProps<Props>()
const emit = defineEmits<{ (e: 'update:modelValue', val: string): void }>()

function handleInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValue', value)
}
function isNumber(event: KeyboardEvent) {
  if (!/\d$/.test(event.key)) event.preventDefault()
}
</script>

<template>
  <input
    :value="modelValue"
    @input="handleInput"
    @keypress="isNumber"
    :placeholder="placeholder"
    type="text"
    :maxlength="maxLength"
    class="text-input"
  />
</template>

<style scoped lang="scss"></style>
