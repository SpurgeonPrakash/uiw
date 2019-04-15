(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{725:function(n,e){n.exports="List列表\n===\n\n列表组件\n\n```jsx\nimport { List } from 'uiw';\n```\n\n### 基础用法\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { List } from 'uiw';\n\nconst data = [\n  '\"X战警新变种人\"首曝海报特写诡异人脸',\n  '六大变五大？传迪士尼600亿收购福斯',\n  '快跑!《侏罗纪世界2》正式预告要来了',\n]\nconst Demo = () => (\n  <div>\n    <List header={<div>列表头部</div>} footer={<div>列表尾部</div>}>\n      <List.Item>\"X战警新变种人\"首曝海报特写诡异人脸</List.Item>\n      <List.Item>六大变五大？传迪士尼600亿收购福斯</List.Item>\n      <List.Item>快跑!《侏罗纪世界2》正式预告要来了</List.Item>\n    </List>\n    <h4 style={{ margin: '16px 10px' }}>默认尺寸，没有头部和尾部</h4>\n    <List\n      dataSource={data}\n      renderItem={item => (<List.Item>{item}</List.Item>)}\n    />\n    <h4 style={{ margin: '16px 10px' }}>小尺寸</h4>\n    <List\n      size=\"small\"\n      header={<div>列表头部</div>} \n      footer={<div>列表尾部</div>}\n      dataSource={data}\n      renderItem={item => (<List.Item>{item}</List.Item>)}\n    />\n    <h4 style={{ margin: '16px 10px' }}>大尺寸</h4>\n    <List\n      size=\"large\"\n      header={<div>列表头部</div>} \n      footer={<div>列表尾部</div>}\n      dataSource={data}\n      renderItem={item => (<List.Item>{item}</List.Item>)}\n    />\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### 特殊方法\n\n通过`dataSource`和`renderItem`来创建列表，这两个属性是一起使用。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { List } from 'uiw';\n\nconst data = [\n  '\"X战警新变种人\"首曝海报特写诡异人脸',\n  '六大变五大？传迪士尼600亿收购福斯',\n  <span>快跑!《侏罗纪世界2》正式预告要来了</span>,\n];\nconst Demo = () => (\n  <List\n    header={<div>列表头部</div>}\n    footer={<div>列表尾部</div>}\n    dataSource={data}\n    renderItem={item => {\n      return (<List.Item>{item}</List.Item>);\n    }}\n  />\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 禁用行\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { List } from 'uiw';\n\nconst data = [\n  {\n    'content': '\"X战警新变种人\"首曝海报特写诡异人脸'\n  },\n  {\n    'content': '六大变五大？传迪士尼600亿收购福斯'\n  },\n  {\n    'disabled': true,\n    'content': '快跑!《侏罗纪世界2》正式预告要来了'\n  },\n];\nclass Demo extends React.Component {\n  onClick(item,index,e){\n    e.stopPropagation();\n    console.log('item',item,e);\n  }\n  render() {\n    return (\n      <List\n        header={<div>列表头部</div>}\n        footer={<div>列表尾部</div>}\n        dataSource={data}\n        renderItem={(item,index) => {\n          return (\n            <List.Item onClick={this.onClick.bind(this, item, index)} disabled={item.disabled}>\n              {item.content}\n            </List.Item>\n          );\n        }}\n      />\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### 行激活\n\n`List.Item` 设置 `active` 属性即可设置这张被激活的样式。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { List } from 'uiw';\n\nconst Demo = () => (\n  <List size=\"small\" header={<div>列表头部</div>} footer={<div>列表尾部</div>}>\n    <List.Item active>\"X战警新变种人\"首曝海报特写诡异人脸</List.Item>\n    <List.Item>六大变五大？传迪士尼600亿收购福斯</List.Item>\n    <List.Item>快跑!《侏罗纪世界2》正式预告要来了</List.Item>\n  </List>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 斑马线\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { List } from 'uiw';\n\nconst data = [\n  '人总是在接近幸福时倍感幸福，在幸福进行时却患得患失。',\n  '因为爱过，所以慈悲；因为懂得，所以宽容。',\n  '你如果认识从前的我，也许你会原谅现在的我。',\n  <span>你还不来，我怎敢老去。</span>,\n];\nconst Demo = () => (\n  <List\n    dataSource={data}\n    striped={true}\n    size=\"small\"\n    renderItem={item => {\n      return (<List.Item>{item}</List.Item>);\n    }}\n  />\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 列表为超链接\n\n`List.Item` 设置了 `href`，`List.Item`就可以设置标签`<a>`的所有属性了。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { List } from 'uiw';\n\nconst data = [\n  {\n    'href':'#/cn/list',\n    'content': '\"X战警新变种人\"首曝海报特写诡异人脸'\n  },\n  {\n    'target':'_blank',\n    'href':'https://uiw-react.github.io/icons/',\n    'content': '从uiw组件库中抽离出来的，图标字体 uiw-iconfont 发布'\n  },\n  {\n    'href':'#/cn/list',\n    'disabled': true,\n    'content': '快跑!《侏罗纪世界2》正式预告要来了'\n  },\n];\nconst Demo = () => (\n  <List\n    header={<div>列表头部</div>}\n    footer={<div>列表尾部</div>}\n    dataSource={data}\n    renderItem={(item, index) => {\n      return (\n        <List.Item {...item}>\n          {item.content}\n        </List.Item>\n      );\n    }}\n  />\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## List\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| size | 设置行尺寸，分别大、中、小三种尺寸 | Enum{`small`,`default`,`large`} | `default` |\n| bordered | 是否展示边框 | Boolean | `true` |\n| striped | 斑马线效果 | Boolean | `false` |\n| footer | 列表底部 | String/ReactNode | - |\n| header | 列表头部 | String/ReactNode | - |\n| dataSource | 是否展示边框 | Boolean | - |\n| renderItem | 通过毁掉函数返回Dome，渲染列表每个行 | Function(item,index) | - |\n\n## List.Item\n\n| 参数 | 说明 | 类型 | 默认值 |\n| --------- | -------- | --------- | -------- |\n| active | 激活 | Boolean | `false` |\n| disabled | 禁用 | Boolean | `false` |\n| href | 规定链接的目标，`true` 的时候是个超链接，值为`String`的时候，在超链接上加 `href` 的值就是你传进来的 `href`值，此时将可以设置标签`<a>`的所有属性。  | Boolean/String | `false` |\n\n"}}]);