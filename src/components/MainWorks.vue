<template>
  <div class="row justify-center">
    <WorkCard v-for="card in cards" :key="card"
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
      cards: []
    }
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "cards"));
    querySnapshot.forEach((doc) => {
      const card = doc.data()
      card.idx = doc.id
      this.cards.unshift(card)
    });
  },
  components: {
    WorkCard
  }
})
</script>
