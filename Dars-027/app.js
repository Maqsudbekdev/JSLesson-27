const Box = document.querySelector(".box")
const Input = document.querySelector("input")
const H1 = document.querySelector("h1")

window.onload = (e) => {
   const GetItem = localStorage.getItem("ismingiz")
   
   console.log("Get >", GetItem);
   if (GetItem === ""|| !GetItem) {
      setTimeout(() => {
         Box.style.transform = "translateY(0)"
      }, 2000);
   } else {
      H1.innerHTML = GetItem
   }

}

const deleteItem = () => {
    // localStorage.removeItem("ismingiz")
    localStorage.clear()
    window.location.reload()
    H1.innerHTML = " "
}

const Close = () => {
   Box.style.transform = "translateY(-400px)"

   let inputValue = Input.value

   localStorage.setItem("ismingiz", inputValue)

   const GetStorage = () => {
      let LocalValue = localStorage.getItem("ismingiz")
      console.log(LocalValue);
      H1.innerHTML = LocalValue
   }
   GetStorage()
   // console.log(inputValue);
}