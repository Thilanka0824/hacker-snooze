
let body = document.querySelector('body'); //link to the body of the html page
let parent = document.createElement('div'); //creates a div in html page
let child = document.createElement('div'); //creates a div in html page
let anchor = document.createElement('a')


let id = []; //array for id numbers
let url100 = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty' //this is the API link for top stories  

let urlId = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty` //this is the API link for each id //using string inerpolation because we will loop thru an array and log each id 

//API function for top 100 stories
let apiCallfor100 = async () => { 
    let res = await fetch(url100); //fetches the raw data from url100
    let data = await res.json(); //parses raw data from res(ponse) into JSON

    for (let i = 0; i < 100; i++) {  
        id.push(data[i]) //pushes each item from data into the id array
    } 
    apiCallforId(); 
}
apiCallfor100()


//API fucntion for 
let apiCallforId = async () => {
   
    for (let idNumber of id) { //for each 'idNumber' in array 'id' do this
        
        let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${idNumber}.json?print=pretty`) //fetches raw data from 'idNumber'


        let dataStream = await response.json(); //parses raw data from response
        console.log(dataStream)
        newDiv() //fucntion. links to html body, creates a div called 'parent', appends 'parent' to body  
        parent.innerHTML = `${dataStream.score} points - ${dataStream.title}` //Str Interpolates the value of the score(points) key and the title key
        
        newDiv()
        parent.innerHTML = `${dataStream.descendants} comments - submitted by ${dataStream.by}` //Str Interpolates the value of the descendants(comments) key and the by(submitted by) key

    }

}

let newDiv = () => {
    body = document.querySelector('body')
    parent = document.createElement('div')

    body.appendChild(parent)    
}
