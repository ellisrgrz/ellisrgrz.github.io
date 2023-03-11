const inp_scrip = document.getElementById("inputfile")
const prnt_scrip = document.getElementById("print")
inp_scrip.addEventListener('change', function(){
    //prnt.innerHTML = inp.files[0].name
    //console.log(inp.files[0].name)
    prnt_scrip.innerHTML = "The external script works."
    console.log("The external script works")
})
