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
import {defineComponent, ref} from "vue";
import {useRouter} from "vue-router";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

export default defineComponent({
  name: "PageLogin.vue",
  setup() {
    const email = ref(null)
    const password = ref(null)
    const router = useRouter()

    function login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
          router.push('/')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.code, `: error.code`)
        });
    }

    return {
      email,
      password,
      login
    }
  }
})
</script>

<style scoped>

</style>
