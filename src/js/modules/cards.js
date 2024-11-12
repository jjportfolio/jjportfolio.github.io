// Module PortfolioCards
function PortfolioCards() {
    const portfolio = document.querySelector('.portfolio');
    const openMoreButton = document.getElementById('openMoreButton');
    const closeCardsButton = document.getElementById('closeCards');
    const cardsToShow = 8;
    let currentCardIndex = 0;
    let buttonClicked = false;

    function addCardToDOM(card) {
        const cardHTML = `
            <div class="portfolio__card">
                <div class="portfolio__card-image">
                    <div class="card_image-top">   
                        <img src="${card.imageSrc}" alt="Card Image">
                        <p><a href="${card.link}" target="_blank"></a></p>
                    </div>
                    <div class="card_image-bottom">
                        <p>${card.technologies}</p>
                        <p><a href="${card.link}" target="_blank">Vorschau der Website</a></p>
                        <p><a href="${card.link_git}" target="_blank">Quellcode auf GitHub</a></p>
                    </div>                        
                </div>
            </div>
        `;
        portfolio.insertAdjacentHTML('beforeend', cardHTML);
    }

    function addCardsToDOM(data, start, end) {
        for (let i = start; i < end && i < data.length; i++) {
            addCardToDOM(data[i]);
        }

        setTimeout(() => {
            const addedCards = portfolio.querySelectorAll('.portfolio__card');
            addedCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('show');
                }, index * 100);
            });

            if (buttonClicked) {
                addedCards[addedCards.length - 1].scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
                window.scrollBy(0, 400);
            }
        }, 10);
    }

    // cards.json
    function loadCardData() {
        fetch('files/cards.json')
            .then(response => response.json())
            .then(data => {
                addCardsToDOM(data, currentCardIndex, currentCardIndex + cardsToShow);
                currentCardIndex += cardsToShow;

                openMoreButton.addEventListener('click', () => {
                    addCardsToDOM(data, currentCardIndex, currentCardIndex + cardsToShow);
                    currentCardIndex += cardsToShow;
                    buttonClicked = true;

                    if (currentCardIndex >= data.length) {
                        openMoreButton.style.display = 'none';
                        closeCardsButton.style.display = 'block';
                    }
                });

                closeCardsButton.addEventListener('click', () => {
                    closeCardsButton.style.display = 'none';
                    openMoreButton.style.display = 'block';

                    portfolio.innerHTML = '';
                    currentCardIndex = 0;
                    buttonClicked = false;

                    addCardsToDOM(data, currentCardIndex, currentCardIndex + cardsToShow);
                    currentCardIndex += cardsToShow;

                    const portfolioHeader = document.getElementById('p');
                    portfolioHeader.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                });
            })
            .catch(error => console.error('Error loading card data:', error));
    }

    loadCardData();
}

export default PortfolioCards;
