<template>
  <div class="mt1">
    <tabs>
        <tab name="First tab">
            <vue-ckeditor v-model="content1" :config="config1"/>
        </tab>
        <tab name="Second tab">
            <vue-ckeditor v-model="content2" :config="config2"/>
        </tab>
    </tabs>
  </div>
</template>

<script>
import { Tabs, Tab } from 'vue-tabs-component';
import VueCkeditor from 'vue-ckeditor2';

export default {
  components: { Tabs, Tab, VueCkeditor },
  data() {
    return {
      content1: `Sample ckeditor 1`,
      config1: {
        toolbar: [
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
          }
        ],
        height: 200
      },
      content2: `Sample ckeditor 2`,
      config2: {
        toolbar: [
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
          }
        ],
        height: 200
      }
    };
  }
};
</script>

<style>
.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
  margin-bottom: 5px;
}

@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }
}

.tabs-component-tab {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}

.tabs-component-tab:hover {
  color: #666;
}

.tabs-component-tab.is-active {
  color: #000;
}

.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

@media (min-width: 700px) {
  .tabs-component-tab {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 3px 3px 0 0;
    margin-right: 0.5em;
    transform: translateY(0);
    transition: transform 0.3s ease;
  }

  .tabs-component-tab.is-active {
    border-bottom: solid 1px #fff;
    z-index: 2;
    transform: translateY(0);
  }
}

.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: 0.75em 1em;
  text-decoration: none;
}

.tabs-component-tab-a:hover,
.tabs-component-tab-a:focus {
  text-decoration: none !important;
}

.tabs-component-panels {
  padding: 4em 0;
}

@media (min-width: 700px) {
  .tabs-component-panels {
    border-top-left-radius: 0;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    padding: 4em 2em;
  }
}
</style>
