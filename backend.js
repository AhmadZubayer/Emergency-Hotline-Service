console.log('connected .js file');

document.addEventListener('DOMContentLoaded', function() {
  
    const callServices = ['btn-call-all', 'btn-call-police', 'btn-call-fire', 'btn-call-ambulance', 'btn-call-help', 'btn-call-corruption', 'btn-call-electricity', 'btn-call-brac', 'btn-call-rail'];
    
    const copyNumbers = ['btn-copy-all', 'btn-copy-police', 'btn-copy-fire', 'btn-copy-ambulance', 'btn-copy-help', 'btn-copy-corruption', 'btn-copy-electricity', 'btn-copy-brac', 'btn-copy-rail'];
    
    const likeButtons = ['btn-like-all', 'btn-like-police', 'btn-like-fire', 'btn-like-ambulance', 'btn-like-help', 'btn-like-corruption', 'btn-like-electricity', 'btn-like-brac', 'btn-like-rail'];
    

    let likedServices = [];
    let copyCount = 0;
    const heartCounter = document.getElementById('life-count');
    const copyCounter = document.getElementById('copy-count');
    
    for (const call of callServices) {
        document.getElementById(call).addEventListener('click', function(e) {
            e.preventDefault();
            
            const serviceCard = e.target.closest('.serviceCard');
            const serviceTitle = serviceCard.querySelector('#service-title').innerText;
            const serviceNumber = serviceCard.querySelector('#service-number').innerText;
            
            alert(`Calling ${serviceNumber} ${serviceTitle}`);
        });
    }
    
    for (const copy of copyNumbers) {
        document.getElementById(copy).addEventListener('click', function(e) {
            e.preventDefault();
            
            const serviceCard = e.target.closest('.serviceCard');
            const serviceNumber = serviceCard.querySelector('#service-number').innerText;
            
            navigator.clipboard.writeText(serviceNumber);
            
            copyCount++;
            copyCounter.innerText = copyCount;
        });
    }
    
  
    for (const like of likeButtons) {
        document.getElementById(like).addEventListener('click', function(e) {
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
});