const apiKey = '477ba0b1bfba46218f655c47a38e2cb9';

document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const refernceValue = document.getElementById('startName').value;
    const adjectiveValue = document.getElementById('adjectiveName').value;

    generateBrandName(refernceValue,adjectiveValue, apiKey);
});
  

const generateBrandName = async (startingWord, adjective, apiKey) => {
    const domEntry = document.querySelector('.output__box');
    const errorEntry = document.querySelector('.card__output');
    
    domEntry.innerText = "";
   const url = `https://randommer.io/api/Name/BrandName?startingWords=${startingWord}`;  
    const url_adj = `https://api.datamuse.com/words?rel_jjb=${adjective}`;
    try {
        const response_adj=  await axios.get(url_adj);

        const response = await axios.post(url, {}, {
            headers: {
                'X-Api-Key': apiKey
            }
        });
        errorEntry.style.display = "block";
        for(let i = 1; i < 6 ;i++){
            const TeamName = document.createElement("li");
            TeamName.classList.add("card__output--list");
            TeamName.innerText = (response_adj.data[i].word +" " +response.data[i]).toUpperCase() ;
            domEntry.appendChild(TeamName);
        }
    } catch (error) {
        errorEntry.innerText = "";
        errorEntry.style.display = "block";
        const errorValue = document.createElement('div');
        errorValue.classList.add("error__para")
        errorValue.innerText = "OOPS!! Please give both the input correctly as both are mandatory";
        errorEntry.appendChild(errorValue);
        console.log('Error:', error.title ? error.response.data : error.message);
    }
};
