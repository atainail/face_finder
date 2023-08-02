const input = document.querySelector("input");
const output = document.querySelector("output");
let imagesArray = [];

let faceFound = document.querySelector(".face-found");

input.addEventListener("change", function() {

    const file = input.files;
    imagesArray.push(file[0]);

    var formData = new FormData();
    formData.append('image', $('input')[0].files[0]);
    $.ajax({
    method: 'POST',
    url: 'https://api.api-ninjas.com/v1/facedetect',
    headers: { 'X-Api-Key': '2wfKFbQt/17WSDvSK9026w==dUWlMiNrHFhvxPxL'},
    data: formData,
    enctype: 'multipart/form-data',
    processData: false,
    contentType: false, 
    success: function(data) {
        displayImage(file[0]);
        displayFace(file[0]);
        console.log(data);
    },
    error: function ajaxError(jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText);
    }
});


  
});

function displayImage(file){
    const image = new Image(),
      canvas = document.getElementById('canvas1'),
      ctx = canvas.getContext('2d');

        image.src = `${URL.createObjectURL(file)}" alt="image">`;
    ctx.drawImage(image0, 0,     // Place the result at 0, 0 in the canvas,
        100, 100); // With as width / height: 100 * 100 (scale)); 


    // faceFound.innerHTML = `<img src="${URL.createObjectURL(file)}" alt="image">`;
}

function displayFace(file){
    const image = new Image(),
      canvas = document.getElementById('canvas2'),
      ctx = canvas.getContext('2d');

        image.src = `${URL.createObjectURL(file)}" alt="image">`;
    ctx.drawImage(image,
        file[0].x, file[0].y,   // Start at 70/20 pixels from the left and the top of the image (crop),
        file[0].width, file[0].height,   // "Get" a `50 * 50` (w * h) area from the source image (crop),
        0, 0,     // Place the result at 0, 0 in the canvas,
        100, 100); // With as width / height: 100 * 100 (scale)


    // faceFound.innerHTML = `<img src="${URL.createObjectURL(file)}" alt="image">`;
}

function displayFace(file){

}





// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/quotes',
    
//     contentType: 'application/json',
//     success: function(data) {
//         quote.innerHTML = data[0].quote;
//         author.innerHTML = `- ${data[0].author}`;
//         style.innerHTML = `A quote about ${data[0].category}...`;
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });