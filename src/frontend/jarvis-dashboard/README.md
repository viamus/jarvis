# JARVIS Dashboard - Futuristic Landing Page with Keycloak Authentication

Uma landing page futurística para o sistema JARVIS com integração ao Keycloak para autenticação.

## ? Características

- **Design Futurístico**: Interface com tema cyberpunk e elementos visuais avançados
- **Autenticação Keycloak**: Integração completa com Keycloak para login seguro
- **Animações Avançadas**: Efeitos visuais e animações que remetem à inteligência artificial
- **Responsivo**: Funciona perfeitamente em desktop e dispositivos móveis
- **Tema Escuro**: Design otimizado para ambientes de trabalho profissionais

## ?? Funcionalidades

### Landing Page
- Logo JARVIS animado com efeitos de pulsação
- Animações de background neural network
- Botão de login integrado com Keycloak
- Cards de features com ícones futurísticos
- Partículas flutuantes e efeitos de grade

### Dashboard
- Interface de usuário autenticada
- Métricas de sistema em tempo real
- Painel de atividades recentes
- Controles de sistema organizados
- Logout seguro

### Loading Screen
- Animação de carregamento temática
- Indicadores de progresso visuais
- Transições suaves entre estados

## ??? Tecnologias Utilizadas

- **React 19.1.1** - Framework frontend
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e servidor de desenvolvimento
- **Keycloak-js** - Cliente JavaScript do Keycloak
- **CSS3** - Estilização avançada com animações
- **Google Fonts** - Fontes Orbitron e Rajdhani

## ?? Pré-requisitos

- Node.js 18+ instalado
- Servidor Keycloak configurado e rodando
- Navegador moderno com suporte a ES6+

## ?? Configuração do Keycloak

### 1. Configuração do Realm

1. Acesse o console administrativo do Keycloak
2. Crie um novo realm chamado `jarvis` (ou use o nome configurado no .env)
3. Configure as definições básicas do realm

### 2. Configuração do Client

1. No realm `jarvis`, crie um novo client:
   - **Client ID**: `jarvis-dashboard`
   - **Client Type**: `OpenID Connect`
   - **Client authentication**: `Off` (public client)
   
2. Configure as URLs válidas:
   - **Valid redirect URIs**: `http://localhost:*/*`
   - **Valid post logout redirect URIs**: `http://localhost:*/*`
   - **Web origins**: `http://localhost:*`

3. Configure as configurações avançadas:
   - **Access Token Lifespan**: 5 minutes (ou conforme necessário)
   - **SSO Session Idle**: 30 minutes
   - **SSO Session Max**: 10 hours

### 3. Configuração de Usuários

1. Crie usuários de teste no realm
2. Configure as credenciais
3. Teste o login através da interface do Keycloak

## ?? Instalação e Execução

### 1. Clone o repositório
```bash
git clone <repository-url>
cd jarvis-plataform/src/frontend/jarvis-dashboard
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Edite o arquivo `.env` na raiz do projeto:

```env
# Variáveis principais do Vite
VITE_KEYCLOAK_URL=http://localhost:8080
VITE_KEYCLOAK_REALM=jarvis
VITE_KEYCLOAK_CLIENT_ID=jarvis-dashboard

# Variáveis de fallback (compatibilidade)
REACT_APP_KEYCLOAK_URL=http://localhost:8080
REACT_APP_KEYCLOAK_REALM=jarvis
REACT_APP_KEYCLOAK_CLIENT_ID=jarvis-dashboard
```

### 4. Execute o projeto
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (ou porta indicada pelo Vite).

## ?? Customização

### Cores e Tema

As cores principais podem ser modificadas no arquivo `LandingPage.css`:

```css
:root {
  --primary-color: #00f5ff;    /* Cyan futurístico */
  --secondary-color: #0099cc;  /* Azul escuro */
  --background-start: #0a0a0f; /* Preto azulado */
  --background-mid: #1a1a2e;   /* Azul escuro */
  --background-end: #16213e;   /* Azul médio */
}
```

### Animações

Para ajustar as animações, modifique os keyframes nos arquivos CSS:
- `LandingPage.css` - Animações da landing page
- `Dashboard.css` - Animações do dashboard
- `Loading.css` - Animações de carregamento

## ?? Responsividade

O projeto inclui breakpoints responsivos:
- **Desktop**: > 768px
- **Tablet**: 768px - 481px  
- **Mobile**: ? 480px

## ?? Segurança

- Integração nativa com Keycloak OIDC
- Tokens JWT seguros
- Renovação automática de tokens
- Logout seguro com limpeza de sessão
- Validação de rotas protegidas

## ?? Troubleshooting

### Erro "process is not defined"
- **Causa**: Tentativa de usar `process.env` no código do cliente
- **Solução**: Use `import.meta.env` para Vite ou configure as variáveis com prefixo `VITE_`

### Erro de conexão com Keycloak
- Verifique se o servidor Keycloak está rodando
- Confirme as URLs no arquivo `.env`
- Verifique as configurações do client no Keycloak

### Problemas de CORS
- Configure as origens válidas no client Keycloak
- Verifique as configurações de web origins

### Problemas de carregamento de fontes
- Verifique a conexão com a internet
- Considere hospedar as fontes localmente se necessário

### Variáveis de ambiente não funcionam
- Certifique-se de usar o prefixo `VITE_` para variáveis do Vite
- Reinicie o servidor de desenvolvimento após alterar o `.env`
- Verifique se o arquivo `.env` está na raiz do projeto React

## ?? Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## ?? Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ?? Suporte

Para suporte, abra uma issue no repositório do projeto ou entre em contato com a equipe de desenvolvimento.

---

**JARVIS Dashboard** - Conectando você ao futuro da inteligência artificial ??
