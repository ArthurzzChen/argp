"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Lang = "zh" | "ja" | "en";

const content: Record<Lang, any> = {
  zh: {
    navServices: "服務 Services",
    navProducts: "產品 Products",
    navContact: "聯絡 Contact",
    heroTitle: "科技服務代理：跨域的數位治理生態",
    heroLead:
      "アーサー総合企画+雅瑟科技，工業應用、支援跨境商務，與您一同拓展下一步。",
    heroSub1:
      "Professional Industrial Electronic Solutions: Bridging Advanced Engineering and Automation across Tokyo and Taiwan.",
    heroSub2:
      "日台を跨ぐ産業用電子機器の応用サービス。確かな技術力で、次世代の自動化ソリューションを。",
    contactUs: "聯絡我們",
    fillForm: "填寫需求表單",
    heroCaption: "you can trust us",
    servicesTitle: "核心服務領域",
    servicesSub: "半導體工業用電子應用服務 (Industrial Electronic service)",
    cards: [
      {
        num: "01 Global Component Agency",
        title: "國際電子元件代理",
        text: "對接全球 500 大企業的頂尖供應體系。我們代理高品質工業級電子零件，不僅提供產品，更提供深度的技術應用服務。專注於協助國際級企業優化零件選型、確保規格一致性，並建立穩定的跨國供應渠道。",
      },
      {
        num: "02 E2E Supply Chain Governance",
        title: "端到端供應鏈治理與採購服務",
        text: "針對複雜的國際生產環境，提供從採購風險控管、供應商開發到物流效能優化的一站式代理服務。運用戰略思維，協助企業實現採購流程的優化，確保供應鏈在高壓環境下的韌性與合規。",
      },
      {
        num: "03 JP–TW BRIDGE",
        title: "日台商業對接",
        text: "雙語溝通與在地脈絡，支援商務開發、合作洽談與長期關係經營。",
      },
    ],
    productsTitle: "產品整合式解決方案",
    productsSub:
      "專注功率半導體封裝技術，並提供全球電子元件與工業感測的代理與供應能力。",
    leftTitle: "功率半導體",
    leftTag: "Products",
    leftLead:
      "我們致力於改善功率半導體封裝的限制。透過創新的「整合導電結構」，解決了高頻、高壓環境下的散熱與電感損耗難題，為 AI 伺服器、電動車及工業電源提供更精簡、更強大的硬體基礎。",
    leftList: [
      "高密度功率模組基板 (High-Density Power Module Substrates) 降低寄生電感 (Parasitic Inductance)，提升切換頻率與能源轉換效率。",
      "整合型橋式整流方案 (Integrated Bridge Rectifier Solutions) 消除打線疲勞導致的失效風險，大幅提升元件可靠度。",
      "模組化散熱增強封裝 (Modular Thermal Enhancement Packaging) 提供對稱式的熱路徑管理，解決高溫環境下的應力分佈問題，延長元件壽命。",
    ],
    rightTitle: "全球電子元件與工業感測解決方案",
    rightTag: "Global Component Distribution & Industrial Sensing Solutions",
    rightLead:
      "憑藉深厚的產業背景與敏銳的市場反應，我們為客戶連結全球頂尖供應源，確保生產線永不停歇。我們的核心服務 (Core Service Offerings)：",
    rightList: [
      "全方位電子元件代理 (Comprehensive Component Sourcing)",
      "工業用偵測與感測技術 (Industrial Sensing & Automation)",
    ],
    scope:
      "範疇：代理各類精密感測器、流量計、壓力偵測及工業自動化核心組件。",
    contactTitle: "聯絡我們",
    contactSub: "商務洽詢、合作提案，歡迎來信或來電；亦可留下需求，我們將盡快回覆。",
    phone: "電話",
    name: "姓名",
    demand: "需求描述",
    namePlaceholder: "您的稱呼",
    demandPlaceholder: "請簡述合作意向、時程或希望討論的主題。",
    submit: "送出",
  },
  ja: {
    navServices: "サービス Services",
    navProducts: "製品 Products",
    navContact: "お問い合わせ Contact",
    heroTitle: "技術サービス代理：越境デジタル統合エコシステム",
    heroLead:
      "アーサー総合企画と雅瑟科技が、産業応用と越境ビジネスを支援し、次の成長をともに実現します。",
    heroSub1:
      "Professional Industrial Electronic Solutions: Bridging Advanced Engineering and Automation across Tokyo and Taiwan.",
    heroSub2:
      "日台を跨ぐ産業用電子機器の応用サービス。確かな技術力で、次世代の自動化ソリューションを。",
    contactUs: "お問い合わせ",
    fillForm: "フォームを記入",
    heroCaption: "you can trust us",
    servicesTitle: "コアサービス領域",
    servicesSub:
      "半導体・産業用電子の応用サービス (Industrial Electronic service)",
    cards: [
      {
        num: "01 Global Component Agency",
        title: "国際電子部品代理",
        text: "グローバル大手企業の供給ネットワークに接続し、高品質な産業用電子部品を提供します。部品供給だけでなく、選定最適化と仕様整合、安定した越境供給体制まで支援します。",
      },
      {
        num: "02 E2E Supply Chain Governance",
        title: "End-to-End サプライチェーンガバナンス",
        text: "調達リスク管理、サプライヤー開拓、物流効率化までを一気通貫で支援し、高負荷環境でも強靭でコンプライアンスに準拠した供給体制を構築します。",
      },
      {
        num: "03 JP–TW BRIDGE",
        title: "日台ビジネス連携",
        text: "バイリンガル対応と現地知見により、商談開発、協業交渉、長期パートナーシップの構築を支援します。",
      },
    ],
    productsTitle: "製品統合ソリューション",
    productsSub:
      "パワー半導体パッケージング技術に注力し、電子部品と産業用センシングの供給力を提供します。",
    leftTitle: "パワー半導体",
    leftTag: "Products",
    leftLead:
      "当社はパワー半導体パッケージの制約改善に取り組んでいます。革新的な統合導電構造により、高周波・高電圧環境での放熱とインダクタンス損失を解決し、AIサーバー、EV、産業電源の基盤を強化します。",
    leftList: [
      "高密度パワーモジュール基板 (High-Density Power Module Substrates)：寄生インダクタンスを低減し、スイッチング周波数と電力変換効率を向上。",
      "統合型ブリッジ整流ソリューション (Integrated Bridge Rectifier Solutions)：ワイヤ疲労による故障リスクを抑え、信頼性を向上。",
      "モジュール型放熱強化パッケージ (Modular Thermal Enhancement Packaging)：対称的な熱経路管理で高温環境の応力分布課題を解決し、寿命を延長。",
    ],
    rightTitle: "グローバル電子部品・産業センシングソリューション",
    rightTag: "Global Component Distribution & Industrial Sensing Solutions",
    rightLead:
      "業界知見と市場対応力に基づき、世界トップクラスの供給源へ接続し、生産ラインの継続稼働を支援します。Core Service Offerings:",
    rightList: [
      "電子部品の包括的調達 (Comprehensive Component Sourcing)",
      "産業用センシングと自動化技術 (Industrial Sensing & Automation)",
    ],
    scope:
      "対応範囲：精密センサー、流量計、圧力検知、産業オートメーション向け中核部品の代理供給。",
    contactTitle: "お問い合わせ",
    contactSub:
      "商談・提携のご相談はメールまたはお電話にてご連絡ください。フォームからのご連絡にも順次対応いたします。",
    phone: "電話",
    name: "お名前",
    demand: "ご相談内容",
    namePlaceholder: "お名前",
    demandPlaceholder: "ご要望・予定時期・ご相談内容をご記入ください。",
    submit: "送信",
  },
  en: {
    navServices: "Services",
    navProducts: "Products",
    navContact: "Contact",
    heroTitle: "Industrial Technology Services Across Borders",
    heroLead:
      "Arthur General Planning and Arthur Tech Ventures support industrial applications and cross-border business growth between Japan and Taiwan.",
    heroSub1:
      "Professional Industrial Electronic Solutions: Bridging Advanced Engineering and Automation across Tokyo and Taiwan.",
    heroSub2:
      "Cross-border industrial electronics solutions built on reliable engineering and practical automation expertise.",
    contactUs: "Contact Us",
    fillForm: "Request Form",
    heroCaption: "you can trust us",
    servicesTitle: "Core Service Areas",
    servicesSub: "Industrial electronic solutions for semiconductor and power systems",
    cards: [
      {
        num: "01 Global Component Agency",
        title: "International Electronic Components Agency",
        text: "We connect clients with top-tier global suppliers and provide high-quality industrial components, technical application support, and stable cross-border supply channels.",
      },
      {
        num: "02 E2E Supply Chain Governance",
        title: "End-to-End Supply Chain Governance",
        text: "From procurement risk control and supplier development to logistics optimization, we help enterprises build resilient and compliant supply chain operations.",
      },
      {
        num: "03 JP–TW BRIDGE",
        title: "Japan-Taiwan Business Bridge",
        text: "With bilingual communication and local market context, we support business development, partnership talks, and long-term cooperation.",
      },
    ],
    productsTitle: "Integrated Product Solutions",
    productsSub:
      "Focused on power semiconductor packaging, plus global component distribution and industrial sensing support.",
    leftTitle: "Power Semiconductors",
    leftTag: "Products",
    leftLead:
      "We improve the limitations of power semiconductor packaging through an innovative integrated conductive structure, solving thermal and inductance-loss issues under high-frequency and high-voltage conditions.",
    leftList: [
      "High-Density Power Module Substrates: reduce parasitic inductance and improve switching frequency and conversion efficiency.",
      "Integrated Bridge Rectifier Solutions: reduce wire-fatigue failure risks and improve device reliability.",
      "Modular Thermal Enhancement Packaging: manage symmetric thermal paths, mitigate stress in high-temperature environments, and extend component lifespan.",
    ],
    rightTitle: "Global Component Distribution & Industrial Sensing Solutions",
    rightTag: "Global Component Distribution & Industrial Sensing Solutions",
    rightLead:
      "With deep industry experience and agile market response, we connect customers to top global supply sources. Core Service Offerings:",
    rightList: [
      "Comprehensive Component Sourcing",
      "Industrial Sensing & Automation",
    ],
    scope:
      "Scope: precision sensors, flow meters, pressure detection devices, and core industrial automation components.",
    contactTitle: "Contact",
    contactSub:
      "For business inquiries and partnership opportunities, contact us by email or phone, or submit your request below.",
    phone: "Phone",
    name: "Name",
    demand: "Requirement Details",
    namePlaceholder: "Your name",
    demandPlaceholder: "Tell us your goals, timeline, and key requirements.",
    submit: "Submit",
  },
};

const LANGS: Array<{ id: Lang; label: string }> = [
  { id: "zh", label: "中" },
  { id: "ja", label: "日" },
  { id: "en", label: "EN" },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = useMemo(() => content[lang], [lang]);

  return (
    <div className="corp-page">
      <header className="corp-header">
        <div className="corp-header-inner">
          <a href="#" className="corp-logo">
            Arthur General Planning Co., Ltd.
            <span>アーサー総合企画 × 雅瑟科技創投</span>
          </a>
          <div className="flex items-center gap-4">
            <nav className="corp-nav" aria-label="主要導覽">
              <a href="#services">{t.navServices}</a>
              <a href="#products-services">{t.navProducts}</a>
              <a href="#contact">{t.navContact}</a>
            </nav>
            <div className="flex rounded border border-slate-300 bg-white">
              {LANGS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLang(item.id)}
                  className={`px-2.5 py-1 text-xs font-semibold transition ${
                    lang === item.id
                      ? "bg-slate-800 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                  aria-pressed={lang === item.id}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="corp-main">
        <section className="corp-hero" aria-labelledby="hero-title">
          <div className="corp-fade">
            <p className="corp-eyebrow">Corporate · International</p>
            <h1 id="hero-title">{t.heroTitle}</h1>
            <p className="corp-hero-lead">{t.heroLead}</p>
            <div className="corp-hero-bilingual">
              <p className="mb-2 font-medium text-slate-700">{t.heroSub1}</p>
              <p className="text-slate-600">{t.heroSub2}</p>
            </div>
            <div className="corp-hero-actions">
              <a className="corp-btn-primary" href="mailto:art@argp.online">
                {t.contactUs}
              </a>
              <a className="corp-btn-outline" href="#contact">
                {t.fillForm}
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
              <div className="corp-hero-visual-caption">{t.heroCaption}</div>
            </div>
          </div>
        </section>

        <section id="services" className="corp-section" aria-labelledby="services-title">
          <div className="corp-section-head">
            <p className="corp-section-label">Services</p>
            <h2 id="services-title" className="corp-section-title">
              {t.servicesTitle}
            </h2>
            <p className="corp-section-sub">{t.servicesSub}</p>
          </div>
          <div className="corp-cards">
            {t.cards.map((card: any) => (
              <article className="corp-card" key={card.num}>
                <p className="corp-card-num">{card.num}</p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <div className="corp-band" id="products-services" aria-labelledby="products-services-title">
        <div className="corp-band-inner">
          <div className="corp-section-head">
            <p className="corp-section-label">Products</p>
            <h2 id="products-services-title" className="corp-section-title">
              {t.productsTitle}
            </h2>
            <p className="corp-section-sub">{t.productsSub}</p>
          </div>

          <div className="corp-entities">
            <div className="corp-entity">
              <h3>{t.leftTitle}</h3>
              <p className="corp-entity-en">{t.leftTag}</p>
              <p>{t.leftLead}</p>
              <ol className="mt-3 list-decimal list-inside space-y-2">
                {t.leftList.map((line: string) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
            </div>

            <div className="corp-entity">
              <h3>{t.rightTitle}</h3>
              <p className="corp-entity-en">{t.rightTag}</p>
              <p>{t.rightLead}</p>
              <ol className="mt-3 list-decimal list-inside space-y-2">
                {t.rightList.map((line: string) => (
                  <li key={line}>{line}</li>
                ))}
              </ol>
              <p className="mt-3">{t.scope}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="corp-main">
        <section id="contact" className="corp-section pb-0" aria-labelledby="contact-title">
          <div className="corp-contact-grid">
            <div>
              <div className="corp-section-head">
                <p className="corp-section-label">Contact</p>
                <h2 id="contact-title" className="corp-section-title">
                  {t.contactTitle}
                </h2>
                <p className="corp-section-sub">{t.contactSub}</p>
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
                  <strong className="text-slate-800">{t.phone}</strong>
                  <br />
                  台灣： <a href="tel:+886974046509">+886 974-046-509</a>
                  <br />
                  日本： <a href="tel:+817052699899">+81 70-5269-9899</a>
                </p>
              </div>
            </div>
            <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" aria-label="contact form">
              <div className="mb-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    {t.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="corp-input"
                    placeholder={t.namePlaceholder}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-slate-700">
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
                <label htmlFor="needs" className="mb-1.5 block text-xs font-semibold text-slate-700">
                  {t.demand}
                </label>
                <textarea id="needs" name="needs" className="corp-textarea" placeholder={t.demandPlaceholder} />
              </div>
              <p className="mb-4 text-xs text-slate-500">
                * <a href="mailto:art@argp.online" className="text-[#1e4976]">art@argp.online</a>
              </p>
              <button type="button" className="corp-btn-primary w-full sm:w-auto">
                {t.submit}
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
              <p className="mt-2">〒133-0057 東京都江戸川区西小岩５丁目１３番１３号</p>
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
