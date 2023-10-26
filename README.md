# Liven e-commerce (teste ténico)

Esse app tem como objetivo mostrar uma listagem de produtos usando uma api em rest (FakestoreAPI) e manejamento de estado através do carrinho (sendo somente local). Esse projeto inclui entre suas bibliotecas

[jest](https://github.com/jestjs/jest) ferramenta padrão de testes do react

[React Native testing library](https://github.com/callstack/react-native-testing-library) renderização de componentes para testes unitários

[Styled components](https://github.com/styled-components/styled-components) criação de componentes aliada a estilização para melhor modularizar estilos usando atomic design

[Axios](https://github.com/axios/axios) gerenciar chamadas em rest

[React native navigation](https://github.com/wix/react-native-navigation) para navegação entre páginas do app usando componentes nativos

[Mobx](https://github.com/mobxjs/mobx) preservação do estado entre os stacks do react native navigation

## Installation

Entre na pasta principal e use o npm

```bash
npm install
```

## Usage

```python
npm start
```

em uma janela separada rode

```python
npm run android
```

## Considerações e melhorias

Como não é um produto completo nem todos os tratamentos foram feitos , como por exemplo o gerenciamento de loading e erros, por mais que eles sejam expostos não os coloquei no escopo.
O projeto foi criado na metodologia presenter first sendo assim a lógica das funcionalidades e testes foram implementados primeiro.
Não existem testes de snapshot, somente de funcionalidade e renderização de componente já que considero que a estrutura das páginas pode mudar com frequência e engessar os testes

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Aviso

Esse projeto foi feito em uma máquina windows, portanto as funcionalidades de ios não estão sendo utilizadas
