
function eat_cake(str){
    var counter = 0;
    var numset = 0;

    var numstr = [];
    for(var i = 0; i < str.length;i++){
        if(i + 1 == str.length && str[0] == str[i]){
            counter = 0;
            numstr[str.length] = counter;
            numset++
            break;
        }else if(!(str[0] == str[i] && str[1] == str[i + 1])){
            counter++;
            numstr[numset] = counter;
            numset ++

        }else{
            counter = 0;
            numstr[numset] = counter;
            numset++
        }
    }
    var cakehalf = 0;
    if(str.length == 0){
        cakehalf++
    }
    for(var z = numstr.length-1; z>=0; z--){

        if(numstr[numstr.length-1] == numstr[z]){
            cakehalf++
        }
    }
    return cakehalf;
}