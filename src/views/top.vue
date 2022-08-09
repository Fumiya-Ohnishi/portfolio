<template>
  <div>
    <!-- <v-main> -->
      <firstView></firstView>
      <work></work>
      <skill></skill>
      <about></about>
      <contact></contact>
    <!-- </v-main> -->
  </div>
</template>

<script>
import firstView from '@/components/firstView.vue'
import work from '@/components/work.vue'
import about from '@/components/about.vue'
import contact from '@/components/contact.vue'
import skill from '@/components/skill.vue'

export default {
  name: 'topPage',
  components: {
    firstView,
    work,
    skill,
    about,
    contact
  }
}
</script>
