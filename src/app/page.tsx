import Image from "next/image";

export default function Home() {
  return (
    <div className="corp-page">
      <header className="corp-header">
        <div className="corp-header-inner">
          <a href="#" className="corp-logo">
            Arthur General Planning Co., Ltd.
            <span>アーサー総合企画 × 雅瑟科技創投</span>
          </a>
          <nav className="corp-nav" aria-label="主要導覽">
            <a href="#services">服務 Services</a>
            <a href="#products-services">產品 Products</a>
            <a href="#contact">聯絡 Contact</a>
          </nav>
        </div>
      </header>

      <main className="corp-main">
        <section className="corp-hero" aria-labelledby="hero-title">
          <div className="corp-fade">
            <p className="corp-eyebrow">Corporate · International</p>
            <h1 id="hero-title">科技服務代理：跨域的數位治理生態</h1>
            <p className="corp-hero-lead">
              アーサー総合企画+雅瑟科技，工業應用、支援跨境商務，與您一同拓展下一步。
            </p>
            <div className="corp-hero-bilingual">
              <p className="mb-2 font-medium text-slate-700">
              Professional Industrial Electronic Solutions: Bridging Advanced Engineering and Automation across Tokyo and Taiwan..
              </p>
              <p lang="ja" className="text-slate-600">
              日台を跨ぐ産業用電子機器の応用サービス。確かな技術力で、次世代の自動化ソリューションを。
              </p>
            </div>
            <div className="corp-hero-actions">
              <a className="corp-btn-primary" href="mailto:art@argp.online">
                聯絡我們
              </a>
              <a className="corp-btn-outline" href="#contact">
                填寫需求表單
              </a>
            </div>
          </div>
          <div className="corp-fade-delay">
            <div className="corp-hero-visual">
              <Image
                src="/hero-consulting.png"
                alt="Business consultants in Tokyo office"
                fill
                priority
                className="object-cover"
              />
              <div className="corp-hero-visual-grid" />
              <div className="corp-hero-visual-caption">
                you can trust us
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="corp-section"
          aria-labelledby="services-title"
        >
          <div className="corp-section-head">
            <p className="corp-section-label">Services</p>
            <h2 id="services-title" className="corp-section-title">
              核心服務領域
            </h2>
            <p className="corp-section-sub">
            半導體工業用電子應用服務 (Industrial Electronic service)
            </p>
          </div>
          <div className="corp-cards">
            <article className="corp-card">
              <p className="corp-card-num">01 Global Component Agency</p>
              <h3>國際電子元件代理</h3>
              <p>
              對接全球 500 大企業的頂尖供應體系。
              我們代理高品質工業級電子零件，不僅提供產品，更提供深度的技術應用服務。專注於協助國際級企業優化零件選型、確保規格一致性，並建立穩定的跨國供應渠道。
              </p>
            </article>
            <article className="corp-card">
              <p className="corp-card-num">02 E2E Supply Chain Governance</p>
              <h3>端到端供應鏈治理與採購服務</h3>
              <p>
              針對複雜的國際生產環境，提供從採購風險控管、供應商開發到物流效能優化的一站式代理服務。運用戰略思維，協助企業實現採購流程的優化，確保供應鏈在高壓環境下的韌性與合規。
              </p>
            </article>
            <article className="corp-card">
              <p className="corp-card-num">03 JP–TW BRIDGE</p>
              <h3>日台商業對接</h3>
              <p>
                雙語溝通與在地脈絡，支援商務開發、合作洽談與長期關係經營。
              </p>
            </article>
          </div>
        </section>
      </main>

      <div
        className="corp-band"
        id="products-services"
        aria-labelledby="products-services-title"
      >
        <div className="corp-band-inner">
          <div className="corp-section-head">
            <p className="corp-section-label">Products</p>
            <h2
              id="products-services-title"
              className="corp-section-title"
            >
              產品整合式解決方案
            </h2>
            <p className="corp-section-sub">
              專注功率半導體封裝技術，並提供全球電子元件與工業感測的代理與供應能力。
            </p>
          </div>

          <div className="corp-entities">
            <div className="corp-entity">
              <h3>功率半導體</h3>
              <p className="corp-entity-en">Products</p>
              <p>
                我們致力於改善功率半導體封裝的限制。透過創新的
                「整合導電結構」，解決了高頻、高壓環境下的散熱與電感損耗難題，為 AI
                伺服器、電動車及工業電源提供更精簡、更強大的硬體基礎。
              </p>
              <ol className="mt-3 list-decimal list-inside space-y-2">
                <li>
                  高密度功率模組基板 (High-Density Power Module Substrates) 降低寄生電感
                  (Parasitic Inductance)，提升切換頻率與能源轉換效率。
                </li>
                <li>
                  整合型橋式整流方案 (Integrated Bridge Rectifier Solutions) 消除打線疲勞導致的失效風險，大幅提升元件可靠度。
                </li>
                <li>
                  模組化散熱增強封裝 (Modular Thermal Enhancement Packaging) 提供對稱式的熱路徑管理，解決高溫環境下的應力分佈問題，延長元件壽命。
                </li>
              </ol>
            </div>

            <div className="corp-entity">
              <h3>
                全球電子元件與工業感測解決方案
              </h3>
              <p className="corp-entity-en">
                Global Component Distribution &amp; Industrial Sensing Solutions
              </p>
              <p>
                憑藉深厚的產業背景與敏銳的市場反應，我們為客戶連結全球頂尖供應源，確保生產線永不停歇。我們的核心服務 (Core Service Offerings)
                ：
              </p>

              <ol className="mt-3 list-decimal list-inside space-y-2">
                <li>全方位電子元件代理 (Comprehensive Component Sourcing)</li>
                <li>工業用偵測與感測技術 (Industrial Sensing &amp; Automation)</li>
              </ol>

              <p className="mt-3">
                <strong>範疇：</strong>
                代理各類精密感測器、流量計、壓力偵測及工業自動化核心組件。　
                         </p>
            </div>
          </div>
        </div>
      </div>

      <div className="corp-main">
        <section
          id="contact"
          className="corp-section pb-0"
          aria-labelledby="contact-title"
        >
          <div className="corp-contact-grid">
            <div>
              <div className="corp-section-head">
                <p className="corp-section-label">Contact</p>
                <h2 id="contact-title" className="corp-section-title">
                  聯絡我們
                </h2>
                <p className="corp-section-sub">
                  商務洽詢、合作提案，歡迎來信或來電；亦可留下需求，我們將盡快回覆。
                </p>
              </div>
              <div className="corp-contact-links">
                <p>
                  <strong className="text-slate-800">Email</strong>
                  <br />
                  <a href="mailto:art@argp.online">art@argp.online</a>
                  <br />
                  <a href="mailto:arthurzz@gmail.com">arthurzz@gmail.com</a>
                </p>
                <p className="mt-4">
                  <strong className="text-slate-800">電話</strong>
                  <br />
                  台灣：{" "}
                  <a href="tel:+886974046509">+886 974-046-509</a>
                  <br />
                  日本：{" "}
                  <a href="tel:+817052699899">+81 70-5269-9899</a>
                </p>
              </div>
            </div>
            <form
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              aria-label="聯絡表單"
            >
              <div className="mb-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-semibold text-slate-700"
                  >
                    姓名
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="corp-input"
                    placeholder="您的稱呼"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-semibold text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="corp-input"
                    placeholder="name@company.com"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="needs"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  需求描述
                </label>
                <textarea
                  id="needs"
                  name="needs"
                  className="corp-textarea"
                  placeholder="請簡述合作意向、時程或希望討論的主題。"
                />
              </div>
              <p className="mb-4 text-xs text-slate-500">
                *{" "}
                <a href="mailto:art@argp.online" className="text-[#1e4976]">
                  art@argp.online
                </a>
                。
              </p>
              <button type="button" className="corp-btn-primary w-full sm:w-auto">
                送出
              </button>
            </form>
          </div>
        </section>
      </div>

      <footer className="corp-footer">
        <div className="corp-footer-inner">
          <div className="corp-footer-grid">
            <div>
              <h4>Japan</h4>
              <p lang="ja">アーサー総合企画株式会社</p>
              <p>Arthur General Planning Co., Ltd.</p>
              <p className="mt-2">
                〒133-0057 東京都江戸川区西小岩５丁目１３番１３号
              </p>
              <p>法人番号：3011701028383</p>
            </div>
            <div>
              <h4>Taiwan</h4>
              <p>雅瑟科技創投股份有限公司</p>
              <p>Arthur Tech Ventures Co., Ltd.</p>
              <p className="mt-2">統一編號：90829374</p>
              <p>臺北市中山區民生東路一段42號12樓之6</p>
            </div>
          </div>
          <p className="mt-8 border-t border-slate-700/80 pt-6 text-center text-slate-500">
            © {new Date().getFullYear()} Arthur Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
