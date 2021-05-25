<template>
  <div>
    <TheAboutHeader text="Skills" />
    <SkillGroup
      v-for="(skill, index) in skills"
      :key="index"
      :skills="skill"
    />
  </div>
</template>

<script>
import skills from '@/lib/skills.js'

import TheAboutHeader from '@/components/content/about/TheAboutHeader'
import SkillGroup from '@/components/content/about/skills/SkillGroup.vue'

export default {
  components: {
    TheAboutHeader,
    SkillGroup
  },

  data () {
    return {
      skills
    }
  }
}
</script>
