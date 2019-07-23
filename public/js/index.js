
function chat(){
  var name=document.getElementById('form-name').value;
  window.localStorage.setItem('name',name)
  console.log(name);
  return true;
}