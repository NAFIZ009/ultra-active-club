function LsGetData(fun){
    const exerciseInfo=JSON.parse(localStorage.getItem('exerciseInfo'))  ;
    fun(exerciseInfo) ;
}

// function LsSaveData(exercisesTime,breaks,cb){
//     let exerciseInfo=JSON.parse(localStorage.getItem('exerciseInfo'));
//     if(exerciseInfo){
//         exercisesTime && localStorage.setItem('exerciseInfo',JSON.stringify({...exerciseInfo,
//         exercisesTime
//         }));
//         breaks && localStorage.setItem('exerciseInfo',JSON.stringify({...exerciseInfo,
//         breaks
//         }));
//     }else{
//         cb();
//         exercisesTime && localStorage.setItem('exerciseInfo',JSON.stringify({
//             breaks:0,
//             exercisesTime
//         }));
//         breaks && localStorage.setItem('exerciseInfo',JSON.stringify({
//             breaks,
//             exercisesTime:0
//         }));
        
//     }
// }


export { LsGetData};