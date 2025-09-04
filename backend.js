console.log('connected .js file');

document.addEventListener('DOMContentLoaded', function() {
  
    const callServices = ['btn-call-all', 'btn-call-police', 'btn-call-fire', 'btn-call-ambulance', 'btn-call-help', 'btn-call-corruption', 'btn-call-electricity', 'btn-call-brac', 'btn-call-rail'];
    
    const copyNumbers = ['btn-copy-all', 'btn-copy-police', 'btn-copy-fire', 'btn-copy-ambulance', 'btn-copy-help', 'btn-copy-corruption', 'btn-copy-electricity', 'btn-copy-brac', 'btn-copy-rail'];
    
    for (const call of callServices) {
        document.getElementById(call).addEventListener('click', function() {
           
        });
    }
    
    for (const copy of copyNumbers) {
        document.getElementById(copy).addEventListener('click', function() {
            
        });
    }
});