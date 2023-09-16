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

    // //show all element
    // const showAll = document.getElementById('show-all');
    // if(items.length > 6){
    //     items = items.slice(0 , 6);
    //     showAll.classList.remove('hidden');
    // }
    // else{
    //     showAll.classList.add('hidden');
    // }


    //foreach
    items.forEach((item) => {

        //create div
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl my-5">
        <figure class="px-10 pt-10">
            <img src=" ${item.image ? item.image : 'image not found'} " alt="image" class="rounded-xl" />
        </figure>
        <div class="card-body">
        <h2 class="card-title text-xl">Feature</h2>
        <ol class="text-lg">
            <li>1. ${item.features[0]}</li>
            <li>2. ${item.features[1]}</li>
            <li>3. ${item.features[2]}</li>
        </ol>
            
            <p class="mb-2"> <hr> </p>
            <h2 class="card-title">${item.name}</h2>
            <p>${item.published_in}</p>
            <div class="card-actions justify-end">
            <button class="btn" onclick="my_modal_3.showModal()">Details</button>
            </div>
        </div>
    </div>
    `;
    container.appendChild(div);
    })
}

// load data using id
const loadDetails = async id =>{
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(URL);
    const data = await res.json();
    displayDetails(data);
}

//display data using 
const displayDetails = apps => {
    console.log(apps);
    const modalCard = document.getElementById('modal-card').innerHTML = `
    <!--card without image -->
                        <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                        </div>

                        <!-- card with image -->
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure class="px-10 pt-10">
                            <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                        </div>
    `
}


loadData();
loadDetails();