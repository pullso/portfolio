<template>
  <MainHeader/>
  <MainWorks :user="currentUser" :cards="workCards"/>
  <MainCertificates :user="currentUser" :certificates="certificates"/>
  <MainAbout/>
</template>

<script>
import {defineComponent} from 'vue';
import MainHeader from "components/MainHeader";
import MainWorks from "components/MainWorks";
import MainCertificates from "components/MainCertificates";
import MainAbout from "components/MainAbout";
import {getAuth} from "firebase/auth";
import {collection, getDocs} from "firebase/firestore";
import {db} from "boot/firebase";


export default defineComponent({
  name: 'PageIndex',
  components: {MainAbout, MainCertificates, MainWorks, MainHeader},
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "cards"));
    querySnapshot.forEach((doc) => {
      const card = doc.data()
      card.firestoreId = doc.id
      card.categories = card.categories.map(cat => cat.toLowerCase())
      this.allCards.unshift(card)
    });

    this.allCards = this.allCards.sort((a, b) => a.id - b.id)
    this.workCards = this.allCards.filter(card=>!card.isCertificate)
    this.certificates = this.allCards.filter(card=>card.isCertificate)
  },
  data() {
    return {
      currentUser: getAuth()?.currentUser,
      allCards:[],
      workCards: [],
      certificates: [],
    }
  },
})
</script>
