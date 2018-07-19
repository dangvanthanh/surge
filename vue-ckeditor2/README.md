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

### Component

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
import VueCkeditor from 'vue-ckeditor2';

export default {
  components: { VueCkeditor },
  data() {
    return {
      content: '',
      config: {
        toolbar: [
          ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript']
        ],
        height: 300
      }
    };
  },
  methods: {
    onBlur(editor) {
      console.log(editor);
    },
    onFocus(editor) {
      console.log(editor);
    }
  }
};
</script>
```

## Props

| Name                    | Type       | Description                                                              |
| ----------------------- | ---------- | ------------------------------------------------------------------------ |
| `name`                  | `String`   | Name of instance ckedior. **Default: editor-1**                          |
| `id`                    | `String`   | Id of instance ckedior. **Default: editor-1**                            |
| `types`                 | `String`   | Types of ckedior. **Default: classic**                                   |
| `config`                | `Object`   | All configuration of ckeditor. **Default: {}**                           |
| `instanceReadyCallback` | `Function` | Optional function that will be attached to CKEditor instanceReady event. |

## Contribute

Thanks to:

- [Eduárd Moldován](https://github.com/edimoldovan)
- [Dominique FERET](https://github.com/DominiqueFERET)
- [comfuture](https://github.com/comfuture)
- [旺旺](https://github.com/chengpan168)
- [Tony Yip](https://github.com/tonyhhyip)
- [Nedyalko Dyakov](https://github.com/ndyakov)
- [Bryan Miller](https://github.com/bryanjamesmiller)
- [Jeff Omiecinski](https://github.com/omiecinski)
- [rlfscin](https://github.com/rlfscin)
- [Renato Souza](https://github.com/renatosistemasvc)
- [Fernando Morgenstern](https://github.com/fernandomm)
