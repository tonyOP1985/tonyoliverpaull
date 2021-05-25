<template>
  <a :href="skill.href" :target="skill.target">
    <div class="devicons">
      <img :src="skill.src" :alt="skill.alt">
      <p>{{ skill.text }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  width: 110px;
}

.devicons {
  height: 120px;
  flex-direction: column;
  text-align: center;
}

p {
  color: #494c4e;
  font-weight: 600;
  letter-spacing: 1px;
}

img {
  height: 90px;
  width: 90px;
  padding: 10px;
}

@media (max-width: 700px) {
  .devicons {
    height: 100px;
    width: 100%;
  }

  img {
    height: 70px;
    width: 70px;
    padding: 7px;
    margin: 0 auto;
  }
}

@media (max-width: 770px) {
  p {
    font-size: 14px;
  }
}

@media (max-width: 370px) {
  .devicons {
    width: 100%;
    margin: 0;
    text-align: center;
  }

  img {
    margin: 0 auto;
  }
}
</style>
