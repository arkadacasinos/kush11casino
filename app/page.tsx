export default function Page() {
  return (
    <main className="kc-page-shell">
      <header className="kc-site-header">
        <a className="kc-brand-mark" href="#top" aria-label="Kush Casino — на главную">
          <span className="kc-brand-k">K</span>
          <span>Kush <em>Casino</em></span>
        </a>
        <a className="kc-header-link" href="#guide">Как начать <span aria-hidden="true">↗</span></a>
      </header>

      <section className="kc-hero" id="top" aria-labelledby="hero-title">
        <div className="kc-hero-copy">
          <p className="kc-eyebrow">Игра начинается с ясного выбора</p>
          <h1 id="hero-title">Kush Casino — игра онлайн без лишних шагов</h1>
          <p className="kc-hero-lead">Kush Casino официальный сайт собрал в одном месте понятный вход, популярные игры и подсказки для спокойного старта с телефона.</p>
          <div className="kc-hero-actions">
            <a className="kc-primary-action" href="#guide">Перейти к игре <span aria-hidden="true">→</span></a>
            <span className="kc-safe-note"><span className="kc-status-dot" aria-hidden="true" /> 18+ играйте ответственно</span>
          </div>
        </div>
        <figure className="kc-hero-art">
          <img src="/kush-casino-hero.png" alt="Игровой стол с фишками в зелёных и золотых тонах" fetchPriority="high" />
          <figcaption>Тихий вечер. Чёткие правила. Ваш ритм.</figcaption>
        </figure>
      </section>

      <section className="kc-intro-grid" id="guide" aria-label="О Kush Casino">
        <div className="kc-section-label"><span>01</span><span>Коротко о главном</span></div>
        <div className="kc-intro-text">
          <h2>Kush Casino официальный сайт — Куш казино официальный</h2>
          <p>Kush Casino официальный сайт — удобная точка старта для тех, кто хочет играть онлайн с телефона или компьютера. Если вы ищете «куш казино официальный сайт» или «куш казино официальный», ориентируйтесь на адрес и защищённое соединение. Интерфейс не отвлекает от выбора: найдите любимый слот, откройте live-стол или начните с небольшой ставки. Kush Casino официальный сайт помогает быстро сориентироваться новичку, а понятное куш казино не перегружает опытного игрока.</p>
        </div>
      </section>

      <section className="kc-feature-band" aria-labelledby="mirror-title">
        <div className="kc-feature-copy">
          <p className="kc-eyebrow">Доступ из любой точки</p>
          <h2 id="mirror-title">Kush Casino зеркало и Куш казино зеркало рабочее</h2>
          <p>Если основной адрес временно недоступен, Kush Casino зеркало помогает открыть привычную страницу без долгих поисков. Запрос «куш казино зеркало» ведёт к тому же сценарию входа, но всегда проверяйте домен, защищённое соединение и актуальность ссылки. Куш казино зеркало рабочее — это понятный маршрут к играм, а не повод торопиться или вводить данные на неизвестном ресурсе.</p>
          <a className="kc-text-link" href="#responsible">Узнать больше о безопасном входе <span aria-hidden="true">↗</span></a>
        </div>
        <figure className="kc-feature-art">
          <img src="/kush-casino-games.png" alt="Карты, жетоны и зелёное сукно на игровом столе" loading="lazy" />
        </figure>
      </section>

      <section className="kc-play-section" aria-labelledby="play-title">
        <div className="kc-section-label"><span>02</span><span>Понятный старт</span></div>
        <div className="kc-play-content">
          <h2 id="play-title">Kush Casino играть и куш казино играть онлайн</h2>
          <p>Запрос «kush casino играть» или «куш казино играть» обычно означает одно: хочется открыть игру и сразу понять, что делать. Начните с демо-режима, если он доступен, изучите линию выплат и установите личный лимит. В разделе «куш казино играть» легко выбрать слоты, рулетку или карточные игры под свой темп. Не увеличивайте ставку, чтобы отыграться: игра должна оставаться развлечением.</p>
          <div className="kc-tip-list">
            <article><span>01</span><h3>Выберите жанр</h3><p>Слоты для динамики, рулетка для ритма, live-игры для атмосферы.</p></article>
            <article><span>02</span><h3>Проверьте правила</h3><p>Пара минут на условия игры делает решения спокойнее и точнее.</p></article>
            <article><span>03</span><h3>Задайте границу</h3><p>Определите бюджет и время заранее — не меняйте их под эмоциями.</p></article>
          </div>
        </div>
      </section>

      <section className="kc-responsible" id="responsible" aria-labelledby="responsible-title">
        <div>
          <p className="kc-eyebrow">Важная привычка игрока</p>
          <h2 id="responsible-title">Куш казино онлайн — только с ответственным подходом</h2>
        </div>
        <p>Куш казино онлайн может быть интересным досугом, если заранее соблюдать лимиты. Не используйте заемные деньги, делайте перерывы и обращайтесь за помощью, если игра перестаёт быть контролируемой. Этот сайт носит информационный характер и не обещает гарантированный выигрыш.</p>
      </section>

      <footer className="kc-site-footer">
        <div className="kc-footer-top"><span className="kc-footer-brand">Kush Casino</span><span>Информация для совершеннолетних игроков</span></div>
        <nav className="kc-hashtag-cloud" aria-label="Поисковые фразы">
          <a href="#top">#kushcasino</a><a href="#top">#kushcasinoофициальныйсайт</a><a href="#mirror-title">#kushcasinoзеркало</a><a href="#play-title">#kushcasinoиграть</a><a href="#play-title">#кушкасино</a><a href="#play-title">#кушкасиноонлайн</a><a href="#mirror-title">#кушкасинорабочее</a>
        </nav>
        <p className="kc-copyright">© 2026 Kush Casino. Играйте осознанно.</p>
      </footer>
    </main>
  )
}

export const metadata = {
  title: 'Kush Casino — официальный сайт, зеркало и игра онлайн без лишних шагов',
  description: 'Kush Casino: официальный сайт, зеркало и понятный вход в игру онлайн. Читайте советы, выбирайте любимый формат и играйте ответственно с телефона или компьютера.',
}

export const dynamic = 'force-static'

