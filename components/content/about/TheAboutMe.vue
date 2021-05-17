<template>
  <div>
    <TheAboutHeader text="About Me" />
    <div class="about-content">
      <img src="/img/tonyOPHeadShot.png" alt="Tony Oliver-Paull">
      <p>
        I am a full-stack web developer with exprerience in all layers of software development,
        including a knowledge of Javascript, HTML, CSS, Vue,js, Nuxt.js, React, Node.js, Python, MongoDB, PostgreSQL, and MySQL.
        I'm passionate about software development, both on the front and back end, and I am always working to learn more.
        I enjoy projects that push me outside of my comfort zone and knowledge set.
      </p>
    </div>
  </div>
</template>

<script>
import TheAboutHeader from '@/components/content/about/TheAboutHeader'

export default {
  components: {
    TheAboutHeader
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

.about-content {
  display: flex;
  flex-direction: row;
}

img {
  height: 190px;
  width: 190px;
  margin: 6px auto 0 auto;
  padding: 0;
}

p {
  width: 70%;
  font-size: 1rem;
  color: #494c4e;
  padding: 0 10px;
}

@media (max-width: 1200px) {
  .about-me-container {
    width: 100%;
  }
}

// @media (max-width: 770px) {
//   .row {
//     width: 95%;
//   }
// }

@media (max-width: 480px) {
  .about-content {
    flex-direction: column;
  }

  p {
    width: 100%;
    padding-top: 15px;
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
