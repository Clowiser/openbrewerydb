function ready(callback) {
    if (document.readyState != 'loading'){
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
    main();
  }

  function main(){
   createDive();
   css();
}

function createDive(){
    const el = document.createElement('div');
    el.setAttribute("id", "test");
    // el.innerHTML =  'Je suis un div';
    document.body.appendChild(el);
    $("#test").prepend("<p id='test1'>WAAAAAAAAAAAAAAAAAANINIANAAAAAAA !!!</p>");
    $("#test1").after("<p id='test2'>Bananana !!</p>")

}

// $("test").css('background-color', 'white')

function css() {
    $("#test1").css('background-color', 'white');
    $("#test2").css('background-color', 'aqua');
}