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
                    console.log(i)
                    // for (let i = 0; i < meaning.length; i++) {

                    output += `

                        <li class="list-group-item mb-2">
                            <div id="card-body">
                                <div class="card-text"><strong class="text-warning">Meaning: </strong>${i.definitions[0].definition}</div>
                                <div>
                                    <strong class="text-primary">POS: </strong>
                                        <div class="badge badge-warning">    
                                        ${i.partOfSpeech}
                                        </div>
                                </div>
                            </div>
                        </li>
                        `;
                        
                    // };
                });

                wordInput.value = "";
                outputArea.style.display = "";
                outputField.innerHTML = output;

            });
        
    })
})