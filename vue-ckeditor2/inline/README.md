---
sidebar: auto
---

# Inline Editor

Inline editing is an innovative feature that can be used for content which needs to look like the final page, giving you a true WYSIWYG experience. Editing is enabled directly on HTML elements through the HTML5 contenteditable attribute. The editor toolbar appears automatically for these elements, floating on the page.

## Usage

```vue
<ckeditor v-model="content" :config="config" types="inline"></ckeditor>
```

## Demo

<inline />