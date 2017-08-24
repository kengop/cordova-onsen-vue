## 初期化

```sh
cd Onsen
npm install
```

## iosでビルド

```sh
cordova platform add ios # 初回のみ
cordova build ios
```

## browserで実行

```sh
cordova platform add browser # 初回のみ
cordova run browser -- --port=8001 --target=chrome
```

## このアプリのオリジナルは以下の手順で作成

```sh
cordova create Onsen com.kengoinaba.onsen onsen --template cordova-template-onsenui-vue-webpack
```
