<template>
  <div class="q-pa-md row justify-center" id="works">
    <q-btn-toggle
      v-model="toggle"
      toggle-color="primary"
      class="fadeIn slower animated"
      :options="toggleOptions"
      unelevated
    />

  </div>
  <div class="row justify-center">
    <transition-group
      appear
      enter-active-class=" animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <AppCard v-for="card in filteredCards" :key="card"
               :data="card" :user="user"
      />
    </transition-group>
  </div>
</template>
<script>
import {computed, defineComponent, ref} from 'vue';
import AppCard from "components/AppCard";

export default defineComponent({
  name: 'MainWorks',
  setup(props) {
    const toggle = ref(null)

    const toggleOptions = ref([
      {label: 'Все', value: null},
      {label: 'Vue.js', value: 'vue'},
      {label: 'javascript', value: 'javascript'},
      {label: 'Node.js', value: 'nodejs'}
    ])

    const filteredCards = computed(() => {
      return toggle.value
        ? props.cards?.filter(card => card.categories.includes(toggle.value)) || []
        : props.cards
    })

    return {
      toggle,
      toggleOptions,
      filteredCards,
    }
  },
  props: ['user', 'cards'],
  components: {
    AppCard
  },
})
</script>
