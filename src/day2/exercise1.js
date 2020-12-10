function CheckPassword(passwords) {
    let cont=0
    for( const index in passwords){
        let cond_and_pass = passwords[index].trim().split(' ')
        console.log(cond_and_pass)
        let cond = cond_and_pass[0].split('-')
        let min = cond[0]
        let max = cond[1]
        let char = cond_and_pass[1].split('-')[0].substr(0,1);
        //char = char.substr(0,1)
        
       
        if(isValid(min,max,char,cond_and_pass[2])){
            cont++
        }
    }

    return cont;
}

function isValid(min, max, char, pass){
    cont=0;
    for(i=0;i<pass.length;i++){
        if(pass[i]==char){
            cont++;
        }
    }
    if(min<=cont && cont <= max){
        return true
    }else{
        return false
    }


}

exports.CheckPassword = CheckPassword