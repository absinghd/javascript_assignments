function is_integer(a){
    var nope = "not an integer"
    var yep = "it IS an integer"
    if (a %  2 == 0)
        {
        alert(yep);
        }
    else if (a % 3 == 0)
        {
        alert(yep);
        }
    else if (a % 5 == 0)
        {
        alert(yep);
        }
    else
        {
        alert(nope);
        }   
    }