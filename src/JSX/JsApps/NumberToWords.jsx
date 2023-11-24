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
    console.log(value);
    if (/^\d*$/.test(value)) {
        setAmount(value);
    }
  };
  

  const amountInWords = convert(amount);

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
      <h4>Amount in Words: <i>{amountInWords}</i></h4>


    <AmountToIndianEnglishWords/>

    </div>
  );
};


const AmountToIndianEnglishWords = () => {
    const [inputAmount, setInputAmount] = useState('');
    const [resultInWords, setResultInWords] = useState('');
  
    const convertToIndianEnglishWords = (amount) => {
      const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      const scales = ['hundred', 'thousand', 'lakh', 'crore', 'arab', 'kharab', 'neel', 'padma'];
  
      const splitIntoParts = (num) => {
        const parts = [];
        while (num > 0) {
          parts.push(num % 100);
          num = Math.floor(num / 100);
        }
        return parts;
      };
  
      const toIndianEnglishWords = (num) => {
        const part = [];
        const hundreds = Math.floor(num / 100);
        const tensUnits = num % 100;
  
        if (hundreds !== 0) {
          part.push(units[hundreds] + ' hundred');
        }
  
        if (tensUnits !== 0) {
          if (tensUnits < 10) {
            part.push(units[tensUnits]);
          } else if (tensUnits < 20) {
            part.push(teens[tensUnits - 10]);
          } else {
            part.push(tens[Math.floor(tensUnits / 10)] + (tensUnits % 10 !== 0 ? '-' + units[tensUnits % 10] : ''));
          }
        }
  
        return part.join(' ');
      };
  
      if (amount === 0) {
        return 'zero';
      }
  
      const parts = splitIntoParts(amount);
      let result = '';
      for (let i = 0; i < parts.length; i++) {
        if (parts[i] !== 0) {
          result = toIndianEnglishWords(parts[i]) + ' ' + scales[i] + ' ' + result;
        }
      }
  
      return result.trim();
    };
  
    const handleInputChange = (event) => {
      const value = event.target.value;
      if (!isNaN(value) && value !== '') {
        setInputAmount(value);
        setResultInWords(convertToIndianEnglishWords(Number(value)));
      } else {
        setInputAmount('');
        setResultInWords('');
      }
    };
  
    const convertIntoWord = (event)=>{

        const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const scales = ['hundred', 'thousand', 'lakh', 'crore', 'arab', 'kharab', 'neel', 'padma'];
        let result = '';
        setInputAmount(event.target.value);
        const value = event.target.value;
        const valueInt = Number(event.target.value); 
        const parts = value.split('');
        //console.log(valueInt);
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
            const position = Math.floor(valueInt/10); 
            result = tens[position] +" "+ units[valueInt%10];
        }
        else if(valueInt >= 100 && valueInt <1000)
        {
            const position = Math.floor(valueInt/100); 
            result = units[position] +" hundred "+ addUpto99(valueInt%100);
        }
        else if(valueInt >= 1000 && valueInt <100000)
        {
            const position = Math.floor(valueInt/100); 
            result = units[position] +" hundred "+ addUpto99(valueInt%100);
        }

        console.log(result);

    }

    const addUpto99 = (valueInt)=>{

        const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const scales = ['hundred', 'thousand', 'lakh', 'crore', 'arab', 'kharab', 'neel', 'padma'];
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
            const position = Math.floor(valueInt/10); 
            result = tens[position] +" "+ units[valueInt%10];
        }
        return result;
    }



    return (
      <div>
        <h3>Convert Amount to Indian English Words (Upto 15 digits)</h3>
        <input
          type="text"
          value={inputAmount}
        //   onChange={handleInputChange}
          onChange={convertIntoWord}
          placeholder="Enter an amount"
        />

     

        <div>
          <strong>Amount in Indian English Words:</strong> {resultInWords}
        </div>
      </div>
    );
  };

export default NumberToWords;
