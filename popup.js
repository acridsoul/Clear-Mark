// Fetch the current watermark status from storage and update the popup
chrome.storage.sync.get('watermarkHidden', (data) => {
    const statusElement = document.getElementById('status');
    if (data.watermarkHidden) {
        statusElement.textContent = 'Watermark: Hidden';
        statusElement.style.color = '#2ecc71'; // Green for success
    } else {
        statusElement.textContent = 'Watermark: Visible';
        statusElement.style.color = '#e74c3c'; // Red for visible
    }
});
