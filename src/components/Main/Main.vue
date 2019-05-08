<template>
    <div class="hello">
        <ul>
            <li v-for="(entry, index) in list" :key="index">{{ entry }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    list: Array,
  },
};
</script>
