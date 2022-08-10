# lowcode
流程配置化-->loader-->流程-->流程节点  
一个状态机就对应包含一个-->流程-->流程节点  

最小交互原则  
减少类型间的交互，减少类型之间的耦合  
减少继承多用组合  
抽离实现通用的拖拽组件Draggable，为内部组件提供拖拽能力  
拖拽提供基础的鼠标拖拽，具体对应的UI变化由单独抽离的 UI StateMachine完成，可以更好的完成移动、改变大小等功能  
左侧功能列表，自带功能组件Image、text等等  
数据交互模型：  
抽离Node类，每拖拽一个就生成一个Node。各种数据  
元数据json 实例数据Node class 界面render(Node)  
一个Node就是一个虚拟的Dom节点，Node继承与Emiter，可以发消息，Node内部数据采用immutable方便回滚  
渲染：  
递归绘制render(Node)，生成Node Tree

实现Editor模型，root为根的递归模型  
中间画布Panel(目前准备使用iframe)，所有用户拖拽之后渲染的结果   
命令行cli工具，用于创建的代码模板？  

# tips
iframe默认铺满方便计算拖拽相对位置  
拖拽实时同步坐标  
iframe接受坐标响应变化  
drop响应UI变化，同步数据变化  
左侧功能列表需要记录使用个数最限制  
右侧属性默认为页面设置，根据用户选择变更  
iframe UI嵌套数据结构？  
考虑yaml配置  
页面跳转  
历史记录？  

# vueapp
基于vue的版本(这个目前不想写了- -)

# case
新的想法