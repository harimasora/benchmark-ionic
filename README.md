# Benchmark Ionic

## Installation

### Ionic

```bash
$ npm install -g ionic
```

### Plugins

```bash
$ ionic cordova plugin add cordova-plugin-file-transfer
$ ionic cordova plugin add cordova-plugin-file
$ ionic cordova plugin add cordova-plugin-camera
$ ionic cordova plugin add cordova-plugin-geolocation
$ ionic cordova plugin add cordova-plugin-device-motion
$ ionic cordova plugin add cordova-plugin-gyroscope
```

### Build

```bash
$ ionic cordova build ios
```

É necessário adiconar estas chaves no Info.plist

```
Privacy - Camera Usage Description
Privacy - Photo Library Usage Description
```

Open the project in Xcode and select the development team in the project editor.
The project is located at /platforms/ios.
