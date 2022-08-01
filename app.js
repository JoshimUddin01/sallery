let add_btn = document.querySelector(".add");

add_btn.addEventListener("click", ()=>{
   let employe_name = document.querySelector("#user_name").value;
   let salary = document.querySelector("#user_sallery").value;
   
   let  regex = new RegExp(/[^0-9]/);
   if(regex.test(salary) === true) {
     let modal_click = document.querySelector(".modal_btn");
     modal_click.click();
   }

})