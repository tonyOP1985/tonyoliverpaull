<template>
  <div class="skill-wrapper">
    <h3>{{ skills.title }}</h3>
    <div class="skills">
      <div v-for="(item, idx) in splitTech" :key="`${idx}-wrapper`" class="devicons-wrapper">
        <Skill
          v-for="(tech, index) in item"
          :key="index"
          :skill="tech"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Skill from '@/components/content/about/skills/Skill.vue'

export default {
  components: {
    Skill
  },

  props: {
    skills: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      splitTech: []
    }
  },

  created () {
    this.splitArray()
  },

  methods: {
    splitArray () {
      const { technology } = this.skills
      const cloned = [...technology]
      const newArray = cloned.splice(3)
      this.splitTech = [cloned, newArray]
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-wrapper {
  margin-bottom: 40px;
}

.skill-wrapper h3 {
  width: 95%;
  margin: 0 auto;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
}

.skills {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  column-count: 2;
}

.devicons-wrapper {
  width: 351px;
  display: flex;
  flex-direction: row;
}

@media (max-width: 726px) {
  .skills {
    flex-direction: column;
  }

  .devicons-wrapper {
    width: 100%;
    justify-content: space-between;
  }
}

@media (max-width: 370px) {
  .devicons-wrapper {
    flex-direction: column;
  }

  .skills {
    flex-direction: row;
  }
}
</style>
