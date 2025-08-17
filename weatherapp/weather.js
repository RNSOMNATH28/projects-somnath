const display = document.getElementById('display')

function appendvalue(value){
    display.value += value
}

function cleardisplay(){
    display.value = ''
}

function calculateresult(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        alert("Invalid Expression")
        cleardisplay()
    }
}