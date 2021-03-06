export const createUser = (user) => fetch("http://localhost:4000/", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
}) 
export const getUsers = () => fetch("http://localhost:4000/").then(res => res.json())
export const updateUser = (user, id) => fetch(`http://localhost:4000/${id}`, {
  method: "PUT",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
})  
export const getUser = (id) => fetch(`http://localhost:4000/${id}`).then(res => res.json())
export const deleteUser = (id) => fetch(`http://localhost:4000/${id}`, {
  method: "DELETE",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
})  