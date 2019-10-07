var vm = new Vue({
    el: '#app',
    data: {
        language:{
            Chinese: {
                pool_total:'矿池总量',
                circulation:'流通总量',
                node_number:'节点数量',
                pos_min:'POS挖矿数量',
                billion:'亿',
                thousand:'万',
                excavated:'已挖总量',
                reward:'奖励总量',
                issuance:' 4 轮发行总量',
                white_paper:'白皮书下载',
                become_node:'成为节点',
                proce_trend:'价格走势',
                investment:'投资轮',
                entry_exchange:'进入交易所',
                today_price:'今日价格',
                tomorrow_price:'明日价格',
                my_account:'我的账户',
                high_node:'高级',
                midd_node:'中级',
                basic_node:'初级',
                node_code_link:'节点码链接',
                in_total:'总共',
                residual:'剩余数量',
                price:'价格',
                the_first:'第',
                round:'轮',
                start_time:'开始日期',
                end_time:'结束日期',
                purchase:'购买',
                login:'登录',
                no_login:'未登录',
                with_expc:'使用EOS钱包参与EXPC',
                amount:'金额',
                transfer:'转账',
                you_must:'您在转账时必须填写上 方的Memo,否则交易将无法成立。请勿使用交易所账户转账。memo应该是填写你的推荐节点码',
                you_must1:'您在转账时',
                you_must2:'必须填写上',
                you_must3:'推荐方的Memo,否则交易将无法成立。',
                you_must4:'请勿使用交易所账户转账。memo应该是填写你的推荐节点码',
                connected_scatter:'电脑网页版连接Scatter,可实时反馈结果。',
                address:'地址',
                number:'数量',
                revenue:'挖矿收益',
                my_node:'我的节点',
                rewards:'奖励数量',
                quantity_mining:'挖矿数量',
                my_node_code:'我的节点码',
                node:'节点',
                account_not:'账户不存在',
                enter_username:'请输入用户名',
                excavation:'4轮总发行量',
                copy_msg:'复制成功',
                username:'用户名',
                count_down:'倒计时：',
                day:'天 ',
                second:'秒 ',
                hour:'时 ',
                minute:'分 ',
                countdown:'交易所开放倒计时 ',
                surplus:'剩余 ',
                announcement:'官方公告',
                announcementNo:'暂无数据',
                announcementTime:'发布时间',
                announcementList1Title:'标题',
                announcementList1Time:'2019-09-09',
                announcementList1Content:'内容',
                news1_tit:'关于启动EXPC免费空投条件公告',
                news1_con:'广大EXPC全球玩家，EXPC会员空投条件为EXPC价值为 1 USDT时全球启动',
                news2_tit:'关于EXPC上交易所开盘价格公告',
                news2_con:'EXPC全球玩家，EXPC登录交易所的开盘价格确定为 1 USDT',
                news1_time:'2019-09-22',
                news2_time:'2019-09-22',
                sell:'售<br><br>罄',
            },
            English: {
                sell:'Sell<br><br>out ',
                news2_time:'2019-09-22',
                news1_time:'2019-09-22',
                news1_tit:'Announcement on the condition of Launching EXPC Free Airdrop',
                news1_con:'The Condition of Free Airdrop will be launched upon the EXPC valuing 1 USDT',
                news2_tit:'Announcement on the opening price of EXPC listed on Exchange',
                news2_con:'The opening price of EXPC listed on Exchange is 1 USDT',
                surplus :'Surplus ',
                countdown :'Countdown of Exchange Opening ',
                minute :'m ',
                hour :'h ',
                second :'s ',
                count_down :'Count Down：',
                day :'d ',
                username :'Username',
                copy_msg :'Successful replication',
                excavation :'Four rounds of total circulation',
                enter_username :'Enter one user name',
                account_not :'Account does not exist',
                node :'Node',
                my_node_code :'My Node Code',
                quantity_mining :'Quantity of mining',
                rewards :'Number of rewards',
                my_node :'My Node',
                revenue :'Mining revenue',
                number :'Number',
                address :'Address',
                connected_scatter :'Scatter is connected to the web page of the computer, which can feedback the results in real time.',
                you_must1 :'When you transfer money',
                you_must2 :'Must fill in',
                you_must3 :'Memo of the recommender, otherwise the transaction will not be established.',
                you_must4 :'Do not use exchange account to transfer money. Memo should fill in your recommended node code',
                you_must :'You must fill in the above Momo when transferring money, otherwise the transaction will not be established. Do not use exchange account to transfer money. Memo should fill in your recommended node code',
                transfer :'Transfer',
                amount:'amount',
                with_expc:'Participate in EXPC with EOS Wallet',
                no_login:'Not logged in',
                login:'Login',
                purchase:'Purchase',
                pool_total:'Total Pools',
                circulation:'Total circulation',
                node_number:'Node Number',
                pos_min:'POS Mining Number',
                billion:'Billion',
                thousand:'ten thousand',
                excavated:'Total excavated amount',
                reward:'Total reward',
                issuance:'Total four rounds',
                white_paper:'White Paper Download',
                become_node:'Become a node',
                proce_trend:'Price Trend',
                investment:'Investment Wheel',
                entry_exchange:'Entry into the Exchange',
                today_price:'Today Price',
                tomorrow_price:'Tomorrow Price',
                my_account:'My account',
                high_node:'High',
                midd_node:'Midd',
                basic_node:'Basic',
                node_code_link:'Node code links',
                in_total:'In total',
                residual:'Residual Quantity',
                price:'Price',
                the_first:'The',
                round:'Round',
                start_time:'Start date',
                end_time:'End date',
                announcement:'Announcement',
                announcementNo:'Temporarily no data',
                announcementTime:'Time',
                announcementList1Title:'Title',
                announcementList1Time:'2019-09-09',
                announcementList1Content:'Content',
                
                
            }
        },
        languageBlooen: localStorage.getItem("isLanguage") || "Chinese",
        languageCon:{},
        isNavActive:false,//导航语言选择框
        isActive:1,
        isBuy:true,
        amount:"",
        isActive2:1,
        isPrompt:false,
        webData:{
            pool:'65',
            node:'118',
            traffic:'98',
            pos:'90',
            all:'100',
            have:'1209',
            reward:'12092',
            today:'0.30992',
            tomorrow:'0.30992',
        },
        login:false,
        transfer:false,

    },
    methods: {
        languageTab(language){
            localStorage.setItem("isLanguage", language);
            console.log(window.localStorage)
            if (language == "Chinese") {
                this.languageCon = this.language.Chinese
            } else if(language == "English") {
                this.languageCon = this.language.English
            }
            this.isNavActive = false
            setTimeout(function () {
                reload_fun()
            },100);
        },

        tabNav(){
            this.isNavActive = !this.isNavActive
        },
        close(){
            this.login = false
            this.transfer = false
        }

    },
    mounted: function () {
        if (this.languageBlooen == "Chinese") {
            this.languageCon = this.language.Chinese
        } else if(this.languageBlooen == "English") {
            this.languageCon = this.language.English
        }
    },});
function reload_fun(){
    location.reload();
}
