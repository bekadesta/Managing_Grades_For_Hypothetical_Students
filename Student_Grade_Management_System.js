console.log("hey student management system is running")

const resultsSection = document.querySelector('#results')
const gradeForm = document.querySelector('#grade-form')
const studentNameInput = document.querySelector('#student-name')
const dsaInput = document.querySelector('#DSA')
const dbInput = document.querySelector('#DB')
const calculusInput = document.querySelector('#Calculus')
const psychInput = document.querySelector('#Psychology')



function isValidMark(mark) {
    return Number.isFinite(mark) && mark >= 0 && mark <= 100;
}

function calculateAverage(dsa,db,calculus,psych){
    const total = dsa + db + calculus + psych
    const average = total / 4;

    return average  
}

function determineGrade(average) {
    if(average>=90){
        return 'A'
    }else if(average>=80){
        return 'B'
    }else if(average>=70){
        return 'C'
    }else if(average >=60){
        return 'D'
    }else {
        return 'Girl its an F'
    }
}

function displayResults(studentName,dsa,db,calculus,psych,average,letterGrade){
    resultsSection.replaceChildren();


    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = (`Student Name: ${studentName}`);

    const dsaParagraph = document.createElement('p');
    dsaParagraph.textContent = (`DSA Results: ${dsa}`);

    const dbParagraph = document.createElement('p');
    dbParagraph.textContent= (`DB Results: ${db}`);

    const calculusParagraph = document.createElement('p');
    calculusParagraph.textContent= (`Calculus Results: ${calculus}`);

    const psychParagraph = document.createElement('p');
    psychParagraph.textContent = (`Psychology Results: ${psych}`);

    const averageParagraph = document.createElement('p');
    averageParagraph.textContent = ( `Your Average: ${average}`);

    const letterGradeParagraph = document.createElement('p');
    letterGradeParagraph.textContent = ( `Your Average: ${letterGrade}`);

    resultsSection.append(nameParagraph , dsaParagraph , dbParagraph, calculusParagraph, psychParagraph, averageParagraph, letterGradeParagraph )

}

function handleSubmit(event) {
    event.preventDefault();
    
    const studentName = studentNameInput.value.trim();
    const dsa = Number(dsaInput.value);
    const db = Number(dbInput.value);
    const calculus = Number(calculusInput.value);
    const psych = Number(psychInput.value);

    const average = calculateAverage(dsa,db,calculus,psych);
    const letterGrade = determineGrade(average); 
    
    displayResults(studentName, dsa, db, calculus, psych, average, letterGrade)


    console.log(studentName)
    console.log(typeof dsa);
    console.log(db);
    console.log(calculus);
    console.log(psych);
    console.log("Average:", average);
    console.log("Your letter grade is, drum roll please🥁:", letterGrade);
}

gradeForm.addEventListener("submit", handleSubmit);

 console.log('The average is', calculateAverage(50,90,80,95))