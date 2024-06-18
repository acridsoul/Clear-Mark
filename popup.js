document.getElementById('toggle-watermark').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: toggleWatermark
        });
    });
});

function toggleWatermark() {
    const watermark = document.querySelector('.watermark');
    if (watermark) {
        if (watermark.style.display === 'none') {
            watermark.style.display = 'block';
        } else {
            watermark.style.display = 'none';
        }
    }
}
