# WebApp

## セットアップ

```go
# database/src/
$ make migrate/init
$ make migrate/up
$ docker-compose up

# api/src/
$ make .env
$ make run
```

## DB設計
https://hackmd.io/UwTMbawbRMqKyKqBBn1p8Q

## エンドポイント管理(swagger)

```sh
# /swagger
$ docker-compose up
$ open localhost:8080
```

これ見てendpoint.yml書くだけ。
https://qiita.com/rllllho/items/53a0023b32f4c0f8eabb
