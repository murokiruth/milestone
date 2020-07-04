function openReviewForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeReviewForm() {
    document.getElementById("myForm").style.display = "none";
  }




let lawyerName = "Lucas VanHoy";
let reason =". Lucas is a founding partner. He has broad based commercial and complex litigation practice experience and also business & corpoarate law.";
let year = 2002;
let mySentence = lawyerName + " has been on our team since " + year + reason;


let lawyerName2 = "Linda Richards";
let reason2 =". Linda is a founding partner. She has over 30 years experience in areas of labor relations, employment law and bankruptcy.";
let mySentence2 = lawyerName2 + " has been on our team since " + year + reason2;

let lawyerName3 = "Aubrey McKinney"
let reason3 = ". Aubrey specializess in Family Law. She has handled many complex family law matters related to divorce, child custody, mediation, wills & probate etc. "
let year3 = 2008;
let mySentence3 = lawyerName3 + " has been on our team since " + year3 + reason3;

let lawyerName4 = "Jeremy Osha";
let reason4 =". Jeremy is a highly skilled attorney specializing in cases involving personal injury, workers compensation. He has over 20years of experience.";
let mySentence4 = lawyerName4 + " has been on our team since " + year3 + reason4;


document.getElementById('name').textContent = lawyerName;
document.getElementById('sentence').textContent = mySentence;

document.getElementById('name2').textContent = lawyerName2;
document.getElementById('sentence2').textContent = mySentence2;

document.getElementById('name3').textContent = lawyerName3;
document.getElementById('sentence3').textContent = mySentence3;

document.getElementById('name4').textContent = lawyerName4;
document.getElementById('sentence4').textContent = mySentence4;