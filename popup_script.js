document.addEventListener("DOMContentLoaded", function () {
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        section.classList.add('popupanimation');
    });

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('popupanimation');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    allSections.forEach(section => {
        observer.observe(section);
    });
});
