---
sidebar: auto
---

# Introduction

::: tip
This is a documentation for Ckeditor 4 using Vue.js.
:::

## Getting Started

You need requirement [Ckeditor 4](https://ckeditor.com/ckeditor-4/) before use `vue-ckeditor2`.

To start using CKEditor 4 on your website, add a single `<script>` tag to your HTML page:

```html
<script src="https://cdn.ckeditor.com/4.10.0/standard/ckeditor.js"></script>
```

or

```html
<script src="path/to/ckeditor.js"></script>
```

### NPM

```
$ npm install vue-ckeditor2 --save
```

### CDN

```html
<script src="//unpkg.com/vue-ckeditor2"></script>
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
      @focus="onFocus($event)"
      @contentDom="onContentDom($event)"
      @dialogDefinition="onDialogDefinition($event)"
      @fileUploadRequest="onFileUploadRequest($event)"
      @fileUploadResponse="onFileUploadResponse($event)" />
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
    onBlur(evt) {
      console.log(evt);
    },
    onFocus(evt) {
      console.log(evt);
    },
    onContentDom(evt) {
      console.log(evt);
    },
    onDialogDefinition(evt) {
      console.log(evt);
    },
    onFileUploadRequest(evt) {
      console.log(evt);
    },
    onFileUploadResponse(evt) {
      console.log(evt);
    }
  }
};
</script>
```

## Props

| Name                    | Type       | Description                                                                  |
| ----------------------- | ---------- | ---------------------------------------------------------------------------- |
| `name`                  | `String`   | Name of instance ckedior. **Default: editor- **                              |
| `id`                    | `String`   | Id of instance ckedior. **Default: editor-1**                                |
| `types`                 | `String`   | Types of ckedior. **Default: classic**                                       |
| `config`                | `Object`   | All configuration of ckeditor. **Default: {}**                               |
| `instanceReadyCallback` | `Function` | Optional function that will be attached to CKEditor instanceReady event.     |
| `readOnlyMode`          | `Boolean`  | Option setReadOnly editor initializes in the proper mode. **Default: false** |

## Events

| Name                 | Description                                                                                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blur`               | Fired when the editor instance loses the input focus.                                                                                                             |
| `focus`              | Fired when the editor instance receives the input focus.                                                                                                          |
| `contentDom`         | Event fired when the editor content (its DOM structure) is ready                                                                                                  |
| `dialogDefinition`   | Event fired when a dialog definition is about to be used to create a dialog into an editor instance                                                               |
| `fileUploadRequest`  | Event fired when the [file loader](https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_fileTools_fileLoader.html) should send XHR                             |
| `fileUploadResponse` | Event fired when the [file loader](https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_fileTools_fileLoader.html) response is received and needs to be parsed |

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
- [Christoph-Wagner](https://github.com/Christoph-Wagner)
