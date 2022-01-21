# Eight Shop - FIAP ETAPA 4 - Front-End com Angular
[![Generic badge](https://img.shields.io/badge/URL-Pagina-green.svg)](http://eight-shop.s3-website-us-east-1.amazonaws.com/)
[![Generic badge](https://img.shields.io/badge/Linguagem-Angular-red.svg)](https://angular.io/)

Essa aplicação disponibiliza páginas Web para consulta de produtos veganos, vegetarianos e sem-glúten, além de permitir adição dos mesmos em um carrinho de compras virtual.

### Link de acesso da página: [Angular-shopping-cart](http://eight-shop.s3-website-us-east-1.amazonaws.com/)

> Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 13.1.2.

## Iniciar aplicação

Execute o comando abaixo para instalar as dependências:
```ssh
npm install
```

Execute o comando abaixo para iniciar a aplicação:
```ssh
ng serve --open
```
> A partir da execução local a aplicação estará disponível em [http://localhost:4200](http://localhost:4200)

É possível alterar a `porta de start` com esse comando:
```ssh
ng serve --open --port PORT_NUMBER
```

## Build

Execute o comando abaixo para realizar o build do projeto. Os artefatos serão armazenados no diretório `dist/`.
```ssh
ng build
```

## :warning: Integrações
Esta aplicação consome o serviço Spring que está deployado no EC2 da AWS.<br>
**Código fonte do serviço:** [`fiap-fase3ws`](https://github.com/Vis-Rodrigues/fiap-fase3ws)

## Comandos úteis

Para criar um novo componente, utilize o comando abaixo:
```ssh
ng generate component NOME-COMPONENTE
```
OU
```ssh
ng g c NOME-COMPONENTE
```

Para criar um novo serviço, utilize o comando abaixo:
```ssh
ng generate service NOME-SERVICO
```
OU
```ssh
ng g s NOME-SERVICO
```

## :rocket: Próximos passos
* Adicionar pagamento
* Adicionar autenticação
* Implementar a chamada do serviço de carrinho