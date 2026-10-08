export type Language = 'en' | 'hi';

export interface ServiceItem {
  id: string;
  number: string;
  titleEn: string;
  titleHi: string;
  shortDescEn: string;
  shortDescHi: string;
  fullDescEn: string;
  fullDescHi: string;
  featuresEn: string[];
  featuresHi: string[];
  bestForEn: string;
  bestForHi: string;
  timelineEn: string;
  timelineHi: string;
  category: 'tax' | 'audit' | 'corporate' | 'advisory';
}

export interface ReviewItem {
  id: string;
  author: string;
  roleEn: string;
  roleHi: string;
  businessTypeEn: string;
  businessTypeHi: string;
  rating: number;
  reviewEn: string;
  reviewHi: string;
  dateEn: string;
  dateHi: string;
  locationEn: string;
  locationHi: string;
}

export interface DueDateItem {
  id: string;
  titleEn: string;
  titleHi: string;
  date: string;
  month: string;
  category: 'gst' | 'income_tax' | 'roc' | 'tds';
  descriptionEn: string;
  descriptionHi: string;
  penaltyWarningEn: string;
  penaltyWarningHi: string;
}

/**
 * =========================================================================
 * TEMPLATE CONFIGURATION - CUSTOMIZE YOUR FIRM DETAILS HERE
 * Change the values below to personalize this website template for your firm.
 * =========================================================================
 */
export const FIRM_DETAILS = {
  // Brand Names
  nameEn: "Apex & Associates Chartered Accountants",
  nameHi: "एपेक्स & एसोसिएट्स चार्टर्ड अकाउंटेंट्स",
  shortName: "Apex & Associates",
  shortNameHi: "एपेक्स & एसोसिएट्स",
  logoInitial: "A",

  // Contact Information
  phoneDisplay: "098765 43210",
  phoneRaw: "+919876543210",
  email: "consult@apexassociates.in",

  // Physical Location
  address: "Suite B-102, Premier Financial Towers, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
  landmarkEn: "Opposite Commercial Hub, Financial District",
  landmarkHi: "कमर्शियल हब के सामने, फाइनेंशियल डिस्ट्रिक्ट",
  pincode: "226010",
  city: "Lucknow",
  state: "Uttar Pradesh",

  // Business Hours
  hoursEn: "Monday – Saturday: 10:00 AM – 7:00 PM (Sunday by Appointment)",
  hoursHi: "सोमवार – शनिवार: सुबह 10:00 से शाम 7:00 बजे तक (रविवार अपॉइंटमेंट पर)",

  // Social Proof & Trust
  googleRating: 4.9,
  googleReviewCount: 65,

  // External Links
  googleMapsUrl: "https://maps.google.com/?q=Lucknow+Uttar+Pradesh",
  whatsappUrl: "https://wa.me/919876543210?text=Hello%20Apex%20%26%20Associates,%20I%20would%20like%20to%20consult%20regarding%20Chartered%20Accountancy%20services."
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "gst",
    number: "01",
    category: "tax",
    titleEn: "GST Advisory, Filing & Litigation",
    titleHi: "जीएसटी पंजीकरण, रिटर्न व विवाद समाधान",
    shortDescEn: "End-to-end Goods and Services Tax compliance, monthly filings, 2B vs 3B input tax credit reconciliation, and departmental notice management.",
    shortDescHi: "जीएसटी पंजीकरण, नियमित रिटर्न फाइलिंग (GSTR-1/3B), इनपुट टैक्स क्रेडिट मिलान और नोटिसों का कानूनी समाधान।",
    fullDescEn: "We streamline indirect tax operations to ensure zero penalty exposure. From seamless registration to complex inverted duty refund claims, annual GSTR-9/9C audit reconciliations, and representation before GST authorities.",
    fullDescHi: "हम आपके व्यापार के जीएसटी अनुपालन को पूरी तरह त्रुटिरहित बनाते हैं। नया रजिस्ट्रेशन, 2B रिकॉन्सिलिएशन, वार्षिक रिटर्न (9/9C) और विभागीय नोटिसों का त्वरित जवाब।",
    featuresEn: [
      "Monthly & Quarterly GSTR-1, GSTR-3B filings with ITC verification",
      "GSTR-9 Annual Return & GSTR-9C Reconciliation statements",
      "Drafting and personal representation for GST scrutiny notices and DRC-01",
      "GST refund processing (Export, inverted duty structure, excess cash balance)",
      "E-way bill and E-invoicing system integration"
    ],
    featuresHi: [
      "मासिक और त्रैमासिक GSTR-1 व 3B फाइलिंग और ITC मिलान",
      "वार्षिक रिटर्न GSTR-9 और ऑडिट रिकॉन्सिलिएशन GSTR-9C",
      "जीएसटी स्क्रूटनी नोटिस व DRC-01 का कानूनी प्रारूप और प्रतिनिधित्व",
      "एक्सपोर्ट एवं इनवर्टेड ड्यूटी स्ट्रक्चर जीएसटी रिफंड",
      "ई-वे बिल और ई-इनवॉइसिंग प्रणाली सेटअप"
    ],
    bestForEn: "Retailers, Wholesalers, Manufacturers, E-commerce sellers, and Service providers.",
    bestForHi: "व्यापारी, निर्माता, ई-कॉमर्स विक्रेता और सेवा प्रदाता।",
    timelineEn: "Turnaround: 24–48 hours for standard filings",
    timelineHi: "समय सीमा: सामान्य रिटर्न के लिए 24–48 घंटे"
  },
  {
    id: "income-tax",
    number: "02",
    category: "tax",
    titleEn: "Income Tax Compliance & Scrutiny Defense",
    titleHi: "आयकर रिटर्न (ITR) एवं स्क्रूटनी परामर्श",
    shortDescEn: "Strategic ITR filing for individuals, professionals, HUFs, and corporate entities with maximum legitimate tax optimization and notice defense.",
    shortDescHi: "व्यक्तिगत, प्रोफेशनल्स, फर्म्स और कंपनियों के लिए सटीक आईटीआर फाइलिंग, कर बचत योजना और इनकम टैक्स नोटिस समाधान।",
    fullDescEn: "Navigating direct tax laws with precision. We handle everything from basic salary returns to complex capital gains on real estate/equities, foreign assets disclosure, faceless assessment replies, and advance tax estimation.",
    fullDescHi: "प्रत्यक्ष कर नियमों का पूर्ण अनुपालन। पूंजीगत लाभ (Capital Gains), रियल एस्टेट टैक्स, अग्रिम कर गणना और फेसलेस असेसमेंट में सशक्त प्रतिनिधित्व।",
    featuresEn: [
      "ITR 1 through ITR 7 filing for Salaried, Business, Doctors, and Corporates",
      "Capital gains calculation for property, shares, mutual funds, and crypto",
      "Advance tax computation and quarterly scheduling to avoid 234B/C interest",
      "Handling Section 143(1) intimation defects, 148 reassessments, and 139(9) notices",
      "TDS return preparation, Form 16/16A generation, and 26AS/AIS reconciliation"
    ],
    featuresHi: [
      "वेतनभोगी, डॉक्टर, व्यापारी और कंपनियों के लिए ITR-1 से ITR-7 फाइलिंग",
      "प्रॉपर्टी और शेयर बाजार के पूंजीगत लाभ (Capital Gains) की सही गणना",
      "अग्रिम कर (Advance Tax) की समय पर गणना ताकि पेनल्टी न लगे",
      "धारा 143(1), 148 और स्क्रूटनी नोटिस का विधिक प्रत्युत्तर",
      "टीडीएस रिटर्न, फॉर्म 16/16A और AIS/TIS का पूर्ण मिलान"
    ],
    bestForEn: "Doctors, Lawyers, Real Estate investors, High-Net-Worth Individuals, and Business Owners.",
    bestForHi: "डॉक्टर्स, वकील, रियल एस्टेट निवेशक, व्यवसायी एवं एचएनआई टैक्सपेयर्स।",
    timelineEn: "Same-day filing for standard ITRs upon document submission",
    timelineHi: "दस्तावेज़ प्राप्त होने पर उसी दिन अथवा 24 घंटे में फाइलिंग"
  },
  {
    id: "audit",
    number: "03",
    category: "audit",
    titleEn: "Auditing & Assurance Services",
    titleHi: "ऑडिटिंग एवं एश्योरेंस सेवाएं",
    shortDescEn: "Statutory audits, Tax audits under Section 44AB, internal control reviews, and stock audits executed with rigorous ICAI compliance standards.",
    shortDescHi: "आयकर धारा 44AB के अंतर्गत टैक्स ऑडिट, वैधानिक ऑडिट, आंतरिक नियंत्रण जांच एवं स्टॉक सत्यापन।",
    fullDescEn: "Independent and insightful audit services that provide stakeholders, banks, and tax authorities with undeniable confidence in your financial reports. We identify leakages, strengthen internal controls, and ensure flawless statutory reporting.",
    fullDescHi: "पारदर्शी और निष्पक्ष ऑडिट सेवाएं जो बैंकों, निवेशकों और कर विभागों के समक्ष आपकी बैलेंस शीट की साख मजबूत करती हैं।",
    featuresEn: [
      "Statutory Audit for Private Limited Companies and Trusts",
      "Tax Audit under Section 44AB of the Income Tax Act with Form 3CA/3CB and 3CD",
      "Internal audit & risk governance evaluation for mid-market businesses",
      "Bank stock audit and physical inventory verification",
      "Trust & Society audit for 12A/80G registered NGOs"
    ],
    featuresHi: [
      "प्राइवेट लिमिटेड कंपनियों और ट्रस्टों के लिए वैधानिक ऑडिट",
      "आयकर धारा 44AB के अंतर्गत फॉर्म 3CD टैक्स ऑडिट",
      "व्यावसायिक जोखिम कम करने हेतु इंटरनल ऑडिट",
      "बैंक लोन के लिए स्टॉक ऑडिट और स्टॉक सत्यापन",
      "12A व 80G रजिस्टर्ड संस्थाओं एवं सोसायटियों का ऑडिट"
    ],
    bestForEn: "Businesses with turnover exceeding ₹1 Crore (₹10 Crore for digital transactions), Private Limited firms, and NGOs.",
    bestForHi: "1 करोड़ से अधिक टर्नओवर वाले व्यापार, प्राइवेट लिमिटेड कंपनियां एवं संस्थाएं।",
    timelineEn: "Comprehensive multi-tier review within committed regulatory deadlines",
    timelineHi: "निर्धारित वैधानिक समय सीमा के भीतर गहन समीक्षा"
  },
  {
    id: "corporate-reg",
    number: "04",
    category: "corporate",
    titleEn: "Company, LLP & Startup Registration",
    titleHi: "कंपनी, एलएलपी व स्टार्टअप रजिस्ट्रेशन",
    shortDescEn: "Turnkey business incorporation across Private Limited, LLP, One Person Company (OPC), Section 8, along with Startup India and MSME certifications.",
    shortDescHi: "प्राइवेट लिमिटेड कंपनी, एलएलपी, ओपीसी का त्वरित निगमन, एमएसएमई उद्योग आधार एवं स्टार्टअप इंडिया पंजीकरण।",
    fullDescEn: "Launch your enterprise on a rock-solid legal foundation. We handle name reservation, digital signatures (DSC), Director Identification (DIN), drafting MOA & AOA, PAN/TAN, and bank account setup guidance.",
    fullDescHi: "अपने नए उद्यम की शुरुआत मजबूत नींव के साथ करें। नाम अनुमोदन, डीएससी, एमओए/एओए ड्राफ्टिंग, इनकॉरपोरेशन सर्टिफिकेट और शुरुआती बैंकिंग अनुपालन।",
    featuresEn: [
      "Private Limited Company, LLP, and OPC incorporation in 5–7 business days",
      "Startup India DPIIT recognition for tax exemptions under Section 80-IAC",
      "MSME Udyam registration for priority lending and interest subsidies",
      "Trade License, Shop & Establishment, and FSSAI Food Licensing",
      "Annual ROC compliance (AOC-4, MGT-7/7A, DIR-3 KYC)"
    ],
    featuresHi: [
      "प्राइवेट लिमिटेड और एलएलपी का 5 से 7 कार्य दिवसों में पूर्ण निगमन",
      "डीपीआईआईटी (DPIIT) स्टार्टअप इंडिया मान्यता एवं टैक्स छूट सहायता",
      "एमएसएमई उद्यम रजिस्ट्रेशन एवं सरकारी योजनाओं का लाभ",
      "ट्रेड लाइसेंस, शॉप एक्ट एवं एफएसएसएआई लाइसेंस",
      "वार्षिक आरओसी फाइलिंग (AOC-4, MGT-7) और डायरेक्टर केवाईसी"
    ],
    bestForEn: "First-time founders, technology startups, expanding family partnerships, and traders converting to corporate entities.",
    bestForHi: "नए उद्यमी, स्टार्टअप्स, साझेदारी फर्म और कॉर्पोरेट में बदलने वाले व्यापार।",
    timelineEn: "5–7 business days from complete KYC documentation",
    timelineHi: "दस्तावेज़ पूर्ण होने पर 5-7 कार्य दिवस"
  },
  {
    id: "accounting",
    number: "05",
    category: "advisory",
    titleEn: "Cloud Accounting, Bookkeeping & Virtual CFO",
    titleHi: "अकाउंटिंग, बहीखाता एवं वर्चुअल सीएफओ",
    shortDescEn: "Reliable day-to-day bookkeeping, monthly bank reconciliations, payroll compliance, and executive MIS reporting to empower data-driven decisions.",
    shortDescHi: "दैनिक बहीखाता, मासिक बैंक समाधान, पेरोल, टीडीएस कटौती और मासिक एमआईएस रिपोर्टिंग ताकि आप अपने व्यापार पर ध्यान दे सकें।",
    fullDescEn: "Say goodbye to chaotic year-end ledger cleanups. Our team manages your accounting continuously using modern cloud software, giving you real-time visibility into your cash flow, profit margins, and liabilities.",
    fullDescHi: "वर्ष के अंत में कागज़ात खोजने का झंझट खत्म। सुचारु बहीखाता, जिससे आपकी बैलेंस शीट हमेशा अपडेट रहे।",
    featuresEn: [
      "Daily ledger posting, invoice recording, and bank statement reconciliations",
      "Monthly Profit & Loss, Balance Sheet, and Accounts Receivable/Payable aging reports",
      "Payroll processing, salary slip generation, PF & ESIC returns",
      "Virtual CFO advisory for cash flow management and overhead cost control",
      "Transition from manual paper registers to secure cloud software"
    ],
    featuresHi: [
      "दैनिक लेजर पोस्टिंग, बिल प्रविष्टि और मासिक बैंक समाधान",
      "मासिक लाभ-हानि खाता (P&L), बैलेंस शीट और उधारी सूची",
      "कर्मचारी पेरोल, सैलरी स्लिप और पीएफ/ईएसआई अनुपालन",
      "कैश फ्लो प्रबंधन एवं लागत नियंत्रण हेतु वर्चुअल सीएफओ सलाह",
      "कागजी खातों से सुरक्षित क्लाउड अकाउंटिंग में स्थानांतरण"
    ],
    bestForEn: "SMEs, clinics & hospitals, educational institutes, builders, and fast-growing service agencies.",
    bestForHi: "मध्यम उद्योग, क्लिनिक एवं अस्पताल, स्कूल, बिल्डर्स और सेवा एजेंसियां।",
    timelineEn: "Continuous weekly / monthly engagement packages",
    timelineHi: "निरंतर साप्ताहिक/मासिक सहयोग योजनाएं"
  },
  {
    id: "tax-planning",
    number: "06",
    category: "tax",
    titleEn: "Strategic Tax Planning & Wealth Structuring",
    titleHi: "रणनीतिक कर योजना एवं संपत्ति संरक्षण",
    shortDescEn: "100% legal, proactive tax structuring that minimizes liability before financial year-end through smart deductions, exemptions, and entity optimization.",
    shortDescHi: "वित्तीय वर्ष समाप्त होने से पूर्व वैध तरीके से टैक्स बचत, डिडक्शन और पारिवारिक संपत्ति का टैक्स-एफिशिएंट ढांचा।",
    fullDescEn: "Tax compliance records what happened; tax planning shapes what happens next. We work with clients ahead of March 31st to structure family HUFs, optimize salaries, utilize 54F/54EC capital gain exemptions, and safeguard hard-earned wealth.",
    fullDescHi: "31 मार्च से पहले उचित योजना बनाकर आप लाखों रुपये की वैध बचत कर सकते हैं। एचयूएफ निर्माण, सैलरी स्ट्रक्चरिंग और 54EC बॉण्ड्स द्वारा टैक्स बचत।",
    featuresEn: [
      "Pre-March 31 financial review to evaluate Old vs New Tax Regime optimization",
      "Structuring Hindu Undivided Family (HUF) for secondary tax slab benefits",
      "Section 54, 54EC, and 54F capital gains reinvestment planning on real estate sales",
      "Succession planning, gift deed structuring, and family trust setups",
      "NRI taxation, repatriation of funds (Form 15CA/15CB certification)"
    ],
    featuresHi: [
      "ओल्ड बनाम न्यू टैक्स रिजीम का तुलनात्मक विश्लेषण और चयन",
      "टैक्स बचत के लिए हिंदू अनडिवाइडेड फैमिली (HUF) का गठन",
      "प्रॉपर्टी बिक्री पर 54 और 54EC बॉन्ड्स द्वारा टैक्स मुक्ति",
      "पारिवारिक संपत्ति बंटवारा और गिफ्ट डीड टैक्स परामर्श",
      "अनिवासी भारतीय (NRI) टैक्सेशन एवं 15CA/15CB सर्टिफिकेट्स"
    ],
    bestForEn: "High-earning executives, doctors, commercial property sellers, and business families.",
    bestForHi: "उच्च वेतनभोगी, डॉक्टर्स, प्रॉपर्टी विक्रेता एवं व्यवसायी परिवार।",
    timelineEn: "In-depth strategic consultation session with actionable roadmap",
    timelineHi: "विस्तृत व्यक्तिगत परामर्श एवं कार्ययोजना"
  },
  {
    id: "business-advisory",
    number: "07",
    category: "advisory",
    titleEn: "Project Reports, CMA Data & Bank Loans",
    titleHi: "प्रोजेक्ट रिपोर्ट, सीएमए डाटा व बैंक लोन एडवाइजरी",
    shortDescEn: "Bank-approved Credit Monitoring Arrangement (CMA) data, Detailed Project Reports (DPR), and financial feasibility models for securing commercial credit.",
    shortDescHi: "बैंक लोन, सीसी लिमिट, टर्म लोन के लिए सीएमए डाटा, विस्तृत प्रोजेक्ट रिपोर्ट (DPR) और वित्तीय मॉडल तैयार करना।",
    fullDescEn: "Securing capital from nationalized and private banks requires ironclad financial projections. We craft comprehensive CMA data reports, debt-service coverage ratio (DSCR) analyses, and valuation models that bankers respect.",
    fullDescHi: "बैंकों से सीसी लिमिट या टर्म लोन स्वीकृत कराने हेतु सटीक सीएमए डाटा और प्रोजेक्ट रिपोर्ट तैयार करते हैं।",
    featuresEn: [
      "Comprehensive CMA Data preparation for Working Capital (CC/OD) limits",
      "Detailed Project Reports (DPR) for new manufacturing units and commercial setups",
      "Debt Service Coverage Ratio (DSCR), Break-Even, and Sensitivity forecasting",
      "PMEGP, Mudra, and industrial subsidy scheme documentation",
      "Financial health audit prior to bank loan applications to avoid rejection"
    ],
    featuresHi: [
      "वर्किंग कैपिटल (CC/OD) लिमिट के लिए बैंक-स्वीकृत सीएमए डाटा",
      "नई औद्योगिक इकाइयों और कमर्शियल प्रोजेक्ट्स के लिए डीपीआर (DPR)",
      "डीएससीआर (DSCR) और ब्रेक-ईवन विश्लेषण",
      "मुद्रा लोन, पीएमईजीपी (PMEGP) एवं सरकारी सब्सिडी मार्गदर्शन",
      "लोन आवेदन से पूर्व वित्तीय रिपोर्ट की मजबूती की जांच"
    ],
    bestForEn: "Industrialists, contractors, hospital promoters, and expanding enterprises.",
    bestForHi: "उद्योगपति, ठेकेदार, अस्पताल संचालक और विस्तार कर रहे व्यवसायी।",
    timelineEn: "3–5 working days with complete financial assumptions",
    timelineHi: "3 से 5 कार्य दिवस"
  }
];

export const TESTIMONIALS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Dr. R. K. Srivastava",
    roleEn: "Senior Surgeon & Healthcare Director",
    roleHi: "वरिष्ठ सर्जन एवं चिकित्सा निदेशक",
    businessTypeEn: "Private Hospital & Healthcare Practice",
    businessTypeHi: "निजी अस्पताल एवं क्लीनिक",
    rating: 5,
    reviewEn: "Partnering with this firm has been an invaluable asset for our medical practice. Handling professional hospital billing, complex 194J TDS deductions, and personal high-bracket ITR filing was always overwhelming until we engaged them. Their precision, ethical transparency, and immediate accessibility make them our trusted advisors.",
    reviewHi: "इस फर्म के साथ जुड़ना हमारे मेडिकल प्रैक्टिस के लिए एक बड़ा सहारा रहा है। अस्पताल के बिलिंग, टीडीएस और डॉक्टरों के आईटीआर को उन्होंने बहुत ही पारदर्शी और व्यवस्थित तरीके से संभाला है। समयबद्धता और व्यक्तिगत ध्यान इनकी सबसे बड़ी विशेषता है।",
    dateEn: "Verified Client Review",
    dateHi: "सत्यापित ग्राहक समीक्षा",
    locationEn: "Healthcare District",
    locationHi: "हेल्थकेयर डिस्ट्रिक्ट"
  },
  {
    id: "rev-2",
    author: "Manish Agarwal",
    roleEn: "Managing Director",
    roleHi: "प्रबंध निदेशक",
    businessTypeEn: "Wholesale Distribution & Manufacturing",
    businessTypeHi: "थोक व्यापार एवं निर्माण उद्योग",
    rating: 5,
    reviewEn: "We received a complicated GST DRC-01 demand notice regarding input tax credit discrepancy from the department. The team handled the reconciliation with absolute mastery. They drafted a meticulous factual reply citing relevant circulars, represented our case personally, and got the notice settled with zero undue liability.",
    reviewHi: "हमें इनपुट टैक्स क्रेडिट के संबंध में जीएसटी विभाग से डीआरसी-01 का जटिल नोटिस मिला था। इस टीम ने हमारे पूरे खातों का 2B से 3B मिलान किया और इतने सटीक कानूनी तथ्यों के साथ जवाब पेश किया कि बिना किसी अतिरिक्त जुर्माने के मामला हल हो गया।",
    dateEn: "Verified Client Review",
    dateHi: "सत्यापित ग्राहक समीक्षा",
    locationEn: "Industrial Estate",
    locationHi: "औद्योगिक क्षेत्र"
  },
  {
    id: "rev-3",
    author: "Pooja Verma",
    roleEn: "Co-Founder",
    roleHi: "सह-संस्थापक",
    businessTypeEn: "Tech & E-commerce Startup",
    businessTypeHi: "टेक एवं ई-कॉमर्स स्टार्टअप",
    rating: 5,
    reviewEn: "From registering our Private Limited company to getting Startup India DPIIT recognition and setting up our monthly GST and TDS schedules, the entire journey was seamless. Unlike large impersonal firms where you only speak to junior trainees, here you get direct consultation from experienced chartered accountants.",
    reviewHi: "हमारी प्राइवेट लिमिटेड कंपनी के इनकॉरपोरेशन से लेकर स्टार्टअप इंडिया मान्यता और नियमित जीएसटी फाइलिंग तक, पूरी प्रक्रिया बेहद सुगम रही। यहां सीधे अनुभवी चार्टर्ड अकाउंटेंट से मार्गदर्शन मिलता है।",
    dateEn: "Verified Client Review",
    dateHi: "सत्यापित ग्राहक समीक्षा",
    locationEn: "Technology Park",
    locationHi: "टेक्नोलॉजी पार्क"
  },
  {
    id: "rev-4",
    author: "Er. Satish Chandra Tiwari",
    roleEn: "Civil Contractor & Infrastructure Builder",
    roleHi: "शासकीय निर्माण ठेकेदार",
    businessTypeEn: "Infrastructure & Civil Projects",
    businessTypeHi: "सिविल इन्फ्रास्ट्रक्चर प्रोजेक्ट्स",
    rating: 5,
    reviewEn: "In civil contracting, working capital limits and bank CMA reports are the lifeblood of our business. The firm prepared our CMA data and balance sheet projections with such financial rigor that our bank enhanced our CC limit in record time. Their tax audit under Section 44AB is impeccably documented.",
    reviewHi: "ठेकेदारी में बैंक की सीसी लिमिट और सीएमए डाटा सबसे महत्वपूर्ण होते हैं। फर्म ने हमारी बैलेंस शीट और सीएमए रिपोर्ट इतनी मजबूती से तैयार की कि बैंक ने बहुत कम समय में लिमिट बढ़ा दी। टैक्स ऑडिट में इनका कार्य सराहनीय है।",
    dateEn: "Verified Client Review",
    dateHi: "सत्यापित ग्राहक समीक्षा",
    locationEn: "Commercial Zone",
    locationHi: "कमर्शियल जोन"
  },
  {
    id: "rev-5",
    author: "Alok Gupta",
    roleEn: "Retail Chain Proprietor",
    roleHi: "रिटेल व्यापार संचालक",
    businessTypeEn: "Consumer Goods & Retail",
    businessTypeHi: "उपभोक्ता सामग्री एवं खुदरा व्यापार",
    rating: 5,
    reviewEn: "I have been consulting them for the past 4 years for all my business accounting and GST filings. They never let a single statutory deadline pass, saving us from late fees every single quarter. Their office is conveniently accessible, and their phone support is prompt and courteous.",
    reviewHi: "पिछले 4 वर्षों से मैं अपने व्यापार के सभी खातों और जीएसटी के लिए इनसे जुड़ा हूँ। कभी भी कोई अंतिम तिथि नहीं छूटी, जिससे हम पेनल्टी से हमेशा सुरक्षित रहते हैं। इनका सहयोग हमेशा तत्पर रहता है।",
    dateEn: "Verified Client Review",
    dateHi: "सत्यापित ग्राहक समीक्षा",
    locationEn: "Metro Central",
    locationHi: "मेट्रो सेंट्रल"
  },
  {
    id: "rev-6",
    author: "Vandana Tripathi",
    roleEn: "IT Consultant & NRI Taxpayer",
    roleHi: "आईटी सलाहकार एवं एनआरआई टैक्सपेयर",
    businessTypeEn: "Cross-Border Consultancy & Real Estate",
    businessTypeHi: "प्रॉपर्टी बिक्री एवं विदेशी आय",
    rating: 5,
    reviewEn: "Sold ancestral property and needed capital gains advice and 15CA/15CB repatriation certification. The senior partner explained Section 54EC exemptions and capital gains accounts scheme clearly without legal jargon. Saved substantial tax legitimately. Highly recommended.",
    reviewHi: "पुश्तैनी संपत्ति बेचने के बाद कैपिटल गेन टैक्स और 54EC बॉण्ड्स के बारे में बहुत सरल भाषा में समझाया। पूरी प्रक्रिया कानूनी रूप से पारदर्शी रही और काफी टैक्स की बचत हुई। प्रॉपर्टी टैक्स के मामलों में इनकी विशेषज्ञता अद्भुत है।",
    dateEn: "Verified Client Review",
    dateHi: "सत्यापित ग्राहक समीक्षा",
    locationEn: "South City",
    locationHi: "साउथ सिटी"
  }
];

export const COMPLIANCE_CALENDAR_DATA: DueDateItem[] = [
  {
    id: "due-1",
    month: "OCTOBER",
    date: "11 OCT",
    titleEn: "GSTR-1 (Monthly Filers)",
    titleHi: "GSTR-1 (मासिक रिटर्न)",
    category: "gst",
    descriptionEn: "Outward supplies statement for taxpayers with aggregate turnover > ₹5 Crore or opting for monthly filing.",
    descriptionHi: "5 करोड़ से अधिक टर्नओवर वाले या मासिक विकल्प चुनने वाले व्यापारियों के लिए बिक्री विवरण।",
    penaltyWarningEn: "Late fee: ₹50/day (₹20 for Nil return) + blocking of E-way bill generation.",
    penaltyWarningHi: "विलंब शुल्क: ₹50/दिन (शून्य पर ₹20) और ई-वे बिल ब्लॉक होने का जोखिम।"
  },
  {
    id: "due-2",
    month: "OCTOBER",
    date: "20 OCT",
    titleEn: "GSTR-3B (Monthly Filers)",
    titleHi: "GSTR-3B (मासिक टैक्स भुगतान)",
    category: "gst",
    descriptionEn: "Summary return and tax liability payment for the preceding calendar month.",
    descriptionHi: "पूर्व माह की शुद्ध टैक्स देनदारी का भुगतान और इनपुट टैक्स क्रेडिट क्लेम।",
    penaltyWarningEn: "Interest @ 18% p.a. on net tax liability + mandatory late fees.",
    penaltyWarningHi: "बकाया टैक्स पर 18% वार्षिक ब्याज और अनिवार्य लेट फीस।"
  },
  {
    id: "due-3",
    month: "OCTOBER",
    date: "31 OCT",
    titleEn: "Income Tax Audit Report (AY 2026-27)",
    titleHi: "टैक्स ऑडिट रिपोर्ट (फॉर्म 3CA/3CD)",
    category: "income_tax",
    descriptionEn: "Filing of audit report under Section 44AB for corporate assessees and accounts required to be audited.",
    descriptionHi: "कंपनियों एवं 44AB के अंतर्गत आने वाले व्यापारियों की वैधानिक ऑडिट रिपोर्ट सबमिशन।",
    penaltyWarningEn: "Penalty under Sec 271B: 0.5% of turnover or ₹1,50,000 (whichever is lower).",
    penaltyWarningHi: "धारा 271B के तहत टर्नओवर का 0.5% या ₹1,50,000 तक भारी जुर्माना।"
  },
  {
    id: "due-4",
    month: "NOVEMBER",
    date: "07 NOV",
    titleEn: "TDS / TCS Deposit for October",
    titleHi: "मासिक टीडीएस/टीसीएस चालान जमा",
    category: "tds",
    descriptionEn: "Deposit of tax deducted at source under various sections (194C, 194J, 194I, 192, etc.).",
    descriptionHi: "अक्टूबर माह में काटी गई टीडीएस राशि का सरकारी कोष में चालान 281 द्वारा भुगतान।",
    penaltyWarningEn: "Interest @ 1.5% per month from deduction date till actual deposit date.",
    penaltyWarningHi: "कटौती तिथि से वास्तविक जमा तक 1.5% प्रति माह का अनिवार्य ब्याज।"
  },
  {
    id: "due-5",
    month: "DECEMBER",
    date: "15 DEC",
    titleEn: "Advance Tax 3rd Installment",
    titleHi: "अग्रिम कर (Advance Tax) तीसरी किस्त",
    category: "income_tax",
    descriptionEn: "75% of total estimated tax liability for individuals and corporate entities.",
    descriptionHi: "चालू वित्तीय वर्ष की अनुमानित कुल टैक्स देनदारी का 75% भुगतान।",
    penaltyWarningEn: "Mandatory interest under Sections 234B & 234C if short-paid.",
    penaltyWarningHi: "कम जमा करने पर धारा 234B और 234C के तहत हर माह अतिरिक्त ब्याज।"
  },
  {
    id: "due-6",
    month: "DECEMBER",
    date: "31 DEC",
    titleEn: "Annual GST Return (GSTR-9 & 9C)",
    titleHi: "वार्षिक जीएसटी रिटर्न (GSTR-9/9C)",
    category: "gst",
    descriptionEn: "Annual GST return and reconciliation audit statement for the preceding financial year.",
    descriptionHi: "विगत वित्तीय वर्ष का वार्षिक समेकित रिटर्न और सीए सर्टिफाइड रिकॉन्सिलिएशन।",
    penaltyWarningEn: "Severe penalties under Section 47 of CGST Act for delayed submissions.",
    penaltyWarningHi: "विलंब पर धारा 47 के अंतर्गत प्रतिदिन जुर्माना।"
  }
];

export const WHY_CHOOSE_US_DATA = [
  {
    number: "01",
    titleEn: "Direct Senior CA Attention",
    titleHi: "वरिष्ठ सीए का प्रत्यक्ष मार्गदर्शन",
    descEn: "Unlike volume-driven aggregators where your files are handed off to anonymous interns, your financial matters receive senior chartered accountant scrutiny from day one.",
    descHi: "यहाँ आपके महत्वपूर्ण वित्तीय दस्तावेज किसी अनुभवहीन कर्मचारी के हाथ में नहीं जाते, बल्कि वरिष्ठ चार्टर्ड अकाउंटेंट द्वारा व्यक्तिगत रूप से जांचे जाते हैं।"
  },
  {
    number: "02",
    titleEn: "Strict Zero-Penalty Discipline",
    titleHi: "शून्य पेनल्टी का संकल्प",
    descEn: "Our automated internal compliance radar tracks every GST, TDS, advance tax, and ROC deadline well in advance, keeping your business 100% compliant and saving you in late fees.",
    descHi: "हमारा अनुपालन सिस्टम हर अंतिम तिथि पर पहले से नजर रखता है, जिससे आपका व्यापार किसी भी पेनल्टी या ब्याज से हमेशा सुरक्षित रहता है।"
  },
  {
    number: "03",
    titleEn: "4.9★ Proven Client Trust",
    titleHi: "4.9★ प्रमाणित विश्वास",
    descEn: "With 60+ verified reviews, we are proud to be one of the highest-rated CA practices, recognized for punctual delivery and zero tax surprise.",
    descHi: "60 से अधिक वास्तविक समीक्षाओं और 4.9 रेटिंग के साथ, हम सबसे भरोसेमंद और सम्मानित सीए फर्म्स में से एक हैं।"
  },
  {
    number: "04",
    titleEn: "100% Confidential & Ethical Practice",
    titleHi: "पूर्ण गोपनीयता एवं नैतिक सिद्धांत",
    descEn: "Operating strictly under the code of ethics prescribed by the Institute of Chartered Accountants of India (ICAI). Your bank data and proprietary information remain secure.",
    descHi: "आईसीएआई (ICAI) की सख्त आचार संहिता के तहत कार्य। आपकी व्यावसायिक जानकारी और बैंक खाते पूर्ण रूप से गोपनीय और सुरक्षित रहते हैं।"
  }
];

export const FAQS_DATA = [
  {
    qEn: "Where is the firm's office located?",
    qHi: "फर्म का कार्यालय कहाँ स्थित है?",
    aEn: "Our primary office is conveniently located in the premier financial district. We offer ample parking and private conference rooms for confidential financial and tax advisory sessions.",
    aHi: "हमारा मुख्य कार्यालय प्रमुख व्यावसायिक क्षेत्र में स्थित है, जहाँ गोपनीय वित्तीय एवं कर चर्चा हेतु सुविधाजनक वातावरण उपलब्ध है।"
  },
  {
    qEn: "Can I book a consultation online or over the phone?",
    qHi: "क्या मैं फोन या ऑनलाइन परामर्श बुक कर सकता हूँ?",
    aEn: "Yes! You can call our direct helpline, message us on WhatsApp, or use the interactive booking form on this website to schedule an in-office appointment or telephonic consultation.",
    aHi: "हाँ! आप हमें सीधे फोन पर कॉल कर सकते हैं, व्हाट्सएप कर सकते हैं, या इस वेबसाइट पर दिए गए फॉर्म से अपॉइंटमेंट बुक कर सकते हैं।"
  },
  {
    qEn: "What documents are required for filing Income Tax Return (ITR)?",
    qHi: "आईटीआर (ITR) फाइलिंग के लिए कौन-से दस्तावेज़ आवश्यक हैं?",
    aEn: "For salaried individuals: Form 16, PAN card, Aadhaar, bank statements, and investment proofs. For business owners and professionals: Profit & Loss account, balance sheet, bank statements, GST return copies, and Form 26AS/AIS. We guide you through the exact checklist upon inquiry.",
    aHi: "वेतनभोगियों के लिए: फॉर्म 16, पैन कार्ड, आधार, बैंक स्टेटमेंट और निवेश प्रमाण। व्यापारियों के लिए: बैंक स्टेटमेंट, जीएसटी रिटर्न, 26AS/AIS और खर्चों का विवरण।"
  },
  {
    qEn: "Do you handle GST notices and tax dispute assessments?",
    qHi: "क्या आप जीएसटी नोटिस और असेसमेंट का समाधान करते हैं?",
    aEn: "Yes, specialized litigation and dispute defense is one of our marquee strengths. We handle Section 61 scrutiny notices, DRC-01 demand notices, mismatch reconciliations (2B vs 3B), and represent clients before tax officers.",
    aHi: "जी हाँ, जीएसटी नोटिस (DRC-01), मिसमैच स्क्रूटनी और आयकर विभाग के नोटिसों का विधिक प्रारूप तैयार करना और विभाग के समक्ष पक्ष रखना हमारी प्रमुख विशेषज्ञता है।"
  },
  {
    qEn: "How much time does it take to register a Private Limited Company or LLP?",
    qHi: "प्राइवेट लिमिटेड कंपनी या एलएलपी रजिस्टर करने में कितना समय लगता है?",
    aEn: "Once all shareholder KYC documents (PAN, Aadhaar, bank statement) and DSC approvals are complete, the Ministry of Corporate Affairs (MCA) typically issues the Certificate of Incorporation within 5 to 7 working days.",
    aHi: "सभी आवश्यक केवाईसी दस्तावेज (पैन, आधार, बैंक स्टेटमेंट आदि) प्राप्त होने के बाद एमसीए द्वारा 5 से 7 कार्य दिवसों में कंपनी का रजिस्ट्रेशन प्रमाण पत्र जारी हो जाता है।"
  }
];
