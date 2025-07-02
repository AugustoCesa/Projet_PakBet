# Pak Bet

Projeto desenvolvido por:  
**Augusto Cesar, Pedro Baschung Bertazon, Kelwin Gameiro Dos Santos**

## Descrição

O Pak Bet é uma base para uma casa de apostas online, desenvolvida com foco em usabilidade, acessibilidade e experiência do usuário (UX Design). O projeto busca oferecer uma navegação intuitiva, visual moderno e responsivo, além de funcionalidades essenciais para o usuário final.

---

## Tecnologias e Aspectos de Web Design

- **HTML5 Semântico:**  
  Estruturação clara das páginas, uso de tags semânticas (`header`, `main`, `section`, `footer`) para melhor acessibilidade e SEO.

- **CSS3 Moderno:**  
  - Utilização de variáveis CSS para cores e fontes, facilitando manutenção e consistência visual.
  - Gradientes e imagens de fundo para criar identidade visual marcante.
  - Grid e Flexbox para layouts responsivos e adaptáveis a diferentes tamanhos de tela.
  - Media queries para garantir boa experiência em dispositivos móveis e desktops.
  - Componentização visual com classes reutilizáveis para cards, botões, menus e seções.

- **Bootstrap 5:**  
  - Uso de componentes prontos e utilitários para responsividade, grid, botões, formulários e modais.
  - Ícones do Bootstrap Icons para reforçar a comunicação visual.

- **Web Components:**  
  - Implementação de componentes customizados (`header-component`, `footer-component`) para reutilização e padronização do cabeçalho e rodapé em todas as páginas.

---

## Aspectos de UX Design

- **Navegação Intuitiva:**  
  Menu fixo no topo, com navegação clara entre as principais áreas do site (Jogos, Ao Vivo, Perfil, Notificações).

- **Responsividade:**  
  Layout adaptável para diferentes dispositivos, garantindo boa usabilidade tanto em desktop quanto em mobile.

- **Feedback Visual:**  
  - Botões com efeitos de hover e transições suaves.
  - Destaque para ações importantes (ex: seguir transmissão, confirmar apostas, realizar depósitos/saques).
  - Uso de cores para diferenciar ações positivas (verde), alertas (amarelo) e informações.

- **Acessibilidade:**  
  - Contraste adequado entre texto e fundo.
  - Tamanhos de fonte legíveis.
  - Elementos interativos com área de clique adequada.

- **Componentização e Reutilização:**  
  - Cards para jogos, transmissões e histórico, facilitando a leitura e interação.
  - Seções bem definidas para separar conteúdos (carrossel, jogos mais jogados, premiações, transmissões ao vivo).

- **Formulários Simples e Diretos:**  
  - Campos claros e objetivos para login, cadastro, depósito e saque.
  - Validação básica de campos obrigatórios.

- **Experiência Visual:**  
  - Uso de imagens ilustrativas e ícones para reforçar o contexto de cada seção.
  - Carrossel de banners para destacar funcionalidades e promoções.
  - Destaque para saldo do usuário e histórico de transações.

---

## Estrutura de Pastas

- `/components`: Web components reutilizáveis (header, footer)
- `/pages`: Páginas HTML do projeto
- `/style`: Arquivos CSS organizados por contexto
- `/script`: Scripts JS para interatividade (menu mobile, apostas, seguir transmissões)
- `/images`: Imagens e ícones utilizados no site

---

## Melhorias Futuras

- Integração com backend para autenticação, saldo e apostas reais.
- Implementação de notificações dinâmicas.
- Acessibilidade avançada (atalhos de teclado, leitores de tela).
- Testes de usabilidade com usuários reais.

---