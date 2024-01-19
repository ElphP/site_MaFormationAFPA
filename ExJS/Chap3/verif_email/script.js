"use strict"

let insert = document.getElementById("email");

insert.addEventListener("keydown", ()=> {
    
    if (insert.value.includes("@") && insert.value.includes(".")) {
         
        if (insert.value.indexOf("@")<insert.value.indexOf(".")){
                insert.classList =" border border-3 border-success";
        }
        else  {
            insert.classList = "border border-3 border-danger";
        } 
    }
    else {
        insert.classList = "border border-3 border-danger";
    }
})