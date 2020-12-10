function CheckPasswordTwo(passwords) {
    let cont=0
    for( const index in passwords){
        let cond_and_pass = passwords[index].trim().split(' ')
        console.log(cond_and_pass)
        let cond = cond_and_pass[0].split('-')
        let first = cond[0]
        let last = cond[1]
        let char = cond_and_pass[1].split('-')[0].substr(0,1);
        //char = char.substr(0,1)
        
       
        if(isValid(parseInt(first),parseInt(last),char,cond_and_pass[2])){
            cont++
        }
    }

    return cont;
}

function isValid(first, last, char, pass){
    if(pass[first-1]==char && pass[last-1] != char){
        console.log('char: ',char,'first: ',first, pass[first-1],'last: ',last,pass[last-1])
        return true
    }else if(pass[first-1]!=char && pass[last-1] == char){
        return true
    }else{
        return false
    }
}

exports.CheckPasswordTwo = CheckPasswordTwo