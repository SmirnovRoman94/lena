<template>
  <section>
    <form @submit.prevent class="newPost_form">
      <AppInput class="newPost_input" v-model="blog.header" placeholder="Header"
        >Name</AppInput
      >
      <AppInput v-model="blog.desc" placeholder="Description"
        >Description</AppInput
      >
      <AppInput v-model="blog.date" placeholder="Date">Date</AppInput>
      <AppInput v-model="blog.url" placeholder="Image link"
        >Image Link</AppInput
      >
      <div class="new_url">
        <label class="custom-file-upload">
          <input type="file" ref="imgDropzone" @change="onFileSelected" />
          Выберите картинку
        </label>
      </div>
      <p class="progress_load">{{ this.process }}</p>
      <div class="newPost_button">
        <button @click="addNewPost" class="btn btnPrimary">Save</button>
        <button @click="cancel" class="btn btnDanger">Cancel</button>
      </div>
    </form>
  </section>
</template>
<script>
import AppInput from "~/components/UI/Controls/AppInput";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
export default {
  components: {
    AppInput,
  },
  props: {
    postEdit: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      url: "",
      file: null,
      process: "",

      blog: this.postEdit
        ? {
            ...this.postEdit,
          }
        : {
            header: "",
            desc: "",
            date: "",
            url: "",
          },
    };
  },
  methods: {
    addNewPost() {
      this.$emit("newPost", this.blog);
    },
    cancel() {
      this.$router.push("/admin/blog");
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
            this.blog.url = this.url;
            console.log("File available at", downloadURL);
          });
        }
      );
    },
  },
};
</script>

<style lang="scss">
.newPost_form {
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