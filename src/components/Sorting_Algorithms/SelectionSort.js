export default function SelectionSort(array){
    let displayarr=[] ;
    let newarr=[...array] ;
    for(let i=0 ;i<newarr.length ;++i){
     let minIdx=i ;
      for(let j=i+1 ;j<newarr.length ;++j){
         if(newarr[j]<newarr[minIdx]){
             minIdx=j ;
         }
      }
      let temp=newarr[i] ;
      newarr[i]=newarr[minIdx] ;
      newarr[minIdx]=temp ;
      displayarr.push([...newarr]) ;
    }
    // array.sort((a,b)=>{return a-b})
    //   if(JSON.stringify(array)!=JSON.stringify(newarr)) console.log('not equal')
    //   else console.log('equal')
    return displayarr
}