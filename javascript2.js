function submitForm() {

    // Get form fields

    const fname= document.getElementById('fname').value;

    const mname= document.getElementById('mname').value;

    const lname= document.getElementById('lname').value;

    const birthday = document.getElementById('bdate').value;

    const bplace = document.getElementById('bplace').value;

    const hobbies = document.getElementById('hobbies').value;

    const motto= document.getElementById('motto').value;

    const things = document.getElementById('things').value;

    const emoji = document.getElementById('emoji').value;

    

    // Print data to console

    console.log("First Name: " + fname);

    console.log("Middle Name: " + mname);

    console.log("Last Name: " + lname);

    console.log("Birthdate: " + birthday);

    console.log("Birthplace: " + bplace);

    console.log("Hobbies: " + hobbies);

    console.log("motto: " + motto);

    console.log("Things: " + things);

    console.log("Emoji: " + emoji);

    

    // Display data on the page

    const output = document.getElementById("output");

    output.value += "First Name:" +fname+ "\nMiddle Name: " + mname + "\nLast Name: " + lname+ "\nBirthdate:" + birthday + "\nBirthplace:" + bplace + "\nHobbies:" + hobbies + "\nMotto:" + motto + "\nThings I love to do:" + things + "\nFavEmoji:" + emoji;

    

    // Reset form fields

    

    // Prevent form submission

    return false;

}

