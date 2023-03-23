var inputs = document.getElementsByTagName('input');
for(var i = 0; i < inputs.length; i++){
  var input = inputs[i];
  input.addEventListener('focus', function(){
    var place = this.getAttribute('placeholder');
    this.setAttribute('placeholder', '');
    var blur = function(){
      this.setAttribute('placeholder', place);
    }
    this.addEventListener('blur', blur);
  });
}

const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form')
    if(mode.classList.contains('fa-moon')){
       mode.classList.remove('fa-moon'); 
       mode.classList.add('fa-sun'); 

       form.classList.add('dark');
       return;
    }
    
    mode.classList.add('fa-moon'); 
       mode.classList.remove('fa-sun'); 
       form.classList.remove('dark'); 
       

});