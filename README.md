
# <p align="center"> 基础篇-如何用openzeppelin governor框架构建DAO</p>


###### <p align="center"> 课程是[DApp Learning分享课程系列](https://github.com/Dapp-Learning-DAO/Dapp-Learning) </p>

#### 参考链接

* 本课程[操作视频](https://youtu.be/AZQeCFvgFCA) [操作文档](https://docs.google.com/document/d/1lLKkbiZfKsaVqRKKpsgpk4SyUGxr4qkM/edit)
* 课程基于[Patrick Collin](https://www.youtube.com/@PatrickAlphaC) [How to build an on-chain DAO](https://youtu.be/AhJtmUqhAqg)

#### 参考安装环境
* Ubuntu 20.04.2
* hardhat 2.12.2
* node 16.13.1
* yarn 1.22.17
* visual studio code
* goerli测试网络provider 使用的是infura (https://app.infura.io/ 可以创建)

#### Pre-request 安装项目依赖库
* yarn 

#### Pre-request 修改必要参数（本项目仅作为DEMO用途，实际项目勿泄露私钥及项目ID）
* 打开文件 hardhat.config.ts, 替换xxxxxxxxxx
* url: 'https://goerli.infura.io/v3/xxxxxxxxxx', //<---- 你的 INFURA 项目 ID! (https://app.infura.io/ 可以创建)
* accounts: ['xxxxxxxx'],  //<---- 密钥! (metamask 读取)

#### 合约编译
* yarn hardhat compile

#### 本地环境运行
1. 打开本地EVM
yarn hardhat node
2. 本地部署
yarn hardhat deploy --network localhost
3. 提案
yarn hardhat run scripts/propose.ts --network localhost
4. 投票
yarn hardhat run scripts/vote.ts --network localhost
5. 投票成功后排队任务
yarn hardhat run scripts/queue.ts --network localhost
6. 执行该排队任务
yarn hardhat run scripts/execute.ts --network localhost

> note: 打开terminal 使用hardhat console查询投票状态变化

> 输入 yarn hardhat console –network localhost(/goerli)

> 输入 const governor = await ethers.getContract("GovernorContract")

> 输入 await governor.state(“proposalID”)  (proposalID 从文件 proposals.json 读取)

> 得到投票情况，对照结尾对照表表查询状态


#### Goerli 测试网络运行
1. goerli测试网络部署
yarn hardhat deploy --network goerli
2. 提案
yarn hardhat run scripts/propose.ts --network goerli
3. 投票
yarn hardhat run scripts/vote.ts --network goerli
4. 投票成功后排队任务
yarn hardhat run scripts/queue.ts --network goerli
5. 执行该排队任务
yarn hardhat run scripts/execute.ts --network goerli

> note: 打开terminal 使用hardhat console查询投票状态变化

> 输入 yarn hardhat console –network localhost(/goerli)

> 输入 const governor = await ethers.getContract("GovernorContract")

> 输入 await governor.state(“proposalID”)  (proposalID 从文件 proposals.json 读取)

> 得到投票情况，对照结尾对照表表查询状态

#### Goerli 投票状态对照表
>     enum ProposalState {
>         Pending, //0
>         Active, //1
>         Canceled, //2
>         Defeated, //3
>         Succeeded, //4
>         Queued, //5
>         Expired, //6
>         Executed //7、
>     }

