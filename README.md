# BJJDAO-JS-THIRDWEB

- Projeto feito junto com o [bootcamp da web3dev](https://bootcamp.web3dev.com.br/courses/JS_DAO), porem, recomendo apenas para estudo geral, na parte pratica do dia a dia, **não se usa thirdweb**, não em projetos grandes...

### Se familiarizando com o thirdweb.

- O que o Thirdweb nos dá, é um conjunto de ferramentas para criar todos os nossos smart contrats sem escrever nada de Solidity. **(O ponto Negativo é justamente esse, você não define seu contrato, é um template de contrato..)**

 - Nós não escrevemos nada em Solidity. Tudo o que precisamos fazer é escrever um script usando apenas Javascript para criar + dar deploy nos nossos contratos. O thridweb vai usar um conjunto de contratos seguros que eles criaram [aqui](https://github.com/thirdweb-dev/contracts). A parte boa é que depois de você criar os contratos, você é o dono deles e os contratos ficam associados com a sua carteira.

 - Uma vez que você dá deploy no contrato, você pode interagir com ele diretamente do frontend facilmente usando o SDK para o cliente deles.

 - Eu não posso ser mais claro sobre como é fácil de criar um smart contract usando o thirdweb comparado com escrever seu próprio código em Solidity, vai ser como interagir com uma biblioteca backend normal. Vamos lá:

 - Vá para o dashboard do thirdweb [aqui](https://thirdweb.com/contracts). Clique em "Let's get started". Conecte sua carteira. Selecione sua rede (Goerli).

Crie o seu primeiro projeto e dê um nome como "My DAO" ou algo do tipo. Quando você clicar em "Criar" você vai ver que um pop-up da Metamask é aberto e você tem que pagar uma taxa de transação na rede Goerli. Por que?

Essa ação cria o container para os contratos que vamos dar deploy, on-chain. o thirdweb não tem uma base de dados, todos os seus dados são armazenados on-chain.

### **Caso queira acessar o meu projeto e ver Rodando através do Replit acesse [AQUI](https://replit.com/@LuanArtacho/BJJDAO-JS-THIRDWEB?v=1)**

### **Perguntas?/Respostas!**

-  Se quiser criar um projetinho base eu recomendo sim usar o thirdweb, realmente facilita!

- Não recomendo de modo Geral usar o thirdweb, mas caso queira criar um token ERC-20, NFT ERC-1155... e não precisa mudar muitas coisas etc.. só dale, mas o que realmente recomendo é fazer seu contrato, pode pegar a base do [wizard da openzeppelin](https://docs.openzeppelin.com/contracts/4.x/wizard)

- Sim o Front é em React...
