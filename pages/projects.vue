<template>
  <div>
    <Jumbotron marginBottom>
      <template #content>
        <div class="title-main">
          <h1>Projects</h1>
        </div>
      </template>
    </Jumbotron>
    <Project
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
    />
  </div>
</template>

<script>
import Jumbotron from '@/components/content/Jumbotron'
import Project from '@/components/content/Project'

export default {
  components: {
    Jumbotron,
    Project
  },

  data () {
    return {
      // TODO: prodects will come from server in future
      projects: [
        {
          image: '/img/p4p.png',
          title: 'Pluto For Planet',
          text: 'Local band website (still in progess).',
          alt: 'Pluto For Planet',
          technology: ['Nuxt.js', 'SASS'],
          projectLink: 'https://p4pdemo.herokuapp.com/',
          code: ''
        },
        {
          image: '/img/portfolio-page-2018-1.png',
          title: 'Tony Oliver-Paull',
          text: 'Current portfolio page.',
          alt: 'Tony Oliver-Paull portfolio page',
          technology: ['Vue.js', 'Vue-router', 'Axios', 'Node.js', 'Express', 'Nodemailer'],
          projectLink: '',
          code: 'https://github.com/tonyOP1985/Portfolio-Page-2'
        },
        {
          image: '/img/pool-pro.png',
          title: 'Pool Pros',
          text: 'Home page for fictious web site.',
          alt: 'Pool Pros',
          technology: ['Vue.js', 'SCSS'],
          projectLink: 'https://pool-pros-tonyop.herokuapp.com/',
          code: 'https://github.com/tonyOP1985/Pool-Pros'
        },
        {
          image: '/img/cloudy-day.svg',
          title: 'Weather App',
          text: 'Simple weather app.',
          alt: 'Weather App Cloud Icon',
          technology: ['Vue.js', 'Axios', 'Dark Sky API', 'Google Maps Geocoding API', 'Express'],
          projectLink: 'https://localweatherapp-tonyop.herokuapp.com/',
          code: 'https://github.com/tonyOP1985/local-weather-app/tree/master/local-weather'
        },
        {
          image: '/img/musicHistoryQuiz.png',
          title: 'Music History Quiz',
          text: 'Quiz built for a few music students.',
          alt: 'Music History Quiz',
          technology: ['Vue.js'],
          projectLink: 'https://music-history-quiz.herokuapp.com/',
          code: 'https://github.com/tonyOP1985/music-history-quiz'
        },
        {
          image: '/img/tonyProjectImg.png',
          title: 'Portfolio Page v1',
          text: 'First version of my portfolio page.',
          alt: 'Tony Oliver-Paull',
          technology: ['Vue.js', 'Vue-router', 'Bootstrap-Vue', 'Nodemailer', 'Express'],
          projectLink: 'https://tonyop-portfolio-v1.herokuapp.com/',
          code: 'https://github.com/tonyOP1985/Portfolio-Page'
        },
        {
          image: '/img/hangManThumbNail.png',
          title: 'Hangman',
          text: 'Hangman game with astronomy terms.',
          alt: 'Hangman image',
          technology: ['Javascript', 'jQuery', 'HTML', 'CSS'],
          projectLink: 'https://ancient-journey-60616.herokuapp.com/',
          code: 'https://github.com/tonyOP1985/NodeHangMan'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.title-main {
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
  text-align: center;

  h1 {
    color: #fff;
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 3.5rem;
  }
}

@media (max-width: 500px) {
  .title-main h1 {
    font-size: 2.5rem;
  }
}
</style>
