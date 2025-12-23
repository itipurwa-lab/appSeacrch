 
 let products =[
            "WhatsApp" ,
            "Telegram" ,
            "Instragram" ,
            "Facebook"  ,
            "Snapchat" ,
            "Camera" ,
            " Calculator" ,
            "Google" ,
            "Chrome" ,
            "Email"  ,
            "Gmail"  ,
            "Calendar" ,
            "Gallery"  ,
            "Photo"  ,
            "Spotify" ,
            "YouTube" ,
            "Google Meet"  ,
            "Notepad"  ,
            "Setting"  ,
            "Message"  ,
            "Twitter"  , 
            "Google pay" ,
            "Play Store"
            
     ]
     
     
   function filterProducts(event){
       
     
     userValue = event.target.value.toLowerCase().trim() ;
  
     let matching = [] ;
     
     for(let i=0 ; i<products.length ; i++){
         product = products[i] ;
         
     if(product.toLowerCase().includes(userValue)){
         matching.push(product) ;
     }
     } 

     showProduct(matching);
    
      }
     
      
  function showProduct(items){
          
 let div = document.getElementById("products");
 
 
 if(items.length===0){
     div.innerHTML = `<p>Esa koi app nhi mil rha hai ustaad.😞😔<p/>`;
     return;
  
 }

   div.innerHTML="" ;
 for(let i=0; i<items.length; i++){
     div.innerHTML += `<p>${items[i]}<p/>`;
     
 }
  }
 

showProduct(products);

  
 
 
 
 
 
 
 
 
 
 
 