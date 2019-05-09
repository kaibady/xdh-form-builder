## 原则

### 一致性

* **文件结构一致性**：与框架约定的文件在工程中作用的一致
* **代码结构一致性**：组件选项顺序一致性
* **命名的一致性**：文件、Class、变量等命名的一致
* **注释风格一致性**： 函数、变量等都依据JSDoc规范添加注释

### 共享

* **公用代码的共享**：包括工具类函数、通用模板等可以公用代码及时告知相关同事
* **状态数据的共享**：多个页面使用同一个接口响应的状态数据，先校验是否存在后再按需重新请求接口

### 反馈

* **代码Bug反馈**：发现代码有Bug及时反馈团队，优化更改

### 兼容性

* **数据兼容性**：编写处理数据相关的逻辑时，考虑好数据不存在等情况的处理等
* **代码的兼容性**：使用函数、组件等涉及多处的代码时，优化时要兼容好之前代码考虑的情况