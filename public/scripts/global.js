/*
  constants and global functions
*/

var JSON_FILE = '/books-schema.json';

/*
 @method loadJSON
 source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/
var loadJSON = function(url, callback){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", url, true);
    xobj.onreadystatechange = function(responseText){
        if(xobj.readyState == 4 && xobj.status == "200"){
            var content = JSON.parse(xobj.responseText);
            callback.call(this, content);
        }
    };
    xobj.send(null);
};

var renderAsideMenu = function(elementSelector, data) { 
    
    var elementParent = document.querySelector(elementSelector);
    elementParent.innerHTML = '';

    var allOption = document.createElement('li');
    allOption.innerHTML = '<a href="#">Todos</a>';

    elementParent.appendChild(allOption);

    _(data[0]).each(function(elem, key){
        var newOption = document.createElement('li');
        newOption.innerHTML = '<a href="' + key + '">' + elem.label + '</a>'
        elementParent.appendChild(newOption)
    });

}

var responsiveButtonMenu = function() {

    var btnOpen = document.querySelector('#responsiveButton');
    var aside = document.querySelector('#aside');

    btnOpen.addEventListener('click', function(){

        aside.className ='filters filter-close';


    } ,false);

    var btnClose = document.querySelector('#close-menu');
    btnClose.addEventListener('click', function(){
        aside.className ='filters';
    }, false);

}