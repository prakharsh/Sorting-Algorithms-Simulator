let displayarr=[]
    function merge(arr, start, mid, end){
        let start2 = mid + 1;
        if (arr[mid] <= arr[start2])
        {
            return;
        }
        while (start <= mid && start2 <= end)
        {
            if (arr[start] <= arr[start2])
            {
                start++;
            }
            else
            {
                let value = arr[start2];
                let index = start2;
                while (index != start)
                {
                    arr[index] = arr[index - 1];
                    index--;
                }
                arr[start] = value;
                start++;
                mid++;
                start2++;
                displayarr.push([...arr]) ;
            }
        }
    }
function mergeSort(arr, l, r){
    if (l < r){
        let m = l + Math.floor((r - l) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

export default function MergeSort(array){
    let newarr=[...array] 
    while(displayarr.length)displayarr.pop() 
    mergeSort(newarr,0,newarr.length-1) ;
    // array.sort((a,b)=>{return a-b})
    //   if(JSON.stringify(array)!=JSON.stringify(newarr)) console.log('not equal')
    //   else console.log('equal')
    return displayarr ;
}