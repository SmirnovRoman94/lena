<template>
  <section class="footer_page">
    <div class="container">
      <div data-aos="fade-up" class="footer_pages">
        <div class="solid">
          <h3 class="footer_header">Solid.</h3>
          <p class="solid_text">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics.
          </p>
        </div>
        <div class="adress">
          <h3 class="footer_header">Our Address</h3>
          <ul class="adress_info">
            <li class="adress_info_item">
              <map-mdi class="icon" />198 West 21th Street, Suite 721 New York
              NY 10016
            </li>
            <li class="adress_info_item">
              <phone-mdi class="icon" />+ 1235 2355 98
            </li>
            <li class="adress_info_item">
              <email-mdi class="icon" />@yoursite.com
            </li>
            <li class="adress_info_item">
              <web-mdi class="icon" />www.yoursite.com
            </li>
          </ul>
          <h3 class="footer_header">Connect with Us</h3>
          <ul class="connect_info">
            <facebook-mdi class="icon_info" />
            <twitter-mdi class="icon_info" />
            <instagram-mdi class="icon_info" />
            <github-mdi class="icon_info" />
          </ul>
        </div>
        <div class="send_form">
          <h3 class="footer_header">Drop us a line</h3>
          <FormUser />
        </div>
      </div>
      <div data-aos="fade-up" class="copy_right">
        <p class="copy_right_item">
          © 2021 Solid Free Template. All Rights Reserved.Designed by
          FREEHTML5.co Demo Images: Unsplash
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import FormUser from "~/components/FormUser.vue";
export default {
  components: {
    FormUser,
  },
};
</script>

<style lang="scss">
.icon {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 22px;
  color: #3ec483;
}
.footer_page {
  background: #41444b;
  color: rgba(255, 255, 255, 0.6);
  padding: 4em 0;

  .footer_pages {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    .footer_header {
      font-size: 22px;
      color: #fff;
      font-weight: 700;
    }
    .solid {
      width: 100%;
      padding-bottom: 24px;
      .footer_header {
        font-size: 22px;
        color: #fff;
        font-weight: 700;
      }
      .solid_text {
        padding-top: 4em;
        font-size: 16px;
        font-weight: 600;
      }
    }
    .adress {
      width: 100%;
      padding-bottom: 24px;

      .adress_info {
        padding-top: 4em;
        font-size: 16px;
        font-weight: 600;
        padding-bottom: 4em;

        .adress_info_item {
          font-size: 16px;
          list-style: none;
          margin: 0 0 20px 0;
          position: relative;
          padding-left: 40px;
        }
      }
      .connect_info {
        padding-top: 4em;
        display: flex;
        justify-content: space-around;

        .icon_info {
          top: 0;
          left: 0;
          font-size: 22px;
          color: #3ec483;
        }
      }
    }
  }
  .copy_right {
    width: 80%;
    margin: 0 auto;

    .copy_right_item {
      position: relative;
      padding-top: 20px;
      margin-top: 40px;
      font-weight: 700;
    }
  }
  .send_form {
    width: 100%;
  }
}
@media screen and (max-width: 900px) {
  .footer_page .footer_pages {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 490px) {
  .footer_page .footer_pages {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>