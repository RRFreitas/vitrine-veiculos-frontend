# Teste Prático Full Stack Python (Frontend)

### Tecnologias utilizadas no Frontend:
- Angular 16

### Casos de uso:
- Listagem, criação, edição e remoção de veículos
- Login de admin com token JWT

### Para rodar o projeto é preciso:
- Node 20.2.0

### Instalando o projeto
```shell
# Clone o repositório
$ git clone https://github.com/RRFreitas/vitrine-veiculos-frontend.git 

# Acesse o diretório do projeto
$ cd vitrine-veiculos-frontend

# Instale as dependências
$ npm ci
```

### Configuração
Na paste src/environments há 3 arquivos de configuração de variáveis de ambiente para cada ambiente. Altere de acordo com sua preferência
```javascript
export const environment = {
    production: false,
    API_URL: 'http://127.0.0.1:8000'
};

```

### Rodando o projeto
```shell
# Certifique-se que o npm instalou o Angular CLI
$ ng serve
```

### Para rodar os testes:
```shell
$ ng test
```

### Uso
- Para editar ou deletar um carro, clique no card do carro.

<img src="https://i.imgur.com/uhfiX1p.png)" style="max-width: 1000px;"/>