<template>
  <div class="contact">
    <h2>Contact me</h2>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';

import '../scss/contact.scss';

export default {
  name: 'Contact',
  components: {
    ContactForm,
  },
};
</script>
