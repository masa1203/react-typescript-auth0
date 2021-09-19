# React-TypeScript-Auth0

React+TypeScript の SPA に Auth0 で認証を行う

## 参考

### 全体的に参考にしたもの

- https://dev.classmethod.jp/articles/add-authentication-with-auth0-to-react-typescript-app/
- https://auth0.com/docs/quickstart/spa/react

### 一部参考にしたもの

- [qiita create-react-app で環境変数の設定](https://qiita.com/naogify/items/37de1baf1aebb648273b)
- [qiita create-react-app のプロジェクトで環境変数を.env から読み込めない原因と解決策](https://qiita.com/wakeupsloth/items/ec19b9fbfddfb1cd58bb)

## 使用する SDK

- https://www.npmjs.com/package/@auth0/auth0-react
- https://auth0.github.io/auth0-react/

## 環境構築

```BASH
$ npx create-react-app react-auth0 --template typescript
$ cd react-auth0/
$ yarn add @auth0/auth0-react

# 起動方法
$ docker-compose up
```

### 環境変数の扱い

- Auth0 にログインして`Create Application`から`Single Page Application`を選択。
- `Settings`から`Client ID`と`Client Secret`をメモする。
- 環境変数は`.env`に記述して利用する。
- config.tsx を作成して環境変数の型を定義する。
- 各種環境変数は Config オブジェクトから使用する。

### Auth0 の設定

- Allowed Callback URLs
  - http://localhost:3000
- Allowed Logout URLs
  - http://localhost:3000
- Allowed Web Origins
  - http://localhost:3000
