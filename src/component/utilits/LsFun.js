function LsGetData(fun){
    const exerciseInfo=JSON.parse(localStorage.getItem('exerciseInfo'))  ;
    fun(exerciseInfo) ;
}

function LsSaveData(breaks,exercisesTime){
    let exerciseInfo=JSON.parse(localStorage.getItem('exerciseInfo'));
    if(exerciseInfo){
        exerciseInfo.breaks=breaks;
        exerciseInfo.exercisesTime=exercisesTime;
        localStorage.setItem('exerciseInfo',JSON.stringify(exerciseInfo));
    }else{
        localStorage.setItem('exerciseInfo',JSON.stringify({
            breaks:breaks,
            exercisesTime:exercisesTime
        }));
    }
}
export {LsSaveData, LsGetData};