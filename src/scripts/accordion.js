// добавляем и удаляем сласс "active" 
const panels = document.querySelectorAll('.project__panel');
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}