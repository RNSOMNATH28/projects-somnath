const addtaskform=document.getElementById("addtaskform")
const taskscontainer=document.getElementById("taskcontainer")

function showaddtaskform(){
    addtaskform.style.display='flex'
}


function addtask(){
    const title=document.getElementById('tasktitle').value.trim()
    const desc=document.getElementById('taskdesc').value.trim()
    if(title ===''|| desc ===''){
        alert('please fill out both header and description')
        return;
    }
    const taskbox=document.createElement('div')
        taskbox.className='tasks-box'

        taskbox.innerHTML=`
         <h2>${title}</h2>
            <p>${desc}</p>
            <button class="delete-btn" onclick="deletetask(this)">delete</button>
        `
        taskscontainer.appendChild(taskbox)   

        document.getElementById('tasktitle').value='';
        document.getElementById('taskdesc').value='';

        addtaskform.style.display= 'none'
}
function deletetask(button){
    const taskbox=button.parentElement
    taskscontainer.removeChild(taskbox)
}