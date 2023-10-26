<template>
  <div class="container">
    <ul class="list-group" v-for="product in products" :key="product.id">
      <product-item
        :title="product.title"
        :price="product.price"
      ></product-item>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Book",
          price: 200,
        },
        {
          id: 2,
          title: "Pen",
          price: 100,
        },
        {
          id: 3,
          title: "Shoes",
          price: 100,
        },
        {
          id: 4,
          title: "computer",
          price: 100,
        },
      ],
    };
  },
};
</script>
