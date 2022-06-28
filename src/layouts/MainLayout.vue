<template>
  <div class="progress"></div>
  <q-layout view="hHh Lpr lff">
    <q-header class="bg-white" bordered>
      <q-toolbar>
        <q-btn
          dense
          round
          elevated
          color="primary"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-black text-bold gt-sm">
          Frontend-разработчик
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      class="bg-white"
      :width="250"
      :breakpoint="700"
      bordered
      overlay
    >
      <q-list>
        <div class="bg-grey-3 flex flex-center" style="height: 150px">
          <div class="text-center">
              <q-avatar size="56px" class="q-mb-sm">
                <img src="https://avatars.githubusercontent.com/u/58993401?v=4">
              </q-avatar>
              <div class="text-weight-bold text-black">Павел Дубицкий</div>
              <div class="text-black text-center">
                <q-icon name="email"/>
                <a href="mailto:pullso.code@gmail.com" class="text">pullso.code@gmail.com</a>
              </div>
            </div>
        </div>
        <EssentialLink
          v-for="link in contactLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import {defineComponent, onMounted, ref} from 'vue'

const contactLinks = [
  {
    title: 'Telegram',
    icon: 'telegram',
    link: 'https://t.me/pullso'
  },
  {
    title: 'LinkedIn',
    icon: 'people',
    link: 'https://www.linkedin.com/in/pavel-dubitskiy'
  },
  {
    title: 'Github',
    icon: 'code',
    link: 'https://github.com/pullso'
  },
  {
    title: 'Gitlab',
    icon: 'code',
    link: 'https://gitlab.com/pullso'
  },
];

const menuLinks = [
  {
    title: 'Портфолио',
    icon: 'work',
    link: '#works'
  },
  {
    title: 'Сертификаты',
    icon: 'book',
    link: '#certificates'
  },
  {
    title: 'Обо мне',
    icon: 'person',
    link: '#about'
  },

];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    onMounted(async () => {
      const progress = document.querySelector(".progress");

      window.addEventListener("scroll", () => {
        let windowScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        let windowHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        let per = (windowScroll / windowHeight) * 100;
        progress.style.width = per + "%";
      });
    })

    return {
      contactLinks,
      menuLinks,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  }
})
</script>

<style lang="scss">
.progress {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 0;
  height: 5px;
  background-color: $primary;
  z-index: 10000;
}
</style>
