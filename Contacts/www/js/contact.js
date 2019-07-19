window.onload = function(evt) {

  function onSuccess(contacts) {
    console.log(contacts);
    let ul=document.querySelector('#contacts');
    contacts.forEach(function(contact){
      let li=document.createElement('li');
      li.innerHTML=contact.displayName+'<br/>';
      contact.phoneNumbers.forEach(function(number){
        li.innerHTML+=number.value+'<br/>';
      });
      ul.appendChild(li);
    });
  };

  function onError(contactError) {
    alert('onError!');
  };

  document.addEventListener("deviceready", function () {



    // find all contacts with 'Bob' in any name field
    var options      = new ContactFindOptions();
    // options.filter   = ;
    options.multiple = true;
    options.hasPhoneNumber = true;
    var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    navigator.contacts.find(fields, onSuccess, onError, options);
  });

  document.querySelector('#ok').addEventListener('click',function(e){
    let ul=document.querySelector('#contacts');
    ul.innerHTML='';
    let search=document.querySelector('#nom').value;
    console.log(search);
    // find all contacts with teh result of search in any name field
    var options      = new ContactFindOptions();
    options.filter   = search;
    options.multiple = true;
    options.hasPhoneNumber = true;
    var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    navigator.contacts.find(fields, onSuccess, onError, options);
  });
}
