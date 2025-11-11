function showCopyNotification() {
    const element = document.getElementById('email-copy-notification')

    element.classList.remove('invisible')
    setTimeout(() => element.classList.add('invisible'), 50)
}

function showDownloadOptions() {
    document.getElementById('download-button').style.transition = ''
    document.getElementById('download-options').style.display = 'block'
    document.getElementById('download-button').style.borderRadius = '7px 7px 0 0'
}

function closeDownloadOptions() {
    document.getElementById('download-options').style.display = 'none'
    document.getElementById('download-button').style.borderRadius = '7px'
}

window.copyEmail = async () => {
    const email = document.getElementById('email').innerText
    await navigator.clipboard.writeText(email)
    showCopyNotification()
}

window.showDownloadOptions = () => {
    const element = document.getElementById('download-options')
    if (element.style.display === 'block') {
        closeDownloadOptions()
    } else {
        showDownloadOptions()
    }
}

document.addEventListener('mouseup', (e) => {
    const downloadButton = document.getElementsByClassName('download')[0]

    if (!downloadButton.contains(e.target)) {
        closeDownloadOptions()
    }
})

window.download = (file) => {
    const element = document.createElement('a');
    document.body.appendChild(element);
    element.download = 'Pleshakov Andrey CV';
    element.href = `assets/${file}`;
    element.click();
    document.body.removeChild(element);
}

// Language translations
const translations = {
    en: {
        name: 'Pleshakov Andrey',
        contacts: 'Contacts',
        keySkills: 'Key Skills',
        secondarySkills: 'Secondary Skills',
        languages: 'Languages',
        russian: 'Russian',
        english: 'English',
        native: 'Native',
        professional: 'Professional',
        years3: '3 years',
        years1_5: '1.5 years',
        frontendDeveloper: 'Frontend Developer',
        downloadCV: 'Download CV',
        downloadPdf: 'Download as .pdf',
        downloadPng: 'Download as .png',
        workExperience: 'Work experience',
        position: 'Frontend Developer',

        // xGifts
        xgiftsDate: 'Sep 2025 - Present',
        xgiftsDesc: 'Digital gift NFT marketplace on TON blockchain built as Telegram Mini App.',
        xgifts1: 'Built full-featured NFT marketplace with buy/sell flows, order management, quote system, and dual marketplace integration',
        xgifts2: 'Implemented digital wallet (xGift Bank) with TON cryptocurrency deposits/withdrawals via multiple providers, transaction history, and balance management using TON Connect',
        xgifts3: 'Built responsive Telegram Mini App using Feature-Sliced Design architecture with smooth animations and intuitive user flows optimized for mobile performance',
        xgifts4: 'Developed advanced filtering system with collection/model combinations, shareable deep links, and infinite scroll pagination with aggressive cache strategies',

        // Portfel
        portfelDate: 'June 2024 - Aug 2025',
        portfelDesc: 'The first portfolio tracker on TON blockchain.',
        portfel1: 'Developed a real-time interface to fetch and visualize TON blockchain transactions, including NFT and Jetton transfers',
        portfel2: 'Built core UI using SolidJS + TailwindCSS with responsive, adaptive layouts',
        portfel3: 'Revived automatic testing, added code style linter, set it all up in Gitlab CI/CD',
        portfel4: 'Connected backend APIs; built a subscription system using TON APIs, webhooks, and a Telegram bot',

        // Atlantis
        atlantisDate: 'Jan 2023 - June 2024',
        atlantisDesc: 'Atlantis United is a team of engineers and designers building digital platforms, customer services, and SaaS solutions for small and medium businesses.',
        atlantis1: 'Developed reusable UI components with React, used SSR via Next.js',
        atlantis2: 'Wrote clean TypeScript/JavaScript; used Git Flow for organized collaboration',
        atlantis3: 'Set up CI/CD pipelines; worked closely with designers and backend developers to ship user-focused features',
        atlantis4: 'Used TanStack Query to manage asynchronous state efficiently, handling caching, background updates, and server sync with a MongoDB-based backend'
    },
    ru: {
        name: 'Плешаков Андрей',
        contacts: 'Контакты',
        keySkills: 'Основные навыки',
        secondarySkills: 'Дополнительные навыки',
        languages: 'Языки',
        russian: 'Русский',
        english: 'Английский',
        native: 'Родной',
        professional: 'Профессиональный',
        years3: '3 года',
        years1_5: '1.5 года',
        frontendDeveloper: 'Frontend-разработчик',
        downloadCV: 'Скачать резюме',
        downloadPdf: 'Скачать как .pdf',
        downloadPng: 'Скачать как .png',
        workExperience: 'Опыт работы',
        position: 'Frontend-разработчик',

        // xGifts
        xgiftsDate: 'Сентябрь 2025 - Настоящее время',
        xgiftsDesc: 'Маркетплейс цифровых подарков в виде NFT на блокчейне TON, реализованный как Telegram Mini App.',
        xgifts1: 'Разработал полнофункциональный NFT маркетплейс с покупкой/продажей, управлением заказами, системой котировок и интеграцией с двумя маркетплейсами',
        xgifts2: 'Реализовал цифровой кошелек (xGift Bank) с депозитами/выводами криптовалюты TON через несколько провайдеров, историей транзакций и управлением балансом через TON Connect',
        xgifts3: 'Создал адаптивное Telegram Mini App с использованием архитектуры Feature-Sliced Design, плавными анимациями и интуитивными пользовательскими сценариями, оптимизированными для мобильных устройств',
        xgifts4: 'Разработал продвинутую систему фильтрации с комбинациями коллекций/моделей, общими deep links и бесконечной пагинацией с агрессивным кэшированием',

        // Portfel
        portfelDate: 'Июнь 2024 - Август 2025',
        portfelDesc: 'Первый трекер портфолио на блокчейне TON.',
        portfel1: 'Разработал интерфейс реального времени для получения и визуализации транзакций блокчейна TON, включая переводы NFT и Jetton',
        portfel2: 'Создал основной UI с использованием SolidJS + TailwindCSS с адаптивными, отзывчивыми макетами',
        portfel3: 'Восстановил автоматическое тестирование, добавил линтер стиля кода, настроил все в Gitlab CI/CD',
        portfel4: 'Подключил backend API; создал систему подписок с использованием TON API, вебхуков и Telegram бота',

        // Atlantis
        atlantisDate: 'Январь 2023 - Июнь 2024',
        atlantisDesc: 'Atlantis United — команда инженеров и дизайнеров, создающих цифровые платформы, клиентские сервисы и SaaS решения для малого и среднего бизнеса.',
        atlantis1: 'Разработал переиспользуемые UI компоненты на React, использовал SSR через Next.js',
        atlantis2: 'Писал чистый TypeScript/JavaScript; использовал Git Flow для организованной совместной работы',
        atlantis3: 'Настроил CI/CD пайплайны; тесно работал с дизайнерами и backend разработчиками для выпуска функций, ориентированных на пользователей',
        atlantis4: 'Использовал TanStack Query для эффективного управления асинхронным состоянием, обработки кэширования, фоновых обновлений и синхронизации с сервером на MongoDB'
    }
};

let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language switcher
function initLanguageSwitcher() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    if (savedLang !== 'en') {
        switchLanguage(savedLang);
    }

    // Add click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

// Handle both DOMContentLoaded and immediate execution
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
    initLanguageSwitcher();
}