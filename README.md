<����>�����openzeppelin governor ����DAO

��Ƶ�� ��ο�Dapp learning Ƶ�����γ������Ƶ�������ĵ�
https://www.youtube.com/c/DappLearning

\*�ο�����
Ubuntu 20.04.2
hardhat 2.12.2
node16.13.1

\*��������װ
yarn

\*�޸ı�Ҫ����������Ŀ����ΪDEMO��;������й¶����˽Կ����ĿID��
���ļ� hardhat.config.ts, � 滻 XXX�������Ϣ
url: 'https://goerli.infura.io/v3/xxxxxxxxxx', //<---- ��� INFURA ��Ŀ ID! (https://app.infura.io/ ���Դ���)
accounts: ['xxxxxxxx'], //<---- �����Կ! (���Դ�metamask ��ȡ)

\*��Լ����
yarn hardhat compile

\*��������

1. �򿪱���EVM
   yarn hardhat node
   2.���ز���
   yarn hardhat deploy --network localhost
   3.�᰸
   yarn hardhat run scripts/propose.ts --network localhost
   4.ͶƱ
   yarn hardhat run scripts/vote.ts --network localhost
   5.ͶƱ�ɹ����Ŷ�����
   yarn hardhat run scripts/queue.ts --network localhost
2. ִ�и��Ŷ�����
   yarn hardhat run scripts/execute.ts --network localhost

\*Goerli ������������
1.goerli������� 粿 ��
yarn hardhat deploy --network goerli
2.�᰸
yarn hardhat run scripts/propose.ts --network goerli
3.ͶƱ
yarn hardhat run scripts/vote.ts --network goerli
4.ͶƱ�ɹ����Ŷ�����
yarn hardhat run scripts/queue.ts --network goerli 5. ִ�и��Ŷ�����
yarn hardhat run scripts/execute.ts --network goerli

\*�᰸��ͶƱ��״̬��Ϣ
yarn hardhat console �Cnetwork localhost(/goerli)

> > const governor = await ethers.getContract("GovernorContract")
> > await governor.state(��proposalID��) (proposalID ���ļ� proposals.json ��ȡ)
