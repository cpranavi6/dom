const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Catching all the values
    let firstName = document.querySelector(".firstName").value;
    let lname = document.querySelector(".lastName").value;
    let address = document.querySelector(".address").value;
    let pin = document.querySelector(".pin").value;

    let radio = document.querySelectorAll(".gender");
    let gender = "";
    radio.forEach((ele) => {
        if (ele.checked) {
            gender += ele.value;
        }
    });
    console.log(gender);

    let checkbox = document.querySelectorAll(".foods");
    let foodItems = [];
    checkbox.forEach((ele) => {
        if (ele.checked) {
            foodItems.push(ele.value);
        }
    });
    console.log(foodItems);

    let state = document.querySelector("#state").value;
    let country = document.querySelector("#country").value;

    if (
        firstName &&
        lname &&
        address &&
        pin &&
        gender &&
        state &&
        country != ""
    ) {
        if (foodItems != "" && foodItems.length > 1) {
            // Appending to the table

            let tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${firstName}</td>
                <td>${lname}</td>
                <td>${address}</td>
                <td>${pin}</td>
                <td>${gender}</td>
                <td>${foodItems}</td>
                <td>${state}</td>
                <td>${country}</td>
            `;
            document.querySelector("tbody").append(tr);

            // Resetting the error message
            document.querySelector(".firstName").value = "";
            document.querySelector(".lastName").value = "";
            document.querySelector(".address").value = "";
            document.querySelector(".pin").value = "";
            document.querySelector("#state").value = "";
            document.querySelector("#country").value = "";
            let temp1 = document.querySelectorAll(".foods");
            temp1.forEach((ele) => (ele.checked = false));
            let temp2 = document.querySelectorAll(".gender");
            temp2.forEach((ele) => (ele.checked = false));
            let error = document.getElementById("error");
            error.innerHTML = "";
        } else {
            let error = document.getElementById("error");
            error.innerHTML = "Select minimum 2 Food Items";
            console.error("Select minimum 2 Food Items");
        }
    } else {
        let error = document.getElementById("error");
        error.innerHTML = "Fill all fields";
        console.error("Fill all fields");
    }
});
