var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-links"); 
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tabs"); 
  }

  event.currentTarget.classList.add("active-links"); 
  document.getElementById(tabname).classList.add("active-tabs"); 
}
