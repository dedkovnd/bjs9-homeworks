 document.querySelectorAll(".tab").forEach(elem=> {
     elem.addEventListener("click", e=> {
         if(!elem.classList.contains(".tab_active")) {
             //веронятно здесь могло бы быть решение через toggle, но если контент и вкладки не привязаны друг к другу,
             //то какая должна быть логика?
         }
     })
 })

