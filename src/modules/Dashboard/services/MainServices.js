export class MainServices {
    constructor(){
        this.apiurl = process.env.REACT_APP_API_URI;
        this.token = process.env.REACT_APP_API_KEY;
    }

    async getMainData({comParagraph}) {
        const url = `${this.apiurl}/completions`;
        const fetchData = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`,
            },
            body: JSON.stringify({
                "model": "text-davinci-003",
                "prompt": `Correct this to standard English:\n\n${comParagraph}`,
                "temperature": 0,
                "max_tokens": 60,
                "top_p": 1.0,
                "frequency_penalty": 0.0,
                "presence_penalty": 0.0,
            })
        });
        console.log("main data", fetchData);
        if(fetchData.ok) {
            const resultData = await fetchData.json();
            return resultData;
        }
        return Promise.reject(fetchData.error);
    }
}