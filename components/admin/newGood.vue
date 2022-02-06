<template>
  <section>
    <form @submit.prevent class="newGood_form">
      <AppInput class="newPost_input" v-model="work.title" placeholder="Header"
        >Name:</AppInput
      >
      <AppInput v-model="work.desc" placeholder="Description"
        >Description:</AppInput
      >
      <AppInput v-model="work.url" placeholder="Image link"
        >Image Link</AppInput
      >
      <AppInput v-model="work.alt" placeholder="Image name"
        >Image name</AppInput
      >
      <AppInput v-model="work.heart" type="number" placeholder="Heart"
        >Heart</AppInput
      >
      <AppInput v-model="work.eye" type="number" placeholder="Eye"
        >Eye</AppInput
      >
      <AppInput v-model="work.dowload" type="number" placeholder="Dowload"
        >Dowload</AppInput
      >
      <AppInput v-model="work.price" type="number" placeholder="Price"
        >Price</AppInput
      >
      <AppInput
        v-model="work.count"
        type="number"
        placeholder="Колличество данного товара, только число вводить!"
        >Count</AppInput
      >
      <AppInput
        v-model="work.totalPrice"
        type="number"
        placeholder="то же значение что и цена ВВодить!"
        >Total Price</AppInput
      >
      <div class="new_url">
        <label class="custom-file-upload">
          <input type="file" ref="imgDropzone" @change="onFileSelected" />
          Выберите картинку
        </label>
      </div>
      <p class="progress_load">{{ this.process }}</p>
      <div class="newPost_button">
        <button @click="addNewGood" class="btn btnPrimary">Save</button>
        <button @click="cancel" class="btn btnDanger">Cancel</button>
      </div>
    </form>
  </section>
</template>

<script>
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
export default {
  props: {
    workEdit: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      url: "",
      file: null,
      process: "",
      //если есть workEdit развернем имеющийся, иначе выведем пустые строки
      work: this.workEdit
        ? { ...this.workEdit }
        : {
            title: "",
            desc: "",
            url: "",
            alt: "",
            heart: Number,
            eye: Number,
            dowload: Number,
            price: Number,
            count: Number,
            quantity: 1,
            totalPrice: Number,
          },
    };
  },

  methods: {
    addNewGood() {
      this.$emit("newGood", this.work);
    },
    cancel() {
      this.$router.push("/admin/goods");
    },

    onFileSelected(event) {
      this.file = event.target.files[0];
      const storage = getStorage();

      /** @type {any} */
      const metadata = {
        contentType: "image/jpeg",
      };

      const storageRef = ref(storage, "images/" + this.file.name);
      const uploadTask = uploadBytesResumable(storageRef, this.file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.process = `Upload is ${progress}  % done`;
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;

            case "storage/unknown":
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            this.url = downloadURL;
            this.work.url = this.url;
            console.log("File available at", downloadURL);
          });
        }
      );
    },
  },
};
</script>

<style lang="scss">
.newGood_form {
  width: 50%;
  margin: 0 auto;
}
.newPost_button {
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.progress_load {
  margin-bottom: 4%;
  width: 100%;
  text-align: center;
}
input[type="file"] {
  display: none;
}
.new_url {
  display: flex;
  justify-content: center;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(221, 88, 88, 0.712);
    color: blanchedalmond;
  }
}
</style>