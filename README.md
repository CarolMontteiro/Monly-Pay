# 💳 MonlyPay

**MonlyPay** é uma aplicação web para **organização de gastos mensais**, criada para facilitar o controle de despesas realizadas em cartões de crédito por diferentes pessoas ao longo de um mês.

O projeto surgiu a partir de uma necessidade real(pessoal): substituir planilhas manuais por um sistema simples, visual e dinâmico, permitindo acompanhar gastos, parcelas e totais de forma mais prática.

---

## 🎯 Objetivo do Projeto

- Centralizar gastos mensais em um único sistema
- Organizar despesas por **mês**, **pessoa** e **cartão**
- Evitar controle manual em planilhas
- Servir como projeto prático para aprendizado de **Angular moderno**

---

## 🧠 Conceito de Funcionamento

O fluxo principal do sistema é estruturado da seguinte forma:

1. **Tela inicial (Home)**
   - Exibe a marca **MonlyPay**
   - Possui um botão para criar uma nova lista mensal

2. **Criação de listas**
   - Ao clicar em “Nova lista de contas”, um **modal** é aberto
   - O usuário define o nome da lista (ex: *Contas de Dezembro*)
   - Ao confirmar, um **card** é gerado automaticamente na Home

3. **Organização por pessoas**
   - Cada lista mensal pode conter várias pessoas
   - Cada pessoa pode utilizar um ou mais cartões

4. **Tabelas de gastos**
   - Cada cartão possui sua própria tabela
   - As tabelas são adicionadas conforme a necessidade
   - Cada tabela contém:
     - Descrição do gasto
     - Parcela (quando houver)
     - Valor
   - O sistema calcula o **total automaticamente**

---

## 🛠️ Tecnologias Utilizadas

- **Angular 20 **
- **TypeScript**
- **HTML5**
- **CSS / Tailwind CSS**
- **LocalStorage** (persistência local)
- **Angular CDK (planejado para modais e interações)**

---

## 🚧 Status do Projeto

🟡 **Em desenvolvimento**

### Funcionalidades em andamento
- Criação de listas mensais
- Modal para criação de listas
- Persistência inicial de dados com **LocalStorage**

### Próximos passos planejados
- CRUD de pessoas
- CRUD de cartões
- Tabelas dinâmicas por cartão
- Cálculo automático de totais
- Melhorias de UX/UI
- Integração com backend futuramente

---

## 📚 Referência de Estudo e Adaptação de Versão

Este projeto teve como **referência inicial de estudo** um curso de **Angular v17+ da plataforma Udemy**, usei como base um módulo de projeto prático de Lista de Tarefas.

No entanto:

- O **MonlyPay foi desenvolvido utilizando Angular v20**
- Desde o lançamento do curso, ocorreram mudanças significativas no framework

Foi necessário **adaptar conceitos e implementar soluções compatíveis com versões mais recentes**

> O curso serviu como guia conceitual, enquanto a implementação exigiu análise, adaptação e decisões técnicas próprias.

## 👩‍💻 Autora

**Carol Monteiro**  
Front-end Developer em formação • Angular • JavaScript


