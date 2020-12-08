function SumCheck2(arr){ 
    arr.reduce((acc,el) => {
        if(acc+el == 2000){
            console.log(acc,el, ':' +acc*el);
        }
    }
)}

function SumCheck(arr){ 
    let index=0;
    while(index<arr.length){
        for(i=index+1;i<arr.length;i++){
            //console.log(arr[index],arr[i],(arr[index]+arr[i]))
            if(arr[index]+arr[i]==2020){
                console.log(arr[index],arr[i],(arr[index]+arr[i]))
                return arr[index]*arr[i];
            }
        }
        index+=1;
    }
    return null;    
}

exports.SumCheck = SumCheck;
