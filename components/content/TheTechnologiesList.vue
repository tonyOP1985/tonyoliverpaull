<template>
  <div class="technologies">
    <h3>Technologies Used</h3>
    <ul>
      <li
        v-for="(tech, index) in technologies"
        :key="index"
      >
        {{ tech }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    technologies: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.technologies ul {
  list-style: none;
}

ul li {
  padding-left: 20px;
}

ul li:before {
  content: "\2014";
  position: absolute;
  margin-left: -20px;
}

</style>
