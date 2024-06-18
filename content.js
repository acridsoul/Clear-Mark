document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('watermarkHidden', (data) => {
        if (data.watermarkHidden) {
            toggleWatermark();
        }
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
