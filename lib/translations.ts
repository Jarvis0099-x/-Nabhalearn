export type Language = "en" | "hi" | "pa"

export const translations = {
  en: {
    // App Name
    appName: "NabhaLearn",
    tagline: "Offline Digital Learning for Rural Schools",

    // Language Selection
    selectLanguage: "Select Language",
    english: "English",
    hindi: "Hindi",
    punjabi: "Punjabi (ਪੰਜਾਬੀ)",
    continue: "Continue",

    // Authentication
    login: "Login",
    selectRole: "Select Your Role",
    student: "Student",
    teacher: "Teacher",
    username: "Username",
    password: "Password",
    loginButton: "Login",

    // Common
    back: "Back",
    next: "Next",
    loading: "Loading...",
    offline: "Offline",
    online: "Online",
    sync: "Sync Now",
    download: "Download",
    play: "Play",
    pause: "Pause",

    // Student Dashboard
    dashboard: "Dashboard",
    myLessons: "My Lessons",
    subjects: "Subjects",
    progress: "Progress",
    assignments: "Assignments",
    timetable: "Timetable",
    digitalLiteracy: "Digital Literacy",

    // Teacher Dashboard
    teacherDashboard: "Teacher Dashboard",
    uploadContent: "Upload Content",
    manageStudents: "Manage Students",
    attendance: "Attendance",
    createQuiz: "Create Quiz",
    importContent: "Import from USB/SD",
  },
  hi: {
    // App Name
    appName: "नभाLearn",
    tagline: "ग्रामीण स्कूलों के लिए ऑफलाइन डिजिटल शिक्षा",

    // Language Selection
    selectLanguage: "भाषा चुनें",
    english: "अंग्रेजी",
    hindi: "हिंदी",
    punjabi: "पंजाबी (ਪੰਜਾਬੀ)",
    continue: "जारी रखें",

    // Authentication
    login: "लॉगिन",
    selectRole: "अपनी भूमिका चुनें",
    student: "छात्र",
    teacher: "शिक्षक",
    username: "उपयोगकर्ता नाम",
    password: "पासवर्ड",
    loginButton: "लॉगिन करें",

    // Common
    back: "वापस",
    next: "अगला",
    loading: "लोड हो रहा है...",
    offline: "ऑफलाइन",
    online: "ऑनलाइन",
    sync: "अभी सिंक करें",
    download: "डाउनलोड",
    play: "चलाएं",
    pause: "रोकें",

    // Student Dashboard
    dashboard: "डैशबोर्ड",
    myLessons: "मेरे पाठ",
    subjects: "विषय",
    progress: "प्रगति",
    assignments: "असाइनमेंट",
    timetable: "समय सारणी",
    digitalLiteracy: "डिजिटल साक्षरता",

    // Teacher Dashboard
    teacherDashboard: "शिक्षक डैशबोर्ड",
    uploadContent: "सामग्री अपलोड करें",
    manageStudents: "छात्रों का प्रबंधन",
    attendance: "उपस्थिति",
    createQuiz: "क्विज़ बनाएं",
    importContent: "USB/SD से आयात करें",
  },
  pa: {
    // App Name
    appName: "ਨਭਾLearn",
    tagline: "ਪਿੰਡੀ ਸਕੂਲਾਂ ਲਈ ਆਫਲਾਈਨ ਡਿਜੀਟਲ ਸਿੱਖਿਆ",

    // Language Selection
    selectLanguage: "ਭਾਸ਼ਾ ਚੁਣੋ",
    english: "ਅੰਗਰੇਜ਼ੀ",
    hindi: "ਹਿੰਦੀ",
    punjabi: "ਪੰਜਾਬੀ",
    continue: "ਜਾਰੀ ਰੱਖੋ",

    // Authentication
    login: "ਲਾਗਇਨ",
    selectRole: "ਆਪਣੀ ਭੂਮਿਕਾ ਚੁਣੋ",
    student: "ਵਿਦਿਆਰਥੀ",
    teacher: "ਅਧਿਆਪਕ",
    username: "ਯੂਜ਼ਰਨੇਮ",
    password: "ਪਾਸਵਰਡ",
    loginButton: "ਲਾਗਇਨ ਕਰੋ",

    // Common
    back: "ਵਾਪਸ",
    next: "ਅਗਲਾ",
    loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    offline: "ਆਫਲਾਈਨ",
    online: "ਆਨਲਾਈਨ",
    sync: "ਹੁਣੇ ਸਿੰਕ ਕਰੋ",
    download: "ਡਾਊਨਲੋਡ",
    play: "ਚਲਾਓ",
    pause: "ਰੋਕੋ",

    // Student Dashboard
    dashboard: "ਡੈਸ਼ਬੋਰਡ",
    myLessons: "ਮੇਰੇ ਪਾਠ",
    subjects: "ਵਿਸ਼ੇ",
    progress: "ਤਰੱਕੀ",
    assignments: "ਅਸਾਈਨਮੈਂਟ",
    timetable: "ਸਮਾਂ ਸਾਰਣੀ",
    digitalLiteracy: "ਡਿਜੀਟਲ ਸਾਖਰਤਾ",

    // Teacher Dashboard
    teacherDashboard: "ਅਧਿਆਪਕ ਡੈਸ਼ਬੋਰਡ",
    uploadContent: "ਸਮੱਗਰੀ ਅਪਲੋਡ ਕਰੋ",
    manageStudents: "ਵਿਦਿਆਰਥੀਆਂ ਦਾ ਪ੍ਰਬੰਧਨ",
    attendance: "ਹਾਜ਼ਰੀ",
    createQuiz: "ਕੁਇਜ਼ ਬਣਾਓ",
    importContent: "USB/SD ਤੋਂ ਆਯਾਤ ਕਰੋ",
  },
}

export function getTranslation(language: Language, key: keyof typeof translations.en): string {
  return translations[language][key] || translations.en[key]
}
