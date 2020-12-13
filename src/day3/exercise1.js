function countTree(data){
    const movX = 3;
    const movy = 1;
    let x = 0;
    let y = 0;

    let tree=0;
    while(y<data.length){
        
        if(data[y][x] == '#'){
            tree++
        }
        
        x+=movX
        y+=movy
        if(x>=data[0].length){
            x = x % data[0].length
        }
    }

    return tree;

}

exports.countTree = countTree