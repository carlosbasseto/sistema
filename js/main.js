
function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
  }
  
  function atualizarRelogio() {
    var agora = new Date();
  
    var data = agora.toLocaleDateString();
    var hora = agora.toLocaleTimeString();
  
    document.querySelector('.date').textContent = "Data: " + data;
    document.querySelector('.time').textContent = "Hora: " + hora;
  }
  
  setInterval(atualizarRelogio, 1000);