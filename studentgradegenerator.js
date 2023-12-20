function studentgrade(grade){
    if (grade> 79 && grade<= 100){
        console.log('A') ; // prints A if the statement is true.
    }
    else if(grade >=60 && grade <=79){
        console.log('B')
    }
    else if(grade>=49 && grade<60){
        console.log('C')
    }
    else if(grade>=40 && grade<49){
    console.log('D')
    }
    else{
        console.log('E')
    }


}
console.log(studentgrade(22));