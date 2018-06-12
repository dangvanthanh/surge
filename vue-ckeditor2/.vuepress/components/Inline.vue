<template>
  <div class="mt1">
    <vue-ckeditor v-model="content1" :config="config" types="inline" />
    <vue-ckeditor v-model="content2" :config="config" types="inline" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content1: `
        <h2>Simply delicious newsletter</h2>
        <h3>Food, travel and inspirations</h3>
      `,
      content2: `
        <h3>Friday favorites - Homemade pizza</h3>
        <p>Friday is finally here! I know it’s been an exhausting week and the last thing on your mind right now is getting stuck in the kitchen preparing a snack to accompany you during your regular Netflix session.</p>
        <p>Don’t worry - I have just the thing for you.</p>
        <p><a data-cke-saved-href="https://ckeditor.com/ckeditor-4/#" href="https://ckeditor.com/ckeditor-4/#">Find out how to prepare a delicious homemade pizza in 15 minutes!</a></p>
      `,
      config: {
        toolbar: [
          ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', 'NumberedList', 'BulletedList', 'Format', 'FontSize']
        ],
        height: 200
      }
    };
  }
};
</script>

