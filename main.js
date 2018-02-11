/**
 * Created by asus on 2018/2/11.
 */
cc.game.onStart = function () {
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(480, MW.HEIGHT, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    //load resource
    cc.LoaderScene.preload(g_resources, function () {
        // cc.director.runScene(new HelloWorldScene());
    },this)
};

cc.game.run();