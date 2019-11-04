/**
 * https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md
 */
/**
 * npm i --save-dev reactotron-react-native ou yarn add reactotron-react-native
 */
/**
 * src/config/ReactotronConfig.js
 */
import Reactotron from 'reactotron-react-native';
// import { reactotronRedux } from "reactotron-redux";
// import sagaPlugin from "reactotron-redux-saga";

if (__DEV__) {
  // var __DEV__ returns true only in development environment.
  const tron = Reactotron.configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    // .use(reactotronRedux())
    // .use(sagaPlugin())
    .connect(); // let's connect!

  tron.clear(); // clear history every time you restart app

  console.tron = tron; // as console is a global variable add tron console to access all application components
}

/**
 * https://facebook.github.io/react-native/docs/running-on-device
 */
/**
 * C:\Users\Example\AppData\Local\Android\Sdk\platform-tools>adb reverse tcp:8081 tcp:8081
 * C:\Users\Example\AppData\Local\Android\Sdk\platform-tools>adb reverse tcp:9090 tcp:9090
 * C:\Users\Example\AppData\Local\Android\Sdk\platform-tools>adb devices
 */
