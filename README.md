
# :art: Painting Chat 繪畫聊天室

Demo：https://painting-chat.herokuapp.com/

基於 **Vue (2.x)** 所製作，仿造以前Y即時通的繪畫功能，彷彿回到童年!

![image](https://raw.githubusercontent.com/motea927/vue-chat-paint/master/demoimg/demo.gif)

## :page_facing_up: 技術

【前端】

- **Vue**：前端MVVM框架
- **vue-router**：vue之路由系統，本專案使用路由懶加載優化
- **Sass(Scss)**：CSS預處理器
- **ES6**：ECMAScript 6 語法
- **CSShake**：CSS的震動動畫框架，效果非常有趣

【後端】

- **Node.js**：利用V8引擎的程式語言，使用javascript語法
- **Express**：架設伺服及路由的簡易框架
- **ws**：websocket函式庫，用以雙向溝通
- **connect-history-api-fallback
**：作為express處理的中介，以利於使用vue-router的history模式

## :pencil2: 收穫

1. 了解vue元件、事件監聽、屬性綁定、數據綁定等基礎
2. 了解了 vue 元件之傳值(子子eventBus、父子props)
3. 學會在vue中使用websocket
4. 學會vue-router控制路由並使用懶加載


## :pencil: 細節


前端登入介面輸入暱稱及房間，由路由綁定暱稱及房間參數進入聊天室，進入聊天室後連接websocket，畫畫及傳送資訊時傳送相關參數至websocket server，利用websocket server做廣播。
畫面主要使用grid搭配flex切版，大部分圖片使用svg sprites，為保持即時通的原始樣貌僅在寬度720P以上的寬螢幕做微微的media query。


## :pushpin: 待開發

1. 繪畫版Extras功能
2. 聊天表情功能
3. 優化websocket

## :coffee: 本地開發步驟

``` bash
# 安裝模組
$ npm install
```
更改根目錄socket.js的host為註解內的 'ws://localhost:8081'

``` bash
# 啟動websocket server
$ node ws-server.js

# 本地載入伺服
$ npm run dev
```

