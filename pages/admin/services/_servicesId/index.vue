<template>
  <section>
    <h1 class="newpost">Редактирование sevice</h1>
    <newServices @newService="newServicesAdmin" :serviceEdit="service" />
  </section>
</template>

<script>
import axios from "axios";
import newServices from "~/components/admin/newServices";
export default {
  layout: "admin",
  components: {
    newServices,
  },
  asyncData(contex) {
    return axios
      .get(
        `https://lenaplash-16c83-default-rtdb.firebaseio.com/services/${contex.params.servicesId}.json`
      )
      .then((res) => {
        return {
          service: { ...res.data, id: contex.params.servicesId },
        };
      })
      .catch((e) => contex.error(e));
  },
  methods: {
    newServicesAdmin(service) {
      this.$store.dispatch("editService", service).then(() => {
        this.$router.push("/admin/services");
      });
    },
  },
};
</script>

<style lang="scss">
.newpost {
  padding-top: 150px;
  font-size: 25px;
  text-align: center;
  font-style: italic;
}
</style>