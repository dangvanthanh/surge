<template>
  <div>
    <vue-ckeditor v-model="content" :config="config" types="inline" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: `
        <h3>Destination of the Month</h3>
        <h4>Valletta</h4>
      `,
      config: {
        toolbar: [
          ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript']
        ],
        height: 200
      }
    };
  }
};
</script>

