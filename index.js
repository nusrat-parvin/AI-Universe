const loadData = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data);
}

const displayData = (item) =>{
    
}

loadData();
