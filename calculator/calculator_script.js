function answers(){
    const exp = document.getElementById('expression').value
    console.log(typeof(exp))
    var ans = eval(exp)
    document.getElementById("answer").value = ans;
}

function reset(){
    document.getElementById("answer").value = '';
    document.getElementById("expression").value = '';
}