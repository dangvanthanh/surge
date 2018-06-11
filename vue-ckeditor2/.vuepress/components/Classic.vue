<template>
  <div>
    <vue-ckeditor v-model="content" :config="config"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: `
        <h3>The three greatest things you learn from traveling</h3>
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

