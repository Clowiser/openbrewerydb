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
}

function createDive(){
    const el = document.createElement('div');
    el.setAttribute("id", "test");
    // el.innerHTML =  'Je suis un div';
    document.body.appendChild(el);
    $("#test").prepend("<p>WAAAAAAAAAAAAAAAAAANINIANAAAAAAA !!!</p>").css('background-color', 'white')
}

// $("test").css('background-color', 'white')