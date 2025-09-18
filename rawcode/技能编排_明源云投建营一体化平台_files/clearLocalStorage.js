/**
    * 根据用户 id 判断是否清空
    * 清除 message 数据
    * 清除列表记忆的数据
    * 清除本地存储产生的数据
    * 仅清除以 MAP_LOCATION_STORAGE_ 开头，并且非持久化的数据
*/
(function () {

    function clearLocalStorage(id) {

        //console.log("clear with token："+ id)
        var key = null;
        var data = null;

        try {
            // 是否登陆过
            if (id === window.localStorage.getItem('MAP_SESSION_ID')) {
                return;
            }

            // 清除本地存储
            for (var i = 0; i < localStorage.length; i++) {
                key = localStorage.key(i);
                if (!key.indexOf('message_') || !key.indexOf("memories_")) {
                    window.localStorage.removeItem(key);
                } else if (!key.indexOf("MAP_LOCATION_STORAGE_")) {
                    data = window.localStorage.getItem(key);
                    data = JSON.parse(data);
                    if (data.permanent !== true) {
                        window.localStorage.removeItem(key);
                    }
                }
            }

            // 设置用户 id
            window.localStorage.setItem('MAP_SESSION_ID', id)
        } catch (e) { }
    }
    
    clearLocalStorage && clearLocalStorage(Mysoft.Map6.UI.page.ut);
})()