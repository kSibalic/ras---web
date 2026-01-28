import { renderHeader, renderFooter, renderModal, openModal } from './components.js';
import { popupData, newsData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Render App Shell
    renderHeader();
    renderFooter();
    renderModal();

    // Initialize Generic Modal Triggers
    document.querySelectorAll('[data-modal]').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const key = trigger.dataset.modal;
            const data = popupData[key];
            if (data) {
                let html = `<h2>${data.title}</h2>`;

                if (data.html) {
                    html += data.html;
                } else {
                    // Add Description text if it exists
                    if (data.description) {
                        html += data.description;
                    }

                    // Add Image if it exists
                    if (data.image) {
                        html += `<img src="${data.image}" style="max-width:100%; margin: 20px auto;">`;
                    }

                    // Add regular Links
                    if (data.links) {
                        html += `<div class="links-list">
                            ${data.links.map(l => `<a href="${l.url}" target="_blank" class="btn solid">${l.text}</a>`).join('')}
                        </div><br>`;
                    }

                    // Add Grouped Links
                    if (data.groups) {
                        html += data.groups.map(group => `
                            <p><strong>${group.subtitle}</strong></p>
                            <div class="links-list">
                                ${group.links.map(l => `<a href="${l.url}" target="_blank" class="btn solid">${l.text}</a>`).join('')}
                            </div><br>
                        `).join('');
                    }
                }
                openModal(html);
            }
        });
    });

    // Simple Slider Logic
    const slides = document.querySelectorAll('.custom-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const showSlide = (index) => {
            slides.forEach((s, i) => {
                s.style.opacity = i === index ? '1' : '0';
                s.style.zIndex = i === index ? '1' : '0';
            });
        };

        // Auto play
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // Contact Form Handler
    const form = document.getElementById('contact-form-el');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.style.opacity = '0.5';
            setTimeout(() => {
                form.style.display = 'none';
                document.getElementById('form-success').style.display = 'block';
            }, 1000);
        });
    }

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-scroll');
            }
        });
    });

    // Targets: Sections, Cards, News Items
    document.querySelectorAll('.section, .news-item, .contact-card, .grid-3 > div').forEach(el => {
        el.classList.add('hidden-scroll');
        observer.observe(el);
    });


    // Theme Toggle Logic
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
        const icon = toggleBtn.querySelector('img');
        const root = window.location.pathname.includes('/pages/') || window.location.pathname.includes('/news/') ? '../' : '';

        // Check saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            updateIcon(savedTheme);
        }

        toggleBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const target = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', target);
            localStorage.setItem('theme', target);
            updateIcon(target);
        });

        function updateIcon(theme) {
            if (icon) {
                // Icon check
                icon.src = theme === 'dark' ? `${root}images/footer/sun.svg` : `${root}images/footer/moon.svg`;
                icon.alt = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
            }
        }
    }

    // Render Single Article Page
    const titleEl = document.getElementById('article-title');
    if (titleEl) {
        // Get the 'id' from the web address
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = urlParams.get('id');

        // Find the correct article in data.js
        const article = newsData.find(item => item.id === articleId);

        if (article) {
            // Inject the data into the HTML
            titleEl.innerText = article.title;
            const summaryEl = document.getElementById('article-summary');
            if (summaryEl) summaryEl.innerText = article.summary;

            const imageEl = document.getElementById('article-image');
            if (imageEl) imageEl.src = article.image;

            const contentEl = document.getElementById('article-content');
            if (contentEl) contentEl.innerHTML = article.content;

            // Update browser tab title
            document.title = `${article.title} | RAS`;
        } else {
            const contentEl = document.getElementById('article-content');
            if (contentEl) contentEl.innerHTML = "<p>Članak nije pronađen.</p>";
        }
    }

    // Render News List
    const newsRoot = document.getElementById('news-list-root');
    if (newsRoot && newsData) {
        let html = '';
        newsData.forEach((item, index) => {
            const sectionClass = index % 2 === 0 ? 'section' : 'section light';

            // Determine link URL
            const url = item.externalUrl ? item.externalUrl : `../news/article.html?id=${item.id}`;
            const target = "_blank";

            const imageHtml = `<div><img src="${item.image}"></div>`;
            const contentHtml = `
                <div class="news-content">
                    <h2 class="project-title">${item.title}</h2>
                    ${item.summary ? `<p>${item.summary}</p>` : ''}
                    <div class="tag-wrapper">
                        ${item.tags.map(tag => `<span class="tag-title">${tag}</span>`).join('')}
                    </div>
                    <a href="${url}" target="${target}" class="btn solid">SAZNAJ VIŠE</a>
                </div>
            `;

            html += `
            <div class="${sectionClass}">
                <div class="container">
                    <div class="news-item">
                        ${index % 2 !== 0 ? imageHtml : ''} 
                        ${contentHtml}
                        ${index % 2 === 0 ? imageHtml : ''} 
                    </div>
                </div>
            </div>
            `;
        });
        newsRoot.innerHTML = html;

        // Re-attach observer
        if (typeof observer !== 'undefined') {
            newsRoot.querySelectorAll('.section, .news-item').forEach(el => {
                el.classList.add('hidden-scroll');
                observer.observe(el);
            });
        }
    }
});


