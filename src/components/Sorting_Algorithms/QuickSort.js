let displayarr=[]
  function quickSort(arr,low,high){
    if(low>=high) return ;
    let smaller=0 ;
    for(let i=low+1 ;i<=high ;i++){
        if(arr[i]<arr[low]) smaller++ ;
    }
    let temp=arr[low] ;
    arr[low]=arr[low+smaller] ;
    arr[low+smaller]=temp ;
    displayarr.push([...arr]) ;
    let p1=low,p2=high ;
    while(p1<low+smaller && p2>low+smaller){
        if(arr[p1]<arr[low+smaller]) p1++ ;
        else if(arr[p2]>=arr[low+smaller]) p2-- ;
        else{
                let temp=arr[p1] ;
                arr[p1]=arr[p2] ;
                arr[p2]=temp ;
                displayarr.push([...arr]) ;
                p1++ ;
                p2-- ;
        }
    }
    quickSort(arr,low,low+smaller-1) ;
    quickSort(arr,low+smaller+1,high) ;
}
  
export default function Sort(array){
    let newarr=[...array] ;
    while(displayarr.length)displayarr.pop() 
      quickSort(newarr,0,newarr.length-1) ;
    //   array.sort((a,b)=>{return a-b})
    //   if(JSON.stringify(array)!=JSON.stringify(newarr)) console.log('not equal')
    //   else console.log('equal')
      return displayarr ;
}