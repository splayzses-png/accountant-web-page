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
  category: 'tax' | 'gst' | 'corporate' | 'audit' | 'advisory' | 'ip';
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
 * AWASTHI & ASSOCIATES CHARTERED ACCOUNTANTS - PRACTICE CONFIGURATION
 * Verified details for Lucknow, Uttar Pradesh
 * =========================================================================
 */
export const FIRM_DETAILS = {
  // Brand Names & Positioning
  nameEn: "Awasthi & Associates Chartered Accountants",
  nameHi: "अवस्थी & एसोसिएट्स चार्टर्ड अकाउंटेंट्स",
  shortName: "Awasthi & Associates",
  shortNameHi: "अवस्थी & एसोसिएट्स",
  taglineEn: "Chartered Accountants & Financial Advisors · Lucknow",
  taglineHi: "चार्टर्ड अकाउंटेंट्स एवं वित्तीय सलाहकार · लखनऊ",
  logoInitial: "A",

  // Trust Markers
  isoCertified: "ICAI Reg. Professional Practice",
  establishedYear: "Premier CA Practice · Lucknow",
  filingStats: "Trusted by 1,200+ Businesses & Medical Practices",
  googleRating: 4.9,
  googleReviewCount: 63,

  // Contact Information
  phoneDisplay: "098999 77123",
  phoneRaw: "+919899977123",
  email: "office@awasthiassociates.com",

  // Physical Location
  address: "B-2/1008, HIMALAY ENCLAVE-III, opposite APPEX TRAUMA CENTR, Vrindavan Colony, Lucknow, Uttar Pradesh 226029",
  landmarkEn: "Opposite Appex Trauma Centre, Vrindavan Colony",
  landmarkHi: "अपेक्स ट्रॉमा सेंटर के सामने, वृन्दावन कॉलोनी",
  pincode: "226029",
  city: "Lucknow",
  state: "Uttar Pradesh",

  // Business Hours
  hoursEn: "Monday – Saturday: 10:00 AM – 7:30 PM (Sunday by Appointment)",
  hoursHi: "सोमवार – शनिवार: सुबह 10:00 से शाम 7:30 बजे तक (रविवार अपॉइंटमेंट पर)",

  // External Links
  googleMapsUrl: "https://maps.google.com/?q=B-2/1008,+HIMALAY+ENCLAVE-III,+opposite+APPEX+TRAUMA+CENTR,+Vrindavan+Colony,+Lucknow,+Uttar+Pradesh+226029",
  whatsappUrl: "https://wa.me/919899977123?text=Hello%20Awasthi%20%26%20Associates,%20I%20would%20like%20to%20consult%20regarding%20Chartered%20Accountancy%20services."
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    titleEn: "Share Documents Securely",
    titleHi: "दस्तावेज़ सुरक्षित रूप से साझा करें",
    descEn: "Submit your bank statements, Form 16, invoices, or notice letters via our secure encrypted portal or WhatsApp desk.",
    descHi: "अपने फॉर्म 16, बैंक विवरण, बिल या विभागीय नोटिस सुरक्षित पोर्टल अथवा व्हाट्सएप पर साझा करें।"
  },
  {
    step: "02",
    titleEn: "Senior CA Scrutiny & Tax Plan",
    titleHi: "वरिष्ठ सीए द्वारा गहन समीक्षा",
    descEn: "Our experienced tax advocates review every deduction, optimize credits (ITC 2B), and prepare an ironclad statutory draft.",
    descHi: "हमारे कर सलाहकार प्रत्येक छूट की जांच करते हैं, इनपुट क्रेडिट का मिलान करते हैं और कर बचत योजना बनाते हैं।"
  },
  {
    step: "03",
    titleEn: "Filing, Acknowledgement & Support",
    titleHi: "सत्यापित फाइलिंग एवं रसीद",
    descEn: "Instant e-filing with government portals, verified ITR-V/GST receipt delivery, and ongoing support against future scrutiny.",
    descHi: "सरकारी पोर्टल पर तुरंत फाइलिंग, वैधानिक रसीद की डिलीवरी और भविष्य के किसी भी नोटिस का समाधान सहयोग।"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "income-tax",
    number: "01",
    category: "tax",
    titleEn: "Income Tax & Scrutiny Advisory",
    titleHi: "आयकर रिटर्न (ITR) एवं स्क्रूटनी परामर्श",
    shortDescEn: "Complete ITR filing (ITR 1 through 7), high-bracket salary planning, capital gains calculation, foreign asset disclosure, and faceless scrutiny defense.",
    shortDescHi: "वेतनभोगी, व्यापारी और कंपनियों के लिए ITR-1 से 7 तक सटीक फाइलिंग, पूंजीगत लाभ (Capital Gains) और फेसलेस असेसमेंट नोटिस समाधान।",
    fullDescEn: "Comprehensive direct tax solutions ensuring 100% statutory compliance and maximum legitimate savings. We handle complex real estate capital gains, mutual fund taxation, Section 148 reassessment notices, and advance tax estimation.",
    fullDescHi: "प्रत्यक्ष कर नियमों का पूर्ण अनुपालन। पूंजीगत लाभ (Capital Gains), रियल एस्टेट टैक्स, अग्रिम कर गणना और फेसलेस असेसमेंट में सशक्त प्रतिनिधित्व।",
    featuresEn: [
      "ITR 1 to 7 for Salaried, Professionals, Traders, Corporates & NRIs",
      "Capital gains calculation for Real Estate, Stocks, Crypto, Mutual Funds",
      "Handling Section 143(1) defects, 148 reassessments, 139(9) notices & appeals",
      "Advance tax scheduling to prevent Section 234B & 234C interest penalties",
      "TDS returns preparation, Form 16/16A generation, AIS/26AS reconciliation"
    ],
    featuresHi: [
      "वेतनभोगी, डॉक्टर, व्यापारी और कंपनियों के लिए ITR-1 से ITR-7 फाइलिंग",
      "प्रॉपर्टी और शेयर बाजार के पूंजीगत लाभ की सटीक गणना",
      "आयकर धारा 143(1), 148 और स्क्रूटनी नोटिस का विधिक प्रत्युत्तर",
      "अग्रिम कर की समय पर गणना ताकि पेनल्टी न लगे",
      "टीडीएस रिटर्न, फॉर्म 16/16A और AIS/26AS का पूर्ण मिलान"
    ],
    bestForEn: "Salaried Executives, Doctors, Business Owners, Real Estate Investors, and NRIs.",
    bestForHi: "वेतनभोगी, प्रोफेशनल्स, व्यापारी, प्रॉपर्टी विक्रेता एवं एनआरआई।",
    timelineEn: "Same-Day Filing upon document confirmation",
    timelineHi: "दस्तावेज़ मिलने पर उसी दिन फाइलिंग"
  },
  {
    id: "gst",
    number: "02",
    category: "gst",
    titleEn: "GST Compliance, ITC & Litigation",
    titleHi: "जीएसटी पंजीकरण, रिटर्न व विवाद समाधान",
    shortDescEn: "End-to-end Indirect Tax management: GST registration, monthly GSTR-1 & 3B, 2B vs 3B input tax credit reconciliation, inverted duty refunds, and DRC-01 defense.",
    shortDescHi: "जीएसटी पंजीकरण, नियमित रिटर्न फाइलिंग (GSTR-1/3B), इनपुट टैक्स क्रेडिट मिलान, रिफंड और डीआरसी-01 नोटिसों का कानूनी समाधान।",
    fullDescEn: "Eliminate GST penalty risks with our automated invoice tracking and senior advocate representation. From inverted duty refund processing to annual GSTR-9/9C reconciliation audits and department scrutiny management.",
    fullDescHi: "हम आपके व्यापार के जीएसटी अनुपालन को पूरी तरह त्रुटिरहित बनाते हैं। नया रजिस्ट्रेशन, 2B रिकॉन्सिलिएशन, वार्षिक रिटर्न (9/9C) और विभागीय नोटिसों का त्वरित जवाब।",
    featuresEn: [
      "Monthly & Quarterly GSTR-1, GSTR-3B filings with 2B ITC verification",
      "GSTR-9 Annual Return & GSTR-9C Reconciliation Audit Statements",
      "Drafting & personal representation for GST scrutiny notices & DRC-01",
      "GST refund processing (Export zero-rated, inverted duty structure)",
      "E-Way bill & E-Invoicing system configuration for wholesale traders"
    ],
    featuresHi: [
      "मासिक और त्रैमासिक GSTR-1 व 3B फाइलिंग और ITC मिलान",
      "वार्षिक रिटर्न GSTR-9 और ऑडिट रिकॉन्सिलिएशन GSTR-9C",
      "जीएसटी स्क्रूटनी नोटिस व DRC-01 का कानूनी प्रारूप और प्रतिनिधित्व",
      "एक्सपोर्ट एवं इनवर्टेड ड्यूटी स्ट्रक्चर जीएसटी रिफंड",
      "ई-वे बिल और ई-इनवॉइसिंग प्रणाली सेटअप"
    ],
    bestForEn: "Manufacturers, Wholesalers, Retailers, E-commerce sellers, and Service Firms.",
    bestForHi: "व्यापारी, निर्माता, ई-कॉमर्स विक्रेता और सेवा प्रदाता।",
    timelineEn: "24–48 Hours turnaround for regular returns",
    timelineHi: "24–48 घंटे में रिटर्न फाइलिंग"
  },
  {
    id: "corporate-reg",
    number: "03",
    category: "corporate",
    titleEn: "Company, LLP & Startup Registration",
    titleHi: "कंपनी, एलएलपी व स्टार्टअप रजिस्ट्रेशन",
    shortDescEn: "Turnkey business incorporation across Private Limited, LLP, One Person Company (OPC), Section 8 NGO, along with Startup India DPIIT and MSME certifications.",
    shortDescHi: "प्राइवेट लिमिटेड कंपनी, एलएलपी, ओपीसी का त्वरित निगमन, एमएसएमई उद्योग आधार एवं स्टार्टअप इंडिया पंजीकरण।",
    fullDescEn: "Launch your venture on an ironclad corporate framework. We take care of name approval (RUN/SPICe+), digital signatures (DSC), Director Identification (DIN), drafting MOA & AOA, PAN/TAN, and opening corporate bank accounts.",
    fullDescHi: "अपने नए उद्यम की शुरुआत मजबूत नींव के साथ करें। नाम अनुमोदन, डीएससी, एमओए/एओए ड्राफ्टिंग, इनकॉरपोरेशन सर्टिफिकेट और शुरुआती बैंकिंग अनुपालन।",
    featuresEn: [
      "Private Limited, LLP, and OPC incorporation in 5–7 business days",
      "Startup India DPIIT recognition for tax holidays under Section 80-IAC",
      "MSME Udyam registration for priority lending & subsidy schemes",
      "Trade License, Shop & Establishment, and FSSAI Food Licensing",
      "Annual ROC compliance (Form AOC-4, MGT-7, DIR-3 KYC for directors)"
    ],
    featuresHi: [
      "प्राइवेट लिमिटेड और एलएलपी का 5 से 7 कार्य दिवसों में पूर्ण निगमन",
      "डीपीआईआईटी (DPIIT) स्टार्टअप इंडिया मान्यता एवं टैक्स छूट सहायता",
      "एमएसएमई उद्यम रजिस्ट्रेशन एवं सरकारी योजनाओं का लाभ",
      "ट्रेड लाइसेंस, शॉप एक्ट एवं एफएसएसएआई लाइसेंस",
      "वार्षिक आरओसी फाइलिंग (AOC-4, MGT-7) और डायरेक्टर केवाईसी"
    ],
    bestForEn: "Founders, technology startups, family partnerships, and emerging businesses.",
    bestForHi: "नए उद्यमी, स्टार्टअप्स, साझेदारी फर्म और कॉर्पोरेट में बदलने वाले व्यापार।",
    timelineEn: "5–7 Business Days from KYC completion",
    timelineHi: "दस्तावेज़ पूर्ण होने पर 5-7 कार्य दिवस"
  },
  {
    id: "audit",
    number: "04",
    category: "audit",
    titleEn: "Auditing & Statutory Assurance",
    titleHi: "ऑडिटिंग एवं वैधानिक जांच सेवाएं",
    shortDescEn: "Statutory audits, Tax audits under Section 44AB (Form 3CA/3CD), internal risk governance, stock audits, and society audit under ICAI benchmarks.",
    shortDescHi: "आयकर धारा 44AB के अंतर्गत टैक्स ऑडिट, वैधानिक ऑडिट, आंतरिक नियंत्रण जांच एवं स्टॉक सत्यापन।",
    fullDescEn: "Independent, authoritative audit reviews that grant bankers, investors, and regulatory bodies undeniable confidence in your books. We identify tax leakages and establish robust fiscal accounting standards.",
    fullDescHi: "पारदर्शी और निष्पक्ष ऑडिट सेवाएं जो बैंकों, निवेशकों और कर विभागों के समक्ष आपकी बैलेंस शीट की साख मजबूत करती हैं।",
    featuresEn: [
      "Statutory Audit for Private Limited Companies and Trusts",
      "Tax Audit under Section 44AB with Form 3CA/3CB and Form 3CD",
      "Internal audit & risk governance evaluation for mid-market firms",
      "Bank stock audit & physical inventory verification for credit lines",
      "Trust & Society audit for 12A/80G certified non-profit institutions"
    ],
    featuresHi: [
      "प्राइवेट लिमिटेड कंपनियों और ट्रस्टों के लिए वैधानिक ऑडिट",
      "आयकर धारा 44AB के अंतर्गत फॉर्म 3CD टैक्स ऑडिट",
      "व्यावसायिक जोखिम कम करने हेतु इंटरनल ऑडिट",
      "बैंक लोन के लिए स्टॉक ऑडिट और स्टॉक सत्यापन",
      "12A व 80G रजिस्टर्ड संस्थाओं एवं सोसायटियों का ऑडिट"
    ],
    bestForEn: "Businesses with turnover > ₹1 Crore (₹10 Crore digital), Pvt Ltds, and NGOs.",
    bestForHi: "1 करोड़ से अधिक टर्नओवर वाले व्यापार, प्राइवेट लिमिटेड कंपनियां एवं संस्थाएं।",
    timelineEn: "Comprehensive review within committed deadlines",
    timelineHi: "निर्धारित वैधानिक समय सीमा के भीतर गहन समीक्षा"
  },
  {
    id: "advisory",
    number: "05",
    category: "advisory",
    titleEn: "Bank CMA Data & Project Reports (DPR)",
    titleHi: "बैंक लोन सीएमए डाटा व विस्तृत प्रोजेक्ट रिपोर्ट",
    shortDescEn: "Bank-approved Credit Monitoring Arrangement (CMA) reports, Detailed Project Reports (DPR), and financial modeling for securing CC/OD limits and term loans.",
    shortDescHi: "बैंक लोन, सीसी लिमिट, टर्म लोन के लिए सीएमए डाटा, विस्तृत प्रोजेक्ट रिपोर्ट (DPR) और वित्तीय मॉडल तैयार करना।",
    fullDescEn: "Securing capital from nationalized and commercial banks demands financial rigor. We craft bank-ready CMA data statements, DSCR analyses, and break-even forecasts that bankers approve swiftly.",
    fullDescHi: "बैंकों से सीसी लिमिट या टर्म लोन स्वीकृत कराने हेतु सटीक सीएमए डाटा और प्रोजेक्ट रिपोर्ट तैयार करते हैं।",
    featuresEn: [
      "Comprehensive CMA Data preparation for Working Capital (CC/OD) limits",
      "Detailed Project Reports (DPR) for new manufacturing units & expansions",
      "Debt Service Coverage Ratio (DSCR), Break-Even, and Sensitivity forecasting",
      "PMEGP, Mudra, and industrial subsidy scheme documentation",
      "Pre-loan financial health audit to eliminate bank rejection risks"
    ],
    featuresHi: [
      "वर्किंग कैपिटल (CC/OD) लिमिट के लिए बैंक-स्वीकृत सीएमए डाटा",
      "नई औद्योगिक इकाइयों और कमर्शियल प्रोजेक्ट्स के लिए डीपीआर (DPR)",
      "डीएससीआर (DSCR) और ब्रेक-ईवन विश्लेषण",
      "मुद्रा लोन, पीएमईजीपी (PMEGP) एवं सरकारी सब्सिडी मार्गदर्शन",
      "लोन आवेदन से पूर्व वित्तीय रिपोर्ट की मजबूती की जांच"
    ],
    bestForEn: "Industrialists, contractors, hospital promoters, and expanding firms.",
    bestForHi: "उद्योगपति, ठेकेदार, अस्पताल संचालक और विस्तार कर रहे व्यवसायी।",
    timelineEn: "3–5 Working Days with verified assumptions",
    timelineHi: "3 से 5 कार्य दिवस"
  },
  {
    id: "ip",
    number: "06",
    category: "ip",
    titleEn: "Trademark, Copyright & Licenses",
    titleHi: "ट्रेडमार्क, कॉपीराइट एवं कॉर्पोरेट लाइसेंस",
    shortDescEn: "Brand protection through online Trademark filing, objection replies, Copyright registration, ISO 9001 certification support, and statutory trade permits.",
    shortDescHi: "ऑनलाइन ट्रेडमार्क फाइलिंग, ब्रांड सुरक्षा, ऑब्जेक्शन रिप्लाई, कॉपीराइट और आईएसओ सर्टिफिकेशन सहायता।",
    fullDescEn: "Protect your intellectual capital and brand equity. We perform comprehensive trademark clearance searches, file class applications, reply to examination reports, and handle hearing appearances.",
    fullDescHi: "अपने ब्रांड नाम और लोगो को कानूनी सुरक्षा प्रदान करें। ट्रेडमार्क सर्च, क्लास चयन, ऑब्जेक्शन का विधिक प्रत्युत्तर और हियरिंग समाधान।",
    featuresEn: [
      "Online Trademark search & application filing under 45 Trademark Classes",
      "Drafting legal replies for Trademark Examination Objections & Oppositions",
      "Copyright registration for software code, literary works & artistic designs",
      "ISO 9001:2015 Quality Management Systems certification guidance",
      "Import Export Code (IEC) registration with DGFT for foreign trade"
    ],
    featuresHi: [
      "45 ट्रेडमार्क क्लास के तहत ऑनलाइन ट्रेडमार्क सर्च एवं आवेदन",
      "ट्रेडमार्क ऑब्जेक्शन और एग्जामिनेशन रिपोर्ट का कानूनी जवाब",
      "सॉफ्टवेयर कोड, साहित्यिक व कलात्मक कृतियों का कॉपीराइट",
      "आईएसओ (ISO 9001:2015) क्वालिटी मैनेजमेंट सर्टिफिकेशन",
      "डीजीएफटी (DGFT) इंपोर्ट एक्सपोर्ट कोड (IEC) रजिस्ट्रेशन"
    ],
    bestForEn: "Brands, e-commerce sellers, manufacturers, software creators, and exporters.",
    bestForHi: "ब्रांड्स, ई-कॉमर्स विक्रेता, सॉफ्टवेयर डेवलपर्स और निर्यातक।",
    timelineEn: "Same-Day application filing & TM number generation",
    timelineHi: "उसी दिन आवेदन एवं टीएम नंबर प्राप्ति"
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
    reviewEn: "Partnering with Awasthi & Associates has been an invaluable asset for our medical practice in Lucknow. Handling hospital billing, complex 194J TDS deductions, and personal high-bracket ITR filing was always overwhelming until we engaged them. Their office opposite Apex Trauma Centre makes them extremely accessible, and their precision is unmatched.",
    reviewHi: "अवस्थी & एसोसिएट्स के साथ जुड़ना हमारे मेडिकल प्रैक्टिस के लिए एक बड़ा सहारा रहा है। अस्पताल के बिलिंग, टीडीएस और डॉक्टरों के आईटीआर को उन्होंने बहुत ही पारदर्शी और व्यवस्थित तरीके से संभाला है। अपेक्स ट्रॉमा सेंटर के सामने होने से संपर्क भी बहुत आसान रहता है।",
    dateEn: "Verified Client Review",
    dateHi: "सत्यापित ग्राहक समीक्षा",
    locationEn: "Vrindavan Colony, Lucknow",
    locationHi: "वृन्दावन कॉलोनी, लखनऊ"
  },
  {
    id: "rev-2",
    author: "Manish Agarwal",
    roleEn: "Managing Director",
    roleHi: "प्रबंध निदेशक",
    businessTypeEn: "Wholesale Distribution & Manufacturing",
    businessTypeHi: "थोक व्यापार एवं निर्माण उद्योग",
    rating: 5,
    reviewEn: "We received a complicated GST DRC-01 demand notice regarding input tax credit discrepancy from the department. Awasthi & Associates handled the reconciliation with absolute mastery. They drafted a factual reply citing circulars and settled the notice with zero undue liability.",
    reviewHi: "हमें इनपुट टैक्स क्रेडिट के संबंध में जीएसटी विभाग से डीआरसी-01 का जटिल नोटिस मिला था। अवस्थी & एसोसिएट्स ने हमारे पूरे खातों का 2B से 3B मिलान किया और सटीक कानूनी तथ्यों के साथ जवाब पेश किया कि बिना किसी अतिरिक्त जुर्माने के मामला हल हो गया।",
    dateEn: "Verified Client Review",
    dateHi: "सत्यापित ग्राहक समीक्षा",
    locationEn: "Transport Nagar, Lucknow",
    locationHi: "ट्रांसपोर्ट नगर, लखनऊ"
  },
  {
    id: "rev-3",
    author: "Pooja Verma",
    roleEn: "Co-Founder",
    roleHi: "सह-संस्थापक",
    businessTypeEn: "Tech & E-commerce Startup",
    businessTypeHi: "टेक एवं ई-कॉमर्स स्टार्टअप",
    rating: 5,
    reviewEn: "From registering our Private Limited company to getting Startup India DPIIT recognition and setting up our trademark and GST, the entire journey was seamless. You get direct consultation from experienced chartered accountants who genuinely care.",
    reviewHi: "हमारी प्राइवेट लिमिटेड कंपनी के इनकॉरपोरेशन से लेकर स्टार्टअप इंडिया मान्यता, ट्रेडमार्क और जीएसटी तक पूरी प्रक्रिया बेहद सुगम रही। यहां सीधे अनुभवी चार्टर्ड अकाउंटेंट्स से मार्गदर्शन मिलता है।",
    dateEn: "Verified Client Review",
    dateHi: "सत्यापित ग्राहक समीक्षा",
    locationEn: "Gomti Nagar, Lucknow",
    locationHi: "गोमती नगर, लखनऊ"
  },
  {
    id: "rev-4",
    author: "Er. Satish Chandra Tiwari",
    roleEn: "Civil Contractor & Infrastructure Builder",
    roleHi: "शासकीय निर्माण ठेकेदार",
    businessTypeEn: "Infrastructure & Civil Projects",
    businessTypeHi: "सिविल इन्फ्रास्ट्रक्चर प्रोजेक्ट्स",
    rating: 5,
    reviewEn: "In civil contracting, working capital limits and bank CMA reports are the lifeblood of our business. Awasthi & Associates prepared our CMA data and balance sheet projections with such financial rigor that our bank enhanced our CC limit in record time.",
    reviewHi: "ठेकेदारी में बैंक की सीसी लिमिट और सीएमए डाटा सबसे महत्वपूर्ण होते हैं। अवस्थी & एसोसिएट्स ने हमारी बैलेंस शीट और सीएमए रिपोर्ट इतनी मजबूती से तैयार की कि बैंक ने बहुत कम समय में लिमिट बढ़ा दी।",
    dateEn: "Verified Client Review",
    dateHi: "सत्यापित ग्राहक समीक्षा",
    locationEn: "Raebareli Road, Lucknow",
    locationHi: "रायबरेली रोड, लखनऊ"
  },
  {
    id: "rev-5",
    author: "Alok Gupta",
    roleEn: "Retail Chain Proprietor",
    roleHi: "रिटेल व्यापार संचालक",
    businessTypeEn: "Consumer Goods & Retail",
    businessTypeHi: "उपभोक्ता सामग्री एवं खुदरा व्यापार",
    rating: 5,
    reviewEn: "I have been consulting them for the past 4 years for all my business accounting and GST filings. They never let a single statutory deadline pass, saving us from late fees every single quarter. Their phone and WhatsApp support is prompt.",
    reviewHi: "पिछले 4 वर्षों से मैं अपने व्यापार के सभी खातों और जीएसटी के लिए अवस्थी & एसोसिएट्स से जुड़ा हूँ। कभी भी कोई अंतिम तिथि नहीं छूटी, जिससे हम पेनल्टी से हमेशा सुरक्षित रहते हैं। इनका सहयोग हमेशा तत्पर रहता है।",
    dateEn: "Verified Client Review",
    dateHi: "सत्यापित ग्राहक समीक्षा",
    locationEn: "Telibagh, Lucknow",
    locationHi: "तेलीबाग, लखनऊ"
  },
  {
    id: "rev-6",
    author: "Vandana Tripathi",
    roleEn: "IT Consultant & NRI Taxpayer",
    roleHi: "आईटी सलाहकार एवं एनआरआई टैक्सपेयर",
    businessTypeEn: "Cross-Border Consultancy & Real Estate",
    businessTypeHi: "प्रॉपर्टी बिक्री एवं विदेशी आय",
    rating: 5,
    reviewEn: "Sold ancestral property and needed capital gains advice and 15CA/15CB repatriation certification. The senior partner explained Section 54EC exemptions and capital gains accounts scheme clearly without legal jargon. Saved substantial tax legitimately.",
    reviewHi: "पुश्तैनी संपत्ति बेचने के बाद कैपिटल गेन टैक्स और 54EC बॉण्ड्स के बारे में बहुत सरल भाषा में समझाया। पूरी प्रक्रिया कानूनी रूप से पारदर्शी रही और काफी टैक्स की बचत हुई। प्रॉपर्टी टैक्स के मामलों में इनकी विशेषज्ञता अद्भुत है।",
    dateEn: "Verified Client Review",
    dateHi: "सत्यापित ग्राहक समीक्षा",
    locationEn: "South City, Lucknow",
    locationHi: "साउथ सिटी, लखनऊ"
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
    titleEn: "ISO 9001:2015 Quality Benchmarks",
    titleHi: "आईएसओ 9001 गुणवत्ता मानक",
    descEn: "Standardized operating workflows for document verification, dual-layer tax calculations, and zero-defect e-filing across government tax servers.",
    descHi: "दस्तावेज़ सत्यापन, दोहरे स्तर की कर गणना और त्रुटिरहित ई-फाइलिंग के लिए मानकीकृत कार्यप्रणाली।"
  },
  {
    number: "02",
    titleEn: "Direct Senior Partner Counsel",
    titleHi: "वरिष्ठ कर सलाहकार का प्रत्यक्ष ध्यान",
    descEn: "Unlike faceless aggregators where your files are passed to trainees, our senior chartered accountants personally scrutinize your returns and notices.",
    descHi: "यहाँ आपके महत्वपूर्ण वित्तीय दस्तावेज किसी अनुभवहीन कर्मचारी के हाथ में नहीं जाते, बल्कि वरिष्ठ सलाहकारों द्वारा जांचे जाते हैं।"
  },
  {
    number: "03",
    titleEn: "Zero-Penalty Due Date Radar",
    titleHi: "शून्य पेनल्टी का संकल्प",
    descEn: "Automated compliance monitoring tracks every GST, TDS, advance tax, and ROC deadline well in advance, keeping your enterprise 100% compliant.",
    descHi: "हमारा अनुपालन सिस्टम हर अंतिम तिथि पर पहले से नजर रखता है, जिससे आपका व्यापार किसी भी पेनल्टी या ब्याज से हमेशा सुरक्षित रहता है।"
  },
  {
    number: "04",
    titleEn: "Encrypted Data Confidentiality",
    titleHi: "पूर्ण गोपनीयता एवं सुरक्षा",
    descEn: "Operating strictly under ICAI professional ethics and ISO confidentiality protocols. Your financial ledgers, margins, and passwords remain hermetically secure.",
    descHi: "आईसीएआई (ICAI) की सख्त आचार संहिता और सुरक्षा मानकों के तहत कार्य। आपकी व्यावसायिक जानकारी पूर्ण रूप से गोपनीय रहती है।"
  }
];

export const FAQS_DATA = [
  {
    qEn: "What services does Apex Taxcon specialize in?",
    qHi: "फर्म किन प्रमुख सेवाओं में विशेषज्ञता रखती है?",
    aEn: "We provide end-to-end solutions in Income Tax (ITR 1-7, scrutiny defense), GST compliance & refunds, Company & LLP incorporation, Trademark registration, Statutory audits, and Bank CMA project reports.",
    aHi: "हम आयकर (ITR एवं स्क्रूटनी), जीएसटी अनुपालन व रिफंड, कंपनी व एलएलपी निगमन, ट्रेडमार्क रजिस्ट्रेशन, वैधानिक ऑडिट एवं बैंक लोन सीएमए रिपोर्ट में सम्पूर्ण सेवाएं प्रदान करते हैं।"
  },
  {
    qEn: "Can I get my ITR filed online without visiting the office?",
    qHi: "क्या मैं कार्यालय आए बिना ऑनलाइन आईटीआर फाइल करवा सकता हूँ?",
    aEn: "Yes! Our pan-India digital tax desk allows you to share documents securely over WhatsApp or email. A senior tax consultant verifies your documents, computes deductions, and shares the filing acknowledgement within 24 hours.",
    aHi: "हाँ! आप व्हाट्सएप या ईमेल पर सुरक्षित रूप से दस्तावेज़ साझा कर सकते हैं। हमारे वरिष्ठ सलाहकार जांच के बाद 24 घंटे में फाइलिंग रसीद उपलब्ध कराते हैं।"
  },
  {
    qEn: "How do you handle GST DRC-01 demand notices and ITC mismatches?",
    qHi: "आप जीएसटी नोटिस (DRC-01) और आईटीसी मिसमैच का समाधान कैसे करते हैं?",
    aEn: "Our indirect tax litigation team reconciles GSTR-2B against books turnover, prepares legally sound factual replies citing relevant CBIC circulars, and represents your case before tax officers to eliminate unjustified demands.",
    aHi: "हमारी टीम 2B रिकॉन्सिलिएशन करती है, सीबीआईसी (CBIC) सर्कुलर्स के आधार पर विधिक प्रारूप तैयार करती है और विभाग के समक्ष पक्ष रखकर अनुचित पेनल्टी को निरस्त करवाती है।"
  },
  {
    qEn: "What is required to register a Private Limited Company or LLP?",
    qHi: "प्राइवेट लिमिटेड कंपनी या एलएलपी रजिस्टर करने के लिए क्या आवश्यक है?",
    aEn: "You need PAN, Aadhaar, recent bank statement, photograph, and registered office electricity bill with owner NOC. Once submitted, we secure the Certificate of Incorporation from MCA in 5 to 7 working days.",
    aHi: "पैन, आधार, बैंक स्टेटमेंट, फोटो और कार्यालय का बिजली बिल आवश्यक है। सभी दस्तावेज़ पूर्ण होने पर 5 से 7 कार्य दिवसों में कंपनी निगमन प्रमाण पत्र प्राप्त हो जाता है।"
  },
  {
    qEn: "Can you help secure a Bank Loan / CC Limit with a CMA Data Report?",
    qHi: "क्या आप बैंक लोन और सीसी लिमिट के लिए सीएमए डाटा रिपोर्ट तैयार करते हैं?",
    aEn: "Yes, we prepare bank-approved Credit Monitoring Arrangement (CMA) data, balance sheet projections, DSCR forecasts, and Detailed Project Reports (DPR) approved by leading public and private banks.",
    aHi: "हाँ, हम सभी प्रमुख बैंकों द्वारा स्वीकृत सीएमए डाटा, बैलेंस शीट अनुमान, डीएससीआर गणना और विस्तृत प्रोजेक्ट रिपोर्ट (DPR) तैयार करते हैं।"
  }
];
