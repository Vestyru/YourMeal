window.addEventListener('DOMContentLoaded', (event) => {
    /* tabs__menu */
    const tabsMenu = document.querySelectorAll('.tabs__menu-contetn');
    const tabsItem = document.querySelectorAll('.tabs__menu-link');

    /* modal_product */
    const modal = document.getElementById('myModal');
    const openBtn = document.querySelectorAll('.tabs__menu-product');
    const closeBtn = document.getElementById('closeBtn');
    const popupWindow = document.getElementById('popup-window');

    /* checkbox */
    const heckBox = document.querySelectorAll('.css-checkbox');
    const popurFromWrapper = document.querySelector('.popur-form__wrapper');

    /* delivery_modal */
    const tabsOrder = document.querySelector('.tabs__basket-order');
    const modalDelivery = document.getElementById('modalDelivery');
    const popurDeliveryClose = document.querySelector('.popur__window-delivery--close');

    /* card */
    const tabsDeliveryClose = document.querySelector('.tabs__delivery-close');
    const tabsCardMobil = document.querySelector('.tabs__card-mobile');
    const tabsCard = document.querySelector('.tabs__card');

    /* modal_product */
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        popupWindow.classList.remove('active');
    });

    popupWindow.addEventListener('click', () => {
        modal.classList.remove('active');
        popupWindow.classList.remove('active');
        modalDelivery.classList.remove('active');
    });

    /* tabs__menu */
    openBtn.forEach((btnOpen) => {
        btnOpen.addEventListener('click', () => {
            modal.classList.add('active');
            popupWindow.classList.add('active');
        });
    });

    function hideShow() {
        tabsMenu.forEach((menu) => {
            menu.classList.remove('active');
        });

        tabsItem.forEach((item) => {
            item.classList.remove('active');
        });
    }

    function showTabContetn(i = 0) {
        tabsMenu[i].classList.add('active');
        tabsItem[i].classList.add('active');
    }

    hideShow();
    showTabContetn();

    tabsItem.forEach((itembtn, index) => {
        itembtn.addEventListener('click', () => {
            hideShow();
            showTabContetn(index);
        });
    });

    /* checkbox */
    function hideContetn() {
        heckBox.forEach((item) => {
            item.classList.remove('active');
        });
    }

    function hideChec(a = 1) {
        heckBox[a].classList.add('active');
        const status = heckBox[a].getAttribute('aria-checked');
        if (status === 'true') {
            popurFromWrapper.classList.add('active');
        }

        if (status === 'false') {
            popurFromWrapper.classList.remove('active');
        }
    }

    hideContetn();
    hideChec();

    heckBox.forEach((itemBox, index) => {
        itemBox.addEventListener('click', () => {
            hideContetn();
            hideChec(index);
        });
    });

    /* delivery_modal */
    tabsOrder.addEventListener('click', function () {
        modalDelivery.classList.add('active');
        popupWindow.classList.add('active');
    });

    popurDeliveryClose.addEventListener('click', function () {
        modalDelivery.classList.remove('active');
        popupWindow.classList.remove('active');
    });

    /* card */
    tabsCard.addEventListener('click', function () {
        tabsCardMobil.classList.add('active');
        tabsCard.classList.add('active');
    });

    tabsDeliveryClose.addEventListener('click', function () {
        tabsCardMobil.classList.remove('active');
        tabsCard.classList.remove('active');
    });
});

/* slider */
var swiper = new Swiper('.mySwiper', {
    watchSlidesProgress: true,
    slidesPerView: 3,
    spaceBetween: 24,
    freeMode: true,

    breakpoints: {
        '@0.00': {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        '@0.75': {
            slidesPerView: 6,
            spaceBetween: 12,
        },
        '@1.00': {
            slidesPerView: 7,
            spaceBetween: 24,
        },
        '@1.50': {
            slidesPerView: 6,
            spaceBetween: 24,
        },
    },
});
