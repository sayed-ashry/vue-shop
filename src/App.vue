<template>
  <form @submit.prevent="submitData">
    <div><label>title</label> <input type="text" v-model="enteredTitle" /></div>
    <div>
      <label>price</label> <input type="number" v-model="enteredPrice" />
    </div>
    <button type="submit">Add Product</button>
  </form>
  <ul v-for="product in products">
    <li :key="product.id">
      {{ product.title }}==>{{ product.price }}==>{{ product._id }}
    </li>
    <button @click="removeItem(product._id)">remove</button>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      enteredTitle: "",
      enteredPrice: "",
    };
  },
  methods: {
    loadProducts() {
      fetch("http://localhost:3000/products")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data[0]._id);
          this.products = data;
        });
    },
    submitData() {
      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: this.enteredTitle,
          price: this.enteredPrice,
        }),
      }).then(() => {
        this.loadProducts();
        (this.enteredTitle = ""), (this.enteredPrice = "");
      });
    },
    removeItem(id) {
      console.log(id);
      fetch(`http://localhost:3000/products/${id}`, {
        headers: {
          "Content-type": "application/json",
        },
        method: "DELETE",
      })
        .then((res) => this.loadProducts())
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.loadProducts();
  },
};
</script>
