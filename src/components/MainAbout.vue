<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 text-h4 text-center text-uppercase text-bold text-primary">Обо мне
        <div class="col-12 animated slower fadeIn text-h4 text-center text-uppercase text-bold text-grey-4">
          Кто я
        </div>
      </div>
      <div class="justify-center animated fadeInRight">
        Меня зовут Павел. Я Front-End разработчик.<br> Главное для меня —
        <span class="animated fadeIn bg-grey-4">
        писать код и сервисы ДЛЯ ЛЮДЕЙ
      </span>
        , а не для роботов.
        <br>
        <br>
        Я программировал еще в ВУЗе первые проекты на C++. В благодарность
        за проекты люди жертвовали деньги.<br>
        И уже тогда я понял, что
        <span class="animated fadeIn bg-grey-4">главное в коде - читаемость</span>.
        А
        <span class="animated fadeIn bg-grey-4">главное в сервисе - удобство для пользователя</span>.<br>
        <br>
        В 2019 начал работать в стеке Fronted: Изучил верстку, основы JS и
        Vue.js и продолжаю расти в этом направлении.
        <br><br>
        Я люблю слушать подкасты, читать бизнес-литературу и работать над
        проектами с утра до вечера. <br><br>
      </div>
    </div>
    <div class="row justify-center animated fadeInUp slower delay-3s q-gutter-sm">
      <AppContactsButtons/>
    </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue';
import AppContactsButtons from "components/AppContactsButtons";

export default defineComponent({
  name: 'MainAbout',
  components: {
    AppContactsButtons
  }
})
</script>
