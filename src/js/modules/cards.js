// Module PortfolioCards
function PortfolioCards() {
    const cardData = [
        {
            imageSrc: "img/cards_img/oA73KOL.png",
            link: "#",
            technologies: "Gulp Html Scss JS"
        },
        {
            imageSrc: "img/cards_img/Novaboard.png",
            link: "https://yargrinders.github.io/Final-work-wezom/",
            technologies: "HTML CSS JS"
        },
        {
            imageSrc: "img/cards_img/OKS.png",
            link: "https://yargrinders.github.io/kiosk/",
            technologies: "HTML CSS VueJS jQuery"
        },
        // Add more cards here.
    ];

    const portfolio = document.querySelector('.portfolio');
    const openMoreButton = document.getElementById('openMoreButton');
    const closeCardsButton = document.getElementById('closeCards');
    const cardsToShow = 4;
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
                    </div>                        
                </div>
            </div>
        `;
        portfolio.insertAdjacentHTML('beforeend', cardHTML);
    }

    function addCardsToDOM(start, end) {
        for (let i = start; i < end && i < cardData.length; i++) {
            addCardToDOM(cardData[i]);
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

    function init() {
        addCardsToDOM(currentCardIndex, currentCardIndex + cardsToShow);
        currentCardIndex += cardsToShow;

        openMoreButton.addEventListener('click', () => {
            addCardsToDOM(currentCardIndex, currentCardIndex + cardsToShow);
            currentCardIndex += cardsToShow;
            buttonClicked = true;

            if (currentCardIndex >= cardData.length) {
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

            addCardsToDOM(currentCardIndex, currentCardIndex + cardsToShow);
            currentCardIndex += cardsToShow;

            const portfolioHeader = document.getElementById('p');
            portfolioHeader.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        });
    }

    // Initialize module
    init();
}

export default PortfolioCards;
