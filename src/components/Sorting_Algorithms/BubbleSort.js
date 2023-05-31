export default function BubbleSort(array){
    let newarr=[...array] ;
        let displayarr=[] ;
            for(let i=0 ;i<array.length ;++i){
                for(let j=0 ;j<array.length-1 ;++j){
                    if(newarr[j]>newarr[j+1]){
                        let temp=newarr[j] ;
                        newarr[j]=newarr[j+1] ;
                        newarr[j+1]=temp ;
                        displayarr.push([...newarr]) ;
                    }
                }
            }
    //    array.sort((a,b)=>{return a-b})
    //   if(JSON.stringify(array)!=JSON.stringify(newarr)) console.log('not equal')
    //   else console.log('equal')
    return displayarr ;
}