const student =[
    {
        id: 1,
        name: 'provas',
        age: 23,
        roll: "07",
        isMale: true
    },

    {
        id: 2,
        name: 'rojario',
        age: 26,
        roll: "03",
        gender: "male"
    }
]
const studentJson = JSON.stringify(student);
const studentJS = JSON.parse(studentJson);
console.log(student);
