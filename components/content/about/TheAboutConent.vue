<template>
  <div class="about-me">
    <div class="about-me-container">
      <div class="row">
        <TheAboutMe />
      </div>
      <div class="row">
        <Skills />
      </div>
    </div>
  </div>
</template>

<script>
import TheAboutMe from '@/components/content/about/TheAboutMe'
import Skills from '@/components/content/about/skills/Skills'

export default {
  components: {
    TheAboutMe,
    Skills
  }
}
</script>

<style lang="scss" scoped>
.about-me {
  width: 100%;
  margin-top: 50px;
  transition: all 0.2s ease;
  color: #494c4e;
}

.about-me-container {
  width: 1170px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.row {
  width: 60%;
  margin: 20px auto;
}

@media (max-width: 1200px) {
  .about-me-container {
    width: 100%;
  }

  .row {
    width: 702px;
  }
}

@media (max-width: 770px) {
  .row {
    width: 95%;
  }
}

@media (max-width: 370px) {
  .devicons {
    width: 100%;
    margin: 0;
    text-align: center;
  }
}
</style>
