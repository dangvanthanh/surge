<template>
  <div class="mt1">
    <vue-ckeditor v-model="content" :config="config"/>
    <div>{{ content }}</div>
  </div>
</template>

<script>
import VueCkeditor from 'vue-ckeditor2';

export default {
  components: { VueCkeditor },
  data() {
    return {
      content: `
        <h2>Essential things to think about before starting a blog</h2>
        <p>It has been exactly 3 years since I wrote my first blog series entitled “Flavorful Tuscany”, but starting it was definitely not easy. Back then, I didn’t know much about blogging, let alone think that one day it could become <strong>my full-time job</strong>. Even though I had many recipes and food-related stories to tell, it never crossed my mind that I could be sharing them with the whole world</p>
        <p>I am now a <strong>full-time blogger</strong> and the curator of the <a data-cke-saved-href="https://ckeditor.com/ckeditor-4/#" href="https://ckeditor.com/ckeditor-4/#">Simply delicious newsletter</a>, sharing stories about traveling and cooking, as well as tips on how to run a successful blog.</p>
        <p>If you are tempted by the idea of creating your own blog, please think about the following:</p>
        <ul><li>Male / Female</li><li>Graduate of [[Internal Auditing]] / Accountancy or any related Business course</li><li>With at least minimum of 6 months experience on the same field but not necessary</li><li>With above average of communication skills in both oral and written English</li><li>Proficient in MS Office</li><li>Willing to be assigned in Pasig City and willing to do periodic travels to Batangas, Laguna, Cavite and Clark areas</li><li>Open to all fresh graduates&nbsp;</li></ul>
        <figure class="easyimage easyimage-full">
          <img alt="Three Monks walking on ancient temple." width="912" sizes="100vw" src="https://cdn.dribbble.com/users/458522/screenshots/4615441/attachments/1043210/deadpool_love_add.jpg" />
          <figcaption></figcaption>
        </figure>
        <ul><li>Your story (what do you want to tell your audience)</li><li>Your audience (who do you write for)</li><li>Your blog name and design</li></ul>
        <p>After you get your head around these 3 essentials, all you have to do is grab your keyboard and the rest will follow.</p>
      `,
      config: {
        mentions: [
          { feed: ['Dang Thanh', 'Sinh Hoa Long', 'Tuan Vo'], marker: '@' }
        ],
        toolbar: [
          {
            name: 'clipboard',
            items: ['Undo', 'Redo']
          },
          { name: 'styles', items: ['Styles', 'Format'] },
          {
            name: 'basicstyles',
            items: [
              'Bold',
              'Italic',
              'Strike',
              '-',
              'Subscript',
              'Superscript',
              'RemoveFormat'
            ]
          },
          {
            name: 'pagragraph',
            items: [
              'NumberedList',
              'BulletedList',
              '-',
              'Outdent',
              'Indent',
              '-',
              'Blockquote'
            ]
          },
          {
            name: 'links',
            items: ['Link', 'Unlink']
          },
          {
            name: 'insert',
            items: ['Image', 'EasyImageUpload', 'CreatePlaceholder']
          }
        ],
        height: 200,
        extraPlugins:
          'image2,autogrow,xml,ajax,cloudservices,balloonpanel,balloontoolbar,imagebase,easyimage,placeholder,mentions,emoji,autocomplete',
        emovePlugins: 'image',
        cloudServices_tokenUrl:
          'https://33372.cke-cs.com/token/dev/kquv5QAPjvSD8p7GYFSFa3uKP6OcikCtjcyDpqW1Aqy3eotwe2pPLVdAjJVu',
        cloudServices_uploadUrl: 'https://33372.cke-cs.com/easyimage/upload/',
        easyimage_styles: {
          gradient1: {
            group: 'easyimage-gradients',
            attributes: {
              class: 'easyimage-gradient-1'
            },
            label: 'Blue Gradient',
            icon:
              'https://sdk.ckeditor.com/../samples/assets/easyimage/icons/gradient1.png',
            iconHiDpi:
              'https://sdk.ckeditor.com/../samples/assets/easyimage/icons/hidpi/gradient1.png'
          },
          gradient2: {
            group: 'easyimage-gradients',
            attributes: {
              class: 'easyimage-gradient-2'
            },
            label: 'Pink Gradient',
            icon:
              'https://sdk.ckeditor.com/../samples/assets/easyimage/icons/gradient2.png',
            iconHiDpi:
              'https://sdk.ckeditor.com/../samples/assets/easyimage/icons/hidpi/gradient2.png'
          },
          noGradient: {
            group: 'easyimage-gradients',
            attributes: {
              class: 'easyimage-no-gradient'
            },
            label: 'No Gradient',
            icon:
              'https://sdk.ckeditor.com/../samples/assets/easyimage/icons/nogradient.png',
            iconHiDpi:
              'https://sdk.ckeditor.com/../samples/assets/easyimage/icons/hidpi/nogradient.png'
          }
        },
        easyimage_toolbar: [
          'EasyImageFull',
          'EasyImageSide',
          'EasyImageGradient1',
          'EasyImageGradient2',
          'EasyImageNoGradient',
          'EasyImageAlt'
        ],
        autoGrow_minHeight: 200,
        autoGrow_maxHeight: 600
      }
    };
  }
};
</script>
