<template>
  <section>
    <div class="clients_item">
      <div :data-aos="client.aos">
        <div class="clients_content">
          <p class="clients_content_item">{{ client.descr }}</p>
        </div>
        <div class="author_data">
          <img class="author_img" :src="client.url" :alt="client.name" />
          <div class="author_data_item">
            <p class="author_name">{{ client.name }}</p>
            <p class="author_profi">{{ client.profi }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  props: {
    client: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.clients_item {
  width: 100%;

  .clients_content {
    padding: 30px;
    margin-bottom: 20px;
    background: #3ec483;
    position: relative;
    border-radius: 30px;

    .clients_content_item {
      color: #fff;
      font-weight: 700;
    }
    .clients_content_item::after {
      position: absolute;
      bottom: -10px;
      left: 30px;
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 10px 0 10px;
      border-color: #3ec483 transparent transparent transparent;
    }
  }
  .author_data {
    display: flex;
    width: 100%;

    .author_img {
      width: 75px;
      height: 75px;
      background-size: cover;
      background-position: center center;
      position: relative;
      float: left;
      margin-right: 20px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      border-radius: 50%;
    }
    .author_name {
      font-size: 18px;
    }
    .author_profi {
      font-size: 14px;
      color: #8f989f;
    }
  }
}
</style>
