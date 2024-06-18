document.addEventListener('DOMContentLoaded', () => {
    const watermark = document.querySelector('.watermark');
    if (watermark) {
        watermark.style.display = 'block'; 
        watermark.style.opacity = '0.5';  
    }
});
