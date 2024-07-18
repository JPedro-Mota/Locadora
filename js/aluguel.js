function changePage(direction) {
    const activeItem = document.querySelector('.paginacaoitem.active');
    let currentIndex = Array.from(paginacaoItems).indexOf(activeItem);
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
        newIndex = paginacaoItems.length - 1; 
    } else if (newIndex >= paginacaoItems.length) {
        newIndex = 0; 
    }

    activeItem.classList.remove('active');
    paginacaoItems[newIndex].classList.add('active');
    currentPage = newIndex;
    renderTable(currentPage);
}

prevButton.addEventListener('click', function() {
    changePage(-1);
});

nextButton.addEventListener('click', function() {
    changePage(1);
});

paginacaoItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        document.querySelector('.paginacaoItem.active').classList.remove('active');
        item.classList.add('active');
        currentPage = index;
        renderTable(currentPage);
    });
});

renderTable(currentPage);
