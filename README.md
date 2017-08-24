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

## Androidで実行

### 事前準備

- Android端末をUSBで接続しておくこと
    - Android開発環境 参照

```sh
cordova run android
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

## 開発環境構築
### 必要なもの
- nodejs
- npm
- cordova
    - `npm install -g cordova`

## Android 開発環境構築 (Windows)

- つまったら、以下のサイトを参照
    - https://cordova.apache.org/docs/en/7.x/guide/platforms/android/index.html
- JDKのインストール
    - `JAVA_HOME` のPATH設定
        - `C:\Program Files\Java\jdk1.8.0_144`
- Android Studio インストール
    - https://developer.android.com/studio/install.html
    - 2.0 GiB近くあるので注意
    - インストール後さらに必要なファイルのDLが走るので合計10 GiB近く必要する
- ターゲットとするAndroidのAPIバージョンを確認する
    - https://developer.android.com/guide/topics/manifest/uses-sdk-element.html#ApiLevels
    - 例)Android 5.0だったら API レベルは 21になる。
- `ANDROID_HOME` の PATH 設定
    - `C:\Users\k-inaba\AppData\Local\Android\Sdk`
- USBでAndroid端末とPCをつなぐ
    - Android端末側でデバッグ実行を許可する
    - `adb devices` をPC側のプロンプトなどで実行して、接続した端末がリストアップされてたらOK