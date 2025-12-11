let sourceEl = document.querySelector('#source')
let resultEl = document.querySelector('#result')
let toEl = document.querySelector('.toEl')





let translateBtn = document.querySelector('#translateBtn')
 let thisEl = document.querySelector('#tgtLang')
let srcLang = document.querySelector('#srcLang')

toEl.addEventListener('click',()=>{
  let tempEL = thisEl.value
  thisEl.value = srcLang.value
  srcLang.value = tempEL
})



async function translateText() {
  const url = `https://api.mymemory.translated.net/get?q=${sourceEl.value}&langpair=${srcLang.value}|${thisEl.value}`;

  let response = await fetch(url);
  let data = await response.json();

  resultEl.textContent = data.responseData.translatedText;
}



translateBtn.addEventListener('click', async () => {
  await translateText();
});



document.addEventListener('keydown',async(event)=>{
    
    
  if(event.key === 'Enter'){

    translateBtn.textContent = 'Transhttps://grok.com/ating...'

    try{
        

        await  translateText()
        translateBtn.textContent = 'Translate'  
}
catch(err){
    translateBtn.textContent = 'Error'

}
   

}}
  )