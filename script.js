(function () {
  const config = window.AXIS_CONFIG || {};
  document.querySelectorAll('[data-link]').forEach((link) => {
    const key = link.dataset.link;
    if (config[key]) link.href = config[key];
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  const player = document.getElementById('demo-player');
  const isConfiguredVideo = (value) => Boolean(value && !value.startsWith('REPLACE_WITH_'));
  const updateDemoVideo = (language) => {
    if (!player) return;
    const video = language === 'ru' ? config.youtubeVideoIdRu : config.youtubeVideoIdEn;
    const nextSource = isConfiguredVideo(video)
      ? (video.startsWith('http') ? video : `https://www.youtube-nocookie.com/embed/${video}`)
      : 'about:blank';
    if (player.src !== nextSource) player.src = nextSource;
  };
  const mediaButtons = document.querySelectorAll('.media-thumb');
  const mediaItems = document.querySelectorAll('.showcase-media');
  const mediaInfo = document.querySelectorAll('.media-info');
  mediaButtons.forEach((button) => button.addEventListener('click', () => {
    const target = button.dataset.target;
    mediaButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });
    mediaItems.forEach((item) => item.classList.toggle('is-active', item.dataset.media === target));
    mediaInfo.forEach((item) => item.classList.toggle('is-active', item.dataset.info === target));
  }));
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.getElementById('site-menu');
  menuButton?.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));
  const russian = {
    'Features': 'Возможности',
    'Roadmap': 'План разработки',
    'FAQ': 'Вопросы',
    'Get beta access': 'Получить бета-доступ',
    'AxBOTS 0.1 BETA': 'AxBOTS 0.1 БЕТА',
    'EARLY ACCESS': 'РАННИЙ ДОСТУП',
    'Build autonomous Minecraft bots': 'Создавайте автономных Minecraft-ботов',
    'without writing code.': 'без программирования.',
    'A visual node-based automation system for creating intelligent agents that move, mine, build and act on your ideas.': 'Визуальная система автоматизации на основе нод для создания интеллектуальных агентов, которые перемещаются, добывают ресурсы, строят и воплощают ваши идеи.',
    'See how it works': 'Посмотреть в действии',
    'For builders, creators and curious engineers. Early supporter access is $2.50/month.': 'Для строителей, создателей и любознательных инженеров. Ранний доступ для сторонников — 199 ₽ в месяц.',
    'LIVE STATE': 'ТЕКУЩЕЕ СОСТОЯНИЕ',
    'Autonomous': 'Автономный режим',
    'Agent is running': 'Агент запущен',
    'NEXT ACTION': 'СЛЕДУЮЩЕЕ ДЕЙСТВИЕ',
    'Mine → Return': 'Добыча → Возврат',
    'beta release': 'бета-версия',
    '$2.50': '199 ₽',
    'early access / month': 'ранний доступ / месяц',
    'behaviors to compose': 'вариантов поведения',
    '01 / THE PRODUCT': '01 / ПРОДУКТ',
    'Automation you can actually see.': 'Автоматизация, которую действительно видно.',
    'Turn an idea into a working bot behavior by connecting readable actions on a visual canvas.': 'Превратите идею в рабочее поведение бота, соединяя понятные действия на визуальном холсте.',
    'VISUAL BEHAVIOR SYSTEM': 'ВИЗУАЛЬНАЯ СИСТЕМА ПОВЕДЕНИЯ',
    'One canvas.': 'Один холст.',
    'Every decision.': 'Каждое решение.',
    'Build the logic, inspect the flow and understand exactly what your bot will do before it moves.': 'Создавайте логику, проверяйте поток и заранее понимайте каждое действие бота.',
    'BETA SYSTEM ONLINE': 'БЕТА-СИСТЕМА АКТИВНА',
    '8 NODES': '8 НОД',
    'VALIDATED': 'ПРОВЕРЕНО',
    'REAL BETA INTERFACE': 'РЕАЛЬНЫЙ ИНТЕРФЕЙС БЕТЫ',
    'Compose behaviors from connected actions.': 'Собирайте поведение из связанных действий.',
    'COMPOSE': 'СОЗДАНИЕ',
    'Build with nodes': 'Собирайте из нод',
    'Connect triggers, conditions and actions into a readable flow.': 'Соединяйте триггеры, условия и действия в понятный сценарий.',
    'EXECUTE': 'ЗАПУСК',
    'Run autonomously': 'Запускайте автономно',
    'Send the scenario into the world and let the bot follow its logic.': 'Отправьте сценарий в мир и позвольте боту следовать заданной логике.',
    'ITERATE': 'УЛУЧШЕНИЕ',
    'Refine instantly': 'Улучшайте мгновенно',
    'Adjust the graph, validate it and run the improved behavior again.': 'Измените граф, проверьте его и снова запустите улучшенный сценарий.',
    '02 / CAPABILITIES': '02 / ВОЗМОЖНОСТИ',
    'From intent to action.': 'От идеи к действию.',
    'Everything in AxBOTS is designed around a simple idea: powerful automation should feel approachable.': 'В основе AxBOTS простая идея: мощная автоматизация должна оставаться понятной.',
    'Visual node programming': 'Визуальное программирование',
    'Build behavior graphs with modular nodes instead of starting from a blank code editor.': 'Создавайте графы поведения из модульных нод вместо написания кода с нуля.',
    'Autonomous agents': 'Автономные агенты',
    'Let bots carry out a plan, respond to the world and keep working while you focus elsewhere.': 'Позвольте ботам выполнять план, реагировать на мир и продолжать работу самостоятельно.',
    'World automation': 'Автоматизация мира',
    'Movement, mining, building and other routines become composable building blocks.': 'Перемещение, добыча, строительство и другие задачи становятся составными блоками.',
    'Reusable scripts': 'Многоразовые сценарии',
    'Save, refine and eventually share behaviors that work across your projects and worlds.': 'Сохраняйте, улучшайте и делитесь сценариями для разных проектов и миров.',
    '03 / THE LOOP': '03 / РАБОЧИЙ ЦИКЛ',
    'Make a behavior. Let it run.': 'Создайте поведение. Запустите его.',
    'Compose': 'Создайте',
    'Connect nodes into a behavior that matches your goal.': 'Соедините ноды в сценарий, соответствующий вашей цели.',
    'Configure': 'Настройте',
    'Set targets, conditions and the details that make it yours.': 'Задайте цели, условия и необходимые параметры.',
    'Run': 'Запустите',
    'Start the agent and observe the plan becoming action.': 'Запустите агента и наблюдайте, как план превращается в действие.',
    'Refine': 'Улучшите',
    'Iterate on the graph until the behavior feels right.': 'Изменяйте граф, пока поведение не станет таким, как задумано.',
    '04 / IN THE WORKSHOP': '04 / В РАЗРАБОТКЕ',
    'See the system in motion.': 'Посмотрите систему в действии.',
    'Explore the workflow, the editor and the controls behind an AxBOTS scenario.': 'Изучите рабочий процесс, редактор и настройки сценариев AxBOTS.',
    '01 / DEMO VIDEO': '01 / ДЕМО-ВИДЕО',
    'From nodes to behavior.': 'От нод к поведению.',
    'Watch a scenario come together as a visual graph, then follow the bot as it turns that logic into action.': 'Посмотрите, как сценарий собирается в визуальный граф, а бот превращает его логику в действие.',
    '02 / SCRIPT EDITOR': '02 / РЕДАКТОР СЦЕНАРИЕВ',
    'Logic you can see.': 'Логика перед глазами.',
    'Compose movement, conditions and actions in a readable node-based workspace built for iteration.': 'Собирайте перемещение, условия и действия в понятном нодовом редакторе.',
    '03 / MOD SETTINGS': '03 / НАСТРОЙКИ МОДА',
    'Control the details.': 'Контролируйте детали.',
    'Shape the experience with focused settings for the way you want your agents to behave.': 'Настройте поведение агентов под нужный вам стиль работы.',
    'Demo video': 'Демо-видео',
    'Script editor': 'Редактор сценариев',
    'Mod settings': 'Настройки мода',
    '05 / EARLY SUPPORT': '05 / РАННЯЯ ПОДДЕРЖКА',
    'Get inside the first build.': 'Получите доступ к первой версии.',
    'Support the development of AxBOTS and get a front-row seat as the system takes shape.': 'Поддержите разработку AxBOTS и наблюдайте за развитием системы с самого начала.',
    'Early beta access': 'Ранний доступ к бета-версии',
    'Development updates and behind-the-scenes notes': 'Новости разработки и материалы из-за кулис',
    'Supporter role in the community': 'Роль сторонника в сообществе',
    '$': '',
    '2.50': '199 ₽',
    '/ month': '/ месяц',
    'Cancel any time. Your support helps fund the next build.': 'Отменить подписку можно в любой момент. Ваша поддержка помогает создавать следующие версии.',
    'Join on Boosty': 'Поддержать на Boosty',
    '06 / DIRECTION': '06 / НАПРАВЛЕНИЕ',
    'Small steps. Useful agents.': 'Небольшие шаги. Полезные агенты.',
    'Done': 'Готово',
    'Foundation': 'Основа',
    'Core Axis identity': 'Основной стиль Axis',
    'AxBOTS concept and direction': 'Концепция и направление AxBOTS',
    'Early automation experiments': 'Первые эксперименты с автоматизацией',
    'Now': 'Сейчас',
    'Visual node-based workflows': 'Визуальные нодовые процессы',
    'First movement and task behaviors': 'Первые сценарии движения и задач',
    'Early supporter feedback loop': 'Обратная связь от ранних сторонников',
    'Next': 'Далее',
    'What we’re exploring': 'Что мы исследуем',
    'More world interactions': 'Больше взаимодействий с миром',
    'Reusable behavior library': 'Библиотека готовых сценариев',
    'Community sharing and polish': 'Обмен сценариями и улучшение интерфейса',
    '07 / THE STUDIO': '07 / СТУДИЯ',
    'Tools for people who make systems.': 'Инструменты для тех, кто создаёт системы.',
    'Axis is an independent software studio exploring automation, intelligent agents and creative tools. AxBOTS is our first public experiment in making complex behavior feel tangible.': 'Axis — независимая программная студия, исследующая автоматизацию, интеллектуальных агентов и творческие инструменты. AxBOTS — наш первый публичный проект, делающий сложное поведение наглядным.',
    'Follow Axis on Telegram': 'Следить за Axis в Telegram',
    '08 / JOIN AXIS': '08 / ПРИСОЕДИНЯЙТЕСЬ К AXIS',
    'Help shape what comes next.': 'Помогите создать то, что будет дальше.',
    'We are building a small, independent team around automation, intelligent agents and creative software.': 'Мы собираем небольшую независимую команду для работы над автоматизацией, интеллектуальными агентами и творческим ПО.',
    'Talk to the manager': 'Написать менеджеру',
    'Designers': 'Дизайнеры',
    'Programmers': 'Программисты',
    'SMM specialists': 'SMM-специалисты',
    'Content creators': 'Контент-креаторы',
    '09 / QUESTIONS': '09 / ВОПРОСЫ',
    'Good to know.': 'Полезно знать.',
    'What is included in the beta?': 'Что входит в бета-доступ?',
    'Beta access is for the evolving AxBOTS experience, including early builds, development updates and a place to share feedback. Exact feature availability will change as the system develops.': 'Бета-доступ включает ранние сборки AxBOTS, новости разработки и возможность делиться обратной связью. Набор функций будет меняться по мере развития системы.',
    'Which Minecraft versions are supported?': 'Какие версии Minecraft поддерживаются?',
    'AxBOTS 0.1 BETA is built for Minecraft 1.21.11 on Fabric.': 'AxBOTS 0.1 BETA разработан для Minecraft 1.21.11 на Fabric.',
    'Can I cancel my subscription?': 'Можно ли отменить подписку?',
    'Yes. The early access support plan is intended to be cancellable through the payment platform at any time. Check the payment provider’s current terms for account-specific details.': 'Да. Подписку раннего доступа можно отменить через платёжную платформу в любое время. Актуальные условия доступны в вашем аккаунте платёжного сервиса.',
    'Will AxBOTS become free?': 'Станет ли AxBOTS бесплатным?',
    'The long-term distribution model is still being explored. Supporting the beta gives you access to the current early stage; it does not promise a specific future pricing model.': 'Долгосрочная модель распространения ещё определяется. Поддержка бета-версии даёт доступ к текущему этапу, но не гарантирует конкретную модель оплаты в будущем.',
    'Independent tools for intelligent automation.': 'Независимые инструменты для интеллектуальной автоматизации.',
    'Axis. AxBOTS is an independent project.': 'Axis. AxBOTS — независимый проект.'
  };
  const translatableNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let textNode;
  while ((textNode = walker.nextNode())) {
    const source = textNode.nodeValue.trim();
    if (source && Object.prototype.hasOwnProperty.call(russian, source)) {
      translatableNodes.push({ node: textNode, source, original: textNode.nodeValue });
    }
  }
  const originalTitle = document.title;
  const setLanguage = (language, save = true) => {
    const isRussian = language === 'ru';
    translatableNodes.forEach(({ node, source, original }) => {
      node.nodeValue = isRussian ? original.replace(source, russian[source]) : original;
    });
    document.documentElement.lang = isRussian ? 'ru' : 'en';
    updateDemoVideo(isRussian ? 'ru' : 'en');
    document.title = isRussian ? 'AxBOTS — Визуальная автоматизация Minecraft-ботов' : originalTitle;
    const switcher = document.querySelector('.language-switcher');
    if (switcher) switcher.dataset.currentLanguage = isRussian ? 'ru' : 'en';
    document.querySelectorAll('.language-option').forEach((item) => {
      const active = item.dataset.language === (isRussian ? 'ru' : 'en');
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    if (save) localStorage.setItem('axis-language', isRussian ? 'ru' : 'en');
  };
  document.querySelectorAll('.language-option').forEach((option) => option.addEventListener('click', () => {
    setLanguage(option.dataset.language || 'en');
  }));
  setLanguage(localStorage.getItem('axis-language') === 'ru' ? 'ru' : 'en', false);
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}());
