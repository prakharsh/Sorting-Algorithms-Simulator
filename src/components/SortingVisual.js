import React from 'react' ;
import styles from './SortingVisual.module.css' ;
import BubbleSort from './Sorting_Algorithms/BubbleSort';
import MergeSort from './Sorting_Algorithms/MergeSort';
import SelectionSort from './Sorting_Algorithms/SelectionSort';
import InsertionSort from './Sorting_Algorithms/InsertionSort';
import QuickSort from './Sorting_Algorithms/QuickSort';
import {useState} from 'react' ;

function randomNumber(min, max) {// generate random number in [min,max]
    return Math.floor(Math.random() * (max - min) + min);
}
function SortingVisual() {
    const [array,changeArray] = useState(()=>{
                                        let initial_arr=[] ;
                                        for(let i=0 ;i<50;++i){
                                            initial_arr.push(randomNumber(5,300)) ;
                                        }
                                        return initial_arr
                                }) ;

    const [speed,changeSpeed]=useState(50) ;
    const [colorArray,changeColor]=useState(()=>{
        let initial_arr=[] ;
        for(let i=0 ;i<100;++i){
            initial_arr.push('#00FFFF') ;
        }
        return initial_arr
});
    function resetArray(bars){// generate new random array
        let arr=[] ;
        for(let i=0 ;i<bars  ;++i){
                arr.push(randomNumber(5,300)) ;
        }
        resetColor() ;
        changeArray([...arr]) ;
    }
    function disablebuttons(){// to diable buttons while sorting in progress
        let bt=document.getElementsByClassName("btn") ;
        for(let i=0;i<bt.length; ++i){
            bt[i].disabled = true;
         }
         bt[1].disabled=false
         document.getElementById('changeSize').disabled=true ;
         document.getElementById('changeSpeed').disabled=true ;
    }
    function resetColor(){ // reset color for new array
        let initial_arr=[] ;
        for(let i=0 ;i<100;++i){
            initial_arr.push('#00FFFF') ;
        }
        changeColor([...initial_arr])
    }
    function animateColorHelper(displayarr){// to display color change
         let arr=[] ;
         let temp=[] ;
         for(let j=0 ;j<displayarr[0].length ;++j){
            if(displayarr[0][j]!==array[j]) temp.push('#FF0000') ;
            else temp.push('#00FFFF') ;
         }
         arr.push([...temp]) ;
         for(let i=1 ;i<displayarr.length ;++i){
            let temp=[]
            for(let j=0 ;j<displayarr[i].length ;++j){
                if(i===displayarr.length-1) temp.push('#7CFC00')
                else if(displayarr[i][j]!==displayarr[i-1][j]){
                    temp.push('#FF0000') ;
                }
                else temp.push('#00FFFF') ;
            }
            arr.push([...temp])
         }
         return arr ;
    }
    function alreadySortedTest(){ // to test if the array is already sorted
        let a=JSON.stringify(array) ;
        let newarr=[...array] ;
        newarr.sort((a,b)=>{return a-b}) ;
        let b=JSON.stringify(newarr) ;
        if(a===b) return true ;
        else return false ;
    }
    function animate(displayarr){ // to display sorting animation
        if(alreadySortedTest()) return ;
        disablebuttons() ;
        let changeColorArray=animateColorHelper(displayarr) ;
        for(let i=0 ;i<displayarr.length ;++i){
            setTimeout(()=>{
                 changeColor(changeColorArray[i]) ;
                 changeArray([...displayarr[i]]) ;
            },speed*(i+1))
        }
        setTimeout(()=>{
            enablebutton() ;
        },speed*(displayarr.length+1))
    }
    function enablebutton(){ // to enable buttons after sorting finished
        let bt=document.getElementsByClassName("btn") ;
        for(let i=0;i<bt.length; ++i){
            bt[i].disabled = false;
        }
        document.getElementById('changeSize').disabled=false;
        document.getElementById('changeSpeed').disabled=false ;
        stopanimation() ;
    }
    function stopanimation(){// to stop animation is the the stop animation button pressed 
        for(let i=0 ; i<10000; ++i){
            clearTimeout(i) ; 
        }
    }
    function DoBubbleSort(){
        let displayarr=BubbleSort(array) ;
        animate(displayarr) ;
    }
    function DoMergeSort(){
        let displayarr=MergeSort(array);
        animate(displayarr) ;
    }
   function DoSelectionSort(){
        let displayarr=SelectionSort(array) ;
        animate(displayarr) ;
   }
   function DoInsertionSort(){
        let displayarr=InsertionSort(array) ;
        animate(displayarr) ;
   }
   function DoQuickSort(){
        let displayarr=QuickSort(array) ;
        animate(displayarr) ;
   }
//function algorithmstest(){
//     for(let j=0 ;j<10000 ;++j){
//         let initial_arr=[] ;
//         for(let i=0 ;i<100;++i){
//             initial_arr.push(randomNumber(5,300)) ;
//         }
//         BubbleSort(initial_arr)
//     }
//    }
  return (
    <div className={styles.main} style={{height:'100%'}}>
    <nav className="navbar navbar-dark bg-primary">
            <h1 style={{textAlign:'center'}}>Sorting Algorithms Simulator</h1>
    </nav>
    <div className={styles.par} >
    {
        array.map((obj,idx)=>{
            return (
                <div className={styles.bar} style={{height: `${obj}px` ,'backgroundColor':colorArray[idx]}} key={idx}></div>
            )
        })
    }
    </div>
    <div className={styles.primary_btn}>
    <button type="button" className={`btn btn-primary dis`}  onClick={()=>{resetArray(document.getElementById("changeSize").value*10)}}>New Array</button>
    <button type="button" className="btn btn-primary" onClick={enablebutton}>Stop Simulation</button>
    <button type="button" className="btn btn-primary"  onClick={DoBubbleSort}>Bubble Sort</button>
    <button type="button" className="btn btn-primary"  onClick={DoMergeSort}>Merge Sort</button>
    <button type="button" className="btn btn-primary"  onClick={DoSelectionSort}>Selection Sort</button>
    <button type="button" className="btn btn-primary"  onClick={DoInsertionSort}>Insertion Sort</button>
    <button type="button" className="btn btn-primary"  onClick={DoQuickSort}>Quick Sort</button>
    </div>
    <div className={styles.rng_input}>
    <div style={{display:'flex'}}>
    <label >Array Size </label>
    <input
          id="changeSize"
          type="range"
          min="1"
          max="10"
          defaultValue="5"  
          style={{width:'200px'}}
           onChange={()=>{resetArray(document.getElementById("changeSize").value*10)}}
          /></div>
          <div style={{display:'flex'}}>
          <label className={styles.label2}>Speed</label>
         <input
          id="changeSpeed"
          type="range"
          min="1"
          max="10"
          defaultValue="5" 
          style={{width:'200px'}}
           onChange={()=>{changeSpeed(200-(document.getElementById("changeSpeed").value*20))}}
          /></div>
          </div>
          <footer>
            <span><h4>Copyright &copy;  - Prakhar Sharma</h4></span>
        </footer>
    </div>
  )
}

export default SortingVisual