var dataString = {
    "twitter": [
        "firm",
        "unpredictable",
        "Other",
        "alleged",
        "fake"
    ]
}
var name12;
for (item in dataString) {
    name12 = item;


}
document.querySelector('.tagsner').innerHTML = "";
for (let i = 0; i < dataString[`${name12}`].length; i++) {

    document.querySelector('.tagsner').innerHTML += `
        <li class="tagelement">${dataString[`${name12}`][i]}</li>
 
      
`





}
