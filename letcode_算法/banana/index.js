/**
 * 
 * @param {number[]} piles 
 * @param {number} H  
 * @param {number} mid
 * @return {number} -minEatingSpeed
 * @return {boolean} -canEatAllBananas
 */

 function canEatAllBananas(piles,H,mid)
 {
    //  时间H小时，
    let h=0;
    for(let pile of piles) //循环每把的数量
    {
        h +=Math.ceil(pile/mid); //
        
    }
    return h<=H;

 }

function minEatingSpeed (piles,H){
    let lo=1;  //定义第一只
    let hi=Math.max(...piles); //...数组展开多项  最大一把数量
    console.log(hi);

    while(lo<=hi){
        // 一小时吃的数量m
        let mid = lo+((hi-lo)>>1);
        console.log('-----',mid);
        // 验证m正好吃完 赋予canEatAllBananas()验证
        if(canEatAllBananas(piles,H,m))
        {
            hi=mid -1;

        }else
        {
            lo=mid +1;  //将最小值改为中间值+1
        }
    }
    return lo;
}

// console.log(canEatAllBananas([3,6,7,11],8,4)); //测试函数，吃完时间4

console.log(minEatingSpeed([3,6,7,11],8));