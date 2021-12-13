<template>
  <MainHeader/>
  <MainWorks/>
  <MainCertificates />
  <MainAbout />
</template>

<script>
import {defineComponent} from 'vue';
import MainHeader from "components/MainHeader";
import MainWorks from "components/MainWorks";
import MainCertificates from "components/MainCertificates";
import MainAbout from "components/MainAbout";

export default defineComponent({
  name: 'PageIndex',
  components: {MainAbout, MainCertificates, MainWorks, MainHeader},
})
</script>
