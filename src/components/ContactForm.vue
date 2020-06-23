<template>
    <form class="contact-form" action="https://mailthis.to/mgibas"
    method="POST">
      <input type="text" name="name" placeholder="Name">
      <input type="email" name="_replyto" placeholder="Email">
      <textarea name="message" placeholder="Enter your message here"></textarea>
      <input type="hidden" name="_after" value="https://mgibas.me/">
      <input type="hidden" name="_honeypot" value="">
      <input type="hidden" name="_confirmation" value="">
      <input type="submit" value="Send">
    </form>
</template>

<script>
export default {
  name: 'ContactForm',
};
</script>
