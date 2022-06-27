<template>
  <div>
    <div class="text-h4 text-center text-uppercase text-bold text-primary" id="certificates">Сертификаты</div>
    <div v-if="certificates" class="row justify-center">
      <AppCard v-for="certificate in certificates" :key="certificate"
               :data="certificate" :user="user"
      />
    </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue';
import AppCard from "components/AppCard";

export default defineComponent({
  name: 'MainCertificates',
  components: {AppCard},
  props: ['certificates', 'user']
})
</script>
