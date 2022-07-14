<template>
  <template v-if="card && user" class="q-pa-md">
    <div class="q-ma-md text-bold">Редактирование id:{{ id }}</div>
    <div class="row q-mx-md">
      <div class="col-6">
        <div class="q-gutter-y-md column">
          <q-input lazy outlined label="ID" v-model="card.id" />
          <q-input lazy outlined label="Название" v-model="card.title" />
          <q-input
            lazy
            outlined
            label="Категории"
            v-model="card.categories"
            @change="getCategories"
          />
          <q-input
            lazy
            outlined
            type="textarea"
            label="Описание"
            v-model="card.description"
          />
          <q-input
            lazy
            outlined
            type="url"
            label="Url проекта"
            v-model="card.link"
          />
          <q-input
            lazy
            outlined
            type="url"
            label="Url картинки"
            v-model="card.img"
          />
          <div class="row">
            <q-toggle
              v-model="card.mobileSupport"
              label="Мобильная адаптация"
            />
            <q-toggle v-model="card.isCertificate" label="Сертификат" />
          </div>
        </div>
      </div>
      <AppCard :data="card" lazy />
    </div>
    <div class="q-pa-md q-gutter-lg">
      <q-btn icon="arrow_back" color="black" label="Назад" @click="goBack" />
      <q-btn icon="save" color="green" label="Сохранить" @click="saveCard" />
      <q-btn
        icon="delete"
        color="red"
        outline
        label="Удалить"
        @click="deleteCard"
      />
    </div>
  </template>
  <template v-else-if="card"> Данные с таким id не найдены </template>
  <template v-else> Ошибка авторизации </template>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { db } from "boot/firebase";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import AppCard from "components/AppCard";
import { getAuth } from "firebase/auth";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "EditCard.vue",
  setup() {
    const card = ref(null);
    const router = useRouter();
    const route = useRoute();
    const id = ref(route.params?.id);
    const user = ref(getAuth()?.currentUser);

    onMounted(async () => {
      if (!user.value) return;
      const cardRef = doc(db, "cards", id.value);
      const cardSnap = await getDoc(cardRef);

      if (cardSnap.exists()) {
        card.value = await cardSnap.data();
      } else {
        console.log("No such document!");
      }
    });

    function getCategories() {
      card.value.categories = card.value.categories.split(",");
    }

    async function saveCard() {
      await setDoc(doc(db, "cards", id.value), card.value);
      goBack();
    }

    function goBack() {
      router.push("/");
    }

    async function deleteCard() {
      await deleteDoc(doc(db, "cards", id.value));
      goBack();
    }

    return {
      card,
      user,
      id,
      goBack,
      deleteCard,
      saveCard,
      getCategories,
    };
  },
  components: {
    AppCard,
  },
});
</script>

<style scoped></style>
