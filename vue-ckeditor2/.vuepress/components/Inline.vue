<template>
  <div class="mt1">
    <vue-ckeditor v-model="content" :config="config" types="inline" :readOnlyMode="readOnlyMode" />
    <button @click="changeReadOnly" class="btn">Change Read Only</button>
  </div>
</template>

<script>
import VueCkeditor from 'vue-ckeditor2';

const users = [
  {
    id: 1,
    avatar: '1',
    fullname: 'Dang Van Thanh',
    username: 'dangvanthanh'
  },
  { id: 2, avatar: '2', fullname: 'Truong Phuong', username: 'truongphuong' },
  {
    id: 3,
    avatar: '3',
    fullname: 'Vo Thanh Phong',
    username: 'vothanhphong'
  },
  {
    id: 4,
    avatar: '4',
    fullname: 'Nguyen Tri Tin',
    username: 'nguyentritin'
  },
  {
    id: 5,
    avatar: '5',
    fullname: 'Tran Thanh Tung',
    username: 'tungthanhtung'
  },
  { id: 6, avatar: '6', fullname: 'Sy Phu', username: 'syphu' },
  { id: 7, avatar: '7', fullname: 'Cuong Gia', username: 'cuonggia' },
  { id: 8, avatar: '8', fullname: 'Nguyen Vu', username: 'nguyenvu' },
  {
    id: 9,
    avatar: '9',
    fullname: 'Nguyen Van Tuan',
    username: 'nguyenvantuan'
  },
  {
    id: 10,
    avatar: '10',
    fullname: 'Dang Minh Khai',
    username: 'dangminhkhai'
  },
  { id: 11, avatar: '11', fullname: 'Tran Khoa', username: 'trankhoa' },
  { id: 12, avatar: '12', fullname: 'Tu Hoang', username: 'tuhoang' },
  { id: 13, avatar: '13', fullname: 'Hoang Le', username: 'hoangle' },
  { id: 14, avatar: '14', fullname: 'Khoi De', username: 'khoide' }
];

const tags = [
  'vietnam',
  'dev',
  'pes',
  'qc',
  'ui',
  'net',
  'football',
  'girl',
  'family',
  'canada',
  'usa'
];

let dataFeed = function(opts, callback) {
  let matchProperty = 'username';
  let data = users
    .filter(item => item[matchProperty].indexOf(opts.query.toLowerCase()) == 0)
    .sort((a, b) => {
      return a[matchProperty].localeCompare(b[matchProperty], undefined, {
        sensitivity: 'accent'
      });
    });

  callback(data);
};

export default {
  components: { VueCkeditor },
  data() {
    return {
      content: `
        <h3>Friday favorites - Homemade pizza</h3>
        <p>Friday is finally here! I know it’s been an exhausting week and the last thing on your mind right now is getting stuck in the kitchen preparing a snack to accompany you during your regular Netflix session.</p>
        <p>Don’t worry - I have just the thing for you.</p>
        <p><a data-cke-saved-href="https://ckeditor.com/ckeditor-4/#" href="https://ckeditor.com/ckeditor-4/#">Find out how to prepare a delicious homemade pizza in 15 minutes!</a></p>
      `,
      config: {
        mentions: [
          {
            feed: dataFeed,
            itemTemplate:
              '<li data-id="{id}">' +
              '<img class="photo" src="https://randomuser.me/api/portraits/men/{avatar}.jpg" />' +
              '<strong class="username">{username}</strong>' +
              '<span class="fullname">{fullname}</span>' +
              '</li>',
            outputTemplate:
              '<a href="mailto:{username}@example.com">@{username}</a><span>&nbsp;</span>',
            minChars: 0
          },
          {
            feed: tags,
            marker: '#',
            itemTemplate: '<li data-id="{id}"><strong>{name}</strong></li>',
            outputTemplate:
              '<a href="https://example.com/social?tag={name}">{name}</a><span>&nbsp;</span>',
            minChars: 1
          }
        ],
        toolbar: [
          { name: 'document', items: ['Undo', 'Redo'] },
          { name: 'heading', items: ['Format', 'FontSize'] },
          { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline'] },
          { name: 'links', items: ['Link', 'Unlink'] }
        ],
        contentsCss: [
          'https://cdn.ckeditor.com/4.10.0/full-all/contents.css',
          'assets/mentions/contents.css'
        ],
        extraPlugins: 'mentions,emoji,autocomplete',
        removeDialogTabs: 'image:advanced;link:advanced;link:target',
        throttle: 200,
        height: 200
      },
      readOnlyMode: true
    };
  },
  methods: {
    changeReadOnly() {
      this.readOnlyMode = !this.readOnlyMode;
    }
  }
};
</script>

<style>
.cke_autocomplete_panel {
  position: absolute;
  display: none;
  box-sizing: border-box;
  width: 200px;
  max-height: 300px;
  overflow: auto;
  padding: 0;
  margin: 0;
  list-style: none;
  background: #fff;
  border: 1px solid #b6b6b6;
  border-bottom-color: #999;
  border-radius: 3px;
  font: 12px Arial, Helvetica, Tahoma, Verdana, Sans-Serif;
}
.cke_autocomplete_opened {
  display: block;
}
.cke_autocomplete_panel > li {
  padding: 5px;
}
.cke_autocomplete_panel > li:hover {
  cursor: pointer;
}
.cke_autocomplete_selected,
.cke_autocomplete_panel > li:hover {
  background-color: #eff0ef;
}

ul.cke_autocomplete_panel {
  width: 250px;
}

ul.cke_autocomplete_panel .photo {
  display: inline-block;
  vertical-align: middle;
  height: 30px;
  border-radius: 50%;
}

.cke_autocomplete_panel .username {
  padding-left: 5px;
}

.cke_autocomplete_panel .fullname {
  padding-left: 5px;
  color: #b7b7b7;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
}
</style>
