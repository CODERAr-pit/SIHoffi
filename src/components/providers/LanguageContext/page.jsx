"use client"
import React, { createContext, useState, useEffect, useContext } from 'react';

// Translation data is now embedded directly in the component
const en = {
  "navigation": {
    "home": "Home",
    "home_desc": "Main Dashboard",
    "education": "Education Hub",
    "education_desc": "Aadhaar & DBT Info",
    "progress": "Progress Tracker",
    "progress_desc": "Track your progress",
    "scholarships": "Scholarship Info",
    "scholarships_desc": "Scholarship Details",
    "resources": "Resources",
    "resources_desc": "Guides & Downloads",
    "help": "Help",
    "help_desc": "FAQ & Support"
  },
  "layout": {
    "title": "DBT Awareness",
    "subtitle": "Scholarship Support Platform",
    "navigation_label": "Navigation",
    "quick_help_label": "Quick Help",
    "helpline": "Helpline",
    "helpline_timing": "9 AM - 6 PM",
    "footer_org": "SCD-V Division",
    "footer_dept": "DoSJE, Govt. of India",
    "mobile_header": "DBT Awareness Platform"
  },
  "home": {
    "status_available": "Active Support Available",
    "main_title": "DBT Scholarship Awareness Platform",
    "main_description": "Learn about Aadhaar seeded bank accounts and simplify your scholarship process.",
    "stats_students_helped": "Students Helped",
    "stats_scholarship_schemes": "Scholarship Schemes",
    "stats_direct_transfer": "Direct Transfer",
    "stats_online_support": "Online Support",
    "stats_active": "Active",
    "stats_available": "Available",
    "stats_dbt": "DBT",
    "stats_instant": "Instant",
    "welcome_title": "Welcome to the DBT Awareness Platform!",
    "welcome_desc": "Get information about Aadhaar seeded bank accounts.",
    "welcome_greeting": "Hello, {name}!",
    "welcome_greeting_desc": "Check your scholarship application status and proceed further.",
    "welcome_new_user": "New User",
    "welcome_create_profile": "Create your profile",
    "welcome_school_name": "School Name",
    "welcome_class_category": "{class} - {category} Category",
    "welcome_scholarship_type_pre": "Pre-Matric Scholarship",
    "welcome_scholarship_type_post": "Post-Matric Scholarship",
    "welcome_view_progress_btn": "View Progress",
    "welcome_get_started_btn": "Get Started",
    "quick_actions_title": "Quick Actions",
    "quick_actions_desc": "Quick access to the most important tasks.",
    "action1_title": "Aadhaar vs DBT Seeding",
    "action1_desc": "Understand the difference and learn the correct process.",
    "action2_title": "Progress Tracker",
    "action2_desc": "Check your application status.",
    "action3_title": "Scholarship Information",
    "action3_desc": "Get complete details of the scheme.",
    "action4_title": "Download Resources",
    "action4_desc": "Download guides and forms.",
    "view_action": "View",
    "status_overview_title": "Application Progress",
    "status_overview_completed": "{completed}/{total} Completed",
    "status_overview_completion_rate": "Completion Rate",
    "step1_title": "Verify Aadhaar Number",
    "step2_title": "Prepare Bank Account",
    "step3_title": "Complete Aadhaar Seeding",
    "step4_title": "Check DBT Status",
    "step5_title": "Submit Application",
    "step_status_completed": "Completed",
    "step_status_current": "In Progress",
    "get_started_title": "Get Started",
    "get_started_desc": "To start your scholarship application process, begin with Aadhaar verification.",
    "recent_updates_title": "Recent Updates",
    "recent_updates_desc": "Important notifications and updates.",
    "update1_title": "New DBT Guidelines",
    "update1_content": "Updated procedure for bank account seeding has been released.",
    "update2_title": "Scholarship Deadline",
    "update2_content": "The last date for Post-Matric scholarship is March 31st.",
    "update3_title": "Helpdesk Service",
    "update3_content": "Phone support is also available on weekends.",
    "update4_title": "Mobile App Launch",
    "update4_content": "A mobile app to check DBT status is coming soon.",
    "update_priority_high": "High",
    "update_priority_medium": "Medium",
    "update_priority_low": "Low",
    "update_time_ago_days": "{days} days ago",
    "update_time_ago_week": "1 week ago",
    "update_time_ago_weeks": "{weeks} weeks ago",
    "important_notice_title": "Important Notice",
    "important_notice_content": "To receive the scholarship, your bank account must be Aadhaar seeded. Just linking Aadhaar is not enough - a DBT enabled account is required.",
    "important_notice_btn": "Understand the Difference",
    "status_approved": "Approved",
    "status_submitted": "Submitted",
    "status_pending": "Documents Pending",
    "status_not_started": "Not Started"
  }
};
const hi = {
  "navigation": {
    "home": "होम",
    "home_desc": "मुख्य डैशबोर्ड",
    "education": "शिक्षा केंद्र",
    "education_desc": "आधार और DBT की जानकारी",
    "progress": "प्रगति ट्रैकर",
    "progress_desc": "अपनी प्रगति देखें",
    "scholarships": "छात्रवृत्ति जानकारी",
    "scholarships_desc": "स्कॉलरशिप की विवरण",
    "resources": "संसाधन",
    "resources_desc": "गाइड और डाउनलोड",
    "help": "सहायता",
    "help_desc": "FAQ और सपोर्ट"
  },
  "layout": {
    "title": "DBT जागरूकता",
    "subtitle": "छात्रवृत्ति सहायता मंच",
    "navigation_label": "नेविगेशन",
    "quick_help_label": "त्वरित सहायता",
    "helpline": "हेल्पलाइन",
    "helpline_timing": "सुबह 9 बजे - शाम 6 बजे",
    "footer_org": "SCD-V Division",
    "footer_dept": "DoSJE, भारत सरकार",
    "mobile_header": "DBT जागरूकता मंच"
  },
  "home": {
    "status_available": "सक्रिय सहायता उपलब्ध",
    "main_title": "DBT छात्रवृत्ति जागरूकता मंच",
    "main_description": "आधार सीडेड बैंक अकाउंट के बारे में जानें और अपनी छात्रवृत्ति पाने की प्रक्रिया को आसान बनाएं।",
    "stats_students_helped": "सहायता प्राप्त छात्र",
    "stats_scholarship_schemes": "छात्रवृत्ति योजनाएं",
    "stats_direct_transfer": "डायरेक्ट ट्रांसफर",
    "stats_online_support": "ऑनलाइन सहायता",
    "stats_active": "सक्रिय",
    "stats_available": "उपलब्ध",
    "stats_dbt": "DBT",
    "stats_instant": "तुरंत",
    "welcome_title": "DBT जागरूकता मंच में आपका स्वागत है!",
    "welcome_desc": "आधार सीडेड बैंक अकाउंट के बारे में जानकारी प्राप्त करें।",
    "welcome_greeting": "नमस्कार, {name}!",
    "welcome_greeting_desc": "आपकी छात्रवृत्ति आवेदन की स्थिति देखें और आगे की कार्यवाही करें।",
    "welcome_new_user": "नया उपयोगकर्ता",
    "welcome_create_profile": "अपना प्रोफाइल बनाएं",
    "welcome_school_name": "विद्यालय का नाम",
    "welcome_class_category": "{class} - {category} श्रेणी",
    "welcome_scholarship_type_pre": "प्री-मैट्रिक छात्रवृत्ति",
    "welcome_scholarship_type_post": "पोस्ट-मैट्रिक छात्रवृत्ति",
    "welcome_view_progress_btn": "प्रगति देखें",
    "welcome_get_started_btn": "शुरू करें",
    "quick_actions_title": "त्वरित कार्यवाही",
    "quick_actions_desc": "सबसे महत्वपूर्ण कार्यों का त्वरित एक्सेस।",
    "action1_title": "आधार vs DBT सीडिंग",
    "action1_desc": "अंतर समझें और सही प्रक्रिया जानें।",
    "action2_title": "प्रगति ट्रैकर",
    "action2_desc": "अपनी आवेदन स्थिति चेक करें।",
    "action3_title": "छात्रवृत्ति जानकारी",
    "action3_desc": "स्कीम की पूरी जानकारी पाएं।",
    "action4_title": "डाउनलोड संसाधन",
    "action4_desc": "गाइड और फॉर्म डाउनलोड करें।",
    "view_action": "देखें",
    "status_overview_title": "आवेदन प्रगति",
    "status_overview_completed": "{completed}/{total} पूर्ण",
    "status_overview_completion_rate": "पूर्णता दर",
    "step1_title": "आधार नंबर वेरिफाई करें",
    "step2_title": "बैंक अकाउंट तैयार करें",
    "step3_title": "आधार सीडिंग पूरी करें",
    "step4_title": "DBT स्टेटस चेक करें",
    "step5_title": "आवेदन जमा करें",
    "step_status_completed": "पूर्ण",
    "step_status_current": "चालू",
    "get_started_title": "आरंभ करें",
    "get_started_desc": "अपनी छात्रवृत्ति आवेदन प्रक्रिया शुरू करने के लिए पहले आधार सत्यापन से शुरुआत करें।",
    "recent_updates_title": "नवीन अपडेट्स",
    "recent_updates_desc": "महत्वपूर्ण सूचनाएं और अपडेट्स।",
    "update1_title": "नई DBT गाइडलाइन्स",
    "update1_content": "बैंक अकाउंट सीडिंग के लिए अपडेटेड प्रक्रिया जारी की गई है।",
    "update2_title": "छात्रवृत्ति डेडलाइन",
    "update2_content": "पोस्ट-मैट्रिक स्कॉलरशिप के लिए अंतिम तारीख 31 मार्च है।",
    "update3_title": "हेल्पडेस्क सेवा",
    "update3_content": "सप्ताहांत में भी फोन सहायता उपलब्ध है।",
    "update4_title": "मोबाइल ऐप लॉन्च",
    "update4_content": "DBT स्टेटस चेक करने के लिए मोबाइल ऐप जल्द आ रहा है।",
    "update_priority_high": "उच्च",
    "update_priority_medium": "मध्यम",
    "update_priority_low": "कम",
    "update_time_ago_days": "{days} दिन पहले",
    "update_time_ago_week": "1 सप्ताह पहले",
    "update_time_ago_weeks": "{weeks} सप्ताह पहले",
    "important_notice_title": "महत्वपूर्ण सूचना",
    "important_notice_content": "छात्रवृत्ति प्राप्त करने के लिए आपका बैंक अकाउंट आधार से सीड होना जरूरी है। केवल आधार लिंक होना पर्याप्त नहीं है - DBT इनेबल्ड अकाउंट की आवश्यकता है।",
    "important_notice_btn": "अंतर समझें",
    "status_approved": "स्वीकृत",
    "status_submitted": "जमा किया गया",
    "status_pending": "दस्तावेज़ बाकी",
    "status_not_started": "शुरू नहीं किया"
  }
};
const ta = {
  "navigation": {
    "home": "முகப்பு",
    "home_desc": "முதன்மை டாஷ்போர்டு",
    "education": "கல்வி மையம்",
    "education_desc": "ஆதார் & DBT தகவல்",
    "progress": "முன்னேற்ற கண்காணிப்பு",
    "progress_desc": "உங்கள் முன்னேற்றத்தைக் கண்காணிக்கவும்",
    "scholarships": "உதவித்தொகை தகவல்",
    "scholarships_desc": "உதவித்தொகை விவரங்கள்",
    "resources": "வளங்கள்",
    "resources_desc": "வழிகாட்டிகள் & பதிவிறக்கங்கள்",
    "help": "உதவி",
    "help_desc": "அடிக்கடி கேட்கப்படும் கேள்விகள் & ஆதரவு"
  },
  "layout": {
    "title": "DBT விழிப்புணர்வு",
    "subtitle": "உதவித்தொகை ஆதரவு தளம்",
    "navigation_label": "வழிசெலுத்தல்",
    "quick_help_label": "விரைவு உதவி",
    "helpline": "உதவி எண்",
    "helpline_timing": "காலை 9 - மாலை 6",
    "footer_org": "SCD-V பிரிவு",
    "footer_dept": "DoSJE, இந்திய அரசு",
    "mobile_header": "DBT விழிப்புணர்வு தளம்"
  },
  "home": {
    "status_available": "செயலில் ஆதரவு உள்ளது",
    "main_title": "DBT உதவித்தொகை விழிப்புணர்வு தளம்",
    "main_description": "ஆதார் இணைக்கப்பட்ட வங்கி கணக்குகள் பற்றி அறிந்து, உங்கள் உதவித்தொகை செயல்முறையை எளிதாக்குங்கள்.",
    "welcome_greeting": "வணக்கம், {name}!",
    "welcome_greeting_desc": "உங்கள் உதவித்தொகை விண்ணப்ப நிலையை சரிபார்த்து மேலும் தொடரவும்.",
    "important_notice_title": "முக்கிய அறிவிப்பு",
    "important_notice_content": "உதவித்தொகை பெற, உங்கள் வங்கி கணக்கு ஆதாருடன் இணைக்கப்பட்டிருக்க வேண்டும். ஆதார் இணைப்பு மட்டும் போதாது - DBT இயக்கப்பட்ட கணக்கு தேவை.",
    "important_notice_btn": "வித்தியாசத்தைப் புரிந்து கொள்ளுங்கள்"
  }
};
const te = {
  "navigation": {
    "home": "హోమ్",
    "home_desc": "ప్రధాన డాష్‌బోర్డ్",
    "education": "విద్యా కేంద్రం",
    "education_desc": "ఆధార్ & DBT సమాచారం",
    "progress": "ప్రగతి ట్రాకర్",
    "progress_desc": "మీ ప్రగతిని ట్రాక్ చేయండి",
    "scholarships": "స్కాలర్‌షిప్ సమాచారం",
    "scholarships_desc": "స్కాలర్‌షిప్ వివరాలు",
    "resources": "వనరులు",
    "resources_desc": "మార్గదర్శకాలు & డౌన్‌లోడ్‌లు",
    "help": "సహాయం",
    "help_desc": "FAQ & మద్దతు"
  },
  "layout": {
    "title": "DBT అవగాహన",
    "subtitle": "స్కాలర్‌షిప్ మద్దతు వేదిక",
    "navigation_label": "నావిగేషన్",
    "quick_help_label": "త్వరిత సహాయం",
    "helpline": "హెల్ప్‌లైన్",
    "helpline_timing": "ఉదయం 9 - సాయంత్రం 6",
    "footer_org": "SCD-V డివిజన్",
    "footer_dept": "DoSJE, భారత ప్రభుత్వం",
    "mobile_header": "DBT అవగాహన వేదిక"
  },
  "home": {
    "status_available": "క్రియాశీల మద్దతు అందుబాటులో ఉంది",
    "main_title": "DBT స్కాలర్‌షిప్ అవగాహన వేదిక",
    "main_description": "ఆధార్ సీడెడ్ బ్యాంక్ ఖాతాల గురించి తెలుసుకోండి మరియు మీ స్కాలర్‌షిప్ ప్రక్రియను సులభతరం చేసుకోండి.",
    "welcome_greeting": "నమస్కారం, {name}!",
    "welcome_greeting_desc": "మీ స్కాలర్‌షిప్ దరఖాస్తు స్థితిని తనిఖీ చేయండి మరియు ముందుకు సాగండి.",
    "important_notice_title": "ముఖ్య గమనిక",
    "important_notice_content": "స్కాలర్‌షిప్ పొందడానికి, మీ బ్యాంక్ ఖాతా ఆధార్‌తో సీడ్ చేయబడాలి. కేవలం ఆధార్ లింక్ చేయడం సరిపోదు - DBT ప్రారంభించబడిన ఖాతా అవసరం.",
    "important_notice_btn": "తేడాను అర్థం చేసుకోండి"
  }
};
const bn = {
  "navigation": {
    "home": "হোম",
    "home_desc": "প্রধান ড্যাশবোর্ড",
    "education": "শিক্ষা কেন্দ্র",
    "education_desc": "আধার এবং ডিবিটি তথ্য",
    "progress": " অগ্রগতি ট্র্যাকার",
    "progress_desc": "আপনার অগ্রগতি ট্র্যাক করুন",
    "scholarships": "বৃত্তি তথ্য",
    "scholarships_desc": "বৃত্তির বিবরণ",
    "resources": "সম্পদ",
    "resources_desc": "গাইড এবং ডাউনলোড",
    "help": "সাহায্য",
    "help_desc": "FAQ এবং সমর্থন"
  },
  "layout": {
    "title": "DBT সচেতনতা",
    "subtitle": "স্কলারশিপ সাপোর্ট প্ল্যাটফর্ম",
    "navigation_label": "নেভিগেশন",
    "quick_help_label": "দ্রুত সাহায্য",
    "helpline": "হেল্পলাইন",
    "helpline_timing": "সকাল ৯টা - সন্ধ্যা ৬টা",
    "footer_org": "SCD-V বিভাগ",
    "footer_dept": "DoSJE, ভারত সরকার",
    "mobile_header": "DBT সচেতনতা প্ল্যাটফর্ম"
  },
  "home": {
    "status_available": "সক্রিয় সমর্থন উপলব্ধ",
    "main_title": "DBT স্কলারশিপ সচেতনতা প্ল্যাটফর্ম",
    "main_description": "আধার সিডেড ব্যাঙ্ক অ্যাকাউন্ট সম্পর্কে জানুন এবং আপনার স্কলারশিপ প্রক্রিয়া সহজ করুন।",
    "welcome_greeting": "নমস্কার, {name}!",
    "welcome_greeting_desc": "আপনার স্কলারশিপ আবেদনের স্থিতি পরীক্ষা করুন এবং আরও এগিয়ে যান।",
    "important_notice_title": "গুরুত্বপূর্ণ বিজ্ঞপ্তি",
    "important_notice_content": "স্কলারশিপ পাওয়ার জন্য, আপনার ব্যাঙ্ক অ্যাকাউন্টটি আধার সিডেড হতে হবে। শুধু আধার লিঙ্ক করাই যথেষ্ট নয় - একটি ডিবিটি সক্ষম অ্যাকাউন্ট প্রয়োজন।",
    "important_notice_btn": "পার্থক্য বুঝুন"
  }
};

const translationsData = { en, hi, ta, te, bn };

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
];

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English
  const [translations, setTranslations] = useState(translationsData.en);

  useEffect(() => {
    setTranslations(translationsData[language] || translationsData.en);
  }, [language]);

  const t = (key, replacements = {}) => {
    const keys = key.split('.');
    let result = translations;
    for (const k of keys) {
        result = result?.[k];
        if (result === undefined) {
            // Fallback to English for missing keys
            let fallbackResult = translationsData.en;
            for (const fk of keys) {
                fallbackResult = fallbackResult?.[fk];
                if(fallbackResult === undefined) return key;
            }
            result = fallbackResult;
            break;
        }
    }
    
    if (typeof result === 'string') {
        Object.keys(replacements).forEach(rKey => {
            result = result.replace(`{${rKey}}`, replacements[rKey]);
        });
    }

    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);