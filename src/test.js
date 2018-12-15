var sidebar;

function hideSidebar(){
  sidebar = document.querySelector('aside');
  
  if(sidebar.classList.contains('hide')){
    sidebar.classList.remove('hide');
    return;
  }
  
  sidebar.classList.add('hide');
}