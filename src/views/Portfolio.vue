<template>
  <div class="portfolio">
    <h1>My projects</h1>
    <div class="projects">
      <ProjectCard
        name="Test"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        ghUrl="#"
        webUrl="#"
      />
    </div>
  </div>
</template>

<script>
import '../scss/portfolio.scss';

import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'Portfolio',
  components: {
    ProjectCard,
  },
};
</script>
