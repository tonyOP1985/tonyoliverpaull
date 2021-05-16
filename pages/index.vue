<template>
  <div>
    <Jumbotron>
      <template #content>
        <div class="body-container">
          <header class="header-main">
            <div class="text-box">
              <div class="heading-primary">
                <span class="heading-primary-main">Tony Oliver-Paull &mdash;</span>
                <span class="heading-primary-sub">Full-Stack Web Developer</span>
              </div>
            </div>
            <div class="link-box">
              <div class="links">
                <a href="https://github.com/tonyOP1985" target="_blank" class="btn icon">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
                <a href="https://www.linkedin.com/in/tony-oliverpaull-62b21434/" target="_blank" class="btn icon">
                  <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                </a>
                <router-link to="/contact" class="btn icon">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                </router-link>
                <a href="../../static/Anthony_Oliver-Paull_Resume_2018.pdf" target="_blank" class="btn resume">résumé</a>
              </div>
            </div>
          </header>
        </div>
      </template>
    </Jumbotron>
  </div>
</template>

<script>
import Jumbotron from '@/components/content/Jumbotron'

export default {
  components: {
    Jumbotron
  }
}
</script>

<style lang="scss" scoped>
.body-container {
  width: 900px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-main {
  width: 100%;
}

.text-box {
  width: 80%;
  margin: 0 auto;
}

.text-box,
.link-box {
  text-align: center;
}

.heading-primary {
  width: 100%;
  font-size: 1.7rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
}

.link-box {
  width: 100%;
  margin: 20px auto 0 auto;
}

.links {
  width: 255px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
}

.icon {
  padding-top: 0.15em;
  display: block;
  position: relative;
  text-align: left;
  width: 41px;
  height: 41px;
  border-radius: 100%;
  color: rgba(238, 237, 237, 0.8);
  transition: all 0.2s ease;
  font-size: 1.34em;
}

a {
  text-decoration: none;
}

.resume {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 115px;
  height: 41px;
  padding-top: 2px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  border: 1px solid rgba(238, 237, 237, 0.8);
  border-radius: 5px;
  color: rgba(238, 237, 237, 0.8);
  text-transform: uppercase;
  transition: all 0.2s ease;
}

.btn:hover {
  color: #fff;
  border-color: #fff;
}

@media (max-width: 1200px) {
  .body-container {
    width: 80%;
  }

  .greeting {
    width: 100%;
    font-size: 8rem;
  }

  .text-box {
    margin: 0 auto;
  }
}

@media (max-width: 1000px) {
  .text-box {
    margin: 0 auto;
  }
}

@media (max-width: 770px) {
  .body-container {
    width: 100%;
  }

  .greeting {
    font-size: 6rem;
    margin-left: 8px;
  }

  .text-box {
    width: 100%;
  }

  .link-box {
    width: 100%;
  }
}

@media (max-width: 400px) {
  .heading-primary {
    font-size: 1.2rem;
  }
}

@media (max-width: 360px) {
  .greeting {
    font-size: 4rem;
  }

  .icon {
    margin-right: 5px;
  }

  .links {
    width: 250px;
    margin: 0 auto;
  }
}
</style>
