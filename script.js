// Навигация между страницами
document.addEventListener('DOMContentLoaded', function() {
    // Обработка навигационных кнопок
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Убираем активный класс у всех кнопок и секций
            navButtons.forEach(btn => btn.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке и целевой секции
            this.classList.add('active');
            
            if (target) {
                document.getElementById(target).classList.add('active');
            }
        });
    });
    
    // Функция копирования IP-адреса
    window.copyIP = function() {
        const ip = 'lumixsmp.mcserver.ru';
        navigator.clipboard.writeText(ip).then(() => {
            const btn = document.querySelector('.copy-btn');
            const originalText = btn.textContent;
            btn.textContent = 'Скопировано!';
            
            setTimeout(() => {
                btn.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Ошибка при копировании: ', err);
        });
    };
    
    // Плавная прокрутка для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});