import { PropsWithChildren } from "react";
import Taro, {
  useLaunch,
  useDidShow,
  useDidHide,
  useError,
  usePageNotFound,
  useUnhandledRejection,
} from "@tarojs/taro";

// 全局样式
import "./app.scss";

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched.");
  });

  // 对应 onShow
  useDidShow(() => {
    console.log("在小程序环境中对应 app 的 onLaunch。");
  });

  // 对应 onHide
  useDidHide(() => {
    console.log("程序切后台时触发。");
  });

  useError((error) => {
    console.log("小程序发生脚本错误或 API 调用报错时触发。", error);
  });

  usePageNotFound(() => {
    Taro.redirectTo({
      url: "pages/...",
    }); // 如果是 tabbar 页面，请使用 Taro.switchTab
  });

  useUnhandledRejection((res) => {
    console.log(
      "小程序有catch的 Promise 拒绝时触发。",
      res.reason,
      res.promise
    );
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
