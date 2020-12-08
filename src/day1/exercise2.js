function SumCheckThree(arr){ 
    let index=0;
    let index2=1;
    while(index<arr.length){
        while(index2<arr.length-1){
            for(i=index2+1;i<arr.length;i++){
                console.log(arr[index],arr[index2],arr[i],(arr[index]+arr[index2]+arr[i]))
                if(arr[index]+arr[index2]+arr[i]==2020){
                    //console.log(arr[index],arr[index2],arr[i],(arr[index]+arr[index2]+arr[i]))
                    return arr[index]*arr[index2]*arr[i];
                }
            }
            index2+=1;
        }
        index+=1;
        index2=index+1;
    }
    return null;    
}

exports.SumCheckThree = SumCheckThree;
