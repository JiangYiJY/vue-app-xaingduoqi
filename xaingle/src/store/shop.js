export default {
    namespaced:true,
    state:{
        list:[
            {
                imgSrc:"http://m.qpic.cn/psb?/V10C7AQj17nOSf/dzXPGZprJX*xZpZvJDGdrftaMJ.DBnwbya7b2CzOorM!/b/dGYBAAAAAAAA&bo=6wDrAAAAAAADByI!&rf=viewer_4",
                desc:"Kindle Paperwhite 新款升级版6英寸护眼非反光电子墨水触控显示屏WiFi...",
                color:"颜色:黑色",
                price:958,
                num:4,
                isSelected:false,
            },
            {
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/uJOBRAP64u3f82UccJRZrWuVMmrxF2YYicENGtijx0E!/b/dEEBAAAAAAAA&bo=6wDrAAAAAAADFzI!&rf=viewer_4",
                desc: "Contigo 美国儿童吸管杯400ml-长颈鹿小发明家系列",
                color: "花色：长颈鹿400ml",
                price: 109,
                num: 3,
                isSelected: false,
            },
            {
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/kZRbIvLqFv1Mz*v2mRZ7.syGHUKfLzqfXi5AmmjvDdw!/b/dGoBAAAAAAAA&bo=6wDrAAAAAAADFzI!&rf=viewer_4",
                desc: "Kindle Voyage 6英寸超高清电子墨水屏 4G 电子书 电纸书 阅读器旗舰版...",
               
                price: 1499,
                num: 1,
                isSelected: false,
            },
            {
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/mASxRWzgR3AAuOr983gWeRhjDxJquP*9UhVWaTm*hiw!/b/dEMBAAAAAAAA&bo=6wDrAAAAAAADFzI!&rf=viewer_4",
                desc: "Kindle 新款入门款升级版6英寸电子墨水触控显示屏 电子书 电子阅读...",
                color: "颜色：黑色",
                price: 558,
                num: 1,
                isSelected: false,
            },
            {
                imgSrc: "http://m.qpic.cn/psb?/V10C7AQj17nOSf/cVdzG.AkprpfyOI58GM4kct9XDNH.5g1bBvbNGXVHj0!/b/dEIBAAAAAAAA&bo=6wDrAAAAAAADFzI!&rf=viewer_4",
                desc: "果耶四川月亮岛脐橙5斤礼盒装果径85-90mm",
                color: "规格：礼盒",
                price: 34.90,
                num: 1,
                isSelected: false,
            }
        ],
        hascheck:true,
        allcheck:true,
    },
    getters:{
        count(state){
            var count = 0;
            state.list.map(car => {
                count += car.num;
            })

            return count;
        },
        allprice(state) {
            var allPrice = 0;
            state.list.map(car => {
                allPrice += car.num * car.price;
            })

            return allPrice;
        }

    }

}