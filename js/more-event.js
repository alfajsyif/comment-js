document.getElementById('delet-btn').addEventListener('click', function(){
    document.getElementById('secret-thing').style.display = 'none';
})
// focuse
document.getElementById('delete-confirm').addEventListener('focus', function(){
    document.body.style.backgroundColor = 'red';
})
// blur
document.getElementById('delete-confirm').addEventListener('blur', function(){
    document.body.style.backgroundColor = 'white';
})
// keydown
document.getElementById('delete-confirm').addEventListener('keydown', function(){
  const deleteFilde = document.getElementById('delete-confirm');
  console.log(deleteFilde.value);
})
// kyeup
document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const deleteBtn = document.getElementById('delet-btn');
 if (event.target.value== 'delete'){
     document.getElementById('delet-btn').removeAttribute('disabled');
 }
 else{
   deleteBtn.setAttribute('disabled', true);
 }
})
// change
document.getElementById('delete-confirm').addEventListener('change', function(){
  const deleteFilde = document.getElementById('delete-confirm');
  console.log(deleteFilde.value);
})