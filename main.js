//var connection  = require("./server");

window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-task-input")
    // # = id of an element
    // . = class used by element(s)
    //  = tagname(s)
    const list_el = document.querySelector("#tasks")
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;

        //user input invalid
        if (!task) {
            alert("Please fill out the task");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task")

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text")
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        //button for edit
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        //button for delete
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";

        // (Tasks) save & edit function on click
        task_edit_el.addEventListener("click", () => {
            if (task_edit_el.innerText.toLowerCase() == "edit"){
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
                //perform edit
                console.log("edit")
            }
            else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
                //perform save
                console.log("save")
                // id="new-task-input" 
                console.log(task)
                savesql = "INSERT INTO tasks (task_name) VALUES ('" +
                task + "');";
                // places value into sql
                console.log(savesql)
                alert(savesql)
                // connection.query(savesql, (err,rows) => {
                //     if(err) throw err;
                // })
                // connection.query("SELECT * FROM tasks", (err,rows) => {
                //     if(err) throw err;
                //     console.log('Data received from Db:');
                //     console.log(rows);
                // })
            }
        });

        // (Tasks) delete function on click
        task_delete_el.addEventListener("click", () => {
            list_el.removeChild(task_el);
            //perform delete
            console.log("delete")
        });
    });
});