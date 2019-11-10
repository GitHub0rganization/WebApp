## 6. いざ開発

コードを書き換える度に `go run` し直すのは面倒くさいので、書き換えるとrebuildしてくれるコマンドを用意しているので活用してください。

realizeをgo getする

```console
❯ make dev-deps                     
  GO111MODULE=off go get -u -v \
                  github.com/oxequa/realize
```

```
  github.com/oxequa/realize (download)
  github.com/oxequa/interact (download)
  github.com/fatih/color (download)
  github.com/fsnotify/fsnotify (download)
```

realizeを使って実行する

```console
❯ make refresh-run
realize start
```

``` console
[11:36:48][BACKEND] : Watching 21 file/s 14 folder/s
[11:36:48][BACKEND] : Install started
[11:36:51][BACKEND] : Install completed in 3.653 s
[11:36:51][BACKEND] : Running..
[11:36:51][BACKEND] : 2019/08/08 11:36:51 server.go:51: Listening on port 1991
```
