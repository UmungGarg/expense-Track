function q(event){
    event.preventDefault()
    const fname = event.target.fname.value
    const emale = event.target.email.value
    const fon = event.target.phone.value

    const obj = {
        fname,
        emale,
        fon
    } 

    axios.post("http://localhost:4100/expense/add-exp", obj)
     .then((response)=> {
          showuseronscreen(response.data.newUserDetail);            
           console.log(response)
        })
    .catch((err)=> {
        document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong"
        console.log(err)
        })  

    // localStorage.setItem(obj.lname,JSON.stringify(obj))
    // showuseronscreen (obj)

}

window.addEventListener("DOMContentLoaded", () => {
    const products = axios.get('http://localhost:4100/expense/add-exp')
    .then((response)=>{
        console.log(response)

        for(var i=0; i<response.data.length; i++){
            showuseronscreen(response.data[i])
        }
    })
    .catch((error) => {
        console.log(error)
    })
} )

function deleteUser(userId){
    axios.delete(`http://localhost:4100/expense/delete-exp/${userId}`)
    .then((response) => {
        // removeUserFromScreen(userId)
        console.log(response);
    })
    .catch((err) =>{    
        console.log(err)
    } )
}

function editUser(id){
    axios.post(`http://localhost:4100/expense/edit-exp${userId}`)
    .then((response)=> {
        showuseronscreen (response.data)
        console.log(response)
    })
    .catch((err)=> {
        document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong"
        console.log(err)
    })  
}

function showuseronscreen (obj){
    const parentelem = document.getElementById("ulul")
    const childelem = document.createElement("li")
    childelem.textContent = obj.expAmount + ' - ' + obj.description+' - ' + obj.category

    const deletebutton = document.createElement("input")
    deletebutton.type = "button"
    deletebutton.value = "Delete Expense"

    deletebutton.onclick = () => {
        deleteUser(obj.id);
        parentelem.removeChild(childelem)
    }


    const editbutton = document.createElement("input")
    editbutton.type ="button"
    editbutton.value = "Edit Expense"

    editbutton.onclick = () => {
        parentelem.removeChild(childelem)
        document.getElementById("fname").value = obj.expAmount
        document.getElementById("email").value = obj.description
        document.getElementById("phone").value = obj.category
        editUser(obj.id);
    }
    childelem.appendChild(deletebutton)
    childelem.appendChild(editbutton)

    parentelem.appendChild(childelem)
} 



