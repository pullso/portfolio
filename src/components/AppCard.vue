<template>
  <div class="q-pa-md items-start q-gutter-md">
    <q-card class="my-card col-12 col-md-4" flat bordered>
      <q-img
        :src="
          data.img.includes('https')
            ? data.img
            : 'https://pullso.github.io/' + data.img
        "
        loading="lazy"
        style="height: 300px; width: 100%"
        fit="fill"
      />
      <q-separator />

      <q-card-section>
        <q-chip
          size="md"
          v-for="(c, idx) in data.categories"
          :key="c"
          :color="idx === 0 ? 'primary' : ''"
          :text-color="idx === 0 ? 'white' : ''"
        >
          <div class="text-overline">{{ formatString(c) }}</div>
        </q-chip>
        <div class="row justify-between flex-center">
          <div class="my-card__title text-bold q-my-xs">
            {{ data.title }}
          </div>
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn
          flat
          type="a"
          color="primary"
          label="Перейти"
          icon="launch"
          target="_blank"
          :href="data.link"
        />
        <q-space />
        <template v-if="user">
          <q-btn
            unelevated
            outline
            rounded
            color="primary"
            icon="edit"
            size="small"
            @click="goEdit"
          />
          <q-btn
            unelevated
            outline
            rounded
            color="primary"
            icon="content_copy"
            size="small"
            @click="copyCard"
          />
        </template>
        <q-btn
          v-if="data"
          color="grey"
          rounded
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section>
            <div v-html="data.description"></div>
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { db } from "boot/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AppCard",
  setup(props) {
    const expanded = ref(false);
    const router = useRouter();

    function goEdit() {
      router.push(`/edit/${props.data.firestoreId}`);
    }

    async function copyCard() {
      const id = String(Date.now());
      await setDoc(doc(db, "cards", id), props.data);
      await router.push(`/edit/${id}`);
    }

    function formatString(val) {
      const string = val.trim();
      return string[0].toUpperCase() + string.substring(1);
    }

    return {
      expanded,
      goEdit,
      copyCard,
      formatString,
    };
  },
  props: {
    data: {
      type: Object,
    },
    user: {
      type: Object,
    },
  },
  methods: {},
});
</script>

<style lang="sass" scoped>
.my-card
  width: 90%
  max-width: 310px
  min-width: 310px

  &__title
    font-size: 16px
    font-weight: 700
</style>
