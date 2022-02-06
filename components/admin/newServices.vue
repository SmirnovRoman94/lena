<template>
  <section>
    <form @submit.prevent class="newServices_form">
      <AppInput
        class="newPost_input"
        v-model="service.title"
        placeholder="Name service"
        >Name services</AppInput
      >
      <AppInput v-model="service.descr" placeholder="Description"
        >Description</AppInput
      >
      <AppInput v-model="service.img" placeholder="Image link"
        >Image Link</AppInput
      >
      <div class="newPost_button">
        <button @click="addNewService" class="btn btnPrimary">Save</button>
        <button @click="cancel" class="btn btnDanger">Cancel</button>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  props: {
    serviceEdit: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      service: this.serviceEdit
        ? {
            ...this.serviceEdit,
          }
        : {
            title: "",
            descr: "",
            img: "",
          },
    };
  },
  methods: {
    addNewService() {
      this.$emit("newService", this.service);
    },
    cancel() {
      this.$router.push("/admin/services");
    },
  },
};
</script>

<style lang="scss">
.newServices_form {
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