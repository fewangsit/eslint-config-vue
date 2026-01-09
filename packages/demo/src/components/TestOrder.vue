<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    msg?: string;
  }>(),
  {
    msg: '',
  },
);

const reversedMessage = computed((): string => {
  return message.value.split('').reverse().join('');
});

const message = ref('Hello World');

const greet = (): void => {
  // eslint-disable-next-line no-console
  console.log('Hello');
};

onMounted((): void => {
  // eslint-disable-next-line no-console
  console.log('Mounted');
});
</script>

<template>
  <div>
    {{ message }}
    {{ props.msg }}
    {{ reversedMessage }}
    <button @click="greet">Greet</button>
  </div>
</template>
