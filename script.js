// Функция для копирования IP-адреса
function copyIP() {
    const ip = 'lumixsmp.mcserver.ru';
    navigator.clipboard.writeText(ip).then(() => {
        alert('IP-адрес скопирован: ' + ip);
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}

// Функция для активации вкладки
function activateTab(tabId) {
    // Скрыть все секции контента
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Показать выбранную секцию
    const targetSection = document.getElementById(tabId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Обновить активную кнопку навигации
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-target') === tabId) {
            btn.classList.add('active');
        }
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для кнопок навигации
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            if (target) {
                activateTab(target);
            }
        });
    });
    
    // Активировать первую вкладку по умолчанию
    if (document.querySelector('.nav-btn.active')) {
        const activeTab = document.querySelector('.nav-btn.active').getAttribute('data-target');
        activateTab(activeTab);
    }
});
