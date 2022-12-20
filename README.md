<基础篇>如何用openzeppelin governor 构建DAO

视频： 请参考Dapp learning 频道本课程相关视频及完整文档
https://www.youtube.com/c/DappLearning

*参考环境
Ubuntu 20.04.2
hardhat 2.12.2
node16.13.1

*依赖包安装
yarn 

*修改必要参数（本项目仅作为DEMO用途，请勿泄露您的私钥及项目ID）
打开文件 hardhat.config.ts, 替换XXX成你的信息
url: 'https://goerli.infura.io/v3/xxxxxxxxxx', //<---- 你的 INFURA 项目 ID! (https://app.infura.io/ 可以创建)
accounts: ['xxxxxxxx'],  //<---- 你的密钥! (可以从metamask 读取)

*合约编译
yarn hardhat compile

*本地运行
1. 打开本地EVM
yarn hardhat node
2.本地部署
yarn hardhat deploy --network localhost
3.提案
yarn hardhat run scripts/propose.ts --network localhost
4.投票
yarn hardhat run scripts/vote.ts --network localhost
5.投票成功后排队任务
yarn hardhat run scripts/queue.ts --network localhost
6. 执行该排队任务
yarn hardhat run scripts/execute.ts --network localhost

*Goerli 测试网络运行
1.goerli测试网络部署
yarn hardhat deploy --network goerli
2.提案
yarn hardhat run scripts/propose.ts --network goerli
3.投票
yarn hardhat run scripts/vote.ts --network goerli
4.投票成功后排队任务
yarn hardhat run scripts/queue.ts --network goerli
5. 执行该排队任务
yarn hardhat run scripts/execute.ts --network goerli

*提案，投票等状态信息
yarn hardhat console –network localhost(/goerli)
>>const governor = await ethers.getContract("GovernorContract")
>>await governor.state(“proposalID”)  (proposalID 从文件 proposals.json 读取)


