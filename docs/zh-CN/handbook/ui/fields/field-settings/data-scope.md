# 设置数据范围

## 介绍
关系字段的数据范围设置类似于区块数据范围的配置，都是为了给数据设定默认的筛选条件。在关系字段上设置数据范围可以确保关联的数据在特定条件下进行筛选，使得数据展示更加符合需求和逻辑。例如，可以根据特定状态、时间范围或其他字段数值范围进行筛选。

## 使用说明

![20240422153711](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240422153711.png)

### 静态值

示例：仅在售商品可以选择关联

![20240422155953](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240422155953.png)

### 变量值

![20240422163640](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240422163640.png)

更多关于变量内容参考 [变量](/handbook/ui/variables)

### 关系字段联动

关系字段之间通过数据设置数据范围实现联动。

示例：订单表中有多对多关系字段「商品」，多对一关系字段「客户」， 商品表和客户表是多对多的关系。

商品数据为当前表单中所选客户关联的商品。

![20240422154145](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240422154145.png)

<video width="100%" height="440" controls>
      <source src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240422155351.mp4" type="video/mp4">
</video>