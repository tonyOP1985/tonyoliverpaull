<template>
  <section>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <a
          v-if="item.href"
          :href="item.href"
          target="_blank"
          class="btn"
        >
          <font-awesome-icon :icon="item.icon" class="icon" />
          {{ item.title }}
        </a>
        <button
          v-else
          v-clipboard:copy="email"
          v-clipboard:success="onCopy"
          class="btn copy-btn"
        >
          <font-awesome-icon :icon="item.icon" class="icon" />
          {{ item.title }}
          <img v-if="showCheck" src="/img/check-solid.svg" alt="copy successful">
          <img v-else src="/img/copy-regular.svg" alt="copy">
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      email: 'toliverpaull@gmail.com',
      showCheck: false,
      items: [
        {
          icon: ['fab', 'linkedin-in'],
          title: 'LinkedIn',
          href: 'https://www.linkedin.com/in/tony-oliverpaull-62b21434/'
        },
        {
          icon: ['fab', 'github'],
          title: 'GitHub',
          href: 'https://github.com/tonyOP1985'
        },
        {
          icon: ['fas', 'envelope'],
          title: 'toliverpaull@gmail.com'
        }
      ]
    }
  },

  methods: {
    onCopy () {
      this.showCheck = true
      setTimeout(() => { this.showCheck = false }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  width: 40%;
  margin: 30px auto 0;
  background: #fff;
  padding: 50px 10px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
  flex-direction: column;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.icon {
  margin: 0 10px;
}

.btn {
  display: flex;
  align-items: center;
  width: 380px;
  height: 41px;
  padding-top: 2px;
  margin: 1rem auto;
  font-size: 16px;
  letter-spacing: 2px;
  border: 1px #ccc solid;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.8);
  transition: all 0.2s ease;
  font-family: 'Montserrat', sans-serif;

  img {
    height: 1.2rem;
    margin: 0 0.5rem 0 auto;
    display: none;
    transition: all 0.2s ease;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);

    img {
      display: block;
    }
  }
}

.copy-btn {
  background: #fff;
  cursor: pointer;
}

@media (max-width: 1000px) {
  .btn {
    font-size: 14px;
  }

  section {
    width: 400px;
  }
}

@media (max-width: 770px) {
  section {
    width: 100%;
  }

  .btn {
    width: 288px;
  }
}
</style>
