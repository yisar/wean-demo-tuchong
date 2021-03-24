
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
    "data-w-e4add7": true
  }, fre.h(remotes.View, {
    class: "title-container",
    "data-w-e4add7": true
  }, !back ? fre.h(remotes.View, {
    class: "title",
    "data-w-e4add7": true
  }, text) : null, back ? fre.h(remotes.View, {
    class: "title",
    onClick: e => backTo(e),
    "data-w-e4add7": true
  }, "<") : null)));
};

const $4 = props => {
  fre.useEffect(() => {
    const params = window.getUrl(window.location.href);
    onLoad && onLoad(params);
    return onUnload && onUnload(params);
  }, []);
  const {
    data: {
      siteIcon,
      siteName,
      siteDescription,
      followNum,
      siteFollowers,
      counts,
      item,
      postList
    },
    onLoad,
    onUnload,
    viewImagesDetails
  } = usePage(fre.useState({})[1], props);
  return fre.h(fre.Fragment, null, fre.h(remotes.View, null, fre.h(remotes.NavBar, {
    back: true
  }), fre.h(remotes.View, {
    class: "container",
    "data-w-5e732a": true
  }, fre.h(remotes.View, {
    class: "site-box",
    "data-w-5e732a": true
  }, fre.h(remotes.View, {
    class: "site-header",
    "data-w-5e732a": true
  }, fre.h(remotes.Image, {
    class: "site-header-image",
    src: siteIcon,
    "data-w-5e732a": true
  }), fre.h(remotes.Text, {
    class: "site-header-name",
    "data-w-5e732a": true
  }, siteName)), siteDescription ? fre.h(remotes.Text, {
    class: "site-intro",
    "data-w-5e732a": true
  }, siteDescription) : !siteDescription ? fre.h(remotes.Text, {
    class: "site-intro",
    "data-w-5e732a": true
  }, "\u6682\u65E0\u7B80\u4ECB") : null, fre.h(remotes.View, {
    class: "site-info",
    "data-w-5e732a": true
  }, fre.h(remotes.Text, {
    class: "follow-text",
    "data-w-5e732a": true
  }, "\u5173\u6CE8"), fre.h(remotes.Text, {
    class: "follow-num",
    "data-w-5e732a": true
  }, followNum), fre.h(remotes.Text, {
    class: "fans-text",
    "data-w-5e732a": true
  }, "\u7C89\u4E1D"), fre.h(remotes.Text, {
    class: "fans-num",
    "data-w-5e732a": true
  }, siteFollowers))), fre.h(remotes.View, {
    class: "func-bar",
    "data-w-5e732a": true
  }, fre.h(remotes.View, {
    class: "production",
    "data-w-5e732a": true
  }, fre.h(remotes.Text, {
    class: "production-num",
    "data-w-5e732a": true
  }, counts), fre.h(remotes.Text, {
    class: "production-name",
    "data-w-5e732a": true
  }, "\u4F5C\u54C1")), fre.h(remotes.View, {
    class: "favorite",
    "data-w-5e732a": true
  }, fre.h(remotes.Text, {
    class: "favorite-num",
    "data-w-5e732a": true
  }, "0"), fre.h(remotes.Text, {
    class: "favorite-name",
    "data-w-5e732a": true
  }, "\u559C\u6B22")), fre.h(remotes.View, {
    class: "activity",
    "data-w-5e732a": true
  }, fre.h(remotes.Text, {
    class: "activity-num",
    "data-w-5e732a": true
  }, "0"), fre.h(remotes.Text, {
    class: "activity-name",
    "data-w-5e732a": true
  }, "\u6D3B\u52A8"))), fre.h(remotes.View, {
    class: "post-item-box",
    "data-w-5e732a": true
  }, $for(postList, item => fre.h(remotes.Block, null, item.type == "multi-photo" ? fre.h(remotes.View, {
    class: "post-item",
    "data-w-5e732a": true
  }, fre.h(remotes.View, {
    class: "post-item-title",
    "data-w-5e732a": true
  }, fre.h(remotes.Text, null, item.title)), fre.h(remotes.Image, {
    class: "post-item-image",
    mode: "aspectFill",
    src: `https://photo.tuchong.com/${item.images[0].user_id}/g/${item.images[0].img_id}.jpg`,
    "data-src": `https://photo.tuchong.com/${item.images[0].user_id}/f/${item.images[0].img_id}.jpg`,
    "data-images": item.images,
    onClick: e => viewImagesDetails(e),
    "data-w-5e732a": true
  }), fre.h(remotes.View, {
    class: "post-item-footer-func",
    "data-w-5e732a": true
  }, fre.h(remotes.Image, {
    class: "post-item-footer-icon",
    src: "/images/likes_white.png",
    "data-w-5e732a": true
  }), fre.h(remotes.Text, {
    class: "likes-num",
    "data-w-5e732a": true
  }, item.favorites), fre.h(remotes.Image, {
    class: "post-item-footer-icon",
    src: "/images/comments_white.png",
    "data-w-5e732a": true
  }), fre.h(remotes.Text, {
    class: "comments-num",
    "data-w-5e732a": true
  }, item.comments), fre.h(remotes.Image, {
    class: "post-item-footer-icon",
    src: "/images/photos_white.png",
    "data-w-5e732a": true
  }), fre.h(remotes.Text, {
    class: "photos-num",
    "data-w-5e732a": true
  }, item.image_count))) : null)), fre.h(remotes.View, {
    class: "no-data",
    "data-w-5e732a": true
  }, "\u2014\u2014\u6211\u662F\u6709\u5E95\u7EBF\u7684\u2014\u2014")))));
};


    window['berial-krbhcd'] = {
      async bootstrap({host}){
        const div = document.createElement('div');
        div.id = "root";
        host.appendChild(div)
      },
      async mount({host}){
        window.remotes.host = host;
        fre.render(fre.h('div',{},fre.h($4)),host.getElementById("root"));
      },
      async unmount({host}){
        host.getElementById("root").innerHTML = ""
      }
    }
    
    })(window,window.remotes);
    