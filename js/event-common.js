// using function
function handjustFunctionClick(){
    const ClickMe = document.getElementById('Click-me');
    ClickMe.innerText = 'you want to see magic then click me';
}
// driect
document.getElementById('handel-event').addEventListener('click', function(){
    const ClickMe = document.getElementById('Click-me')
    ClickMe.innerText = 'i can do that '
})
// one more
document.getElementById('updat-name').addEventListener('click', function (){
    const nameFild = document.getElementById('input')
    const ClickMe = document.getElementById('Click-me')
    ClickMe.innerText = nameFild.value;
    nameFild.value = '';
    // console.log(nameFild.value);
})
