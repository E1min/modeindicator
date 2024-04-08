// btn.addEventListener("click",()=>{
//   let newUser = {
//     "login":login.value,
//     "email":email.value,
//     "password": pass.value,
//   };

//   user.push(newUser);
//   console.log(user);
//   showuserpassword(user,"")
 
// })

// console.log(user);
// function showuserpassword(user,b) {
//  user.forEach(item => {
//   if (item.login.toUpperCase()===b.toUpperCase()) {
//     console.log(item.password);
//   }else{
//     return "tapilmadi"
//   }
//  });
// }


let indicator=document.querySelector(".indicator")

indicator.addEventListener("click",()=>{
    indicator.classList.toggle("active")
    document.body.classList.toggle("dark")
})