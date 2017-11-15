function gridManage(){

    this.gridContent = document.querySelector('#gridContent');
    this.total = 9

    this.init = 0;
    this.top = false;

    this.afterButton = document.querySelector('#afterContent');
    this.beforeButton = document.querySelector('#beforeContent');

    this.data;

    _this = this;

    this.afterButton.addEventListener('click', function(){
        
        if (_this.init > 0) {
            _this.init -= _this.total;
            _this.RenderGrid(_this.init);

            _this.updateStateButtons();
        }

    },false);

    this.beforeButton.addEventListener('click', function(){

        if (!_this.top) {
            _this.init += _this.total;
            _this.RenderGrid(_this.init);

            _this.updateStateButtons();
        }
    });

    this.updateStateButtons = function() {

        if (this.init == 0) {
            this.afterButton.disabled = true;
        } else {
            this.afterButton.disabled = false;
        }

        if (this.top) {
            this.beforeButton.disabled = true;   
        } else {
            this.beforeButton.disabled = false;
        }

        console.log('Estado de los boton before: ', this.beforeButton.disabled);
        console.log('Estado de los boton after: ', this.afterButton.disabled);

    }


    this.SetData = function(data) { console.log(data);
        this.data = data;
        this.init = 0;
        this.RenderGrid();
    }


    this.RenderGrid = function(init = 0){

        if (this.data === void 0 || this.data.lenght == 0) {
            console.log('data no definido')
            return
        }

        gridContent.innerHTML = '';

        var endArray = this.init + this.total;
        var endFor = (this.data.length < endArray) ? this.data.length : endArray;

        this.top = ( (init + this.total) <= this.data.length) ? false: true;

        for (var i = init; i < endFor; i++) {
            gridContent.appendChild(this.GridElement(this.data[i]));
        }

    }

    this.GridElement = function(itemGrid) {
        var content = '<h3 class="item-title">' + itemGrid.title + '</h3><p class="item-body">' + itemGrid.teaser + '</p>';
        var picture = '<picture class="item-picture"><img src="' + itemGrid.image + '" alt="' + itemGrid.title + '"/></picture>';
        var itemCreated = document.createElement('li');
        itemCreated.className = 'grid-item';
        itemCreated.innerHTML = '<div class="item-content">' + picture + content + '</div>';

        return itemCreated;
    }

    this.updateStateButtons();

}