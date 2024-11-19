if (document.getElementById('goToSupport')) {
    document.getElementById('goToSupport').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'support.html';
    });
}

if (document.getElementById('goBackToIndex')) {
    document.getElementById('goBackToIndex').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });
}
