import '../assets/utils/format';
export default {
    routerAnimate(state, preload) {
        state.transitionName = preload;
    },
    getHomeHotMv(state, data) {
        state.homeData.hotmv = data;
        state.homeData.spinner = false;
    },
    getHomeSoonMv(state, data) {
        state.homeData.soonmv = data;
        state.homeData.spinner = false;
    },
    getFindHotMv(state, data) {
        state.findData.hotmv = data;
        state.findData.spinner = false;
    },
    getFindHotTv(state, data) {
        state.findData.cntv = data.cntv;
        state.findData.usatv = data.usatv;
        state.findData.spinner = false;
    },
    getRankMv(state, data) {
        state.findData.rankMv = data;
    },
    scrollTop(state, preload) {
        const { data, currentTab, count } = preload;
        if (currentTab == "Hot") {
            state.homeData.hotmv = data;
            state.homeData.loadTop.hot.start += 5;
            state.homeData.loadTop.hot.end += 5;
            state.homeData.loadTop.hot.count = count;
        } else {
            state.homeData.soonmv = data;
            state.homeData.loadTop.soon.start += 5;
            state.homeData.loadTop.soon.end += 5;
            state.homeData.loadTop.soon.count = count;
        }
    },
    scrollBtm(state, preload) {
        const { data, currentTab, count } = preload;
        if (currentTab == "Hot") {
            state.homeData.hotmv = data;
            state.homeData.loadBtm.hot.end += 5;
            state.homeData.loadBtm.hot.count = count;
        } else {
            state.homeData.soonmv = data;
            state.homeData.loadBtm.soon.end += 5;
            state.homeData.loadBtm.soon.count = count;
        }
    },
    endLoaded(state, preload) {
        const { currentTab } = preload;
        if (currentTab == "Hot") {
            state.homeData.loadBtm.hot.allLoaded = true;
        } else {
            state.homeData.loadBtm.soon.allLoaded = true;
        }
    },
    getDescById(state, preload) {
        state.descData.mv = preload;
        state.descData.spinner = false;
    },
    regSubmit(state, preload) {
        state.userInfo = preload;
    },
    seePwd(state) {
        const { userInfo } = state;
        let color = userInfo.color == "#bbb" ? "#000" : "#bbb";
        let type = userInfo.type == "password" ? "text" : "password";
        state.userInfo.type = type;
        state.userInfo.color = color;
    },
    logSubmit(state, preload) {
        const { mineInfo } = state;
        mineInfo.nickname = preload;
        localStorage.setItem('nickname', preload);
    },
    getSearchMv(state, preload) {
        state.searchData.mvList = preload;
        state.searchData.hotshow = false;
        state.searchData.listshow = true;
    },
    entryPop(state) {
        state.descData.entryPop = !state.descData.entryPop;
    },
    toggleView(state, preload) {
        const { homeData, findData, provinceData } = state;
        const { name, page } = preload;
        let pageTemp;
        switch (page) {
            case 'home':
                pageTemp = 'homeData';
                if (name == "Hot") {
                    homeData.currentTab.hot = 'on';
                    homeData.currentTab.soon = 'off';
                } else {
                    homeData.currentTab.hot = 'off';
                    homeData.currentTab.soon = 'on';
                }
                break;
            case 'find':
                pageTemp = 'findData';
                if (name == "Mv") {
                    findData.currentTab.mv = 'on';
                    findData.currentTab.tv = 'off';
                } else {
                    findData.currentTab.mv = 'off';
                    findData.currentTab.tv = 'on';
                }
                break;
            case 'province':
                pageTemp = 'provinceData';
                if (name == "Inland") {
                    provinceData.currentTab.inland = 'on';
                    provinceData.currentTab.abroad = 'off';
                } else {
                    provinceData.currentTab.inland = 'off';
                    provinceData.currentTab.abroad = 'on';
                }
                break;

            default:
                break;
        }
        state[pageTemp].currentTab.name = name;
    },
    toggleCity(state, preload) {
        state.provinceData.currentcity = preload;
    },
    searchCity(state, preload) {
        const { provinceData } = state;
        const { inlandCityIndex, abroadCityIndex, currentTab } = provinceData;
        provinceData.scity = [];
        let citylist;
        if (currentTab.name == "Inland") {
            citylist = inlandCityIndex;
        } else {
            citylist = abroadCityIndex;
        }
        citylist.map(item => {
            item.list.filter(item => {
                if (item.indexOf(preload) != -1 && preload != "") {
                    provinceData.scity.push(item)
                }
            })
        })
    },
    moveTop(state) {
        const { provinceData } = state;
        provinceData.show = false;
        provinceData.cancel = true;
    },
    moveBack(state) {
        const { provinceData } = state;
        provinceData.show = true;
        provinceData.scity = [];
        provinceData.cancel = false;
    },
    logOut(state) {
        const { mineInfo } = state;
        mineInfo.nickname = '未登录';
        localStorage.removeItem('nickname');
        mineInfo.logOutFlag = false;
    },
    startPro(state, preload) {
        const { buyData } = state;
        const { Mv, mineInfo } = state;
        if (typeof preload == 'number') {
            buyData.barVal = preload
        } else {
            let time = new Date().Format("yyyy.MM.dd/hh:mm");
            const { mvid, title, directors, casts, imgsrc, comments } = preload
            mineInfo.mvInfo.nowMv.count++;
            mineInfo.mvInfo.nowMv.mvlist.push(new Mv(mvid, title, directors, casts, imgsrc, comments, time));
        }
    },
    signFast(state, preload) {
        const { Mv, mineInfo } = state;
        const { mvid, title, directors, casts, imgsrc, comments } = preload;
        let count = 0;
        let len = mineInfo.mvInfo['wantMv'].mvlist.length;
        let time = new Date().Format("yyyy.MM.dd/hh:mm");
        mineInfo.mvInfo['wantMv'].mvlist.map(item => {
            if (item.mvid !== mvid) {
                count++;
            }
        })
        if (count == len) {
            mineInfo.mvInfo['wantMv'].count++;
            mineInfo.mvInfo['wantMv'].mvlist.push(new Mv(mvid, title, directors, casts, imgsrc, comments, time));
        }
    },
    signWant(state, preload) {
        const { descData } = state;
        descData.badgePop = true;
        descData.selected = "want";
    },
    signSeen(state, preload) {
        const { descData } = state;
        descData.badgePop = true;
        descData.selected = "seen";
    },
    hideBadgePop(state) {
        const { descData } = state;
        descData.badgePop = false;
        descData.badges.map(item => { item.statu = 0 });
        descData.comments = "";
        descData.stars = [0, 0, 0, 0, 0]
    },
    toggleClass(state, preload) {
        const { descData } = state;
        descData.badges[preload].statu = !descData.badges[preload].statu;
    },
    submitBadge(state, preload) {
        const { Mv, mineInfo, descData } = state;
        let time = new Date().Format("yyyy.MM.dd/hh:mm");
        const { mvid, title, directors, casts, imgsrc } = preload;
        let list;
        if (descData.selected == "want") {
            list = "wantMv";
        } else {
            list = "seenMv";
        }
        const { comments, stars } = descData;
        let badges = descData.badges.filter(item => item.statu == true);
        let count = 0;
        let len = mineInfo.mvInfo[list].mvlist.length;
        mineInfo.mvInfo[list].mvlist.map(item => {
            if (item.mvid !== mvid) {
                count++;
            }
        })
        if (count == len) {
            mineInfo.mvInfo[list].count++;
            mineInfo.mvInfo[list].mvlist.push(new Mv(mvid, title, directors, casts, imgsrc, comments, time, badges, stars));
        }
        descData.badges.map(item => { item.statu = 0 });
        descData.comments = "";
        descData.stars = [0, 0, 0, 0, 0];
        descData.badgePop = false;
    },
    markStar(state, preload) {
        const { descData } = state;
        descData.stars = preload;
    },
    createStars(state, preload) {
        state.stars = preload;
    },
    getNickname(state, preload) {
        const { mineInfo } = state;
        let temp = preload ? preload : '未登录';
        mineInfo.nickname = temp;
    },
    logOutShow(state, preload) {
        const { mineInfo } = state;
        mineInfo.logOutFlag = preload;
    },
    getTotal(state) {
        const { findData, mineInfo } = state;
        const { mvInfo } = mineInfo;
        if (localStorage.getItem('nickname')) {
            let count = mvInfo.wantMv.count + mvInfo.nowMv.count + mvInfo.seenMv.count;
            findData.total = count + '部';
        }
    },
    getSwiper(state, preload) {
        const { findData } = state;
        findData.swiper = preload;
    },
    touchNext(state) {
        const { findData } = state;
        findData.swiper.slidePrev(500)
    },
    touchNext(state) {
        const { findData } = state;
        findData.swiper.slidePrev(500);
    }
}