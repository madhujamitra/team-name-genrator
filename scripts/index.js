const apiKey = '477ba0b1bfba46218f655c47a38e2cb9';

const startingWord = 'car';

const generateBrandName = async (startingWord, apiKey) => {
    const url = `https://randommer.io/api/Name/BrandName?startingWords=${startingWord}`;
    try {
        const response = await axios.post(url, {}, {
            headers: {
                'X-Api-Key': apiKey
            }
        });
        console.log('Generated Brand Name:', response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
};
generateBrandName(startingWord, apiKey);