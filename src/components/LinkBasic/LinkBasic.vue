<template>
  <a
    :href="href"
    :target="target"
    rel="noopener noreferrer"
    @click="emitClick"
    class="c-link"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts" setup>
interface Props {
  href: string;
  target?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['click']);

function emitClick(event: MouseEvent) {
  emit('click', event);
}
</script>

<style scoped lang="scss">
.c-link {
  color: green;
}
</style>
