function countTreeAlt(data){
    
    let slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]]

    let tree=0;
    for(const pairs of slopes){
        if(tree==0){
            tree= calcNumber(data,pairs[0],pairs[1]);
        }else{
            tree = tree * calcNumber(data,pairs[0],pairs[1]);
        }
    }

    return tree;

}

function calcNumber(data,movX,movY){
    let x = 0;
    let y = 0;
    let tree=0;
    while(y<data.length){
        
        if(data[y][x] == '#'){
            tree++
        }
        
        x+=movX
        y+=movY
        if(x>=data[0].length){
            x = x % data[0].length
        }
    }
    return tree;
}

exports.countTreeAlt = countTreeAlt