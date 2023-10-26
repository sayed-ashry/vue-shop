<template>
  <li class="list-group-item">{{ title }} : {{ price }}</li>
</template>
<script>
export default {
  props: ["title", "price"],
};
</script>
