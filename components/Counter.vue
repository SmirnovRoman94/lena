<template>
  <section>
    <div class="container">
      <div class="counter">
        <div class="counter_item">
          <countTo
            class="counter_number"
            :startVal="startVal"
            :endVal="coffe"
            :separator="count"
            :duration="3000"
          ></countTo>
          <p class="counter_content">Cups of Coffe</p>
        </div>
        <div class="counter_item">
          <countTo
            class="counter_number"
            :startVal="startVal"
            :endVal="client"
            :separator="count"
            :duration="3000"
          ></countTo>
          <p class="counter_content">Clients</p>
        </div>
        <div class="counter_item">
          <countTo
            class="counter_number"
            :startVal="startVal"
            :endVal="project"
            :separator="count"
            :duration="3000"
          ></countTo>
          <p class="counter_content">Projects</p>
        </div>
        <div class="counter_item">
          <countTo
            class="counter_number"
            :startVal="startVal"
            :endVal="finished"
            :separator="count"
            :duration="3000"
          ></countTo>
          <p class="counter_content">finished Projects</p>
        </div>
      </div>
    </div>
  </section>
</template>
 
<script>
import countTo from "vue-count-to";
export default {
  components: { countTo },
  data() {
    return {
      startVal: 0,
      coffe: 3452,
      client: 234,
      project: 6542,
      finished: 8687,
      count: "0,",
    };
  },
};
</script>

<style lang="scss">
.counter {
  display: flex;
  justify-content: space-around;

  .counter_item {
    text-align: center;
    width: 100%;
  }
  span {
    font-size: 30px;
    font-weight: 700;
  }
  .counter_content {
    font-size: 16px;
  }
}
@media (max-width: 700px) {
  .counter {
    flex-wrap: wrap;
  }
  .counter_item {
    margin-top: 1em;
  }
}
</style>