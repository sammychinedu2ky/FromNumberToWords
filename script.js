function fromNumberToWords(input){
let unit = {0: '',1: '',2: ' hundred and',3: ' thousand,', 4: '',6: ' million,',9: ' billion,',12:' trillion,'
}
let words = {0: '',1: ' one',2: ' two',3: ' three',4: ' four',5: ' five',6: ' six',7: ' seven',8: ' eight',9: ' nine',10: ' ten',11: ' eleven',12: ' twelve',13: ' thirteen',14: ' fourteen',15: ' fifteen',16: ' sixteen',17: ' seventeen',18: ' eighteen',19: ' nineteen',20: ' twenty',30: ' thirty',40: ' forty',50: ' fifty',60: ' sixty',70: ' seventy',80: ' eighty',90: ' ninety'
}
let newWord = '';
let inserted=''
async function convert(num) {
    
    if(inserted==''){
        inserted=num;
    }
    if (num=='0'){
            newWord='zero'
            return
        }
    //padded the numbers to be divisible by three
    function pad(num) {
        
        while (num.length % 3 !== 0) {
            num = num.padStart(num.length + 1, "0")
        }
        return num
    }
    //find the place value
    let paddedVal =  pad(num)
    let slicedNum = paddedVal.slice(0, 3)
    let findPlace = paddedVal.slice(0, 3).split('').reverse().join('').padStart(paddedVal.length, '0');
    let placeValue = unit[findPlace.length - 3]
    if(slicedNum.split('').every(item=>item=='0')&paddedVal.length>3){
     convert(paddedVal.slice(3, paddedVal.length))
}//

else{
      //console.log(paddedVal)

    if (paddedVal[0] !== '0') {
        newWord += (words[slicedNum[0]] + unit[2]);
        if(slicedNum[1]=='0'&slicedNum[2]=='0'){
            newWord=newWord.slice(0,newWord.length-3)
        }
    }

    if (paddedVal[1] == '1') {
        newWord += words[slicedNum[1] + slicedNum[2]] + placeValue
    }
    if (paddedVal[1] > 1) {
        newWord += words[slicedNum[1] + '0']
    }
    if (paddedVal[1] == '0' || paddedVal[1] > '1') {
        newWord += (words[slicedNum[2]] + placeValue)
    }
    if(paddedVal[3]=="0" & paddedVal.length<=6){
        //console.log(newWord)
        newWord = newWord.slice(0,newWord.length-1) +" and"
      }
    if (paddedVal.length > 3) {
        convert(paddedVal.slice(3, paddedVal.lenght))
    }}
    return newWord
}
convert(input.toString()).then(()=>{
    if(newWord.endsWith(',')){
        newWord = newWord.slice(0,newWord.length-1)
    }
    if(newWord.endsWith(' and')){
        newWord=newWord.slice(0,newWord.length-3)
    }
    //console.log(newWord)
  })
  return newWord.trim()
}
//fromNumberToWords(12388)



