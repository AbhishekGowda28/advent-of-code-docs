"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3968],{1488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(7624),s=t(2172),r=t(1268),i=t(5388);const l={slug:"setting-up-new-dev-env",title:"A new setup",description:"This is notes for my personal use",authors:["abhi"],tags:["nx","package-based","ssh","gitlab","github"]},o=void 0,c={permalink:"/advent-of-code-docs/blog/setting-up-new-dev-env",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-08-25-setting-up-new-dev-env.mdx",source:"@site/blog/2024-08-25-setting-up-new-dev-env.mdx",title:"A new setup",description:"This is notes for my personal use",date:"2024-08-25T00:00:00.000Z",formattedDate:"August 25, 2024",tags:[{label:"nx",permalink:"/advent-of-code-docs/blog/tags/nx"},{label:"package-based",permalink:"/advent-of-code-docs/blog/tags/package-based"},{label:"ssh",permalink:"/advent-of-code-docs/blog/tags/ssh"},{label:"gitlab",permalink:"/advent-of-code-docs/blog/tags/gitlab"},{label:"github",permalink:"/advent-of-code-docs/blog/tags/github"}],readingTime:1.44,hasTruncateMarker:!1,authors:[{name:"Abhishek Gowda",title:"Owner of this source",url:"https://github.com/abhishekgowda28",imageURL:"https://gitlab.com/uploads/-/system/user/avatar/8594191/avatar.png",key:"abhi"}],frontMatter:{slug:"setting-up-new-dev-env",title:"A new setup",description:"This is notes for my personal use",authors:["abhi"],tags:["nx","package-based","ssh","gitlab","github"]},unlisted:!1,nextItem:{title:"Adding new packages to nx",permalink:"/advent-of-code-docs/blog/adding-new-packages"}},u={authorsImageUrls:[void 0]},d=[{value:"Setting up SSH key",id:"setting-up-ssh-key",level:2},{value:"Adding SSH key in gitlab",id:"adding-ssh-key-in-gitlab",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["I am assuming this is a new machine setup or a machine which is occasionally used and does not contain any previous setup.\nAnd for most part I will be talking about ",(0,a.jsx)(n.strong,{children:"Linux"})," machine"]})}),"\n",(0,a.jsx)(n.h2,{id:"setting-up-ssh-key",children:"Setting up SSH key"}),"\n",(0,a.jsx)(n.h3,{id:"adding-ssh-key-in-gitlab",children:"Adding SSH key in gitlab"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Sign in to gitlab"}),"\n",(0,a.jsx)(n.li,{children:"Click on your user profile.\nYou should see a dropdown modal"}),"\n",(0,a.jsxs)(n.li,{children:["Click preference on it. You will be taken to the ",(0,a.jsx)(n.a,{href:"https://gitlab.com/-/profile/preferences",children:"preference page"})," of your profile"]}),"\n",(0,a.jsxs)(n.li,{children:['Look for SSH keys on the left navigation.\nIf left navigation is closed click on "Sidebar Navigation" button or press ',(0,a.jsx)(n.code,{children:"Ctrl+\\"}),". Navigation sidebar will open."]}),"\n",(0,a.jsxs)(n.li,{children:["You should now be in ",(0,a.jsx)(n.a,{href:"https://gitlab.com/-/user_settings/ssh_keys",children:"SSH keys page"})]}),"\n",(0,a.jsxs)(n.li,{children:["Locate ",(0,a.jsx)(n.strong,{children:"Add new key"})," button"]}),"\n",(0,a.jsx)(n.li,{children:"Click on it \u261d\ufe0f (Add new key)"}),"\n",(0,a.jsx)(n.li,{children:"In your machine"}),"\n"]}),"\n",(0,a.jsxs)(r.c,{children:[(0,a.jsxs)(i.c,{value:"linux",label:"Linux",default:!0,children:[(0,a.jsx)(n.p,{children:"Navigate to user directory"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd ~\n"})}),(0,a.jsxs)(n.p,{children:["Locate ",(0,a.jsx)(n.code,{children:".ssh"})," directory, it is an hidden directory, navigate within it"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd ~/.ssh\n"})}),(0,a.jsx)(n.p,{children:"Copy public key that is generated"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cat <encrypted_file_name>.pub\n"})}),(0,a.jsx)(n.p,{children:"copy the contents"})]}),(0,a.jsxs)(i.c,{value:"win",label:"Windows",children:[(0,a.jsx)(n.p,{children:"Open Run, ``"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%userprofile%\n"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Locate ",(0,a.jsx)(n.code,{children:".ssh"})," directory, navigate within it"]}),"\n",(0,a.jsx)(n.li,{children:"Copy public key that is generated, by opening the file in notepad"}),"\n",(0,a.jsx)(n.li,{children:"Copy the contents"}),"\n"]})]})]}),"\n",(0,a.jsxs)(n.ol,{start:"9",children:["\n",(0,a.jsx)(n.li,{children:"Past the copied key into key text area"}),"\n",(0,a.jsx)(n.li,{children:"Pick a title so you could differentiate when and where the token is located"}),"\n",(0,a.jsxs)(n.li,{children:["Choose ",(0,a.jsx)(n.code,{children:"Usage type"}),". I prefer to use the same token for Authenticating and signing, you could have different token setup"]}),"\n",(0,a.jsx)(n.li,{children:"Choose the duration of the key when it should be invalidated."}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["My suggestion/steps would get outdated, leaving gitlab ssh key ",(0,a.jsx)(n.a,{href:"https://docs.gitlab.com/ee/user/ssh.html",children:"reference link"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5388:(e,n,t)=>{t.d(n,{c:()=>i});t(1504);var a=t(5456);const s={tabItem:"tabItem_Ymn6"};var r=t(7624);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.c)(s.tabItem,i),hidden:t,children:n})}},1268:(e,n,t)=>{t.d(n,{c:()=>j});var a=t(1504),s=t(5456),r=t(3943),i=t(5592),l=t(5288),o=t(632),c=t(7128),u=t(1148);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.Uz)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._M)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=g({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.IN)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),m=(()=>{const e=c??b;return p({value:e,tabValues:r})?e:null})();(0,l.c)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(3664);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(7624);function x(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.MV)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),s=l[t].value;s!==a&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.c)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.c)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,s.c)("tabs-container",m.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function j(e){const n=(0,f.c)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(n))}},2172:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>i});var a=t(1504);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);