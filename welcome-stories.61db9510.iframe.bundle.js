(self.webpackChunk_yuntang_funny_ui=self.webpackChunk_yuntang_funny_ui||[]).push([[181],{"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/welcome.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WelcomePage:()=>WelcomePage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/core/dist/theming/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Content=_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.I4.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;

  h1 {
    margin-bottom: 1.5rem;
    color: #2c3e50;
    border-bottom: 2px solid #eee;
    padding-bottom: 0.5rem;
  }

  section {
    margin: 2rem 0;
    padding: 1.5rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  }
`,CodeBlock=_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.I4.pre`
  background: #f8f8f8;
  padding: 15px;
  border-radius: 6px;
  margin: 1rem 0;
  overflow-x: auto;
  border: 1px solid #eee;

  code {
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    color: #e83e8c;
  }
`,FeatureGrid=_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.I4.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;

  div {
    padding: 1.5rem;
    background: #f9f9f9;
    border-radius: 8px;
    border-left: 4px solid #3498db;
    
    h3 {
      margin: 0 0 0.5rem;
      color: #2c3e50;
    }
    
    p {
      margin: 0;
      color: #7f8c8d;
    }
  }
`,__WEBPACK_DEFAULT_EXPORT__={title:"Welcome",parameters:{layout:"centered",controls:{hideNoControlsWarning:!0},docs:{page:null}}},WelcomePage={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1",{children:"欢迎使用 Funny UI"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{children:"📦 安装"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CodeBlock,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"npm install @yuntang/funny-ui --save"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("small",{children:"或使用 yarn"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CodeBlock,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"yarn add @yuntang/funny-ui"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{children:"🚀 快速开始"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CodeBlock,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"import { Button } from '@yuntang/funny-ui';\n\nfunction App() {\n  return (\n    <Button btnType=\"primary\">\n      立即体验\n    </Button>\n  );\n}"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{children:"✨ 核心特性"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FeatureGrid,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3",{children:"海洋/森林主题定制"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"支持 CSS 变量和主题配置文件"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3",{children:"TypeScript 支持"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"完整的类型定义和智能提示"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3",{children:"响应式设计"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"完美适配移动端和桌面端"})]})]})]})]})},__namedExportsOrder=["WelcomePage"];WelcomePage.parameters={...WelcomePage.parameters,docs:{...WelcomePage.parameters?.docs,source:{originalSource:'{\n  render: () => <Content>\n      <h1>欢迎使用 Funny UI</h1>\n      \n      <section>\n        <h2>📦 安装</h2>\n        <CodeBlock>\n          <code>npm install @yuntang/funny-ui --save</code>\n        </CodeBlock>\n        <small>或使用 yarn</small>\n        <CodeBlock>\n          <code>yarn add @yuntang/funny-ui</code>\n        </CodeBlock>\n      </section>\n\n      <section>\n        <h2>🚀 快速开始</h2>\n        <CodeBlock>\n          <code>{`import { Button } from \'@yuntang/funny-ui\';\n\nfunction App() {\n  return (\n    <Button btnType="primary">\n      立即体验\n    </Button>\n  );\n}`}</code>\n        </CodeBlock>\n      </section>\n\n      <section>\n        <h2>✨ 核心特性</h2>\n        <FeatureGrid>\n          <div>\n            <h3>海洋/森林主题定制</h3>\n            <p>支持 CSS 变量和主题配置文件</p>\n          </div>\n          <div>\n            <h3>TypeScript 支持</h3>\n            <p>完整的类型定义和智能提示</p>\n          </div>\n          <div>\n            <h3>响应式设计</h3>\n            <p>完美适配移动端和桌面端</p>\n          </div>\n          {/* <div>\n            <h3>无障碍访问</h3>\n            <p>符合 WAI-ARIA 标准</p>\n           </div> */}\n        </FeatureGrid>\n      </section>\n\n      {/* <section>\n        <h2>📚 文档资源</h2>\n        <ul>\n          <li><a href="/docs">组件文档</a></li>\n          <li><a href="/theme">主题定制指南</a></li>\n          <li><a href="https://github.com/your-repo">GitHub 仓库</a></li>\n          <li><a href="/changelog">更新日志</a></li>\n        </ul>\n       </section> */}\n    </Content>\n}',...WelcomePage.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=welcome-stories.61db9510.iframe.bundle.js.map