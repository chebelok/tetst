function array(i, j){
    let a = [];
    for(i; i <= j; i++){
        if((i%2) == 1){
            a.push(i);
        }else{
            continue;
        }
    }
    console.dir(a)
};
array(15, 30)