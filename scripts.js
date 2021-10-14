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
    el.innerHTML =  'Je suis un div';
    document.body.appendChild(el);
}