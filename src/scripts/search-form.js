function searchForm(dataSearch, callbackSearch){
    // code here

    this.dataSearch = dataSearch;
    this.callbackSearch = callbackSearch;


    this.formInput = document.querySelector('.form-input');
    this.searchButton = document.querySelector('#searchButon');

    this.arrayList = [];
    this.awesomplete;

    if (this.formInput.value.length < 2) {
        searchButon.disabled = true;
    }

    var _this = this;

    this.formInput.addEventListener('keydown', function(event) {
        if (event.keyCode == 13) {

            if (!_this.searchButton.disabled) {
                _this.SearchContent();
            }else{
                console.log('No search');
            }
            return
        }

        if (this.value.length < 2) {
            _this.searchButton.disabled = true;
        } else {
            _this.searchButton.disabled = false;
        }

        return
    }, false);

    this.formInput.addEventListener('input', function(){
        if (_this.formInput.value.length < 2) {
            _this.searchButton.disabled = true;
        } else {
            _this.searchButton.disabled = false;
        }
    }, false);


    this.searchButton.addEventListener('click', function(){
        _this.SearchContent();
    }, false);


    this.SearchContent = function(){
        console.log("/*-------Search-------*/");

        var resultSeach = [];


        _(_this.dataSearch.data).each(function(elem, key){
            
            textInput = _this.formInput.value;
            var reg = textInput.trim().replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
            var searchFilter = new RegExp(reg,"i");

            if (searchFilter.test(elem.title)) {
                resultSeach.push(elem);
            }

        });
        this.callbackSearch(resultSeach);

    }

    this.Init = function(){
        var _this = this;

        this.dataSearch.data.forEach(function(item){
            _this.arrayList.push(item.title);
        });

        _this.awesomeplete = new Awesomplete(_this.formInput, {
                minChars: 2,
                list: _this.arrayList,
                maxItems: 7
            });
    }

}
