const date = new Date();
const button = document.getElementById("additem");
const ul = document.getElementById("tasklist");
const input = document.getElementById("text");
        
        
        const check = (box, id, cla) => {
            if(document.getElementById(box).checked) {
                document.getElementById(box).setAttribute('checked','checked');

                document.getElementById(cla).setAttribute("class","textChange");

                document.getElementById(id).setAttribute("class","change");
            } else {
                document.getElementById(box).removeAttribute('checked')
                document.getElementById(id).removeAttribute("class");
                document.getElementById(cla).removeAttribute("class");
            }
        };

        const remove = (cla) => {
            console.log(ul.removeChild(document.getElementById(cla)));
            //ul.children;
        }

        button.addEventListener('click', () =>{
            ul.innerHTML += `<li id="id${ul.children.length}">
            <div>
            <span id="class${ul.children.length}">${input.value}
            </span>
            <span class="date">${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}</span>
            </div>
            <input type="checkbox" id ="check${ul.children.length}" onclick ="check('check${ul.children.length}', 'id${ul.children.length}', 'class${ul.children.length}')">
            <button onclick ="remove('id${ul.children.length}')">Remove</button>
            </li>`;
        });