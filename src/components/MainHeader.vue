<template>
  <div class="q-pa-lg q-gutter-sm header q-pt-lg-md">
    <div class="row">
      <div class="col-12 col-sm-4 offset-sm-3 q-ml-md-lg header__left q-mb-lg q-pt-lg-xl justify-center">
        <div class="header__separator desktop-only"></div>
        <div class="text-subtitle1 animated fadeIn slower delay-1s">Здравствуйте, меня зовут</div>
        <div class="text-bold text-h4 animated fadeIn slower delay-1s">Павел Дубицкий</div>
        <div class="text-subtitle1 q-mb-md animated delay-2s slower fadeIn">Я - разработчик сайтов и приложений</div>
        <div class="flex column header__buttons q-gutter-sm animated fadeInUp slower delay-3s">
          <q-btn
            rounded
            type="a"
            target="_blank"
            color="primary"
            href="https://t.me/pullso"
            icon="telegram"
            label="Написать"
            size="1.15em"
          />
          <q-btn
            rounded
            color="secondary"
            outline
            icon="account_box"
            label="Резюме"
            type="a"
            target="_blank"
            href="https://ekaterinburg.hh.ru/applicant/resumes/view?resume=a939d016ff07ebc4d10039ed1f626158574238"
            size="1.15em"
          />
        </div>
      </div>
      <div class="col-12 header__right animated delay-5s fadeIn slower ">
        <q-img
          src="https://pullso.github.io/img/man_min.png"
          spinner-color="white"
          class="header__photo"
        />
        <q-separator/>
      </div>
    </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'MainHeader',
})
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
