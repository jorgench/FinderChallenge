/*
  main script for only runs every function
*/

(function(){

    window.booksSchema;
    window.searchForm;
    window.gridManage = new gridManage();

    loadJSON(JSON_FILE, {
        call: function(_this, jsonResponse) {
            window.booksSchema = jsonResponse;
            

            window.searchForm = new searchForm(window.booksSchema, function(searchResult){

                window.gridManage.SetData(searchResult);

            });

            gridManage.SetData(window.booksSchema.data);
            gridManage.RenderGrid();

            renderAsideMenu('#listCategories', window.booksSchema.entities.categories);
            renderAsideMenu('#listLang', window.booksSchema.entities.lang);
            renderAsideMenu('#listEdition', window.booksSchema.entities.edition);

            window.searchForm.Init();
        }
    });

    responsiveButtonMenu();

})();