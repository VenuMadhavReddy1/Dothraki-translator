var originalText = document.querySelector("#original-text");
var translatedText = document.querySelector("#translated-text");
var translateBtn = document.querySelector("#translate");
var type1 = document.getElementById('minion');
var type2 = document.getElementById('yoda');
var type3 = document.getElementById('dothraki');

var serverURL = '';

function minion(){      
    var translationType = 'minion';
    var bgObj = document.getElementById('wrapper');
    bgObj.style.backgroundImage = "url('images/minion.jpg') ";
    type1.style.backgroundColor = '#DF711B';
    type2.style.backgroundColor = '#64C9CF';
    type3.style.backgroundColor = '#64C9CF';
    serverURL = "https://api.funtranslations.com/translate/"+translationType+".json";
  }
  minion();
  type1.addEventListener('click',minion);

  function yoda(){     
    var translationType = 'yoda';
    var bgObj = document.getElementById('wrapper');
    bgObj.style.backgroundImage = "url('images/yoda.jpg')";
    type2.style.backgroundColor = '#DF711B';
    type3.style.backgroundColor = '#64C9CF';
    type1.style.backgroundColor = '#64C9CF';
    serverURL = "https://api.funtranslations.com/translate/"+translationType+".json";
  }
  yoda();
  type2.addEventListener('click',yoda);

  function dothraki(){            
    var translationType = 'dothraki';
    var bgObj = document.getElementById('wrapper');
    bgObj.style.backgroundImage = "url('images/dothraki.jpg')";
    type3.style.backgroundColor = '#DF711B';
    type2.style.backgroundColor = '#64C9CF';
    type1.style.backgroundColor = '#64C9CF';
    serverURL = "https://api.funtranslations.com/translate/"+translationType+".json";
  }
  dothraki();
  type3.addEventListener('click',dothraki);

  
function getURL(text) {             
    return serverURL + "?" + "text=" + text;
  }
  
  function errorHandler(error) {
    alert("API call limit exceeded. Try again later.");
  }

  function translate() {      
    var inputText = originalText.value;
    if(inputText==''){                       
      alert('Please enter some text to translate.')
    }
    else{                      
      fetch(getURL(inputText))
      .then((response) => response.json())
      .then(json => {
        var translatedtext = json.contents.translated;
        translatedText.innerText = translatedtext;
      })
      .catch(errorHandler);
    }
  }
  translateBtn.addEventListener("click", translate);
  


  
  
  