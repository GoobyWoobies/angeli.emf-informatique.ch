document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('custom-cursor');

    function updateCursorPosition(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + window.scrollY + 'px';
    }

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', function() {
        cursor.style.opacity = '1';
    });
    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
    });
    document.addEventListener('mousemove', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    document.addEventListener('mouseout', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    window.addEventListener('scroll', function() {
        cursor.style.top = parseFloat(cursor.style.top) - window.scrollY + 'px';
    });
});
