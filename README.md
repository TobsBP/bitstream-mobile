# Bitstream

Plataforma mobile para artistas — compartilhe obras, dispute em duelos e descubra novos talentos.

## Funcionalidades

- **Feed** — linha do tempo com posts de artistas
- **Duelo** — confronto entre duas obras para a comunidade votar
- **Descobrir** — exploração por tags e categorias
- **Perfil** — portfólio do artista com sistema de XP

## Stack

- [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/)
- [Expo Router](https://expo.github.io/router/) — navegação baseada em arquivos
- [NativeWind](https://www.nativewind.dev/) — Tailwind CSS para React Native
- [Supabase](https://supabase.com/) — banco de dados e autenticação
- TypeScript

## Como rodar

**Pré-requisitos:** Node.js, Expo CLI

```bash
npm install
```

Crie um arquivo `.env` na raiz com as variáveis do Supabase:

```env
EXPO_PUBLIC_SUPABASE_URL=sua_url_aqui
EXPO_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui
```

```bash
# Iniciar o servidor de desenvolvimento
npm start

# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```
