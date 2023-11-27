import React, { useState } from 'react';

const NumberToWords = () => {

   const [amount, setAmount] = useState(0); 
   const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   const scales = ['', 'thousand', 'million', 'billion', 'trillion'];

  const convert = (num) => {
    if (num < 10) {
      return ones[num];
    } else if (num >= 10 && num < 20) {
      return teens[num - 10];
    } else if (num >= 20 && num < 100) {
      const ten = Math.floor(num / 10);
      const rest = num % 10;
      return `${tens[ten]}${rest !== 0 ? ' ' + ones[rest] : ''}`;
    } else if (num >= 100 && num < 1000) {
      const hundred = Math.floor(num / 100);
      const rest = num % 100;
      return `${ones[hundred]} hundred${rest !== 0 ? ' and ' + convert(rest) : ''}`;
    } else {
      let scaleIndex = 0;
      let result = '';

      while (num > 0) {
        const part = num % 1000;
        if (part !== 0) {
          const scale = scales[scaleIndex];
          result = `${convert(part)} ${scale} ${result}`;
        }
        scaleIndex++;
        num = Math.floor(num / 1000);
      }

      return capitalizeSentence(result.trim());
    }
  };
  
  function capitalizeSentence(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    const capitalizedSentence = capitalizedWords.join(' ');
    return capitalizedSentence + '.';
  }

  const handleNumeric = (value) => {
    //console.log(value);
    if (/^\d*$/.test(value)) {
        setAmount(value);
    }
  };
  
  const convertIntoWordINR = (amount)=>{
    const scales = ['','','','', 'thousand','thousand', 'lakh','lakh', 'crore','crore', 'arab','arab', 'kharab','kharab', 'neel','neel', 'padma','padma'];
    let valueInt = Number(amount);
    const value = amount+'';
    let result = '';
    let part = value.split('');
    if(part.length%2===0 && part.length>3)
    {
      part = ['0',...part];
    }
    if(part.length>2)
    {
      valueInt =  Number(part[part.length-3]+part[part.length-2]+part[part.length-1])
    } 
    var pi = 0;
    var li = part.length;
    var si = part.length;
    while(li>3)
    {
      let number = Number(part[pi++]+part[pi++]);
      if(number>0)
      {
        result += addUpto99(number)+' '+scales[si]+' ';
      }
      si = si-2;
      li = li-2;
    }
    result += addUpto999(valueInt);
    //console.log(result);
    return result;
  }
  
  const addUpto999 = (valueInt)=>{  
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; 
    const pos = Math.floor(valueInt/100);
    return  pos !== 0? units[pos] +" hundred " + addUpto99(valueInt%100): addUpto99(valueInt%100);
  }

  const addUpto99 = (valueInt)=>{
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    if(valueInt > 0 && valueInt <10)
    {
        result = units[valueInt];
    }
    else if(valueInt >= 10 && valueInt <20)
    {
        result = teens[valueInt%10];
    }
    else if(valueInt >= 20 && valueInt <100)
    {
        result = tens[Math.floor(valueInt/10)] +" "+ units[valueInt%10];
    }
    return result;
}


  const amountInWords = convert(amount);

  const amountInWordsINR = capitalizeSentence(convertIntoWordINR(amount));

  return (
    <div>

        <h1>Convert Amount into Word</h1>
        <hr/>
        <div className="empInputContainer">
            <label htmlFor="amount" className="form-label">Enter Amount</label>
            <input type = "text" className="form-control" style={{width:'300px'}}  value={amount} maxLength={15} name = "amount" id = "amount"  placeholder="Only numeric values allowed" onChange={(event)=>handleNumeric(event.target.value)}/>
            {/* <input type = "button" value = "Convert" className="btn btn-primary btn-xs me-3 mt-2" id = "convertBtn" onClick={convert}/> */}
        </div>
        <br/><br/>
      <h4>Amount in Words:</h4> <h5><i>{amountInWords}</i></h5>
      <br/><br/>
      <h4>Amount in Words(INR):</h4> <h5><i>{amountInWordsINR}</i></h5>
     


    
    </div>
  );
};


export default NumberToWords;
