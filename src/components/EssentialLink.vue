<template>
  <q-item clickable tag="a" :href="link" :target="target">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="primary" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },

    target: {
      type: String,
      default: "_blank",
    },
  },
});
</script>
