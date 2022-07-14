<template>
  <div class="q-pa-lg q-gutter-sm header q-pt-lg-md">
    <div class="row">
      <div
        class="col-12 col-sm-4 offset-sm-3 q-ml-md-lg header__left q-mb-lg q-pt-lg-xl justify-center"
      >
        <div class="header__separator desktop-only"></div>
        <div class="text-subtitle1 animated fadeIn slower delay-1s">
          Здравствуйте, меня зовут
        </div>
        <div class="text-bold text-h4 animated fadeIn slower delay-1s">
          Павел Дубицкий
        </div>
        <div class="text-subtitle1 q-mb-md animated delay-2s slower fadeIn">
          Я - разработчик сайтов и приложений
        </div>
        <div
          class="flex column header__buttons q-gutter-sm animated fadeInUp slower delay-3s"
        >
          <AppContactsButtons />
        </div>
      </div>
      <div class="col-12 header__right animated delay-5s fadeIn slower">
        <q-img
          src="https://pullso.github.io/img/man_min.png"
          spinner-color="white"
          class="header__photo"
        />
        <q-separator />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import AppContactsButtons from "components/AppContactsButtons";

export default defineComponent({
  name: "MainHeader",
  components: { AppContactsButtons },
});
</script>
<style lang="sass" scoped>
.header
  &__separator
    padding-top: 100px

  &__right
    max-width: 250px
    height: 100%
    @media screen and (max-width: 765px)
      margin: 0 auto

  &__buttons
    max-width: 350px
</style>
