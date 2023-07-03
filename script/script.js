var a=document.getElementById('quality');
a.addEventListener('change',() => {
    if (a.value=="144p")
    {
        document.getElementById('image').src='./assets/craiyon_152750_Pink_heart_under_white_magnifying_glass_icon-removebg-preview__1_-removebg-preview.png'
    }
    else if(a.value=="360p")
    {
        document.getElementById('image').src='./assets/love-g24168e4a0_1280-removebg-preview.png'
    }
    else if(a.value=="480p")
    {
        document.getElementById('image').src='./assets/WhatsApp_Image_2023-07-03_at_12.03.29-removebg-preview.png'
    }
    else if(a.value=="720p")
    {
        document.getElementById('image').src='./assets/craiyon_153030_ilustracion_anatomica_corazon-removebg-preview.png'
    }
    else if(a.value=="1080p")
    {
        document.getElementById('image').src='./assets/WhatsApp_Image_2023-07-03_at_16.33.49-removebg-preview.png'
    }

})

// var select = document.getElementById('quality');

// select.addEventListener('change', () => {
//   if(select.value=="144p")
//   {
//     alert('working');
//   }
// })

// document.querySelector('#quality').onchange= check;

// function check(e){
//     if(e.value=="144p")
//         alert('working');
// }