function fetchdata(){
fetch("https://reqres.in/api/users/")
.then(resp=> resp.json())
.then(data=>{
    console.log(data)
    const html=data.data
    .map(user=>{
        return `<tr>
        <td class="srno">${user.id}</td>
        <td  class="brand">${user.first_name}</td>
        <td class="cat">${user.last_name}</td>
        <td class="prod">${user.first_name}</td>
        <td class="mobno">${user.email}</td>
    </tr>`
    }).join("");

    document.querySelector(".tab").insertAdjacentHTML("beforeend",html);

})
}

fetchdata();

const btn=document.querySelector(".btn");
const cont=document.querySelector(".container");
const text=document.querySelector(".text")
 btn.addEventListener("click",()=>{

    cont.classList.toggle("darkmode");
// cont.style.backgroundColor="white";
// text.style.color="black";
})
