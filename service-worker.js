if(!self.define){let e,r={};const n=(n,s)=>(n=new URL(n+".js",s).href,r[n]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=r,document.head.appendChild(e)}else e=n,importScripts(n),r()})).then((()=>{let e=r[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(r[t])return;let d={};const c=e=>n(e,t),f={module:{uri:t},exports:d,require:c};r[t]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(i(...e),d)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"b0fc9b8a348d80d150fe.svg",revision:null},{url:"docs/api-reference/index.js",revision:"994df973879a5edfee7aaae3f5bdcbbd"},{url:"docs/getting-started/installation.js",revision:"79119c972996ef1ea6d04a5928dd8cf2"},{url:"docs/getting-started/quick-start.js",revision:"58e77f9dd25fab44b8838f4f29f6c4cf"},{url:"docs/getting-started/usage.js",revision:"89a0711078e3299bf88af29c1ee11eec"},{url:"index.js",revision:"bd97b7fdfac5792f625cd7d2beb25028"},{url:"learn/components.js",revision:"d55597f917f5ff980026e9df1efab706"},{url:"learn/conditional-rendering.js",revision:"961ec2776a71ec19f95ba6e397b12b73"},{url:"learn/creating-an-element.js",revision:"ccb0bb8cb915d7428bbdd2bcc3d6388f"},{url:"learn/events-and-attributes.js",revision:"089c3ef651f6561872f0a6e2cc03fd1a"},{url:"learn/forms.js",revision:"74fc381deb13eb6db3d41576824a365a"},{url:"learn/index.js",revision:"592d72607793b4db1092f8695b6b6a63"},{url:"learn/state-management.js",revision:"864b3468361e9aa4c60accfcb7efe71c"},{url:"learn/whats-next.js",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{})}));
