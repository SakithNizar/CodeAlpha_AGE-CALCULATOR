function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    age -= (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) ? 1 : 0;

    document.getElementById('result').innerText = 
        isNaN(age) ? 'Please fill in all fields with valid values.' : 'Your age is ' + age + ' years.';
}
