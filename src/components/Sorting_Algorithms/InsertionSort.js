export default function DoInsertionSort(array){
    let displayarr=[] 
    let newarr=[...array] ;
        for(let i=1 ;i<newarr.length ;++i){
            let j=i ;
            while(j-1>=0 && newarr[j-1]>newarr[j]){
                    let temp=newarr[j] ;
                    newarr[j]=newarr[j-1] ;
                    newarr[j-1]=temp ;
                    --j ;
                    displayarr.push([...newarr]) ;
            }
        }
    //     array.sort((a,b)=>{return a-b})
    //   if(JSON.stringify(array)!=JSON.stringify(newarr)) console.log('not equal')
    //   else console.log('equal')
        return displayarr
   }