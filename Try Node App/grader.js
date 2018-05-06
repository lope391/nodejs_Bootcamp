function average(grades) {
    var cont = 0;


    for(var i = 0; i < grades.length;i++){
        cont += grades[i];
    }

    console.log(Math.round(cont/grades.length));
}

var scores = [90,98,89,100,100,86,94];
average(scores);