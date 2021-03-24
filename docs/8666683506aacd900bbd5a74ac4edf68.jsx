
    (function({C,directs,wx}, remotes) {
      remotes['NavBar'] = props => {
  fre.useEffect(() => {
    const params = window.getUrl(window.location.href);
    onLoad && onLoad(params);
    return onUnload && onUnload(params);
  }, []);
  const {
    properties: {
      text,
      back
    },
    methods: {
      backTo
    },
    onLoad,
    onUnload
  } = useComponent(fre.useState({})[1], props, 'nav-bar');
  return fre.h(fre.Fragment, null, fre.h(remotes.View, {
    class: "navbar",
    "data-w-706acf": true
  }, fre.h(remotes.View, {
    class: "title-container",
    "data-w-706acf": true
  }, !back ? fre.h(remotes.View, {
    class: "title",
    "data-w-706acf": true
  }, text) : null, back ? fre.h(remotes.View, {
    class: "title",
    onClick: e => backTo(e),
    "data-w-706acf": true
  }, "<") : null)));
};

const $3 = props => {
  fre.useEffect(() => {
    const params = window.getUrl(window.location.href);
    onLoad && onLoad(params);
    return onUnload && onUnload(params);
  }, []);
  const {
    data: {
      navigationBarTitle,
      item,
      imgItem,
      feedList
    },
    onLoad,
    onUnload,
    viewSiteDetails,
    viewImageDetails
  } = usePage(fre.useState({})[1], props);
  return fre.h(fre.Fragment, null, fre.h(remotes.View, null, fre.h(remotes.NavBar, {
    text: navigationBarTitle
  }), fre.h(remotes.View, {
    class: "container",
    "data-w-8bb6c1": true
  }, $for(feedList, item => fre.h(remotes.Block, null, item.type == "multi-photo" ? fre.h(remotes.View, {
    class: "post-item",
    "data-w-8bb6c1": true
  }, fre.h(remotes.View, {
    class: "post-item-header",
    "data-w-8bb6c1": true
  }, fre.h(remotes.Image, {
    class: "author-avatar",
    src: item.site.icon,
    "data-site-id": item.site.site_id,
    "data-site-name": item.site.name,
    "data-site-icon": item.site.icon,
    "data-site-description": item.site.description,
    "data-site-followers": item.site.followers,
    onClick: e => viewSiteDetails(e),
    "data-w-8bb6c1": true
  }), fre.h(remotes.Text, {
    class: "author-name",
    "data-w-8bb6c1": true
  }, item.site.name)), $for(item.images, imgItem => fre.h(remotes.Block, null, fre.h(remotes.Image, {
    class: "post-item-image",
    src: `https://photo.tuchong.com/${item.author_id}/ft640/${imgItem.img_id}.jpg`,
    "data-src": `https://photo.tuchong.com/${item.author_id}/f/${imgItem.img_id}.jpg`,
    "data-images": item.images,
    mode: "widthFix",
    onClick: e => viewImageDetails(e),
    "data-w-8bb6c1": true
  }))), fre.h(remotes.View, {
    class: "post-item-footer",
    "data-w-8bb6c1": true
  }, fre.h(remotes.View, {
    class: "post-item-footer-summary",
    "data-w-8bb6c1": true
  }, fre.h(remotes.Text, null, item.title ? fre.h(remotes.Text, {
    class: "subtitle",
    "data-w-8bb6c1": true
  }, "\u300A", item.title, "\u300B") : null, fre.h(remotes.Text, {
    class: "content",
    "data-w-8bb6c1": true
  }, item.content))), fre.h(remotes.View, {
    class: "post-item-footer-func",
    "data-w-8bb6c1": true
  }, fre.h(remotes.Icon, {
    type: "like",
    class: "icon",
    "data-w-8bb6c1": true
  }), fre.h(remotes.Text, {
    class: "likes-num",
    "data-w-8bb6c1": true
  }, item.favorites), fre.h(remotes.Icon, {
    type: "comment",
    class: "icon",
    "data-w-8bb6c1": true
  }), fre.h(remotes.Text, {
    class: "comments-num",
    "data-w-8bb6c1": true
  }, item.comments)))) : null)), fre.h(remotes.View, {
    class: "no-data",
    "data-w-8bb6c1": true
  }, "\u2014\u2014\u6211\u662F\u6709\u5E95\u7EBF\u7684\u2014\u2014"))));
};


    window['berial-jbnynx'] = {
      async bootstrap({host}){
        const div = document.createElement('div');
        div.id = "root";
        host.appendChild(div)
      },
      async mount({host}){
        window.remotes.host = host;
        fre.render(fre.h('div',{},fre.h($3)),host.getElementById("root"));
      },
      async unmount({host}){
        host.getElementById("root").innerHTML = ""
      }
    }
    
    })(window,window.remotes);
    