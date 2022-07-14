<template>
  <MainHeader />
  <MainWorks :user="currentUser" :cards="workCards" />
  <MainCertificates :user="currentUser" :certificates="certificates" />
  <MainAbout />
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import MainHeader from "components/MainHeader";
import MainWorks from "components/MainWorks";
import MainCertificates from "components/MainCertificates";
import MainAbout from "components/MainAbout";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "boot/firebase";

export default defineComponent({
  name: "PageIndex",
  components: { MainAbout, MainCertificates, MainWorks, MainHeader },
  setup() {
    const currentUser = ref(getAuth()?.currentUser);
    let allCards = [];
    const workCards = ref([]);
    const certificates = ref([]);

    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, "cards"));
      querySnapshot.forEach((doc) => {
        const card = doc.data();
        card.firestoreId = doc.id;
        card.categories = card.categories.map((cat) => cat.toLowerCase());
        allCards.unshift(card);
        allCards = allCards.sort((a, b) => a.id - b.id);
      });

      workCards.value = allCards.filter((card) => !card.isCertificate);
      certificates.value = allCards.filter((card) => card.isCertificate);
    });

    return {
      currentUser,
      workCards,
      certificates,
    };
  },
});
</script>
