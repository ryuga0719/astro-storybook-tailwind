<template>
  <button
    :class="[
      'btn',
      typeClass,
      sizeClass,
      disabledClass,
      additionalClass,
      roundedClass,
    ]"
    :disabled="disabled"
    @click="emitClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

interface Props {
  type?: string;
  size?: string;
  additionalClass?: string;
  disabled?: boolean;
  rounded?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: undefined,
  size: undefined,
  additionalClass: undefined,
  disabled: undefined,
  rounded: undefined,
});

const emit = defineEmits<{
  (e: 'on-click'): void;
}>();

const typeClass = computed(() => {
  switch (props.type) {
    case 'secondary':
      return 'btn-secondary';
    case 'warning':
      return 'btn-warning';
    case 'error':
      return 'btn-error';
    default:
      return 'btn-primary';
  }
});

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'btn-sm';
    case 'lg':
      return 'btn-lg';
    default:
      return 'btn-md';
  }
});

const disabledClass = computed(() => {
  return props.disabled ? 'disabled' : '';
});

const roundedClass = computed(() => {
  return props.rounded ? 'rounded-full' : 'rounded-md';
});

function emitClick(event: MouseEvent) {
  if (!props.disabled) {
    emit('on-click');
    console.log('clicked!!!!!');
  }
}
</script>

<style scoped lang="scss">
.btn {
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
}

// Type classes
.btn-primary {
  background-color: #3b82f6;
  color: white;
  &:hover {
    background-color: #2563eb;
  }
}

.btn-secondary {
  background-color: #4b5563;
  color: white;
  &:hover {
    background-color: #374151;
  }
}

.btn-warning {
  background-color: #f59e0b;
  color: black;
  &:hover {
    background-color: #d97706;
  }
}

.btn-error {
  background-color: #ef4444;
  color: white;
  &:hover {
    background-color: #dc2626;
  }
}

// Size classes
.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.btn-md {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.btn-lg {
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
}

// Disabled class
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

// Rounded classes
.rounded-md {
  border-radius: 0.375rem;
}

.rounded-full {
  border-radius: 9999px;
}
</style>
