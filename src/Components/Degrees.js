const degrees =[
    {title:"Master of Science in Information", requirements:["HCI/UX", "Foundations of Data Science", "Front End Development"], mustHave:"HCI/UX"},
    {title:"Master of Science in Computer Science", requirements:["Computer Science Foundations", "Software Architecture", "Advanced Computer Science"], mustHave:"Advanced Computer Science"},
    {title:"Master of Science in Cyber Security", requirements:["Foundations of Data Science", "Software Architecture", "Cybersecurity"], mustHave:"Cybersecurity"},
    {title:"Master of Science in Technology Leadership", requirements:["Information Systems", "Technology Leadership", "Computer Science Foundations"], mustHave:"Technology Leadership"},
    {title:"Master of Science in Data Science", requirements:["Computer Science Foundations", "Foundations of Data Science", "AI/Machine Learning", "HCI/UX"], mustHave:"Foundations of Data Science"},
    {title:"Master of Science in Information Systems", requirements:["Information Systems", "Software Architecture", "HCI/UX"], mustHave:"Information Systems"},
    {title:"Master of Science in MLAI", requirements:["Artificial Intelligence/Machine Learning", "Computer Science Foundations", "Foundations of Data Science"], mustHave:"Artificial Intelligence/Machine Learning"},
]

const getDegrees = (cert1, cert2, cert3) =>{
    let degreesObtained = []
    for(var i=0; i<degrees.length; i++){
        if(degrees[i].requirements.includes(cert1) || degrees[i].requirements.includes(cert2) || degrees[i].requirements.includes(cert3)){
            if(!degreesObtained.includes(degrees[i].title) && (cert1===degrees[i].mustHave || cert2===degrees[i].mustHave || cert3===degrees[i].mustHave))
            degreesObtained.push(degrees[i].title)
        }
    }
    return degreesObtained
}



export default getDegrees;

