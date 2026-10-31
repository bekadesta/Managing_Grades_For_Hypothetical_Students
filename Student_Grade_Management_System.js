console.log("hey student management system is running")


const gradeForm = document.querySelector('#grade-form')
const studentNameInput = document.querySelector('#student-name')
const dsaInput = document.querySelector('#DSA')
const dbInput = document.querySelector('#DB')
const calculusInput = document.querySelector('#Calculus')
const psychInput = document.querySelector('#Psychology')


function handleSubmit(event) {
    event.preventDefault();
    
    const studentName = studentNameInput.value;
    const dsa = dsaInput.value;
    const db = dbInput.value;
    const calculus = calculusInput.value;
    const psych = psychInput.value;

    console.log(studentName)
    console.log(dsa);
    console.log(db);
    console.log(calculus);
    console.log(psych);
}

gradeForm.addEventListener("submit", handleSubmit);