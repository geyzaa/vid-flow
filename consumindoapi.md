Passo 1: Preparação - Instale o Node.js
ter o Node.js instalado em seu sistema. 

Passo 2: Instalação do JSON Server
Abra seu terminal ou prompt de comando;

Para instalar o JSON Server globalmente no sistema, digitar o seguinte comando 
e pressionar "Enter": npm install -g json-server 
estará pronto para utilizá-lo em qualquer projeto

Passo 3: Preparando o arquivo JSON
o arquivo JSON videos.json, que está dentro da pasta backend do projeto, servirá como a fonte de dados para o JSON Server. 
ex do arquivo usado no projeto: 
{
    "videos": [
      {
        "id": 1,
        "titulo": "Conhecendo a linguagem Go | Hipsters.Talks",
        "descricao": "3 mil visualizações",
        "url": "https://www.youtube.com/embed/y8FeZMv37WU",
        "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
        "categoria": "Programação"
      },
      {
        "id": 2,
        "titulo": "Desmistificando mobile - Linguagens e Frameworks",
        "descricao": "1,5 mil visualizações",
        "url": "https://www.youtube.com/embed/fmu1LQvZhms",
        "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
        "categoria": "Mobile"
      }, .....
    
Passo 4: Permitindo política de execução de scripts (apenas Windows)
para executar o JSON Server no Windows:

Abra o PowerShell como administrador. Para fazer isso, pesquise "PowerShell" no menu Iniciar, clique com o botão direito do mouse sobre "Windows PowerShell" (ou "Windows Terminal") e selecione "Executar como administrador".

No PowerShell, você pode verificar a política de execução atual com o seguinte comando:

Get-ExecutionPolicy

A política de execução pode ser "Restricted" (Restrita), que é a configuração padrão que impede a execução de scripts.

Execute o seguinte comando para permitir a execução de scripts no seu computador:

Set-ExecutionPolicy RemoteSigned

O PowerShell pode solicitar confirmação para realizar a operação. Pressione "S" (Sim) ou "Y" (Yes) dependendo da linguagem do seu terminal e pressione Enter para confirmar.

 é uma boa prática reverter a política de execução de scripts para o valor original para garantir a segurança do sistema. Pode fazer isso definindo a política de execução de volta para "Restricted" com o seguinte comando:

Set-ExecutionPolicy Restricted

Passo 5: Inicialização do JSON Server
Abrir o terminal integrado do VSCode, assim o terminal irá abrir automaticamente dentro da pasta do projeto;

Execute o seguinte comando para iniciar o JSON Server e usá-lo com o arquivo videos.json nesse caso:

    json-server --watch backend/videos.json

A opção --watch é usada para especificar que o servidor deve ficar "observando" um arquivo JSON específico para quaisquer mudanças. Isso significa que se você modificar o arquivo videos.json, o JSON Server automaticamente recarregará os dados para refletir as alterações.