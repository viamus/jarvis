# JARVIS Dashboard - Futuristic Landing Page with Keycloak Authentication

Uma landing page futur�stica para o sistema JARVIS com integra��o ao Keycloak para autentica��o.

## ? Caracter�sticas

- **Design Futur�stico**: Interface com tema cyberpunk e elementos visuais avan�ados
- **Autentica��o Keycloak**: Integra��o completa com Keycloak para login seguro
- **Anima��es Avan�adas**: Efeitos visuais e anima��es que remetem � intelig�ncia artificial
- **Responsivo**: Funciona perfeitamente em desktop e dispositivos m�veis
- **Tema Escuro**: Design otimizado para ambientes de trabalho profissionais

## ?? Funcionalidades

### Landing Page
- Logo JARVIS animado com efeitos de pulsa��o
- Anima��es de background neural network
- Bot�o de login integrado com Keycloak
- Cards de features com �cones futur�sticos
- Part�culas flutuantes e efeitos de grade

### Dashboard
- Interface de usu�rio autenticada
- M�tricas de sistema em tempo real
- Painel de atividades recentes
- Controles de sistema organizados
- Logout seguro

### Loading Screen
- Anima��o de carregamento tem�tica
- Indicadores de progresso visuais
- Transi��es suaves entre estados

## ??? Tecnologias Utilizadas

- **React 19.1.1** - Framework frontend
- **TypeScript** - Tipagem est�tica
- **Vite** - Build tool e servidor de desenvolvimento
- **Keycloak-js** - Cliente JavaScript do Keycloak
- **CSS3** - Estiliza��o avan�ada com anima��es
- **Google Fonts** - Fontes Orbitron e Rajdhani

## ?? Pr�-requisitos

- Node.js 18+ instalado
- Servidor Keycloak configurado e rodando
- Navegador moderno com suporte a ES6+

## ?? Configura��o do Keycloak

### 1. Configura��o do Realm

1. Acesse o console administrativo do Keycloak
2. Crie um novo realm chamado `jarvis` (ou use o nome configurado no .env)
3. Configure as defini��es b�sicas do realm

### 2. Configura��o do Client

1. No realm `jarvis`, crie um novo client:
   - **Client ID**: `jarvis-dashboard`
   - **Client Type**: `OpenID Connect`
   - **Client authentication**: `Off` (public client)
   
2. Configure as URLs v�lidas:
   - **Valid redirect URIs**: `http://localhost:*/*`
   - **Valid post logout redirect URIs**: `http://localhost:*/*`
   - **Web origins**: `http://localhost:*`

3. Configure as configura��es avan�adas:
   - **Access Token Lifespan**: 5 minutes (ou conforme necess�rio)
   - **SSO Session Idle**: 30 minutes
   - **SSO Session Max**: 10 hours

### 3. Configura��o de Usu�rios

1. Crie usu�rios de teste no realm
2. Configure as credenciais
3. Teste o login atrav�s da interface do Keycloak

## ?? Instala��o e Execu��o

### 1. Clone o reposit�rio
```bash
git clone <repository-url>
cd jarvis-plataform/src/frontend/jarvis-dashboard
```

### 2. Instale as depend�ncias
```bash
npm install
```

### 3. Configure as vari�veis de ambiente
Edite o arquivo `.env` na raiz do projeto:

```env
# Vari�veis principais do Vite
VITE_KEYCLOAK_URL=http://localhost:8080
VITE_KEYCLOAK_REALM=jarvis
VITE_KEYCLOAK_CLIENT_ID=jarvis-dashboard

# Vari�veis de fallback (compatibilidade)
REACT_APP_KEYCLOAK_URL=http://localhost:8080
REACT_APP_KEYCLOAK_REALM=jarvis
REACT_APP_KEYCLOAK_CLIENT_ID=jarvis-dashboard
```

### 4. Execute o projeto
```bash
npm run dev
```

O projeto estar� dispon�vel em `http://localhost:5173` (ou porta indicada pelo Vite).

## ?? Customiza��o

### Cores e Tema

As cores principais podem ser modificadas no arquivo `LandingPage.css`:

```css
:root {
  --primary-color: #00f5ff;    /* Cyan futur�stico */
  --secondary-color: #0099cc;  /* Azul escuro */
  --background-start: #0a0a0f; /* Preto azulado */
  --background-mid: #1a1a2e;   /* Azul escuro */
  --background-end: #16213e;   /* Azul m�dio */
}
```

### Anima��es

Para ajustar as anima��es, modifique os keyframes nos arquivos CSS:
- `LandingPage.css` - Anima��es da landing page
- `Dashboard.css` - Anima��es do dashboard
- `Loading.css` - Anima��es de carregamento

## ?? Responsividade

O projeto inclui breakpoints responsivos:
- **Desktop**: > 768px
- **Tablet**: 768px - 481px  
- **Mobile**: ? 480px

## ?? Seguran�a

- Integra��o nativa com Keycloak OIDC
- Tokens JWT seguros
- Renova��o autom�tica de tokens
- Logout seguro com limpeza de sess�o
- Valida��o de rotas protegidas

## ?? Troubleshooting

### Erro "process is not defined"
- **Causa**: Tentativa de usar `process.env` no c�digo do cliente
- **Solu��o**: Use `import.meta.env` para Vite ou configure as vari�veis com prefixo `VITE_`

### Erro de conex�o com Keycloak
- Verifique se o servidor Keycloak est� rodando
- Confirme as URLs no arquivo `.env`
- Verifique as configura��es do client no Keycloak

### Problemas de CORS
- Configure as origens v�lidas no client Keycloak
- Verifique as configura��es de web origins

### Problemas de carregamento de fontes
- Verifique a conex�o com a internet
- Considere hospedar as fontes localmente se necess�rio

### Vari�veis de ambiente n�o funcionam
- Certifique-se de usar o prefixo `VITE_` para vari�veis do Vite
- Reinicie o servidor de desenvolvimento ap�s alterar o `.env`
- Verifique se o arquivo `.env` est� na raiz do projeto React

## ?? Licen�a

Este projeto est� sob a licen�a MIT. Veja o arquivo LICENSE para mais detalhes.

## ?? Contribui��o

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudan�as (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ?? Suporte

Para suporte, abra uma issue no reposit�rio do projeto ou entre em contato com a equipe de desenvolvimento.

---

**JARVIS Dashboard** - Conectando voc� ao futuro da intelig�ncia artificial ??
