const button = document.getElementById("additem");
        const ul = document.getElementById("tasklist");
        const input = document.getElementById("text");
        
        
        const check = (box, cla) => {
            if(document.getElementById(box).checked) {
                document.getElementById(box).setAttribute('checked','checked');
                document.getElementById(cla).setAttribute("class","change");
            } else {
                document.getElementById(box).removeAttribute('checked')
                document.getElementById(cla).removeAttribute("class");
            }
        };

        const remove = (cla) => {
            console.log(ul.removeChild(document.getElementById(cla)));
            //ul.children;
        }

        button.addEventListener('click', () =>{
            ul.innerHTML += `<li id="id${ul.children.length}"><span>${input.value} </span>
                <input type="checkbox" id ="check${ul.children.length}" onclick ="check('check${ul.children.length}', 'id${ul.children.length}')"> 
                <button onclick ="remove('id${ul.children.length}')">Remove</button>
                </li>`;
        });