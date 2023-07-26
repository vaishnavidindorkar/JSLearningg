var interviewCriteria = function (
  gradScore,
  hscScore,
  sscScore,
  candidateName
) {
  var result =
    gradScore >= 70 && hscScore >= 80 && sscScore >= 90 && candidateName
      ? `: Congrats , you are eligible for TCS interview`
      : " : Unfortunately you are not eligible for TCS interview.";
  console.log(`${candidateName}  ${result} `);
};
interviewCriteria(80, 86, 90, `Vaishnavi`);
interviewCriteria(70, 65, 55, `Mohan`);
interviewCriteria(60, 79, 88, `Raj`);
