(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{660:function(n,e){n.exports="OverlayTrigger 基础触发弹出\n===\n\n基础弹出触发组件，在组件 [`<Overlay>`](#/components/overlay) 的基础上添加事件和 12 个方向的位置，组件 [`<Tooltip>`](#/components/tooltip)，[`<Popover>`](#/components/popover) 是基于这个组件封装的，弹出框围绕对象指定位置。\n\n```jsx\nimport { OverlayTrigger } from 'uiw';\n```\n\n### 基础用法\n\n最简单的用法。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { OverlayTrigger } from 'uiw';\n\nconst tooltip = (\n  <div style={{ backgroundColor: '#fff', border: '1px solid #333', padding: 10, borderRadius: 3 }}>\n    <strong>Hellow uiw!</strong> Check this info.<br />\n    展示 12 个方向位置\n  </div>\n);\nconst Demo = () => (\n  <OverlayTrigger isOutside={true} placement=\"top\" overlay={tooltip}>\n    <span>鼠标移动到此处，显示和消失触发事件</span>\n  </OverlayTrigger>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 配合组件使用\n\n下面配合 [`<Card />`](#/components/card) 组件使用。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { OverlayTrigger, Card } from 'uiw';\n\nconst card = (\n  <Card active>\n    <strong>Hellow uiw!</strong> Check this info.<br />\n    展示 12 个方向位置\n  </Card>\n);\nconst Demo = () => (\n  <OverlayTrigger placement=\"top\" overlay={card}>\n    <span>鼠标移动到此处，显示和消失触发事件</span>\n  </OverlayTrigger>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 点击事件\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { OverlayTrigger, Card, Divider } from 'uiw';\n\nconst card = (\n  <Card active>\n    <strong>Hellow uiw!</strong> Check this info.<br />\n    展示 12 个方向位置\n  </Card>\n);\n\nclass Demo extends React.Component {\n  constructor() {\n    super()\n    this.state = {\n      isVisbale: false,\n    }\n  }\n  onClick(e, isVisbale) {\n    this.setState({ isVisbale })\n  }\n  render() {\n    return (\n      <div>\n        <OverlayTrigger\n          placement=\"top\"\n          trigger=\"click\"\n          overlay={card}\n        >\n          <span onClick={this.onClick.bind(this)}>鼠标<b>点击</b>此处，显示和消失触发子组件事件</span>\n        </OverlayTrigger>\n        <Divider />\n        <div>状态：{this.state.isVisbale ? '' : '不'}可见</div>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 鼠标经过事件\n\n默认离开**触发区域**隐藏弹出目标，设置 `isOutside` 值为 `true`，在**触发区域**或**弹出目标区域**内，不隐藏**弹出目标**。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { OverlayTrigger, Card, Divider } from 'uiw';\n\nconst card = (\n  <Card active>\n    <strong>Hellow uiw!</strong> Check this info.<br />\n    展示 12 个方向位置\n  </Card>\n);\n\nclass Demo extends React.Component {\n  constructor() {\n    super()\n    this.state = {\n      isVisbale: false,\n    }\n  }\n  onVisibleChange(isVisbale) {\n    this.setState({ isVisbale })\n  }\n  render() {\n    return (\n      <div>\n        <OverlayTrigger\n          placement=\"top\"\n          isOutside={true}\n          onVisibleChange={this.onVisibleChange.bind(this)}\n          overlay={card}\n        >\n          <span>鼠标移动到此处，显示和消失触发事件</span>\n        </OverlayTrigger>\n        <Divider />\n        <div>状态：{this.state.isVisbale ? '' : '不'}可见</div>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### 延迟进入和消失\n\n延迟属性，只针对 `trigger=hover` 有效。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { OverlayTrigger, Card } from 'uiw';\n\nconst card = (\n  <Card active>\n    <strong>Hellow uiw!</strong> Check this info.<br />\n    展示 12 个方向位置\n  </Card>\n);\nconst Demo = () => (\n  <OverlayTrigger delay={{ show: 0, hide: 4000 }} placement=\"top\" overlay={card}>\n    <span>鼠标移动到此处，显示和消失触发事件，延迟 `4s` 消失</span>\n  </OverlayTrigger>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 组件受控\n\n通过设置属性 isOpen 可以文字提示手动控制状态的展示。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { OverlayTrigger, Card, Divider, Switch } from 'uiw';\n\nconst card = (\n  <Card active>\n    <strong>Hellow uiw!</strong> Check this info.<br />\n    展示 12 个方向位置\n  </Card>\n);\n\nclass Demo extends React.Component {\n  constructor() {\n    super()\n    this.state = {\n      isOpen: false,\n    }\n  }\n  onChange(e) {\n    this.clickChecked = false;\n    this.setState({ isOpen: e.target.checked });\n  }\n  onVisibleChange(isOpen) {\n    console.log('onVisibleChange: ', isOpen);\n  }\n  render() {\n    return (\n      <div>\n        <OverlayTrigger\n          onVisibleChange={this.onVisibleChange.bind(this)}\n          isOpen={this.state.isOpen}\n          placement=\"right\"\n          onEnter={(node, isAppearing) => {\n            console.log('~~', node, isAppearing);\n          }}\n          overlay={card}\n        >\n          <span>鼠标移动到此处，显示和消失触发事件</span>\n        </OverlayTrigger>\n        <Divider />\n        <Switch checked={this.state.isOpen} onChange={this.onChange.bind(this)} />\n      </div>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### usePortal\n\n设置 `usePortal={false}` 将模态对话框生成到根节点的里面。\n\n\x3c!--DemoStart,bgWhite,noScroll,codePen--\x3e \n```js\nimport { OverlayTrigger, Card, Divider } from 'uiw';\n\nconst card = (\n  <Card active>\n    <strong>Hellow uiw!</strong> Check this info.<br />\n    展示 12 个方向位置\n  </Card>\n);\n\nclass Demo extends React.Component {\n  constructor() {\n    super()\n    this.state = {\n      isOpen: false,\n    }\n  }\n  onVisibleChange(isOpen) {\n    this.setState({ isOpen })\n  }\n  render() {\n    return (\n      <div>\n        <div style={{ position: 'relative' }}>\n          <OverlayTrigger\n            usePortal={false}\n            isOutside={true}\n            autoAdjustOverflow\n            placement=\"top\"\n            trigger=\"click\"\n            onVisibleChange={this.onVisibleChange.bind(this)}\n            overlay={card}\n          >\n            <span>鼠标移动到此处，显示和消失触发事件</span>\n          </OverlayTrigger>\n        </div>\n        <Divider />\n        <div>状态：{this.state.isOpen ? '' : '不'}可见</div>\n      </div>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| placement | 指定弹出框位置 | Enum{`top`, `topLeft`, `topRight`,<br /> `left`, `leftTop`, `leftBottom`,<br /> `right`, `rightTop`, `rightBottom`,<br /> `bottom`, `bottomLeft`, `bottomRight`} | - |\n| trigger | 悬停/点击弹出窗口 | Enum{`hover`, `click`, `focus`} | `hover` |\n| disabled | 是否禁用弹出目标 | Boolean | `false` |\n| overlay | 弹出内容 | Function/Element | - |\n| delay | 延迟进入和消失，`{ show: 2000, hide: 4000 }` 或者直接设置 `2000`，只对 `trigger=hover` 有效 | Object/Number | - |\n| isOpen | 默认是否显示弹窗 | Boolean | `false` |\n| isOutside | 默认离开**触发区域**隐藏弹出目标，设置值为 `true`，在触发区域和弹出目标区域内，不隐藏**弹出目标**。 | Boolean | `false` |\n| autoAdjustOverflow | 弹出层被遮挡时自动调整位置 | Boolean | `false` |\n| onVisibleChange | 显示隐藏的回调 | Function(isVisible:bool) | - |\n\n更多属性文档请参考 [Overlay](#/components/overlay)。"}}]);