const loadData = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools);
}

const displayData = (items) =>{
    console.log(items);
    //get container div
    const container = document.getElementById('container');

    //foreach
    items.forEach((item) => {

        //create div
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <img src="${item.image ? item.image : 'image not found'}" alt="image" class="rounded-xl" />
        </figure>
        <div class="card-body">
        <h2 class="card-title">Feature</h2>
            
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <p class="my-2"> <hr> </p>
            <h2 class="card-title">${item.name}</h2>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
    `;
    container.appendChild(div);
    })

    
}

loadData();
