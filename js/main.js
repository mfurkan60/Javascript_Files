let xmlContent = '';
//fetch API kullanarak  verilere erişmek. Ajaxın yerine kullanılabilecek bir yöntem. Objelereden oluşuyor.
let tableBooks = document.getElementById('books');

fetch('files/data.xml').then((response) => {
    response.text().then((xml) => {
        xmlContent = xml;
        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
        let books = xmlDOM.querySelectorAll('CD');
        books.forEach(bookXmlNode => {
            let row = document.createElement('tr');

            //verileri çekme
            let td = document.createElement('td');
            td.innerText = bookXmlNode.children[0].innerHTML;
            row.appendChild(td);

            td = document.createElement('td');
            td.innerText = bookXmlNode.children[1].innerHTML;
            row.appendChild(td);

            td = document.createElement('td');
            td.innerText = bookXmlNode.children[2].innerHTML;
            row.appendChild(td);

            td = document.createElement('td');
            td.innerText = bookXmlNode.children[3].innerHTML;
            row.appendChild(td);

            td = document.createElement('td');
            td.innerText = bookXmlNode.children[4].innerHTML;
            row.appendChild(td);
            td = document.createElement('td');
            td.innerText = bookXmlNode.children[5].innerHTML;
            row.appendChild(td);




            //gerkeli?
            tableBooks.children[1].appendChild(row);
        });




    });
});




// Json File
fetch('https://api.github.com/users').then((response) => {
return response.json().then((users) => {
    let output = '<ul class="list-group text-center">';
    users.forEach(function (user) {
        output += `<li class="list-group-item"> User: ${user.login} </li>`
    })
    output += "</ul>";
    document.getElementById("json").innerHTML += output;
})

});






//text (TXT) File
fetch('files/data.txt').then((response) => {
    return response.text().then((response) => {
        document.getElementById("txt").innerHTML = response;
    });
});
