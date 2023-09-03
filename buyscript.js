document.addEventListener('DOMContentLoaded', function() {
    const buynowButton = document.getElementById('buy-now');
    
    buynowButton.addEventListener('click', function() {
        // const book = {
        //     name:"",
        //     email:"",
        //     phone:"",
        //     orderlocation:""
        //   };
          
          
          // Store the product in localStorage or a shopping cart.
          //localStorage.setItem('cartProduct', JSON.stringify(book));
      window.location.href = 'Addtocart.html';
    });


       


  });