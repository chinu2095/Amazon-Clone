const xhr = new XMLHttpRequest();
xhr.addEventListener('load',()=>{
 console.log(xhr.response);
});
// we need to setup the request now to set it up we need to do
// 2 param to open 1. what type of msg we want to send Types = GET , POST ,PUT , DELETE
// 2. SECOND PARAM TELLS WHERE TO SEND THE PARAMETER
// URL stands for uniform resource loacator, like an address but for computers, helps locating a address online
xhr.open('GET' ,'https://supersimplebackend.dev/products/fir');
xhr.send();
// request response cycle : 1 request ,1response;

// URL path is the thing comes after the domain name

//STATUS code :
// if starts with 4,5 : means its failed   4: it is  our problem  , 5: its is backends problem
// 2 : means sucessfull response 