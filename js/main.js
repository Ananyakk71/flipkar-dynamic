export function loadMainSection(data) {
    const rightContainer = document.querySelector('.right-container');
    const rightMainTop = document.querySelector('.rightmain-top');

    const rightMainTopIn = document.createElement("div");
    rightMainTopIn.className = "rightmain-topin";
    rightMainTop.appendChild(rightMainTopIn);

    const rightTopRoots = document.createElement("div");
    rightTopRoots.className = "righttop-roots";
    rightMainTopIn.appendChild(rightTopRoots);

    data.mainSection.rightTop.forEach((item, index) => {
        const rightTopRoot = document.createElement("div");
        rightTopRoot.className = "righttop-root";
        rightTopRoots.appendChild(rightTopRoot);

        const link = document.createElement("a");
        link.className = "toproot-text";
        link.textContent = item.text;
        rightTopRoot.appendChild(link);

        if (index < data.mainSection.rightTop.length - 1) {
            rightTopRoot.innerHTML += `
                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="root-arrow">
                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="gray"></path>
                </svg>
            `;
        }
    });

    const rightTopHead = document.createElement("div");
    rightTopHead.className = "righttop-head";
    rightTopHead.textContent = `Showing 1 – 24 of 9,947 results for`;
    rightMainTopIn.appendChild(rightTopHead);

    const rightTopBottom = document.createElement("div");
    rightTopBottom.className = "righttop-bottom";
    rightMainTopIn.appendChild(rightTopBottom);

    data.mainSection.options.forEach(option => {
        const sortOption = document.createElement("div");
        sortOption.className = "right-bottom-head";
        if (option.selected) {
            sortOption.classList.add("selected-head");
        }
        sortOption.textContent = option.text;
        rightTopBottom.appendChild(sortOption);

    });

    data.mainSection.mobiles.forEach(mobile => {
        const mobileContainer = document.createElement("div");
        mobileContainer.className = "mobile-container";
        mobileContainer.id = mobile.id;
        rightContainer.appendChild(mobileContainer);

        const mobileWrapper = document.createElement("div");
        mobileWrapper.className = "mobile-wrapper";
        mobileContainer.appendChild(mobileWrapper);

        const mobileImg = document.createElement("div");
        mobileImg.className = "mobile-img";
        mobileWrapper.appendChild(mobileImg);
        mobileImg.innerHTML = `
                    <div class="mobile-img-in" style="height: 200px; width: 200px;">
                        <img src="${mobile.image}">
                    </div>
                    <div class="mobile-add">
                        <input type="checkbox">
                        <span>Add to compare</span>
                    </div>
                    <div class="favourate">
                            <div class="heart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="gray" class="x1UMqG" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>
                            </div>
                        </div>
                    `;

        const aboutMobile = document.createElement("div");
        aboutMobile.className = "about-mobile";
        mobileWrapper.appendChild(aboutMobile);
        aboutMobile.innerHTML = `
                 <div class="col col-wdt">
                        <div class="about-head">${mobile.name}</div>
                        <div class="rate">
                            <div class="star-rate">
                                ${mobile.rating}
                                <img src="assets/imgs/download.svg" alt="">
                            </div>
                            <div class="rate-text">
                                <span>${mobile.reviews}</span>
                            </div>
                        </div>
                        <div class="mobile-details">
                            <ul class="details">
                                ${mobile.details.map(detail => `<li class="point">${detail}</li>`).join("")}
                            </ul>
                        </div>
                    </div>
                    <div class="col col-2-wdt">
                        <div class="cash">
                            <div class="prize">
                                <div class="amount">${mobile.price}</div>
                                ${mobile.changePrice ? `<div class="change-amount">${mobile.changePrice}</div>` : ""}
                                <div class="offer">${mobile.discount} off</div>
                            </div>
                            <div class="delivery">
                                ${mobile.freeDelivery ? `<div class="delivery-type" style="color: rgb(0, 0, 0); font-size: 12px; font-weight: 400;">Free delivery</div>` : ""}
                            </div>
                        </div>
                        <div class="assured-sign">
                                <img src="assets/imgs/fa_9e47c1.png" alt="">
                            </div>
                            <div class="offer-amount">
                             ${mobile.save ? `<div class="offer-1" style="color: rgb(38, 165, 65); font-size: 12px; font-style: normal; font-weight: 700;">${mobile.save}</div>` : ""}
                          </div>

                          ${mobile.offerAmount ? `
                            <div class="offer-amount">
                                <div class="offer-2" style="color: rgb(0, 0, 0); font-size: 14px; font-style: normal; font-weight: 400;">Upto </div>
                                <div class="offer-2" style="color: rgb(0, 0, 0); font-size: 14px; font-style: normal; font-weight: 700;">${mobile.offerAmount}</div>
                                <div class="offer-2" style="color: rgb(0, 0, 0); font-size: 14px; font-style: normal; font-weight: 400;"> Off on Exchange</div>
                            </div>
                        ` : ""}
                        
                    </div>
                    `
    })
    
}