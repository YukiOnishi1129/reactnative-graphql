# reactnative-graphql

reactnative と書いてるけど、web(Next.js)もあります。

## Next.js リポジトリ

- web リポジトリ

## ReactNative リポジトリ

- native リポジトリ

## バックエンドリポジトリ (Express)

- server リポジトリ

# 環境構築

## Next.js 起動

- web ディレクトリへ移動

```
cd web
```

- 「yarn」コマンドでライブラリを install
- 「yarn dev」コマンドを実行

## ReactNative 起動

- native ディレクトリへ移動

```
cd native
```

- 「yarn」コマンドでライブラリを install
- 「yarn start」コマンドを実行

## バックエンド起動

- server ディレクトリへ移動

```
cd server
```

- 「.env」ファイルがなければ新規作成

  - 中身は「.env.sample と同じものを記載」

- コンテナを起動させる

```
// イメージファイルをビルド
docker-compose build

// コンテナを起動
docker-compose up

```

- バックエンドの DB 設定

# 他 docker コマンド

```
// コンテナを停止 (docker-compose startで再起動する)
docker-compose stop

// コンテナを停止・削除
docker-compose down

// コンテナを停止・削除・ボリュームの削除
docker-compose down -v

// 再起動
docker-compose restart

// serverコンテナへアクセス
docker exec -it rn_graphql_server sh

// dbコンテナへアクセス
docker exec -it db mysql -u root -p

```
