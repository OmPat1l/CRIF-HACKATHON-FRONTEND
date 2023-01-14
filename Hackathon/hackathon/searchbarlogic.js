// var result;
// axios.defaults.proxy = {
//     host: "http://127.0.0.1:8000",
//     protocol: "http",
// };
// var isloading = false;

let global_result;

async function makeGetRequest(path) {
    await axios.get(path).then(
        (response) => {
            global_result = response.data;
        },
        (error) => {
            console.log(error);
        }
    );
}


var dataInput;
async function clickHandlerSearch() {
    let data12 = document.querySelector('#search').value;
    // console.log(data12);
    dataInput = data12
    isloading = true;
    // while (isloading) {
    //     document.querySelector('.load').textContent = "loading..."

    // }
    makeGetRequest(`http://127.0.0.1:8000/articles?name=${dataInput}`).then(() => {
        console.log(global_result);
        if (global_result.detail && global_result.detail[0]) {
            console.log(global_result.detail[0].title);
        }
    });
    // isloading = false;


}

document.querySelector('.go-icon').addEventListener('click', clickHandlerSearch);


// document.getElementsByClassName('search-form').addEventListener('submit', function handleSubmit(event) {
//     event.preventDefault();

//     // 👇️ Send data to the server here

//     // 👇️ Reset the form here
//     form.reset()
// })
