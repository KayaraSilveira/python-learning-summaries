const pages = ['1 Informações Gerais', '2 Built in Functions', '3 Métodos de Strings'];

function listPages(currentPage) {
    var left = true;

    pages.forEach(function (page) {

        if (page != currentPage) {

            var i = document.createElement('i');
            i.classList.add("fas");
            i.classList.add("fa-link");

            var link = '/' + page.replaceAll(" ", "-") + '.html';

            var a = document.createElement('a');
            a.appendChild(i);
            a.setAttribute("href", link);
            a.setAttribute("target", "_blank");
            var text = document.createTextNode(page);
            a.appendChild(text);
            
            if(left) {
                document.getElementById("page-list-left").appendChild(a);
                left = false;
            }
            else {
                document.getElementById("page-list-right").appendChild(a);
                left = true;
            }
        }

    });
}