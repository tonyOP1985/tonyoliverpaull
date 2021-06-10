<template>
  <footer>
    <div class="footer-container">
      <div class="footer-logo">
        <p>2021 Tony Oliver-Paull</p>
      </div>
      <div class="links">
        <div class="links-wrapper">
          <a href="https://github.com/tonyOP1985" target="_blank" class="btn icon">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="https://www.linkedin.com/in/tony-oliverpaull-62b21434/" target="_blank" class="btn icon">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          </a>
          <router-link to="/contact" class="btn icon">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  min-height: 100px;
  background-color: rgb(51, 51, 51);
  transition: all 0.2s ease;
  clear: both;
  display: flex;
  align-items: center;
}

.footer-container {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}

.footer-logo {
  width: 50%;
  height: 64px;
  display: flex;
}

.footer-logo p {
  color: #fff;
  padding-top: 10px;
  margin: auto;
  text-align: center;
}

.links {
  width: 50%;
}

.links-wrapper {
  width: 20%;
  margin: 0 auto;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  transition: all 0.2s ease;
}

.icon {
  color: #777;
  transition: all 0.2s ease;
  font-size: 2em;
}

a {
  text-decoration: none;
}

a:hover {
  color: #fff;
}

@media (max-width: 1170px) {
  .container {
    width: 100%;
  }
}

@media (max-width: 1000px) {
  .links-wrapper {
    width: 50%;
  }

  .footer-logo p {
    width: 100%;
  }
}

@media (max-width: 450px) {
  .footer-container {
    flex-direction: column;
  }

  .links-wrapper,
  .footer-logo {
    width: 100%;
  }

  .footer-logo p {
    padding-top: 0;
  }

  .links {
    order: 1;
    margin: 0 auto;
  }

  .footer-logo {
    order: 2;
  }
}
</style>
