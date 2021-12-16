<template>
  <div class="row">
    <div class="col-4 q-ma-md q-gutter-md">
      <q-input outlined label="email" type="email" v-model="email"/>
      <q-input outlined label="password" type="password" v-model="password"/>
      <q-btn @click="login" label="login"/>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {signInWithEmailAndPassword, getAuth} from "firebase/auth";

export default defineComponent({
  name: "PageLogin.vue",
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.code, `: error.code`)
        });
    }
  },
})
</script>

<style scoped>

</style>
