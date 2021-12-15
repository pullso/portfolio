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
    <WorkCard v-for="card in filteredCards" :key="card"
      :data="card"
    />
  </div>
</template>
<script>
import {defineComponent} from 'vue';
import WorkCard from "components/WorkCard";
import {db} from "boot/firebase";
import {collection, getDocs} from 'firebase/firestore';


export default defineComponent({
  name: 'MainWorks',
  data() {
    return {
      cards: [],
      toggle: null,
      toggleOptions: [
        {label: 'Все', value: null},
        {label: 'Vue.js', value: 'vue'},
        {label: 'javascript', value: 'javascript'},
        {label: 'Node.js', value: 'nodejs'}
      ]
    }
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "cards"));
    querySnapshot.forEach((doc) => {
      const card = doc.data()
      card.idx = doc.id
      card.categories = card.categories.map(cat => cat.toLowerCase())
      this.cards.unshift(card)
    });
    this.cards = this.cards.sort((a, b) => a.id - b.id)
  },
  components: {
    WorkCard
  },
  computed: {
    filteredCards() {
      if (!this.toggle) return this.cards
      return this.cards?.filter(card => card.categories.includes(this.toggle)) || []
    }
  }
})
</script>
