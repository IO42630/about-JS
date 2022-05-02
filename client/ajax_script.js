function loadDocument() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("ajax_content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "http://localhost:3000/one", true);
    console.log('hello')
    xhttp.send();
}