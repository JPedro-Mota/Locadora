document.getElementById('open_btn').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar');
    document.body.classList.toggle('open-sidebar'); 
    document.querySelector('.user').classList.toggle('open-sidebar');
    // adicionado
  })