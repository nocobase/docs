# Example

## 文章审核

假设普通用户提交的文章，需要管理员审核通过后才能更新为已发布状态，否则如果拒绝该流程，文章将保持草稿状态（不公开），这一流程可以使用人工节点中的更新表单来实现。

创建一个由“新增文章”触发的工作流，并增加一个人工节点：

<figure>
  <img alt="人工节点_示例_文章审核_流程编排" src="https://github.com/nocobase/nocobase/assets/525658/2021bf42-f372-4f69-9c84-5a786c061e0e" width="360" />
</figure>

在人工节点中配置负责人为管理员，配置界面中增加一个基于触发数据的区块，用于展示新增文章的详情：

<figure>
  <img alt="人工节点_示例_文章审核_节点配置_详情区块" src="https://github.com/nocobase/nocobase/assets/525658/c61d0aac-23cb-4387-b60e-ce3cc7bf1c24" width="680" />
</figure>

在配置界面中增加一个基于更新数据表单的区块，选择文章表，用于管理员决定是否通过审核，通过审核后会根据后面的其他配置更新对应文章。添加表单后，默认会有一个“继续流程”的按钮，可以将其视为点击后通过，再增加一个“终止流程”的按钮，用作审核不通过的情况：

<figure>
  <img alt="人工节点_示例_文章审核_节点配置_表单和操作" src="https://github.com/nocobase/nocobase/assets/525658/4baaf41e-3d81-4ee8-a038-29db05e0d99f" width="673" />
</figure>

针对继续流程时，我们需要更新文章的状态，这里有两种配置方式，一种是直接在表单中展示文章状态的字段，供操作者选择，这种方式更适合于一些需要主动填写表单的情况，例如反馈意见等：

<figure>
  <img alt="人工节点_示例_文章审核_节点配置_表单字段" src="https://github.com/nocobase/nocobase/assets/525658/82ea4e0e-25fc-4921-841e-e1a2782a87d1" width="668" />
</figure>

为了简化操作者的操作，另一种方式是在“继续流程”按钮上配置表单赋值，赋值中增加一个“状态”字段，值为“已发布”，则代表操作者点击按钮后，文章将会更新为已发布状态：

<figure>
  <img alt="人工节点_示例_文章审核_节点配置_表单赋值" src="https://github.com/nocobase/nocobase/assets/525658/0340bd9f-8323-4e4f-bc5a-8f81be3d6736" width="711" />
</figure>

然后从表单区块的右上角配置菜单中选择要更新的数据的筛选条件，这里选择“文章”表，筛选条件为“ID `等于` 触发器变量 / 触发数据 / ID”：

<figure>
  <img alt="人工节点_示例_文章审核_节点配置_表单条件" src="https://github.com/nocobase/nocobase/assets/525658/da004055-0262-49ae-88dd-3844f3c92e28" width="1020" />
</figure>

最后，可以修改各个区块的标题和相关按钮的文本，以及表单字段的提示文本，使界面更加友好：

<figure>
  <img alt="人工节点_示例_文章审核_节点配置_最终表单" src="https://github.com/nocobase/nocobase/assets/525658/21db5f6b-690b-49c1-8259-4f7b8874620d" width="678" />
</figure>

关闭配置面板，点击提交按钮保存节点配置后，工作流就配置完成了。启用该工作流以后，在新增文章时，会自动触发该工作流，管理员可以从待办任务列表中看到该工作流需要处理，点击查看后可以看到待办任务的详情：

<figure>
  <img alt="人工节点_示例_文章审核_待办列表" src="https://github.com/nocobase/nocobase/assets/525658/4e1748cd-6a07-4045-82e5-286826607826" width="1363" />
</figure>

<figure>
  <img alt="人工节点_示例_文章审核_待办详情" src="https://github.com/nocobase/nocobase/assets/525658/65f01fb1-8cb0-45f8-ac21-ec8ab59be449" width="680" />
</figure>

管理员可以根据文章详情进行人工判断，该文章是否可以发布，如果可以的话，点击“通过”按钮，文章将会更新为已发布状态，如果不可以的话，点击“拒绝”按钮，文章将会保持草稿状态。

## 请假审批

假设员工需要请假，需要经过主管审批通过后才能生效，并核销对应员工的假期数据。而且不管通过或拒绝，都将会通过请求节点调用短信接口，发送相关的的通知短信给员工（见 [HTTP 请求](#_HTTP_请求) 部分）。这个场景可以使用人工节点中的自定义表单来实现。

创建一个由“新增请假”触发的工作流，并增加一个人工节点，与之前的文章审核流程类似，只是这里的负责人是主管，配置界面中增加一个基于触发数据的区块，用于展示新增请假的详情，再增加一个基于自定义表单的区块，用于主管决定是否通过审核，自定义表单中增加一个是否通过的字段，以及一个拒绝理由的字段：

<figure>
  <img alt="人工节点_示例_请假审批_节点配置" src="https://github.com/nocobase/nocobase/assets/525658/ef3bc7b8-56e8-4a4e-826e-ffd0b547d1b6" width="675" />
</figure>

与文章审核流程不同，由于我们需要根据主管审批的结果继续后续的流程，所以这里我们只配置一个“继续流程”按钮，作为提交使用，而不使用“终止流程”按钮。

同时在人工节点之后，我们可以通过一个条件判断节点来判断主管是否通过了该请假申请，通过的分支中增加核销假期的数据处理，并在分支结束后增加一个请求节点，用于发送短信通知员工，就得到以下完整的流程：

<figure>
  <img alt="人工节点_示例_请假审批_流程编排" src="https://github.com/nocobase/nocobase/assets/525658/733f68da-e44f-4172-9772-a287ac2724f2" width="593" />
</figure>

其中条件判断节点的中的条件配置为“人工节点 / 自定义表单数据 / 是否通过字段的值是否为‘通过’”：

<figure>
  <img alt="人工节点_示例_请假审批_条件判断" src="https://github.com/nocobase/nocobase/assets/525658/57b972f0-a3ce-4f33-8d40-4272ad205c20" width="678" />
</figure>

发送请求节点里的数据也可以使用人工节点中相应的表单变量，以区分通过和拒绝的短信内容。这样就完成了整个流程的配置，在开启工作流后，当员工提交请假申请的表单后，主管即可在待办任务中进行审批处理，操作基本与文章审核流程类似。
