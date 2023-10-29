<template>
  <div class="container">
    <form @submit.prevent="submitData">
      <div class="mb-3">
        <label class="form-label">title</label>
        <input class="form-control" type="text" v-model="enteredTitle" />
      </div>

      <div class="mb-3">
        <label class="form-label">price</label>
        <input class="form-control" type="number" v-model="enteredPrice" />
      </div>
      <button class="btn btn-primary" type="submit">Add Product</button>
    </form>

    <ul class="list-group mt-3" v-for="product in products">
      <li class="listitem" style="list-style: none" :key="product.id">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>

            <h5 class="card-title">{{ product.price }}</h5>

            <div style="display: flex; justify-content: space-between">
              <button class="btn btn-primary" @click="removeItem(product._id)">
                remove
              </button>

              <button class="btn btn-primary" @click="editItem(product._id)">
                edit
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
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
      fetch(`http://localhost:3000/products/${id}`, {
        headers: {
          "Content-type": "application/json",
        },
        method: "DELETE",
      })
        .then((res) => this.loadProducts())
        .catch((error) => console.log(error));
    },
    editItem(id) {
      this.products;
      const item = this.products.find((p) => p._id == id);
      this.enteredTitle = item.title;
      this.enteredPrice = item.price;
    },
  },
  mounted() {
    this.loadProducts();
  },
};
</script>
