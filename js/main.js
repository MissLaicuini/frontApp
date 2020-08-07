

//鼠标在图片上时降低透明度
function change_Opacity1() {
    var getElement_img_On = document.getElementById("img_On");
    getElement_img_On.className = "img_ForOn";    
}
    //鼠标移出图片时恢复透明度
    function change_Opacity2() {
        var getElement_img_On = document.getElementById("img_On");
        getElement_img_On.className = "img";    
    }
    function change_Opacity3() {
        var getElement_img_On = document.getElementById("img_On1");
        getElement_img_On.className = "img_ForOn";
    }
    //鼠标移出图片时恢复透明度
    function change_Opacity4() {
        var getElement_img_On = document.getElementById("img_On1");
        getElement_img_On.className = "img";
    }
//鼠标控制下载图标变大
    function change_3X_D() {
        var getElement_Download = document.getElementById("download");
        getElement_Download.className = "fa fa-download fa-2x";
    }
//鼠标控制下载图标复原
    function change_2X_D() {
        var getElement_Download = document.getElementById("download");
        getElement_Download.className = "fa fa-download fa-1x";
    }
//鼠标控制播放图标变大
    function change_3X_O() {
        var getElement_Open = document.getElementById("open");
        getElement_Open.className = "fa fa-play-circle fa-2x";
    }
//鼠标控制播放图标复原
    function change_2X_O() {
        var getElement_Open = document.getElementById("open");
        getElement_Open.className = "fa fa-play-circle fa-1x";
    }
    function change_3X_D1() {
        var getElement_Download = document.getElementById("download1");
        getElement_Download.className = "fa fa-download fa-2x";
    }
    //鼠标控制下载图标复原
    function change_2X_D1() {
        var getElement_Download = document.getElementById("download1");
        getElement_Download.className = "fa fa-download fa-1x";
    }
    //鼠标控制播放图标变大
    function change_3X_O1() {
        var getElement_Open = document.getElementById("open1");
        getElement_Open.className = "fa fa-play-circle fa-2x";
    }
    //鼠标控制播放图标复原
    function change_2X_O1() {
        var getElement_Open = document.getElementById("open1");
        getElement_Open.className = "fa fa-play-circle fa-1x";
    }
    function video_cilk( ) {
        var parm2 = document.getElementById("video_Name").value;
        console.log(parm2);
        var myurl = "play_music.html" + "?" + "&url=" + parm2;
        console.log(myurl);
        window.location.assign(myurl);
    }