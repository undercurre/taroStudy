import { View, Text } from "@tarojs/components";
import Taro, {
  useAddToFavorites,
  useDidHide,
  useDidShow,
  useLoad,
  usePageScroll,
  usePullDownRefresh,
  useReachBottom,
  useReady,
  useResize,
  useSaveExitState,
  useShareAppMessage,
  useShareTimeline,
  useTabItemTap,
  useUnload,
} from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  useUnload(() => {
    console.log("onUnload");
  });

  useReady(() => {
    // 访问小程序渲染层的 DOM 节点。
    const query = Taro.createSelectorQuery();
    query
      .select("#only")
      .boundingClientRect()
      .exec((res) => console.log(res, "res"));
  });

  useDidShow(() => {
    console.log("Page Show");
  });

  useDidHide(() => {
    console.log("Page Hide");
  });

  usePullDownRefresh(() => {
    console.log("onPullDownRefresh");
  });

  useReachBottom(() => {
    console.log("onReachBottom");
  });

  usePageScroll((res) => {
    console.log(res.scrollTop);
  });

  useAddToFavorites((res) => {
    // webview 页面返回 webviewUrl
    console.log("WebviewUrl: ", res.webviewUrl);
    return {
      title: "自定义标题",
      imageUrl: "https://demo.png",
      query: "name=xxx&age=xxx",
    };
  });

  //Button 组件 openType='share'
  useShareAppMessage((res) => {
    if (res.from === "button") {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: "自定义转发标题",
      path: "/page/user?id=123",
    };
  });

  useShareTimeline(() => {
    console.log("分享朋友圈");
    return {};
  });

  useResize((res) => {
    console.log(res.size.windowWidth);
    console.log(res.size.windowHeight);
  });

  useTabItemTap((item) => {
    console.log(item.index);
    console.log(item.pagePath);
    console.log(item.text);
  });

  useSaveExitState(() => {
    const exitState = { myDataField: "myData" }; // 需要保存的数据
    return {
      data: exitState,
      expireTimeStamp: Date.now() + 24 * 60 * 60 * 1000, // 超时时刻
    };
  });

  return (
    <View className="index">
      <Text>Hello world!</Text>
    </View>
  );
}
