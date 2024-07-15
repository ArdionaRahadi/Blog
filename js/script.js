window.addEventListener("scroll", function () {
  let topBar = this.document.getElementById("top_bar");
    topBar.classList.toggle("sticky", window.scrollY > 100);
    });

  let menu = document.getElementById("menu");
    menu.addEventListener("click", function(){
      let listContainer = document.getElementById("list_container");
        listContainer.classList.add("list");
        });
      let closeMenu = document.getElementById("close");
        closeMenu.addEventListener("click", function(){
          let listContainer = document.getElementById("list_container");
            listContainer.classList.remove("list");
            });