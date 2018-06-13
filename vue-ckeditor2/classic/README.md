---
sidebar: auto
---

# Classic Editor

Classic editing is still probably the most common way to use CKEditor. In this usage scenario the editor is most often represented by a toolbar and an editing area placed in a specific position on the page, usually as a part of a form that you use to submit some content to the server. Sometimes it is also called “framed editing”, because in this case the editor creates a temporary `<iframe>` element for itself.

## Usage

```vue
<ckeditor v-model="content" :config="config"></ckeditor>
```

## Demo

<classic />