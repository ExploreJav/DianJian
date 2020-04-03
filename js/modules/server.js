//
function connectionServer() {
    var namespace = "/";
    window.appname = "html";
    window.serverURL = "ws://192.168.13.13:3001" + namespace;
    try {
         var scoket = io.connect(window.serverURL);
         window.mysocket = scoket;
         scoket.on("connect", function () {
              window.mysocket.emit("login", {
                   appname: window.appname
              });
         });
         scoket.emit("dianJian", "");
         scoket.on("dianJian", function (message) {
              console.log("++++++++++++++++++++++++++++++" + message);
              //设置变电站总数
         })
    } catch (err) {
         console.log("err");
    }
}
module.exports = connectionServer;