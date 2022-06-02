const result = document.querySelector("#p_table");
const loading = document.querySelector("#result_loading");

function calculator() {
    result.style.display ="none";
    loading.style.display ="flex";

    setTimeout(function(){
        loading.style.display ="none";
        result.style.display ="flex";
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000/timeValue_int),10);

    },1200)
}