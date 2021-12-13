<template>
  <div class="q-pa-sm items-start q-gutter-md">
    <q-card
      class="my-card col-12 col-md-4"
      flat bordered
    >
      <q-img
        :src="data.img.includes('https') ? data.img : 'https://pullso.github.io/' + data.img"
        loading="lazy"
        style="height: 300px; width: 100%"
        fit="fill"
      />
      <q-separator/>

      <q-card-section>
        <q-chip
          dense v-for="(c,idx) in data.categories" :key="c"
          :color="idx=== 0 ? 'primary' : ''"
          :text-color="idx===0 ? 'white' : ''"
        >
          <div
            class="text-overline"

          >
            {{ c.toUpperCase() }}
          </div>
        </q-chip>
        <div class="row justify-between flex-center">
          <div class="text-subtitle2 q-mt-sm q-mb-xs">{{ data.title }}</div>
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn
          flat
          type="a"
          color="primary"
          label="Перейти" icon="launch"
          target="_blank"
          :href="data.link"
        />
        <q-space/>

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
          <q-separator/>
          <q-card-section>
            <div v-html="data.description"></div>
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'WorkCard',
  data() {
    return {
      expanded: false,
    }
  },
  props: {
    data: {
      type: Object,
    }
  }
})
</script>

<style lang="sass" scoped>
.my-card
  width: 95%
  max-width: 350px
  min-width: 350px

</style>

