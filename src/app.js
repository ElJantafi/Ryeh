
   alert('this website still under developement is not responsive yet...');
   const products = document.getElementsByClassName("products")[0];
      const categories = document.querySelectorAll("aside .categories button");
      const priceRange = document.querySelector('input[type="range"]');
      const order1 = document.querySelector(".orderButt1");
      const order2 = document.querySelector(".orderButt2");
      const clearButt = document.querySelector("#clearButt");
      const company = document.querySelector('select[name="companies"]');
      var filtred = [] ;
      var selected ;
      clearButt.onclick = () => {
        // company.value = 'all' ;
        document.querySelector("select option").selected = true;
        categories[0].click();
      };
      categories.forEach((cat) => {
        cat.addEventListener("click", () => {
          for (let i = 0; i < categories.length; i++) {
            categories[i].classList.remove("selected");
          }
          cat.classList.add("selected");
        });
      });

      function show() {
         filtred = [] ;
        var category = document.querySelector(".selected");

        products.innerHTML = "";
        if (category.value == "all" && company.value == "all") {
          menu.forEach((el) => {
            if(el.price <= priceRange.value){
                filtred.push(el) ;
            }
           
          });
        } else if (category.value == "all" && company.value != "all") {
          // start
          menu.forEach((el) => {
            if (el.company == company.value && el.price <= priceRange.value) {
              filtred.push(el) ;
            } 
          });
          // end
        } else if (category.value != "all" && company.value == "all") {
          // start
          console.log(category.value);
          menu.forEach((el) => {
            if (el.category == category.value && el.price <= priceRange.value) {
              filtred.push(el) ;
            }
          });
          // end
        } else {
          // start
          menu.forEach((el) => {
            if (el.category == category.value && el.company == company.value && el.price <= priceRange.value) {
              console.log(category.value);
              filtred.push(el) ;
            }
          });
          // end
        }
        filtred.forEach((el) => {
          var box = document.createElement('div') ;
          box.className = 'box' ;
          box.innerHTML = `<a href="product.html">
                          <img src = ${el.image}>
                          <div class="info">
                          <h4 class="designation">${el.name}</h4>
                          <h4 class="price">$${el.price}</h4>
                          </div></a>
                                        `;
              products.appendChild(box)
        })
      }

      company.onclick = show;
      categories.forEach((butt) => {
        butt.onclick = show;
      });
      priceRange.onclick = () =>{
        console.log(document.getElementById('price')) ;
        document.getElementById('price').innerText = priceRange.value ;
        show();
      };
      order1.onclick = show;
      order2.onclick = show;
      show();
      priceRange.onchange = ()=>{
             console.log(priceRange.value) ;
      };


      const boxes = document.querySelectorAll('.box');
      boxes.forEach((el) =>{
            el.onclick = (ev)=>{
                 clickedBox = ev.currentTarget ;
                 index = Array.from(clickedBox.parentElement.children).indexOf(clickedBox)
                 console.log(index) ;
                 window.sessionStorage.setItem("selectedItem", JSON.stringify(filtred[index]));
            } ;
     }) 