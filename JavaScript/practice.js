uniform([1,1,1,2]);


function printReverse(arr){
    len = arr.length;
    for(var i = len; i>=0;i--){
        console.log(arr[i]);
    }
};

function uniform(arr){
    var first = arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i] !== first) return false;
    }
    return true
};