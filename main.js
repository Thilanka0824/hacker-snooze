let body = document.querySelector('body'); 
let parent = document.createElement('div'); 
let child = document.createElement('div'); 
//let anchor = document.createElement('a')
let orderedList = document.createElement("ol");


let id = []; 
let url100 = 'https://hacker-news.firebaseio.com/v0/topstories.json?'  

let urlId = `https://hacker-news.firebaseio.com/v0/item/${id}.json?` 

//API function for top 100 stories
let apiCallfor100 = async () => { 
    let res = await fetch(url100); 
    let data = await res.json(); 
    
    for (let i = 0; i < 100; i++) {  
        id.push(data[i]) 
    } 
    apiCallforId(); 
}
apiCallfor100()


//API fucntion for 
let apiCallforId = async () => {
   
    for (let idNumber of id) { 
        let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${idNumber}.json`) 

        let dataStream = await response.json(); 
        console.log(dataStream)
        
        
        newDiv()
        let anchor = document.createElement('a')
        parent.appendChild(anchor)
        anchor.innerText = dataStream.title
        anchor.href = dataStream.url
        
        //parent.innerHTML = `${dataStream.score} points - ${dataStream.title}` 
        
        newDiv()
        parent.innerHTML = `${dataStream.descendants} comments - submitted by ${dataStream.by}` 
    }

}

let newDiv = () => {
    
    body = document.querySelector('body')
    parent = document.createElement('div')
    body.appendChild(parent)
    
}

