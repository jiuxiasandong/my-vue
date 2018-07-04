export default {
    transitionName: '',
    guideList: [
        require('../assets/images/guide1.jpg'),
        require('../assets/images/guide2.jpg'),
        require('../assets/images/guide3.jpg'),
        require('../assets/images/guide4.jpg'),
    ],
    footList: [
        { name: "home", txt: "首页", icon: "icon-movie2", path: "/app/home" },
        { name: "find", txt: "找片", icon: "icon-eye2", path: "/app/find" },
        { name: "mine", txt: "我的", icon: "icon-mine2", path: "/app/mine" }
    ],
    stars: [],
    homeData: {
        hotmv: [],
        soonmv: [],
        loadTop: {
            hot: {
                start: 0, end: 5, count: 0
            },
            soon: {
                start: 0, end: 5, count: 0
            }
        },
        loadBtm: {
            hot: {
                start: 0, end: 10, count: 0,
                allLoaded: false
            },
            soon: {
                start: 0, end: 10, count: 0,
                allLoaded: false
            }
        },
        currentTab: { name: 'Hot', hot: 'on', soon: 'off' },
        spinner: true
    },
    findData: {
        hotmv: [],
        cntv: [],
        usatv: [],
        rankMv: {},
        currentTab: { name: 'Mv', mv: 'on', tv: 'off' },
        spinner: true,
        total: '未登录',
        swiper: null,
        swiperOption: {
            slidesPerView: "auto",
            spaceBetween: 0,
            on: {
                slideChangeTransitionEnd: () => {
                    const { a } = this;
                    const { findData } = a;
                    const { swiper } = findData;
                    if (swiper.activeIndex == 0) {
                        findData.title = "豆瓣TOP250";
                    } else {
                        findData.title = "北美票房榜";
                    }
                }
            }
        },
        title: "豆瓣TOP250"
    },
    mineInfo: {
        navs: [
            { id: 'wantMv', name: '想看' },
            { id: 'nowMv', name: '在看' },
            { id: 'seenMv', name: '看过' },
            { id: 'comments', name: '影评' },
            { id: 'eyeOn', name: '影人' }
        ],
        nickname: '未登录',
        logOutFlag: false,
        mvInfo: {
            wantMv: { count: 0, mvlist: [] },
            nowMv: { count: 0, mvlist: [] },
            seenMv: { count: 0, mvlist: [] },
            comments: {},
            eyeOn: {}
        },
        selected: 'seenMv'
    },
    descData: {
        mv: {
            id: '',
            title: '',
            year: '',
            images: { large: '', small: '' },
            genres: [],
            casts: [],
            rating: { average: '' },
            directors: [],
            collect_count: ''
        },
        swiperOption: {
            slidesPerView: 3.4,
            slidesPerColumn: 1,
            spaceBetween: 20
        },
        entries: [
            { name: 'douban', txt: '豆瓣' },
            { name: 'wechat', txt: '微信' },
            { name: 'friends', txt: '朋友圈' },
            { name: 'QQ', txt: 'QQ' },
            { name: 'qqspace', txt: 'QQ空间' },
            { name: 'weblog', txt: '微博' },
        ],
        entryPop: false,
        badgePop: false,
        selected: 'want',
        badges: [
            { name: '悬疑', statu: 0 },
            { name: '黑色', statu: 0 },
            { name: '2017', statu: 0 },
            { name: '华语', statu: 0 },
            { name: '剧情', statu: 0 },
            { name: '中国大陆', statu: 0 },
            { name: '犯罪', statu: 0 },
            { name: '人性', statu: 0 },
            { name: '黑色幽默', statu: 0 },
            { name: '惊悚', statu: 0 },
            { name: '动作', statu: 0 },
            { name: '经典', statu: 0 },
            { name: '天才', statu: 0 },
            { name: 'FIRST', statu: 0 },
            { name: '百老汇', statu: 0 },
            { name: '+新标签', statu: 0 },
        ],
        comments: '',
        issue: ['发布后分享到微信、微博'],
        stars: [0, 0, 0, 0, 0],
        spinner: true
    },
    searchData: {
        hotSearch: [
            { title: '', value: '热门搜索' },
            { title: '1', value: '无问东西' },
            { title: '2', value: '幕后玩家' },
            { title: '3', value: '超时空同居' },
            { title: '4', value: '后来的我们' },
            { title: '5', value: '复仇者联盟3:无限战争' },
            { title: '6', value: '潜艇总动员:海底两万年' },
            { title: '7', value: '青年马克思' },
            { title: '8', value: '侏罗纪世界2' }
        ],
        keyword: '',
        hotshow: true,
        listshow: false,
        mvList: []
    },
    userInfo: {
        account: "",
        password: "",
        nickname: "未登录",
        type: 'password',
        color: '#bbb'
    },
    provinceData: {
        currentcity: 'Manilia',
        currentTab: { name: 'Inland', inland: 'on', abroad: 'off' },
        skey: '',
        scity: [],
        show: true,
        cancel: false,
        inlandHotCity: ['北京', '上海', '广州', '深圳', '成都', '武汉', '杭州', '重庆', '郑州', '南京', '西安', '苏州', '天津', '长沙', '福州',],
        inlandCityIndex: [
            { classify: 'A', list: ['安徽', '澳门'] },
            { classify: 'B', list: ['北京'] },
            { classify: 'C', list: ['重庆'] },
            { classify: 'F', list: ['福建'] },
            { classify: 'G', list: ['甘肃', '广东', '广西', '贵州'] },
            { classify: 'H', list: ['海南', '河北', '黑龙江', '河南', '香港', '湖北', '湖南'] },
            { classify: 'J', list: ['江苏', '江西', '吉林'] },
            { classify: 'L', list: ['辽宁'] },
            { classify: 'N', list: ['内蒙古', '宁夏'] },
            { classify: 'Q', list: ['青海'] },
            { classify: 'S', list: ['陕西', '山东', '上海', '山西', '四川'] },
            { classify: 'T', list: ['台湾', '天津'] },
            { classify: 'X', list: ['新疆', '西藏'] },
            { classify: 'Y', list: ['云南'] },
            { classify: 'Z', list: ['浙江'] }
        ],
        abroadCityIndex: [
            { classify: 'A', list: ['Alabama ', 'Alaska ', 'Arizona', 'Arkansas'] },
            { classify: 'C', list: ['California', 'Colorado', 'Connecticut'] },
            { classify: 'D', list: ['Delaware'] },
            { classify: 'F', list: ['Florida'] },
            { classify: 'G', list: ['Georgia'] },
            { classify: 'H', list: ['Hawaii'] },
            { classify: 'I', list: ['Idaho', 'Illinois', 'Indiana', 'Iowa'] },
            { classify: 'K', list: ['Kansas', 'Kentucky'] },
            { classify: 'L', list: ['Lousiana'] },
            { classify: 'M', list: ['Maine', 'Maryland'] },
            { classify: 'N', list: ['Nevada', 'New Jersey'] },
            { classify: 'O', list: ['Ohio', 'Oklahoma'] },
            { classify: 'R', list: ['Rhode Island'] },
            { classify: 'S', list: ['South Carolina', 'South Dakota'] },
            { classify: 'T', list: ['Tennessee', 'Texas'] },
            { classify: 'U', list: ['Utah'] },
            { classify: 'V', list: ['Vermont', 'Virginia'] },
            { classify: 'W', list: ['Washington', 'Wisconsin'] }
        ]
    },
    buyData: {
        barVal: 0,//进度条
    },
    Mv: class Mv {
        constructor(mvid, title, directors, casts, imgsrc, comments, time, badges, stars) {
            this.mvid = mvid;
            this.title = title;
            this.directors = directors;
            this.casts = casts;
            this.imgsrc = imgsrc;
            this.comments = comments;
            this.time = time;
            this.badges = badges;
            this.stars = stars;
            return this;
        }
    }
}