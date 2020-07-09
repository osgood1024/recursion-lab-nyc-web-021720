
function printString(myString){
   
    console.log(myString[0]);

    if(myString.length >1){
        let mySubString=myString.substring(1,myString.length)
        printString(mySubString);
    }else{
        return true
    }
    
}


function reverseString(myString){
    if(myString.length<2){
        return myString
    }else{
        return reverseString(myString.substring(1))+myString[0]

    }
}


function isPalindrome(myString){
    let l= myString.length
    if(l<2){
        return true;
    }else if (myString[l-1]===myString[0]){
        return isPalindrome(myString.substring(1,l-1));

    }else{
        return false;
    }
}


function addUpTo(myArray,index){
    if(index){
        return myArray[index]+ addUpTo(myArray,--index)
    }else{
       return myArray[index]
    }
}


function maxOf(myArray){
    return myArray.length===1 ? myArray[0] : Math.max(myArray.shift(),maxOf(myArray))
}



function includesNumber(myArray,num){
    if(myArray[0]===num){
        return true
    }else if(!myArray.length){
        return false
    }else{
        return includesNumber(myArray.slice(1),num)
    }

}




