module.exports = {
  title: 'Vue A11Y Katex',
  description: 'Katex using for Vue.js',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css'
      }
    ],
    [
      'script',
      {
        src: `https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/contrib/auto-render.min.js`
      }
    ]
  ],
  themeConfig: {
    repo: 'dangvanthanh/vue-a11y-katex',
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Inline Math', link: '/inline-math/' },
      { text: 'Block Math', link: '/block-math/' },
      { text: 'Element Math', link: '/element-math/' }
    ]
  }
};
