if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,o)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const c=e=>r(e,d),l={module:{uri:d},exports:n,require:c};i[d]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(o(...e),n)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"20d41f7f7bbe8592f120.svg",revision:null},{url:"2444c54fd88ae684e5a7.jpg",revision:null},{url:"b0fc9b8a348d80d150fe.svg",revision:null},{url:"d6a029feceede653615a.svg",revision:null},{url:"docs/about.js",revision:"a1bfd02658dc8f07883894e571343c8e"},{url:"docs/api-reference/api.js",revision:"441db416d8cfe5bb2014bafaddd0a196"},{url:"docs/installation.js",revision:"e671277d2d10883fb8957ef24cbb60ed"},{url:"docs/jsx-in-orbiton.js",revision:"743e8297612cb7c6117403ff754d5e12"},{url:"docs/the_orbiton_element.js",revision:"cd8c22a54a45d5fabac95dcf66b072b1"},{url:"docs/writing_your_first_app.js",revision:"191b3385b86441e6dd231db8cff5e843"},{url:"index.js",revision:"d4ea5c77026a41f380d094591a0dde53"}],{})}));
