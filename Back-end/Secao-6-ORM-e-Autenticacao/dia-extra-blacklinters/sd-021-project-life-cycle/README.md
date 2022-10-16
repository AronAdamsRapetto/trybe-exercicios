## Projeto Extra

Uau! A escola BlackLinters é um sucesso! Parabéns por toda a entrega até aqui.
Porém, como todo negócio precisa evoluir chegou o momento de atualizarmos nosso código atual.

A escola decidiu não ficar refém de uma tecnologia de banco de dados, hoje o projeto utiliza o [MySQL](https://www.mysql.com/) mas em algum momento, isso pode vir a mudar.

Pensando nisso a CTO decidiu por implementar o [Sequelize](https://sequelize.org/) como ORM.

### Onde estamos? O que temos até o momento?
Hoje o projeto está utilizando o MySQL em sua camada de model.

Porém com o crescimento atual da empresa, é nítido que esse código não seja escalável.

### Quais são as tasks?

[1] Implementar o Sequelize como ORM para todos os endpoints existentes.

[2] Todas as rotas devem possuir autenticação através de login da tabela `Employee`.
- Para rotas de listagem, todas as pessoas com a role `teacher` ou `admin` podem acessar.
- Para rotas de registro, adição ou remoção, somente as pessoas com a role `admin` podem acessar.

### Dicas

- Utilize qualquer biblioteca que achar interessante;
- Não se preocupe em chegar ao estado da arte, desenvolva até onde conseguir;
- O sequelize precisa ser instalado e configurado do zero (comece por ele);
- Lembre-se: você possuí total autonomia para desenvolver este projeto, deve seguir somente as tasks [1] e [2] acima.
- Dica de ouro: As migrations servem para criar novas tabelas no banco, nesse projeto ja temos tabelas criadas...
- Importe o arquivo `BlackLinters.requests.json` que está na raiz dentro do insomnia ou thunder client para reutilizar os requests já criados.

### Extra

- Implemente o CRUD para `employee`.
- Faça as validações necessárias em todos endpoints existentes. **Utilize uma biblioteca para facilitar, que tal o Joi?**
- Escreva testes de integração e/ou unidade.
