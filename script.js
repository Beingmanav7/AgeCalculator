function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const birthdate = new Date(birthdateInput.value);
    const now = new Date();

    if (isNaN(birthdate)) {
        document.getElementById('result').textContent = 'Please enter a valid date.';
        return;
    }

    const ageInMilliseconds = now - birthdate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    const age = Math.floor(ageInYears);

    document.getElementById('result').textContent = `Your age is ${age} years.`;
}
