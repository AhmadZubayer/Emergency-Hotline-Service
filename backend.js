console.log('connected .js file');

let balance = 100;
const costPerCall = 20;


const callServices = ['btn-call-all', 'btn-call-police', 'btn-call-fire', 'btn-call-ambulance', 'btn-call-help', 'btn-call-corruption', 'btn-call-electricity', 'btn-call-brac', 'btn-call-rail'];

const copyNumbers = ['btn-copy-all', 'btn-copy-police', 'btn-copy-fire', 'btn-copy-ambulance', 'btn-copy-help', 'btn-copy-corruption', 'btn-copy-electricity', 'btn-copy-brac', 'btn-copy-rail'];

const likeButtons = ['btn-like-all', 'btn-like-police', 'btn-like-fire', 'btn-like-ambulance', 'btn-like-help', 'btn-like-corruption', 'btn-like-electricity', 'btn-like-brac', 'btn-like-rail'];


let likedServices = [];
let copyCount = 0;
let callHistoryArray = [];
const heartCounter = document.getElementById('life-count');
const copyCounter = document.getElementById('copy-count');
const coinCounter = document.getElementById('coin-count');
const historyContainer = document.getElementById('history-cards-container');


coinCounter.innerText = balance;

for (const call of callServices) {
    document.getElementById(call).addEventListener('click', function (e) {
        e.preventDefault();


        if (balance < costPerCall) {
            alert("You do not have enough coins. Minimum 20 coins are required to call");
            return;
        }

        const serviceCard = e.target.closest('.serviceCard');
        const serviceTitle = serviceCard.querySelector('#service-title').innerText;
        const serviceNumber = serviceCard.querySelector('#service-number').innerText;

      
        balance -= costPerCall;
        coinCounter.innerText = balance;

        const currentTime = new Date();
        const timestamp = currentTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        const callHistory = {
            serviceName: serviceTitle,
            serviceNumber: serviceNumber,
            timestamp: timestamp
        };
        callHistoryArray.push(callHistory);
        createHistoryCard(callHistory);
        alert(`Calling ${serviceNumber} ${serviceTitle}`);
    });
}

for (const copy of copyNumbers) {
    document.getElementById(copy).addEventListener('click', function (e) {
        e.preventDefault();

        const serviceCard = e.target.closest('.serviceCard');
        const serviceNumber = serviceCard.querySelector('#service-number').innerText;

        navigator.clipboard.writeText(serviceNumber);

        copyCount++;
        copyCounter.innerText = copyCount;
    });
}


for (const like of likeButtons) {
    document.getElementById(like).addEventListener('click', function (e) {
        e.preventDefault();

        const heartIcon = e.target;
        const serviceId = like;

        if (likedServices.includes(serviceId)) {
            const index = likedServices.indexOf(serviceId);
            likedServices.splice(index, 1);
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
            heartIcon.style.color = '';
        } else {
            likedServices.push(serviceId);
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
            heartIcon.style.color = '#ef4444';
        }
        heartCounter.innerText = likedServices.length;
    });
}

function createHistoryCard(callData) {
    const historyCard = document.createElement('div');
    historyCard.className = 'history-cards h-[83px] bg-[#f5fff6] rounded-md flex justify-between items-center mt-4';

    historyCard.innerHTML = `
            <div class="called-service text-[18px] p-6">
                <p class="service-name font-semibold">${callData.serviceName}</p>
                <p class="service-number">${callData.serviceNumber}</p>
            </div>
            <div class="called-time p-6">${callData.timestamp}</div>
        `;

    historyContainer.appendChild(historyCard);
}
document.getElementById('clear-history-btn').addEventListener('click', function (e) {
    e.preventDefault();
    callHistoryArray = [];
    historyContainer.innerHTML = '';
});
