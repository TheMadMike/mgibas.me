<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Portfolio</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import './scss/app.scss';

export default {
  name: 'App',
};
</script>
