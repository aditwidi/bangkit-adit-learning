const employees = [
    {
        name: 'Fulan',
        email: 'fulan@dicoding.com',
        joinYear: 2020,
    },
];

function addEmployee(name, email, joinYear) {
    /**
     * @TODO
     * lengkapi fungsi ini agar dapat menambahkan objek employee baru
     * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
     */

    const newUser = {
        name: name,
        email: email,
        joinYear: joinYear
    };

    return employees.push(newUser);
}

const tambah = addEmployee("adit","adit.widi@gmail.com",2024);
console.log(employees);
