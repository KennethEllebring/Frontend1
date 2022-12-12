fetch("data.json").then(function (response){
    return response.json();
})
    .then(function (data){
        let place = document.querySelector("#data-output")
        let out_data = "";
        for(let data_value of data){
            out_data += `
            <tr>
            <td>${data_value.firstname}</td>
            <td>${data_value.lastname}</td>
            <td>${data_value.birthYear}</td>
            <td>${data_value.discord}</td>
            <td>${data_value.github}</td>
            <td>${data_value.personalityType}</td>
            <td>${data_value.zodiac.name}</td>
            <td>${data_value.zodiac.element}</td>
            <td>${data_value.zodiac.stone}</td>
            <td>${data_value.zodiac.symbol}</td>
            </tr>
            `;

        }
        place.innerHTML = out_data;
    });

