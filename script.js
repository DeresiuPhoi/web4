document.getElementById("calculateBtn").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let price = Number(document.getElementById("startingBid").value);
    if (!name || !price) {
        alert("Please fill in both name and starting bid!");
        return;
    }

    // Education multiplier
    const education = Number(document.getElementById("education").value);
    price *= education;

    // Net worth multiplier
    const netWorth = Number(document.getElementById("netWorth").value);
    price *= netWorth;

    // Caste addition
    const caste = Number(document.getElementById("caste").value);
    price += caste;

    // Skills addition
    const skills = Array.from(document.getElementsByClassName("skills"));
    price += skills
        .filter(skill => skill.checked)
        .reduce((sum, skill) => sum + Number(skill.value), 0);

    // Age multiplier
    const age = Array.from(document.getElementsByClassName("age")).find(age => age.checked);
    if (age) price *= Number(age.value);

    // Reputation multiplier and deduction
    const reputation = Array.from(document.getElementsByClassName("reputation"));
    reputation.forEach(rep => {
        if (rep.checked) {
            const value = Number(rep.value);
            price = value >= 0 ? price * value : price + value;
        }
    });

    // Love Letter
    let loveLetter = document.getElementById("loveLetter").value;

    // Create a person object
    let person = {
        name: name,
        price: price.toFixed(2),
        letter: loveLetter
    };

    // Display result
    document.getElementById("result").innerHTML = `
        <h3>Result:</h3>
        <p>Your price for ${person.name} is $${person.price}</p>
        <p>Your Love Letter: ${person.letter}</p>
    `;
});
