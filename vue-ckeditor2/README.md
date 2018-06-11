---
sidebar: auto
---

# Introduction

::: tip
This is a documentation for Ckeditor 4 using Vue.js.
:::

## Getting Started

### NPM

```
$ npm install vue-ckeditor2 --save
```

### CDN 

```html
<script src="https://unpkg.com/vue-ckeditor2"></script>
```

## Usage

```javascript
import Vue from 'vue';
import VueCkeditor from 'vue-ckeditor2';

Vue.use(VueCkeditor);
```

In your component

```vue
<template>
  <div>
    <vue-ckeditor 
      v-model="content" 
      :config="config" 
      @blur="onBlur($event)" 
      @focus="onFocus($event)" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      config: {
        toolbar: [
          [ 
            'Bold', 'Italic', 'Underline', 
            'Strike', 'Subscript', 'Superscript'
          ]
        ],
        height: 300
      }
    }
  },
  methods: {
    onBlur (editor) {
      console.log(editor)
    },
    onFocus (editor) {
      console.log(editor)
    }
  }
}
</script>
```

## Props

| Name           | Type     | Description                              |
| -------------- | -------- | ---------------------------------------- |
| `name`         | `String` | Name of instance ckedior. |
| `id`           | `String` | Id of instance ckedior. |
| `types`        | `String` | Types of ckedior. **Default: classic** |
| `config`       | `Object` | All configuration of ckeditor. **Default: {}** |