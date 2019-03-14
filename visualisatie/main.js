

function fillForm() {
    document.getElementById("formcontent").innerHTML = parseFHIR(FHIR, 0);
}



function handleSubmit() {
    document.getElementById("output").innerHTML = FormData(document.querySelector('mainform'));
}


window.addEventListener('load', (event) => {
    fillForm()
})