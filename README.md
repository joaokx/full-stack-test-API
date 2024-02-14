Funcionalidades
1. Cadastro de Usuário
Tecnologias Envolvidas:

Frontend: React.js
Backend: Node.js, Express
Banco de Dados: PostgreSQL, TypeORM
Descrição:

Permite que os usuários se cadastrem na aplicação fornecendo informações como nome, email e senha.
No frontend, o React.js é utilizado para criar formulários de cadastro e interagir com o backend.
2. Autenticação de Usuário
Tecnologias Envolvidas:

Frontend: React.js
Backend: Node.js, Express, JWT (JSON Web Tokens)
Descrição:

Após o cadastro, os usuários podem fazer login para acessar suas contas.
A autenticação é realizada através do uso de tokens JWT, garantindo a segurança da comunicação entre frontend e backend.
3. Upload de Arquivos
Tecnologias Envolvidas:

Frontend: React.js
Backend: Node.js, Express, Multer (para manipulação de arquivos)
Descrição:

Permite que os usuários façam upload de arquivos para a aplicação.
O Multer é utilizado no backend para lidar com o upload de arquivos, salvando-os em um diretório específico.
4. Visualização de Arquivos
Tecnologias Envolvidas:

Frontend: React.js
Backend: Node.js, Express
Descrição:

Os usuários podem visualizar a lista de arquivos que enviaram para a aplicação.
O React.js é utilizado para exibir a lista de arquivos recuperados do backend.
5. Proteção de Rotas
Tecnologias Envolvidas:

Frontend: React.js
Backend: Node.js, Express
Descrição:

Algumas rotas, como a visualização de perfil, são protegidas e requerem autenticação.
O Express middleware é utilizado para verificar a presença e validade do token JWT antes de permitir o acesso à rota.
Como Executar o Projeto
Configuração do Banco de Dados:

Crie um banco de dados PostgreSQL.
Atualize as configurações do banco de dados no arquivo ./data-source.ts.
Instalação de Dependências:

Execute npm install tanto no diretório frontend quanto no backend para instalar as dependências necessárias.
Execução do Backend:

Vá para o diretório backend e execute npm start para iniciar o servidor backend.
Execução do Frontend:

Vá para o diretório frontend e execute npm start para iniciar a aplicação frontend.
Acesso à Aplicação:

Acesse a aplicação no navegador através de http://localhost:3001.
Lembre-se de ajustar todas as configurações necessárias, como as variáveis de ambiente, URLs e portas de acordo com a sua configuração específica.

Este é um guia básico de configuração e utilização da aplicação. Consulte a documentação específica das bibliotecas e frameworks utilizados para informações detalhadas sobre suas funcionalidades.






