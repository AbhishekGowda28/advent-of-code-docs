"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1803],{7538:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=t(5893),i=t(1151);const o={slug:"repo-setup",title:"Repository setup",description:"Setting up documentation repository with nx and docusaurus",authors:["abhi"],tags:["docusaurus","repo","repository","github","docs","gitlab","git","submodules"]},r=void 0,d={permalink:"/advent-of-code-docs/blog/repo-setup",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-07-repo-setup.mdx",source:"@site/blog/2023-12-07-repo-setup.mdx",title:"Repository setup",description:"Setting up documentation repository with nx and docusaurus",date:"2023-12-07T00:00:00.000Z",formattedDate:"December 7, 2023",tags:[{label:"docusaurus",permalink:"/advent-of-code-docs/blog/tags/docusaurus"},{label:"repo",permalink:"/advent-of-code-docs/blog/tags/repo"},{label:"repository",permalink:"/advent-of-code-docs/blog/tags/repository"},{label:"github",permalink:"/advent-of-code-docs/blog/tags/github"},{label:"docs",permalink:"/advent-of-code-docs/blog/tags/docs"},{label:"gitlab",permalink:"/advent-of-code-docs/blog/tags/gitlab"},{label:"git",permalink:"/advent-of-code-docs/blog/tags/git"},{label:"submodules",permalink:"/advent-of-code-docs/blog/tags/submodules"}],readingTime:2.925,hasTruncateMarker:!1,authors:[{name:"Abhishek Gowda",title:"Owner of this source",url:"https://github.com/abhishekgowda28",imageURL:"https://gitlab.com/uploads/-/system/user/avatar/8594191/avatar.png",key:"abhi"}],frontMatter:{slug:"repo-setup",title:"Repository setup",description:"Setting up documentation repository with nx and docusaurus",authors:["abhi"],tags:["docusaurus","repo","repository","github","docs","gitlab","git","submodules"]},unlisted:!1},a={authorsImageUrls:[void 0]},l=[{value:"Background",id:"background",level:2},{value:"Setup",id:"setup",level:2},{value:"Initilizing project",id:"initilizing-project",level:3},{value:"Adding git submodule",id:"adding-git-submodule",level:3},{value:"Creating packages within the mono repo",id:"creating-packages-within-the-mono-repo",level:3},{value:"Creating docusaurus folder",id:"creating-docusaurus-folder",level:3},{value:"Update docusaurus config",id:"update-docusaurus-config",level:2},{value:"Hosting in github pages",id:"hosting-in-github-pages",level:2},{value:"Enabling github pages",id:"enabling-github-pages",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,s.jsx)(n.p,{children:"This is a documentation repository for my advent of code solution."}),"\n",(0,s.jsx)(n.p,{children:"Motive behind this website, I tend to forget things which I've done. And when\r\nthe similar problem arise that needs to be solved, I try to look into git\r\nhistory to find how I solved it. But never I've gotten a thing out of git\r\nhistory. (Which is completly my mistake)"}),"\n",(0,s.jsx)(n.p,{children:"I've 2 repositories, one for the actual code and the other for hosting the documentation.\r\nThe actual code is hosted in a private repo and this repo is a public compiled docusaurus site.\r\nI'll elobrate how I've set this up."}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.h3,{id:"initilizing-project",children:"Initilizing project"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"With repo with nx"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx create-nx-workspace@latest <project_name> --preset=ts\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Update ",(0,s.jsx)(n.code,{children:"package.json"})," to use pnpm"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n    "name": "<project_name>",\r\n    "engine": {\r\n        "node": "^20",\r\n        "pnpm": ">=8"\r\n    }\r\n}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Change ",(0,s.jsx)(n.code,{children:"package-lock.json"})," file into ",(0,s.jsx)(n.code,{children:"pnpm-lock.yaml"})," file"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm import\n"})}),"\n",(0,s.jsx)(n.h3,{id:"adding-git-submodule",children:"Adding git submodule"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Move into the project"}),"\n",(0,s.jsx)(n.li,{children:"Add submodule to the project, in this case we had already created a different empty repository for this."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-git",children:"git submodule add <repository_url>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["With this there should be a new file called ",(0,s.jsx)(n.code,{children:".gitmodules"})," should be created. With the information about the module added."]}),"\n",(0,s.jsx)(n.p,{children:"At this point we can commit the progress."}),"\n",(0,s.jsx)(n.h3,{id:"creating-packages-within-the-mono-repo",children:"Creating packages within the mono repo"}),"\n",(0,s.jsxs)(n.p,{children:["The root repo we have is a mono repo. Now we have to create a new file with name ",(0,s.jsx)(n.code,{children:"pnpm-workspace.yaml"}),".\r\nInside it added the folder structure. This is what I've"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"packages:\r\n  - 'src/*'\r\n  - 'documentation/*'\n"})}),"\n",(0,s.jsx)(n.h3,{id:"creating-docusaurus-folder",children:"Creating docusaurus folder"}),"\n",(0,s.jsx)(n.p,{children:"There is a generator for creating of docusaurus in nx. But I prefer using the create command from docusaurus."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx create-docusaurus@latest documentation classic --typescript\n"})}),"\n",(0,s.jsx)(n.p,{children:"With this the setup for the repository is completed."}),"\n",(0,s.jsx)(n.h2,{id:"update-docusaurus-config",children:"Update docusaurus config"}),"\n",(0,s.jsxs)(n.p,{children:["There are couple of configuration changes that needs to be done in ",(0,s.jsx)(n.code,{children:"docusaurus.config"})," file."]}),"\n",(0,s.jsx)(n.p,{children:"With this the setting up of documentation repo will be completed. But we still need to host this in github pages."}),"\n",(0,s.jsx)(n.h2,{id:"hosting-in-github-pages",children:"Hosting in github pages"}),"\n",(0,s.jsx)(n.p,{children:"The submodule repo we added is a public github pages repo"}),"\n",(0,s.jsx)(n.h3,{id:"enabling-github-pages",children:"Enabling github pages"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a public repo."}),"\n",(0,s.jsx)(n.li,{children:"Go to repo setting."}),"\n",(0,s.jsxs)(n.li,{children:["In the left section, there we will find ",(0,s.jsx)(n.strong,{children:"Pages"})," section."]}),"\n",(0,s.jsxs)(n.li,{children:["Scroll to ",(0,s.jsx)(n.strong,{children:"Build and deployment"})," section"]}),"\n",(0,s.jsxs)(n.li,{children:["Select from ",(0,s.jsx)(n.strong,{children:"Deploy from a branch"})]}),"\n",(0,s.jsxs)(n.li,{children:["Select Branch - ",(0,s.jsx)(n.strong,{children:"main"})," and folder - ",(0,s.jsx)(n.strong,{children:"root"})]}),"\n",(0,s.jsx)(n.li,{children:"Click on save."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"It would take few seconds and the github page should be up."}),"\n",(0,s.jsxs)(n.p,{children:["There should be ",(0,s.jsx)(n.strong,{children:"Visit site"})," button. Click on it, will take to the deployed page.\r\nCopy the url of the page."]}),"\n",(0,s.jsx)(n.p,{children:"Go back to the Landing page of the repo."}),"\n",(0,s.jsxs)(n.p,{children:["In the right hand side there we will find a gear icon \u2699, click on it.\r\nAnd enable ",(0,s.jsx)(n.strong,{children:"Use your Github pages website"})," check box."]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"With this we should have things read for deployment."}),"\n",(0,s.jsxs)(n.p,{children:["Let tweak some script in the documentation ",(0,s.jsx)(n.strong,{children:"package.json"}),"\r\ncopy ",(0,s.jsx)(n.code,{children:"build"})," script command and paste it and rename it to ",(0,s.jsx)(n.code,{children:"build-github-pages"})]}),"\n",(0,s.jsx)(n.p,{children:"Update the command as"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'"build-github-page": "docusaurus build && cp -rf build/* <sub_module_location>", // update submodule location here\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Now run the command ",(0,s.jsx)(n.code,{children:"pnpm build-github-page"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"With this the submodule will be update."}),"\n",(0,s.jsx)(n.p,{children:"Add the update files in the root repository and commit with appropriate message."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Traverse to the submodule directory."}),"\n",(0,s.jsx)(n.li,{children:"Add all the files to git and push the changes."}),"\n",(0,s.jsx)(n.li,{children:"After few seconds the github page will be updated with the changes."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\ud83c\udf89 We have successfully deployed docusaurus as github pages \ud83d\ude80"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);