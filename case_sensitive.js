let text = prompt("하나의 문자을 입력하시오","0");
let t='';
let num = text.charCodeAt(0);
      if (num >= 97 && num <= 122){
       t += String.fromCharCode(num - 32);
       console.log(`${t}`);
    }
       else if(num>=65 && num<=90){
       t += String.fromCharCode(num + 32);
       console.log(`${t}`);
       }
      else{
        console.log("not alphabet");
    }
