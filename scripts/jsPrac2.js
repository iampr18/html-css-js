function ques1() {
    var a = Number (document.getElementById("q1.1").value);
    var b = Number (document.getElementById("q1.2").value);
    var c = a + b;
    alert('Sum = '+c);
}

function ques2() {
    let arrString = String(document.getElementById("q2").value);
    arrString+=' ';  //Extra Space added
    let arr =[];
    let j=0,s;
    for(let i=0;i<arrString.length;i++) {
        if((arrString.charAt(i)===' ')) {
            s=Number(arrString.slice(j,i));
            arr.push(s);
            console.log('word = '+s);
            j=i;
        }
    }
    console.log('Total nos. are = '+arr.length);
    let max=arr[0];
    for (i=1;i<arrString.length;i++) {
        if(arr[i]>max) {
            max=arr[i];
        }
    }
    alert('Array = '+arr +'\nMax Element = '+max);
}

function ques3() {
    let s=document.getElementById("q3").value;
    console.log('Type of input = '+ (typeof s));
    let sArr=s.split("");
    sArr=sArr.reverse();
    console.log("rev = "+sArr);
    let sCopy=sArr.join("");
    if(s===sCopy) 
        alert('Palindrome!');
    else 
        alert('Not Palindrome!');
}

function ques4() {
    let s=document.getElementById("q4").value;
    let arr=s.split(",");
    let output=[];
    console.log('arr = '+s);
    for(let i=0;i<arr.length;i++) {
        if(arr[i]%2===0) {
            output.push(arr[i]);
        }
    }
    alert('Even nos. = '+output);
}