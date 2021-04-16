const weatherForm=document.querySelector("form")
const search=document.querySelector("input")

const messageOne=document.querySelector("#msg-1")
const messageTwo=document.querySelector("#msg-2")
const messageThree=document.querySelector("#msg-3")

weatherForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const address=search.value
    const url="/weather?address="+address
    messageOne.textContent="loading"
    messageTwo.textContent=""
    messageThree.textContent=""
fetch(url).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            messageOne.textContent=data.error
        }
        else{
            messageOne.textContent="Location: "+data.loc
            messageTwo.textContent="Temperature: "+data.temp
            messageThree.textContent="Forecast: "+data.cond
        }
    })
  })
    
    
})