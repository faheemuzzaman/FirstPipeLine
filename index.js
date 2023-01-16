
const express = require("express"); // Module add
const app = express(); //Object create for Express\

app.use(express.json());


app.get("/convert/:usdValue/:amount",(req,res)=>{  // ES6
    givenAmount = parseFloat(req.params.amount)
    usdRate = parseFloat(req.params.usdValue)
    pkrgivenamount = givenAmount * usdRate;
    res.json(convertAmount(pkrgivenamount))
});

app.listen(process.env.PORT || 8080,function(){
    console.log("The Server is Up on Port 8080")
})


var iWords = ['zero', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
var ePlace = ['ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
var tensPlace = ['', ' ten', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
var inWords = [];

var numReversed, inWords, actnumber, i, j;

function tensComplication() {
    if (actnumber[i] == 0) {
        inWords[j] = '';
    } else if (actnumber[i] == 1) {
        inWords[j] = ePlace[actnumber[i - 1]];
    } else {
        inWords[j] = tensPlace[actnumber[i]];
    }
}

function convertAmount(amount) {
    var numericValue = amount;
    numericValue = parseFloat(numericValue).toFixed(2);

    var amount = numericValue.toString().split('.');
    var taka = amount[0];
    var paisa = amount[1];
    var amountInWord = convert(taka) +" rupee and "+ convert(paisa)+" paisa only";
    console.log(amountInWord);
    return amountInWord
}
function convert(numericValue) {
    inWords = []
    if (numericValue == "00" || numericValue == "0") {
        return 'zero';
    }
    var obStr = numericValue.toString();
    numReversed = obStr.split('');
    actnumber = numReversed.reverse();


    if (Number(numericValue) == 0) {
        document.getElementById('container').innerHTML = 'BDT Zero';
        return false;
    }

    var iWordsLength = numReversed.length;
    var finalWord = '';
    j = 0;
    for (i = 0; i < iWordsLength; i++) {
        switch (i) {
            case 0:
                if (actnumber[i] == '0' || actnumber[i + 1] == '1') {
                    inWords[j] = '';
                } else {
                    inWords[j] = iWords[actnumber[i]];
                }
                inWords[j] = inWords[j] + '';
                break;
            case 1:
                tensComplication();
                break;
            case 2:
                if (actnumber[i] == '0') {
                    inWords[j] = '';
                } else if (actnumber[i - 1] !== '0' && actnumber[i - 2] !== '0') {
                    inWords[j] = iWords[actnumber[i]] + ' hundred';
                } else {
                    inWords[j] = iWords[actnumber[i]] + ' hundred';
                }
                break;
            case 3:
                if (actnumber[i] == '0' || actnumber[i + 1] == '1') {
                    inWords[j] = '';
                } else {
                    inWords[j] = iWords[actnumber[i]];
                }
                if (actnumber[i + 1] !== '0' || actnumber[i] > '0') {
                    inWords[j] = inWords[j] + ' thousand';
                }
                break;
            case 4:
                tensComplication();
                break;
            case 5:
                if (actnumber[i] == '0' || actnumber[i + 1] == '1') {
                    inWords[j] = '';
                } else {
                    inWords[j] = iWords[actnumber[i]];
                }
                if (actnumber[i + 1] !== '0' || actnumber[i] > '0') {
                    inWords[j] = inWords[j] + ' lakh';
                }
                break;
            case 6:
                tensComplication();
                break;
            case 7:
                if (actnumber[i] == '0' || actnumber[i + 1] == '1') {
                    inWords[j] = '';
                } else {
                    inWords[j] = iWords[actnumber[i]];
                }
                inWords[j] = inWords[j] + ' crore';
                break;
            case 8:
                tensComplication();
                break;
            default:
                break;
        }
        j++;
    }


    inWords.reverse();
    for (i = 0; i < inWords.length; i++) {
        finalWord += inWords[i];
    }
    return finalWord;
}

// convertAmount(23234234234234.345345);


