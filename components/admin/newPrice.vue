<template>
  <section>
    <form @submit.prevent class="newPrice_form">
      <AppInput
        class="newPost_input"
        v-model="price.title"
        placeholder="Name price"
        >Name price</AppInput
      >
      <AppInput v-model="price.price" placeholder="Price">Price</AppInput>
      <AppInput v-model="price.headerDown" placeholder="Header Down"
        >Header Down</AppInput
      >
      <AppInput v-model="price.opportunitiesHeader" placeholder="Преимущества"
        >Преимущества</AppInput
      >
      <AppInput v-model="price.opportunities" placeholder="Описание преимуществ"
        >Описание преимуществ</AppInput
      >
      <div class="newPost_button">
        <button @click="addNewPrice" class="btn btnPrimary">Save</button>
        <button @click="cancel" class="btn btnDanger">Cancel</button>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  props: {
    priceEdit: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      price: this.priceEdit
        ? {
            ...this.priceEdit,
          }
        : {
            title: "",
            price: "",
            headerDown: "",
            opportunitiesHeader: "",
            opportunities: "",
            quantity: 1,
          },
    };
  },
  methods: {
    addNewPrice() {
      this.$emit("newPrice", this.price);
    },
    cancel() {
      this.$router.push("/admin/prices");
    },
  },
};
</script>

<style lang="scss">
.newPrice_form {
  width: 50%;
  margin: 0 auto;
}
.newPost_button {
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>