document.addEventListener("DOMContentLoaded", function(){

    const allButtons=document.querySelectorAll('.searchBtn');
    const searchBar=document.querySelectorAll('.searchBar');
    const searchInput=document.querySelectorAll('.searchBar');
    const searchClose=document.querySelectorAll('.searchBar');

    for(var i=0; i<allButtons.length; i++) {
  allButtons[i].addEventListener('click', function(){
  searchBar.style.visibility='visible';
  searchBar.classList.add('open');
  this.setAttribute('aria-expanded', 'true');
  searchInput.focus();
  });

}

searchClose.addEventListener('click', function(){
    searchBar.style.visibility='visible';
    searchBar.classList.add('open');
    this.setAttribute('aria-expanded', 'flase');

    })
});