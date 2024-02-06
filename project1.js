// function getDate() {
//   return document.getElementById('dateSearch').value;
// }
// async function cal() {
//   let request = '';
//   fetch("./secrets.json").then(response => {
//     return response.json();
//   }).then(async function (myJSON) {
//     request = 'https://api.nasa.gov/planetary/apod?date=' + getDate() + '&api_key=' + myJSON.api_key
//     await fetch(request).then(function(response) {
//       return response.json();
//     }).then(function (myJSON)) {

//       p = document.getElementById("description");
//       p.innerHTML = myJSON.explanation;

//       img = document.getElementById("spacePic");
//       img.src = myJSON.url;
//     }
//   })
// }

function getDate() {
  return document.getElementById('dateSearch').value;
}

async function call() {
  try {
    const apiKey = 'AZISwsgcnUzw8xfl0pdrWoJioZtvq8IyBKr1blRm'; 
    
    const request = `https://api.nasa.gov/planetary/apod?date=${getDate()}&api_key=AZISwsgcnUzw8xfl0pdrWoJioZtvq8IyBKr1blRm`;
    
    const apodResponse = await fetch(request);
    const apodJSON = await apodResponse.json();
    
    const p = document.getElementById("description");
    p.innerHTML = apodJSON.explanation;

    const img = document.getElementById("spacePic");
    img.src = apodJSON.url;
  } catch (error) {
    console.error('Error:', error);
  }
}




// let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
// let images 

// fetch(url)
//   .then(res => {
//     return res.json()
//   })
//   .then(data => {
//     console.log(data)
//     images = data

//     images.forEach(banana => {
//       let div = document.createElement('div')
//       div.innerText = banana.title
//       document.querySelector('#gallery').appendChild(div)
//     })
//     let currentImage = images[0]

//     let p = document.createElement('p')
//     p.innerText = currentImage.explanation
    

  //   let image = document.createElement('img')
  //   let h1 = document.createElement('h1')

  //   h1.innerText = currentImage.title
  //   document.querySelector('#mainImage').appendChild(h1)

  //   image.src = currentImage.url
  //   document.querySelector('#mainImage').appendChild(image)

  //   document.querySelector('#mainImage').appendChild(p)


  // })
