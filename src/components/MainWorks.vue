<template>
  <div class="q-pa-md row justify-center">
    <q-btn-toggle
      v-model="toggle"
      toggle-color="primary"
      class="fadeIn slower animated"
      :options="toggleOptions"
      unelevated
    />
  </div>
  <div class="row justify-center">
    <AppCard v-for="card in filteredCards" :key="card"
             :data="card" :user="user"
    />
  </div>
</template>
<script>
import {defineComponent} from 'vue';
import AppCard from "components/AppCard";
import {db} from "boot/firebase";
import {collection, getDocs} from 'firebase/firestore';


export default defineComponent({
  name: 'MainWorks',
  data() {
    return {
      toggle: null,
      toggleOptions: [
        {label: 'Все', value: null},
        {label: 'Vue.js', value: 'vue'},
        {label: 'javascript', value: 'javascript'},
        {label: 'Node.js', value: 'nodejs'}
      ]
    }
  },
  props: ['user', 'cards'],
  components: {
    AppCard
  },
  computed: {
    filteredCards() {
      if (!this.toggle) return this.cards
      return this.cards?.filter(card => card.categories.includes(this.toggle)) || []
    }
  }
})
</script>
