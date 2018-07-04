
import axios from "axios";
import { Toast, Indicator, MessageBox } from 'mint-ui';
import getbg from "../assets/utils/getbg";
import router from "../router";
//axios.defaults.baseURL = "http://47.94.208.182:3000/"  //线上接口
axios.defaults.baseURL = "http://localhost:4000/vue"   // 开发环境

export default {
    routerAnimate({ commit }, preload) {
        const { to, from } = preload;
        let topath = to.path;
        let frompath = from.path;
        if (frompath == "/" && topath == "/app/home") {
            commit('routerAnimate', 'fade-out');
        } else if (frompath == "/app/home" && topath == "/search") {
            commit('routerAnimate', 'fade-out');
        } else if (frompath == "/app/home" && topath == "/describe") {
            commit('routerAnimate', 'slide-left');
        } else if (frompath == "/app/find" && topath == "/describe") {
            commit('routerAnimate', 'slide-left');
        } else if (frompath == "/app/find" && topath == "/search") {
            commit('routerAnimate', 'fade-out');
        } else if (frompath == "/app/home" && topath == "/province") {
            commit('routerAnimate', 'slide-left');
        } else if (frompath == "/app/mine" && topath == "/login") {
            commit('routerAnimate', 'slide-left');
        } else if (frompath == "/login" && topath == "/app/mine") {
            commit('routerAnimate', 'fade-out');
        } else if (frompath == "/app/mine" && topath == "/setpage") {
            commit('routerAnimate', 'slide-left');
        } else if (frompath == "/app/mine" && topath == "/describe") {
            commit('routerAnimate', 'slide-left');
        } else if (frompath == "/login" && topath == "/register") {
            commit('routerAnimate', 'slide-left');
        } else if (frompath == "/describe" && topath == "/buy") {
            commit('routerAnimate', 'slide-left');
        } else if (frompath == "/app/home" && topath == "/login") {
            commit('routerAnimate', 'slide-left');
        } else if (frompath == "/describe" && topath == "/login") {
            commit('routerAnimate', 'slide-left');
        } else if (frompath == "/search" && topath == "/describe") {
            commit('routerAnimate', 'slide-left');
        }
    },
    getHomeHotMv({ commit }, url) {
        axios.get(url)
            .then(res => res.data)
            .then(data => {
                commit("getHomeHotMv", data)
            })
    },
    getHomeSoonMv({ commit }, url) {
        axios.get(url)
            .then(res => res.data)
            .then(data => {
                commit("getHomeSoonMv", data)
            })
    },
    getFindHotMv({ commit }, url) {
        axios.get(url)
            .then(res => res.data)
            .then(data => {
                commit("getFindHotMv", data)
            })
    },
    getFindHotTv({ commit }, url) {
        axios.get(url)
            .then(res => res.data)
            .then(data => {
                commit("getFindHotTv", data)
            })
    },
    getRankMv({ commit }, url) {
        axios.get(url)
            .then(res => res.data)
            .then(data => {
                commit("getRankMv", data)
            })
    },
    scrollTop({ commit }, preload) {
        const { url, currentTab, start, end, count } = preload;
        let num = count;
        num++;
        if (count >= 4) {
            Toast({
                iconClass: "iconfont icon-cry",
                message: '没有更多数据了！',
                duration: 1500
            });
        } else {
            axios.get(url, { params: { currentTab, start, end } })
                .then(res => res.data)
                .then(data => {
                    commit("scrollTop", { data, currentTab, count: num })
                })
        }
    },
    scrollBtm({ commit }, preload) {
        const { url, currentTab, start, end, count } = preload;
        let num = count;
        num++;
        if (count >= 3) {
            Toast({
                iconClass: "iconfont icon-cry",
                message: '已经是最后一条了！',
                duration: 1500
            });
        } else {
            axios.get(url, { params: { currentTab, start, end } })
                .then(res => res.data)
                .then(data => {
                    commit("scrollBtm", { data, currentTab, count: num })
                })
        }
    },
    endLoaded({ commit }, currentTab) {
        commit("endLoaded", currentTab);
    },
    regSubmit({ commit }, userInfo) {
        const { account, password, nickname } = userInfo;
        var phoneReg = /^[1]{1}[3,5,6,7,8,9]{1}[0-9]{9}$/;
        var emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        var pwdReg = /^[.,_a-zA-Z0-9]{6,10}$/
        var nickReg = /^[\u4e00-\u9fa5_a-zA-Z0-9]{2,8}$/;
        if (phoneReg.test(account) || emailReg.test(account)) {
            if (pwdReg.test(password)) {
                if (nickReg.test(nickname)) {
                    regAxios();
                } else {
                    tip('昵称2-8位哦!');
                }
            } else {
                tip('密码格式不正确!');
            }
        } else {
            tip('账户名格式不正确!');
        }
        function regAxios() {
            axios.post('/register', userInfo)
                .then(res => {
                    if (res.data == 0) {
                        tip('该用户已注册!');
                    } else if (res.data == 1) {
                        tip('注册成功!');
                        setTimeout(function () {
                            router.push('/login');
                        }, 1600)
                    }
                })
                .then(() => {
                    commit("regSubmit", userInfo)
                })
        }
    },
    seePwd({ commit }) {
        commit("seePwd");
    },
    logSubmit({ commit }, userInfo) {
        const { account, password } = userInfo;
        Indicator.open();
        axios.post('/login', userInfo)
            .then(res => {
                if (res.data.code == 0) {
                    tip('该用户不存在!');
                    Indicator.close();
                } else if (res.data.code == 1) {
                    tip('密码错误!');
                    Indicator.close();
                } else {
                    tip('登录成功!');
                    Indicator.close();
                    setTimeout(function () {
                        router.push('/app/mine');
                    }, 1600)
                    return res.data.nickname;
                }
            })
            .then(data => { commit("logSubmit", data) })
    },
    getSearchMv({ commit }, preload) {
        const { url, keyword } = preload;
        Indicator.open();
        axios.get(url, { params: { keyword } })
            .then(res => res.data)
            .then(data => {
                Indicator.close();
                commit("getSearchMv", data)
            })
    },
    getDescById({ commit }, preload) {
        const { url, id } = preload;
        return new Promise((resolve, reject) => {
            axios.get(url, { params: { id } })
                .then(res => {
                    let imgSrc = res.data.images.large;
                    var data;
                    getbg(imgSrc, bg => {
                        res.data.casts.map(item => {
                            item.avatars.small = getImages(item.avatars.small)
                        })
                        res.data.directors.map(item => {
                            item.avatars.small = getImages(item.avatars.small)
                        })
                        data = Object.assign({}, res.data, { bg });
                        commit("getDescById", data)
                    })
                })
        })

    },
    entryPop({ commit }) {
        commit('entryPop');
    },
    goBuy({ commit }, preload) {
        const { mvid, title, directors, casts, imgsrc, comments } = preload;
        router.push({
            name: 'buy', params: {
                mvid, title, directors, casts, imgsrc, comments
            }
        })
    },
    toggleView({ commit }, preload) {
        commit('toggleView', preload);
    },
    toggleCity({ commit }, preload) {
        commit('toggleCity', preload);
        router.push('/app');
    },
    searchCity({ commit }, e) {
        let word = e.target.value;
        commit('searchCity', word)
    },
    moveTop({ commit }) {
        commit('moveTop')
    },
    moveBack({ commit }) {
        commit('moveBack')
    },
    logOut({ commit }) {
        commit('logOut');
    },
    openWechat() {
        MessageBox({
            title: '提示',
            message: "'豆瓣电影'想要打开'微信'",
            showCancelButton: true
        });
    },
    openBlog() {
        MessageBox({
            title: '提示',
            message: "'豆瓣电影'想要打开'微博'",
            showCancelButton: true
        });
    },
    startPro({ commit }) {
        let num = 0;
        let timer;
        clearInterval(timer);
        timer = setInterval(() => {
            num++;
            if (num >= 100) {
                clearInterval(timer);
                MessageBox.alert('购票成功').then(action => {
                    commit('startPro', router.currentRoute.params)
                });
            } else {
                commit('startPro', num)
            }
        }, 15)
    },
    goback({ commit }) {
        router.go(-1);
        commit('routerAnimate', 'slide-right');
    },
    signFast({ commit }, mvInfo) {
        if (localStorage.getItem('nickname')) {
            commit('signFast', mvInfo);
        } else {
            router.push('/login');
        }
    },
    signWant({ commit }) {
        if (localStorage.getItem('nickname')) {
            commit('signWant');
        } else {
            router.push('/login');
        }
    },
    signSeen({ commit }, preload) {
        if (localStorage.getItem('nickname')) {
            commit('signSeen', preload);
        } else {
            router.push('/login');
        }
    },
    hideBadgePop({ commit }) {
        commit('hideBadgePop');
    },
    toggleClass({ commit }, index) {
        commit('toggleClass', index);
    },
    submitBadge({ commit }, mvInfo) {
        commit('submitBadge', mvInfo);
    },
    markStar({ commit }, index) {
        let arr = [];
        for (let i = 0; i < index; i++) {
            arr.push(1);
        }
        for (let i = 0; i < 5 - index; i++) {
            arr.push(0);
        }
        commit('markStar', arr)
    },
    createStars({ commit }, count) {
        let arr = [];
        let starLen = parseInt(count / 2);
        for (let i = 1; i <= starLen; i++) {
            arr.push("star");
        }
        let halfLen = 5 - starLen;
        if (String(count).indexOf(".") > -1) {
            if (String(count).split(".")[1] >= 5) {
                arr.push("star-half");
                for (let i = 1; i <= halfLen - 1; i++) {
                    arr.push("star-empty");
                }
            } else {
                for (let i = 1; i <= halfLen; i++) {
                    arr.push("star-empty");
                }
            }
        } else {
            for (let i = 1; i <= halfLen; i++) {
                arr.push("star-empty");
            }
        }
        commit('createStars', arr);
    },
    getNickname({ commit }) {
        let nickname = localStorage.getItem('nickname');
        commit('getNickname', nickname)
    },
    pushUserMv({ commit }, preload) {
        const { url, mvInfo } = preload;
        let nickname = localStorage.getItem('nickname');
        axios.post(url, { nickname, mvInfo })
            .then(res => {
                const { code, mvInfo } = res.data;
                if (code == 1) {
                    tip('数据更新成功')
                } else {
                    tip('数据更新失败')
                }
            })
    },
    logOutShow({ commit }) {
        let nickname = localStorage.getItem('nickname');
        commit('logOutShow', nickname)
    },
    getTotal({ commit }) {
        commit('getTotal')
    },
    goSearch() {
        router.push("/search");
    },
    goProvince() {
        router.push("/province");
    },
    goDescribe({ commit }, id) {
        router.push({
            path: "/describe",
            query: { id }
        });
    },
    goMine() {
        router.push({ name: 'mine' });
    },
    goLogin({ commit }, nickname) {
        if (nickname == "未登录") {
            router.push({ name: "login" });
        }
    },
    goSetpage() {
        router.push({ name: "setpage" });
    },
    goHome({ commit }, preload) {
        console.log(preload)
        const { index, len } = preload;
        if (index == len) {
            router.push("./app");
        }
    },
    getSwiper({commit},preload){
        commit('getSwiper',preload);
    },
    touchNext({commit}){
        commit('touchNext');
    },
    touchPrev({commit}){
        commit('touchPrev');
    }
}

function tip(msg, icon = '', pos = 'top') {
    Toast({
        iconClass: icon,
        position: pos,
        message: msg,
        duration: 1500
    });
}
//图片转https,本地可显示
function getImages(url) {
    if (url !== undefined) {
        let _u = url.substring(7);
        return 'https://images.weserv.nl/?url=' + _u;
    }
}
