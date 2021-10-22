let value = document.getElementById('input');

function  display(params) {
    value.value +=params
    
}

function  power(params) {
    value.value = (value.value)**2
    
}

function root(){
    value.value = (value.value)**.5
}

function  floor(params) {
    value.value = 1/value.value
    
}

function ceil_value(params) {
    value.value = Math.ceil(value.value)
    
}

function  calculate() {

  try{
      value.value = eval(value.value)


  }
  catch(err){
      alert('invalid')
  }
    
}

function clear1() {
    value.value =""
    
}
function  del(params) {
    value.value = value.value.slice(0,-1)
    
}
  
