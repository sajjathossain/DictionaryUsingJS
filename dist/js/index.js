console.log("Running Perfectly");

document.addEventListener("DOMContentLoaded", () => {
    const wordInput = document.getElementById("wordInput");
    const searchBTN = document.getElementById("searchBTN");
    const outputField = document.getElementById("output");
    const outputArea = document.getElementById("outputArea");
    const synonyms = document.getElementById("synonyms");

    outputArea.style.display = "none";

    searchBTN.addEventListener("click", () => {
        inputValue = wordInput.value;
        const searchedWord = document.getElementById("searchedWord");
        searchedWord.innerHTML = inputValue;
        const wordApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;
        let output = ''


        fetch(wordApi)
            .then((res) => res.json())
            .then((data) => {
                data[0].meanings.forEach((i) => {
                    // console.log(i)

                    output += `

                        <tr>
                            <th scope="row">${ (data[0].meanings.indexOf(i))+1 }</th>
                            <td>${ i.definitions[0].definition }</td>
                            <td>${ i.definitions[0].example }</td>
                            <td>
                                <span class="badge badge-primary p-2">    
                                    ${ i.partOfSpeech }
                                </span>
                            </td>
                        </tr>

                       `;
                        
                });


                wordInput.value = "";
                outputArea.style.display = "";
                outputField.innerHTML = output;

            });
        
    })
})