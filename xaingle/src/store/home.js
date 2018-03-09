export default {
    namespaced: true,
    state: {
        navlist: [
            { text: "推荐", name: "Home" },
            { text: "手机数码", name: "Digital" },
            { text: "美妆个护", name: "MakeUp" },
            { text: "家用电器", name: "Machine" },
            { text: "食品生鲜", name: "Food" }
        ],
        list: [
            {
                name: "Home",
                text: "首页",
                icon: "icon-fanjia"
            },
            {
                name: "Goods",
                text: "分类",
                icon: "icon-kinds"
            },
            {
                name: "Find",
                text: "发现",
                icon: "icon-forms"
            },
            {
                name: "My",
                text: "我的",
                icon: "icon-yonghu"
            }

        ],
        bannerList: [
            {
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/M4Z3tGTQ4rFwWNP7pNXIUw89eSc.*iNTJhU9ZRruT5I!/b/dPMAAAAAAAAA&bo=ugOAAgAAAAADBxk!&rf=viewer_4",
                goodsName: "阅读",
                title: "kindle PaperWhite 新款",
                content: "好书带你看世界"
            },
            {
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/VQZRt8m3Vfw6ekhH7y6kvNe21FLs07YnO.wOJsvUk6g!/b/dAQBAAAAAAAA&bo=ugOAAgAAAAADJzk!&rf=viewer_4",
                goodsName: "智能拖地",
                title: "美国百得蒸汽拖把",
                content: "高温杀菌 深度清洁"
            },
        ],
        contBaby: [
            {
                title:"洁净智能电器",
                text:"关爱家人健康",
                imgSrc:"http://m.qpic.cn/psb?/V10C7AQj17nOSf/21HylVkeJrTjR7SsjQTSpVqSNXUEUinX60VJByga29Q!/b/dJUAAAAAAAAA&bo=XQCzAAAAAAADB8w!&rf=viewer_4"
            },
            {
                title: "温暖专场",
                text: "暖身暖心暖胃",
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/vfaxDFIWS9InKbhYyYIx4dr52l7RmNbTrHz1oF*2vjA!/b/dGYBAAAAAAAA&bo=xACVAAAAAAADF2M!&rf=viewer_4"
            },
            {
                title: "衣物焕然一新",
                text: "拒绝起毛球",
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/RmLZpmsDcWkrLJEGiSEGkfVbyapO1VUdQlPnFqa4Xlg!/b/dFYBAAAAAAAA&bo=twCZAAAAAAADFxw!&rf=viewer_4"
            },
            {
                title: "",
                text: "",
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/U0DJL7uAcTaxWSPX9reyIuT7DBtho6KSD3t0XNa0CvE!/b/dJEAAAAAAAAA&bo=0ACpAAAAAAADF0s!&rf=viewer_4"
            },
        ],
        contLife:[
            {
                title:"生活用品",
                content:"Consumer goods",
                imgSrc:"http://m.qpic.cn/psb?/V10C7AQj17nOSf/vYeepAjB1Ywtskrn1*mX1QHinDMrtr9xTRiXXLBIaCQ!/b/dAgBAAAAAAAA&bo=AAHeAAAAAAADF.0!&rf=viewer_4"
            },
            {
                title: "面部护肤",
                content: "Skin care",
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/gKrA4aC1tez0akrjsnAcGGEmzPJK10BxYgxLI*QRY.Y!/b/dFYBAAAAAAAA&bo=0gATAQAAAAADF*I!&rf=viewer_4"
            },
            {
                title: "洗发护发",
                content: "Shampoo & Conditioner",
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/WNqaoaNdcFtY9fwkIIYKC1AuAwZmFOlRp.ciC21Aojg!/b/dF4BAAAAAAAA&bo=AwH6AAAAAAADF8o!&rf=viewer_4"
            }
        ],
        contFruit:[
            {
                detail:"果耶四川月亮岛脐橙5斤礼盒装果径80-95mm",
                price:34.9,
               
                imgSrc:"http://m.qpic.cn/psb?/V10C7AQj17nOSf/FWlvpr4h5u1fj8Jhf1U6SH4J5joEbKotKuu9o.JtNTU!/b/dGoBAAAAAAAA&bo=wwHDAQAAAAADByI!&rf=viewer_4"
            },
            {
                detail: "美国儿童吸管杯400ml—长颈鹿 小发明...",
                price: 109,
                discount:119,
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/vK7F70DvyQxfhnPknuvojJQ0yYQlkjJNpzXjOAoVMf0!/b/dFYBAAAAAAAA&bo=kgGYAQAAAAADByg!&rf=viewer_4"
            },
            {
                detail: "果耶四川月亮岛脐橙5斤礼盒装果径80-95mm",
                price: 34.9,

                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/FWlvpr4h5u1fj8Jhf1U6SH4J5joEbKotKuu9o.JtNTU!/b/dGoBAAAAAAAA&bo=wwHDAQAAAAADByI!&rf=viewer_4"
            },
            {
                detail: "美国儿童吸管杯400ml—长颈鹿 小发明...",
                price: 109,
                discount: 119,
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/vK7F70DvyQxfhnPknuvojJQ0yYQlkjJNpzXjOAoVMf0!/b/dFYBAAAAAAAA&bo=kgGYAQAAAAADByg!&rf=viewer_4"
            },
            {
                detail: "果耶四川月亮岛脐橙5斤礼盒装果径80-95mm",
                price: 34.9,

                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/FWlvpr4h5u1fj8Jhf1U6SH4J5joEbKotKuu9o.JtNTU!/b/dGoBAAAAAAAA&bo=wwHDAQAAAAADByI!&rf=viewer_4"
            },
            {
                detail: "美国儿童吸管杯400ml—长颈鹿 小发明...",
                price: 109,
                discount: 119,
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/vK7F70DvyQxfhnPknuvojJQ0yYQlkjJNpzXjOAoVMf0!/b/dFYBAAAAAAAA&bo=kgGYAQAAAAADByg!&rf=viewer_4"
            },
            {
                detail: "果耶四川月亮岛脐橙5斤礼盒装果径80-95mm",
                price: 34.9,

                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/FWlvpr4h5u1fj8Jhf1U6SH4J5joEbKotKuu9o.JtNTU!/b/dGoBAAAAAAAA&bo=wwHDAQAAAAADByI!&rf=viewer_4"
            },
            {
                detail: "美国儿童吸管杯400ml—长颈鹿 小发明...",
                price: 109,
                discount: 119,
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/vK7F70DvyQxfhnPknuvojJQ0yYQlkjJNpzXjOAoVMf0!/b/dFYBAAAAAAAA&bo=kgGYAQAAAAADByg!&rf=viewer_4"
            },
            {
                detail: "果耶四川月亮岛脐橙5斤礼盒装果径80-95mm",
                price: 34.9,

                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/FWlvpr4h5u1fj8Jhf1U6SH4J5joEbKotKuu9o.JtNTU!/b/dGoBAAAAAAAA&bo=wwHDAQAAAAADByI!&rf=viewer_4"
            },
            {
                detail: "美国儿童吸管杯400ml—长颈鹿 小发明...",
                price: 109,
                discount: 119,
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/vK7F70DvyQxfhnPknuvojJQ0yYQlkjJNpzXjOAoVMf0!/b/dFYBAAAAAAAA&bo=kgGYAQAAAAADByg!&rf=viewer_4"
            },
            {
                detail: "果耶四川月亮岛脐橙5斤礼盒装果径80-95mm",
                price: 34.9,

                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/FWlvpr4h5u1fj8Jhf1U6SH4J5joEbKotKuu9o.JtNTU!/b/dGoBAAAAAAAA&bo=wwHDAQAAAAADByI!&rf=viewer_4"
            },
            {
                detail: "美国儿童吸管杯400ml—长颈鹿 小发明...",
                price: 109,
                discount: 119,
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/vK7F70DvyQxfhnPknuvojJQ0yYQlkjJNpzXjOAoVMf0!/b/dFYBAAAAAAAA&bo=kgGYAQAAAAADByg!&rf=viewer_4"
            },
            {
                detail: "果耶四川月亮岛脐橙5斤礼盒装果径80-95mm",
                price: 34.9,

                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/FWlvpr4h5u1fj8Jhf1U6SH4J5joEbKotKuu9o.JtNTU!/b/dGoBAAAAAAAA&bo=wwHDAQAAAAADByI!&rf=viewer_4"
            },
            {
                detail: "美国儿童吸管杯400ml—长颈鹿 小发明...",
                price: 109,
                discount: 119,
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/vK7F70DvyQxfhnPknuvojJQ0yYQlkjJNpzXjOAoVMf0!/b/dFYBAAAAAAAA&bo=kgGYAQAAAAADByg!&rf=viewer_4"
            },
            {
                detail: "果耶四川月亮岛脐橙5斤礼盒装果径80-95mm",
                price: 34.9,

                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/FWlvpr4h5u1fj8Jhf1U6SH4J5joEbKotKuu9o.JtNTU!/b/dGoBAAAAAAAA&bo=wwHDAQAAAAADByI!&rf=viewer_4"
            },
            
            
        ]


    }
}