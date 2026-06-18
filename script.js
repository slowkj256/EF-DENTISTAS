/**
 * @fileoverview Lógica e micro-interações da Landing Page Oral Couture Premium.
 * Inclui sistema de travas comerciais para proteção de copyright antes do pagamento.
 */

document.addEventListener("DOMContentLoaded", () => {
    initLockModal();
    initPricingToggle();
    initScrollReveal();
    initMobileMenu();
});

/**
 * Controla o Modal de Bloqueio Comercial de Homologação.
 */
function initLockModal() {
    const lockModal = document.getElementById("lockModal");
    const closeLock = document.getElementById("closeLock");
    const triggers = document.querySelectorAll(".trigger-lock");

    triggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            lockModal.classList.add("active");
            lockModal.setAttribute("aria-hidden", "false");
        });
    });

    closeLock.addEventListener("click", () => {
        lockModal.classList.remove("active");
        lockModal.setAttribute("aria-hidden", "true");
    });
}

/**
 * Controla a tabela dinâmica de preços (Mudar valores com toggle).
 */
function initPricingToggle() {
    const toggleBtn = document.getElementById("pricingToggle");
    const priceAmounts = document.querySelectorAll(".price-amount");

    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("active");
        const isAnual = toggleBtn.classList.contains("active");

        priceAmounts.forEach(amount => {
            const currentPrice = isAnual ? amount.getAttribute("data-anual") : amount.getAttribute("data-semestral");
            
            // Animação suave de transição de números
            amount.style.opacity = "0";
            setTimeout(() => {
                amount.textContent = currentPrice;
                amount.style.opacity = "1";
            }, 150);
        });
    });
}

/**
 * Monitora elementos na tela para animação de scroll otimizada via IntersectionObserver.
 */
function initScrollReveal() {
    const items = document.querySelectorAll(".reveal-on-scroll");
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Melhora de performance
            }
        });
    }, observerOptions);

    items.forEach(item => observer.observe(item));
}

/**
 * Controla o Menu Mobile e acessibilidade de navegação.
 */
function initMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const overlay = document.querySelector(".menu-mobile-overlay");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    if (!toggle) return;

    toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", !expanded);
        overlay.classList.toggle("active");
    });

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            toggle.setAttribute("aria-expanded", "false");
            overlay.classList.remove("active");
        });
    });
}
