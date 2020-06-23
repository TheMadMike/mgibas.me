<template>
  <div class="portfolio">
    <h1>My projects</h1>
    <div class="projects"
    v-for="n in Math.ceil(projects.length / 3)"
    :key="n">
      <ProjectCard
        v-for="project in projects.slice((n-1)*3, ((n-1)*3)+3)"
        :key="project.id"
        :name="project.name"
        :description="project.description"
        :ghUrl="project.html_url"
        :webUrl="project.homepage"
      />
    </div>
  </div>
</template>

<script>
import '../scss/portfolio.scss';

import ProjectCard from '../components/ProjectCard.vue';
import fetchStarredRepos from '../repos';

export default {
  name: 'Portfolio',
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: {},
    };
  },
  mounted() {
    fetchStarredRepos().then((data) => {
      this.projects = data;
    });
  },
};
</script>
