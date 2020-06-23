<template>
  <div class="card">
    <img v-if="imgUrl !== ''" class="mini" :src=imgUrl>
    <h3>{{ name }}</h3>
    <p>
      {{ description }}
    </p>

    <div class="links">
      <a v-if=github :href=ghUrl>
        <i class="fab fa-github-square"></i>
      </a>

      <a v-if=web :href=webUrl>
        <i class="fas fa-globe"></i>
      </a>
    </div>

    <span class="langs">{{ langs }}</span>

  </div>
</template>

<script>
import '../scss/card.scss';

export default {
  name: 'ProjectCard',
  props: {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    ghUrl: {
      type: String,
      required: false,
      default: '',
    },

    webUrl: {
      type: String,
      required: false,
      default: '',
    },

    imgUrl: {
      type: String,
      required: false,
      default: '',
    },

    langs: {
      type: String,
      required: false,
    },
  },

  computed: {
    github() {
      return (this.ghUrl !== '');
    },
    web() {
      return (this.webUrl !== '');
    },
  },
};
</script>
