function dataFetch(){
    fetch(`https://next.json-generator.com/api/json/get/VkBw8XP2d`)
    .then(response => response.json())
    .then(data => orders(data))
}


function orders(data){
    // 1
    const filtered1 = data.filter(employee => employee.company == 'Amazon' && employee.country == 'Georgia');
    const avgSalary1 = filtered1.map(employee => employee.salary).reduce((acum,empl) => acum + empl)/filtered1.length;
    console.log('1: ',avgSalary1)

    // 2
    console.log('2: ')
    const filtered2 = data.filter(employee => employee.company == "FaceBook" && employee.department == 'IT');
    filtered2.forEach(element => {
        console.log(element)
    });

    // 3
    const filtered3 = data.filter(employee => employee.country == "India" && employee.department == 'HR' && employee.salary > 500000 );
    console.log('3: ',filtered3);

    // 4
    const filtered4 = data.filter(employee => employee.company == 'Google' && employee.country == "UK" && employee.department == 'Sales');
    const mapped4 =  filtered4.map(employee => ({email: employee.email, firstname: employee.name.first, dob: employee.dob}))
    console.log('4: ',mapped4);

    // 5
    const filtered5 = data.filter(employee => (employee.company == "Google" || employee.company == 'Apple') && parseInt(employee.dob.slice(11,16)) > 1980 );
    const highestSalary = filtered5.map(employee => employee.salary).sort()[0];
    const highest = filtered5.filter(employee => employee.salary == highestSalary)
    console.log('5: ', highest);

    // 6
    const allAvgAge = data.map(employee => 2020 - parseInt(employee.dob.slice(11,16))).reduce((acum,empl) => acum + empl)/data.length;
    const googlePeople = data.filter(employee => (employee.company == "Google"));
    const GoogleAvg = googlePeople.map(employee => 2020 - parseInt(employee.dob.slice(11,16))).reduce((acum,empl) => acum + empl)/googlePeople.length;
    if(allAvgAge < GoogleAvg){
        console.log('6:',1);
    } else {
        console.log('6:',2)
    }

    // 7
    const filtered7 = data.filter(employee => employee.name).map(employee => employee.name).sort();
    console.log('7: ',filtered7)

    // 8
    const filtered8 =  data.filter(employee => (employee.company == "Google") && employee.salary > 600000 && parseInt(employee.dob.slice(11,16)) > 1990);
    console.log('8: ',filtered8);

    // 9
    const filtered9 =  data.filter(employee => (employee.company == "Apple") && employee.country == 'USA').map(employee => employee.salary).reduce((acum,empl) => acum + empl);
    console.log('9: ', filtered9)

    // 10
    const filtered10 = data.filter(employee => parseInt(employee.dob.slice(16,18)) > 0 && parseInt(employee.dob.slice(16,18)) < 12)
    console.log('10: ',filtered10);
}

async function getData(){
    const response = await dataFetch();
}

getData();
