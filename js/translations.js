const translations = {
  en: {
    analysisTitle: '🔬 Soil Type Analysis',
    analysisSubtitle: 'Upload a soil image to get AI-powered soil type identification and crop recommendations',
    dropText: 'Drop your soil image here',
    dropSub: 'or click to browse from your device',
    chooseFile: '📁 Choose File',
    trySample: '🌱 Try Sample',
    fileSupport: 'Supports JPG, PNG, WEBP · Max 10MB',
    analyseBtn: '🔬 Analyse Image',
    clearBtn: '✕ Clear',
    tipsTitle: '📋 Tips for Better Results',
    tip1: '✔ Take photos in natural daylight',
    tip2: '✔ Fill the frame with soil — avoid grass/plants',
    tip3: '✔ Use a top-down angle for best accuracy',
    tip4: '✔ Avoid flash as it distorts soil colour',
    tip5: '✔ Use close-up shots to capture soil texture',
    resultsTitle: 'Analysis Results',
    placeholderText: 'Upload a soil image and click <strong>Analyse Image</strong> to see results here',
    loadingText: 'Analysing soil type...',
    loadingSub: 'This takes just a moment',
    confidence: 'Model Confidence',
    moistureLevel: '💧 Ideal Moisture Level',
    foundIn: '📍 Found In',
    aboutSoil: '📝 About This Soil',
    characteristics: '🔬 Characteristics',
    recommendedCrops: '🌾 Recommended Crops',
    moistureRange: '💧 Ideal Moisture Range',
    top3: 'Top 3 Predictions',
    analyseAnother: '🔄 Analyse Another Image',
    dry: '0% Dry',
    wet: '100% Wet'
  },
  ta: {
    analysisTitle: '🔬 மண் வகை பகுப்பாய்வு',
    analysisSubtitle: 'AI மூலம் மண் வகை அடையாளம் மற்றும் பயிர் பரிந்துரைகளைப் பெற மண் படத்தை பதிவேற்றவும்',
    dropText: 'உங்கள் மண் படத்தை இங்கே போடுங்கள்',
    dropSub: 'அல்லது உங்கள் சாதனத்திலிருந்து உலாவ கிளிக் செய்யவும்',
    chooseFile: '📁 கோப்பை தேர்ந்தெடு',
    trySample: '🌱 மாதிரியை முயற்சி',
    fileSupport: 'JPG, PNG, WEBP ஆதரிக்கிறது · அதிகபட்சம் 10MB',
    analyseBtn: '🔬 படத்தை பகுப்பாய்',
    clearBtn: '✕ அழி',
    tipsTitle: '📋 சிறந்த முடிவுகளுக்கான குறிப்புகள்',
    tip1: '✔ இயற்கை பகல் வெளிச்சத்தில் புகைப்படங்கள் எடுக்கவும்',
    tip2: '✔ மண்ணால் சட்டத்தை நிரப்பவும் — புல்/தாவரங்களை தவிர்க்கவும்',
    tip3: '✔ சிறந்த துல்லியத்திற்கு மேல்-கீழ் கோணத்தை பயன்படுத்தவும்',
    tip4: '✔ மண்ணின் நிறத்தை சிதைக்கும் ஃபிளாஷை தவிர்க்கவும்',
    tip5: '✔ மண்ணின் அமைப்பை பதிவுசெய்ய க்ளோஸ்-அப் படங்களை பயன்படுத்தவும்',
    resultsTitle: 'பகுப்பாய்வு முடிவுகள்',
    placeholderText: 'மண் படத்தை பதிவேற்றி <strong>படத்தை பகுப்பாய்</strong> என்பதை கிளிக் செய்யவும்',
    loadingText: 'மண் வகையை பகுப்பாய்வு செய்கிறது...',
    loadingSub: 'இது ஒரு கணம் மட்டுமே ஆகும்',
    confidence: 'மாதிரி நம்பகத்தன்மை',
    moistureLevel: '💧 சிறந்த ஈரப்பத அளவு',
    foundIn: '📍 காணப்படும் இடம்',
    aboutSoil: '📝 இந்த மண்ணைப் பற்றி',
    characteristics: '🔬 பண்புகள்',
    recommendedCrops: '🌾 பரிந்துரைக்கப்பட்ட பயிர்கள்',
    moistureRange: '💧 சிறந்த ஈரப்பத வரம்பு',
    top3: 'சிறந்த 3 கணிப்புகள்',
    analyseAnother: '🔄 மற்றொரு படத்தை பகுப்பாய்',
    dry: '0% வறண்ட',
    wet: '100% ஈரமான',
    moistureLevels: {
      'Moderate (40-60%)': 'மிதமான (40-60%)',
      'Low-Moderate (30-50%)': 'குறைந்த-மிதமான (30-50%)',
      'Low (20-40%)': 'குறைந்த (20-40%)',
      'High (50-70%)': 'அதிகமான (50-70%)',
      'Very Low (10-25%)': 'மிகவும் குறைந்த (10-25%)',
      'Low-Moderate (25-45%)': 'குறைந்த-மிதமான (25-45%)',
      'Moderate (35-55%)': 'மிதமான (35-55%)'
    },
    soilInfo: {
      'Alluvial_Soil': {
        display_name: 'வண்டல் மண்',
        description: 'நதிகளால் படிந்த மிகவும் வளமான மண். கனிமங்கள், ஊட்டச்சத்துக்கள் மற்றும் கரிம பொருட்கள் நிறைந்தது.',
        characteristics: 'இலகுவான முதல் நடுத்தர அமைப்பு, அதிக வளம், நல்ல நீர் தேக்கம்',
        found_in: 'நதி சமவெளிகள், இந்தோ-கங்கை சமவெளி, கடலோர டெல்டாக்கள்',
        crops: ['நெல்', 'கோதுமை', 'கரும்பு', 'பருத்தி', 'சணல்', 'மக்காச்சோளம்']
      },
      'Black_Soil': {
        display_name: 'கருப்பு மண்',
        description: 'கருப்பு பருத்தி மண் என்றும் அழைக்கப்படும். அதிக நீர் தேக்கும் திறன் மற்றும் கால்சியம், மெக்னீசியம் நிறைந்தது.',
        characteristics: 'அதிக களிமண் உள்ளடக்கம், ஈரத்தில் வீங்கும், வறட்சியில் வெடிக்கும்',
        found_in: 'டெக்கான் பீடபூமி, மகாராஷ்டிரா, குஜராத், மத்திய பிரதேசம்',
        crops: ['பருத்தி', 'சோயா பீன்', 'கோதுமை', 'ஜோவார்', 'சூரியகாந்தி', 'புகையிலை']
      },
      'Red_Soil': {
        display_name: 'சிவப்பு மண்',
        description: 'இரும்பு நிறைந்த சிவப்பு நிற மண். நல்ல வடிகால் ஆனால் ஊட்டச்சத்து குறைவு.',
        characteristics: 'நல்ல வடிகால், குறைந்த நீர் தேக்கம், உரம் தேவை',
        found_in: 'கிழக்கு மற்றும் தெற்கு டெக்கான் பீடபூமி, தமிழ்நாடு, ஒடிசா',
        crops: ['கடலை', 'புகையிலை', 'தினை', 'உருளைக்கிழங்கு', 'நெல்', 'கோதுமை']
      },
      'Clay': {
        display_name: 'களிமண்',
        description: 'மிகவும் நுண்ணிய துகள்களைக் கொண்ட கனமான மண். சிறந்த ஊட்டச்சத்து ஆனால் மோசமான வடிகால்.',
        characteristics: 'அதிக ஊட்டச்சத்து, மோசமான வடிகால், வெப்பமடைவது மெதுவாக',
        found_in: 'நதி பள்ளத்தாக்குகள், வெள்ள சமவெளிகள், தாழ்நிலப் பகுதிகள்',
        crops: ['நெல்', 'லெட்டூஸ்', 'முட்டைக்கோஸ்', 'ப்ரோக்கோலி', 'சார்ட்', 'பீன்ஸ்']
      },
      'Laterite_Soil': {
        display_name: 'லேட்டரைட் மண்',
        description: 'அதிக மழைப்பொழிவுள்ள வெப்பமண்டல பகுதிகளில் உருவாகிறது. இரும்பு மற்றும் அலுமினியம் ஆக்சைடுகள் நிறைந்தது.',
        characteristics: 'குறைந்த வளம், அமிலத்தன்மை, அதிக உரம் தேவை',
        found_in: 'கர்நாடகா, கேரளா, தமிழ்நாடு, அசாம், மேகாலயா',
        crops: ['தேயிலை', 'காபி', 'முந்திரி', 'தேங்காய்', 'ரப்பர்', 'அன்னாசி']
      },
      'Loam_Soil': {
        display_name: 'லோம் மண்',
        description: 'மணல், மணற்பாங்கான மண் மற்றும் களிமண்ணின் சிறந்த கலவை. சிறந்த வடிகால் மற்றும் நீர் தேக்கம்.',
        characteristics: 'சிறந்த விவசாய மண், சமன்பட்ட அமைப்பு, அதிக வளம்',
        found_in: 'விவசாய சமவெளிகள், உலகெங்கும் மிதவெப்ப பகுதிகள்',
        crops: ['அனைத்து பயிர்களும்', 'கோதுமை', 'சோளம்', 'காய்கறிகள்', 'பழங்கள்']
      },
      'Arid_Soil': {
        display_name: 'வறண்ட மண்',
        description: 'மிகவும் குறைந்த கரிம பொருட்கள் மற்றும் அதிக உப்பு உள்ளடக்கம் கொண்ட பாலை மண்.',
        characteristics: 'மணல் அமைப்பு, குறைந்த வளம், அதிக நீர்ப்பாசனம் தேவை',
        found_in: 'ராஜஸ்தான், குஜராத் பாலை பகுதிகள், வறண்ட மண்டலங்கள்',
        crops: ['தினை', 'வாற்கோதுமை', 'பருத்தி', 'பேரீச்சை', 'வறட்சி எதிர்ப்பு பயிர்கள்']
      },
      'Mountain_Soil': {
        display_name: 'மலை மண்',
        description: 'மலைப்பாங்கான பகுதிகளில் காணப்படுகிறது. அமிலத்தன்மை மற்றும் கரிம பொருட்கள் நிறைந்தது.',
        characteristics: 'அமிலத்தன்மை, ஹியூமஸ் நிறைந்தது, ஆழம் குறைவு, அரிப்பு ஆபத்து',
        found_in: 'இமயமலை, மேற்குத் தொடர்ச்சி மலை, வடகிழக்கு மலைகள்',
        crops: ['தேயிலை', 'காபி', 'பழங்கள்', 'உருளைக்கிழங்கு', 'மருத்துவ தாவரங்கள்']
      },
      'Yellow_Soil': {
        display_name: 'மஞ்சள் மண்',
        description: 'நீரேறிய இரும்பு ஆக்சிகரணத்தால் மஞ்சள் நிறம். ஈரமான பகுதிகளில் காணப்படுகிறது.',
        characteristics: 'மிதமான வளம், நல்ல வடிகால், கரிம பொருட்கள் தேவை',
        found_in: 'ஈரமான வெப்பமண்டல பகுதிகள், தென் மற்றும் கிழக்கு இந்தியா',
        crops: ['நெல்', 'இனிப்பு உருளைக்கிழங்கு', 'சோளம்', 'புகையிலை', 'கடலை']
      },
      'Cinder_Soil': {
        display_name: 'சிண்டர் மண்',
        description: 'எரிமலை தோற்றுவாய் மண். நல்ல வடிகால் மற்றும் கனிமங்கள் நிறைந்தது.',
        characteristics: 'சிறந்த வடிகால், அதிக கனிம உள்ளடக்கம், குறைந்த நீர் தேக்கம்',
        found_in: 'எரிமலை பகுதிகள், டெக்கான் பீடபூமியின் சில பகுதிகள்',
        crops: ['திராட்சை', 'ஆலிவ்', 'லாவெண்டர்', 'மூலிகைகள்', 'சதைப்பற்றுள்ள தாவரங்கள்']
      }
    }
  }
};

let currentLang = localStorage.getItem('soilsense_lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('soilsense_lang', lang);
  applyTranslations();
  updateLangButton();
}

function applyTranslations() {
  const t = translations[currentLang];

  // Page header
  const header = document.querySelector('#analysis-page .page-header h1');
  const subtitle = document.querySelector('#analysis-page .page-header p');
  if (header) header.textContent = t.analysisTitle;
  if (subtitle) subtitle.textContent = t.analysisSubtitle;

  // Upload zone
  const dropH3 = document.querySelector('#upload-placeholder h3');
  const dropP = document.querySelector('#upload-placeholder > p');
  if (dropH3) dropH3.textContent = t.dropText;
  if (dropP) dropP.textContent = t.dropSub;

  // Buttons
  const chooseBtn = document.querySelector('.btn-upload-fill');
  const sampleBtn = document.querySelector('.btn-upload-outline');
  const analyseBtn = document.querySelector('.btn-analyze');
  const clearBtn = document.querySelector('.btn-clear');
  if (chooseBtn) chooseBtn.textContent = t.chooseFile;
  if (sampleBtn) sampleBtn.textContent = t.trySample;
  if (analyseBtn) analyseBtn.textContent = t.analyseBtn;
  if (clearBtn) clearBtn.textContent = t.clearBtn;

  // Tips
  const tipsTitle = document.querySelector('#analysis-page h4');
  const tips = document.querySelectorAll('#analysis-page ul li');
  if (tipsTitle) tipsTitle.textContent = t.tipsTitle;
  if (tips.length >= 5) {
    tips[0].textContent = t.tip1;
    tips[1].textContent = t.tip2;
    tips[2].textContent = t.tip3;
    tips[3].textContent = t.tip4;
    tips[4].textContent = t.tip5;
  }

  // Results panel
  const resultsTitle = document.querySelector('.result-panel h3');
  if (resultsTitle) resultsTitle.textContent = t.resultsTitle;

  // Placeholder
  const placeholderP = document.querySelector('.placeholder-state p');
  if (placeholderP) placeholderP.innerHTML = t.placeholderText;

  // Loading
  const loadingP = document.querySelector('.loading-state p');
  if (loadingP) loadingP.innerHTML = `${t.loadingText}<br>${t.loadingSub}`;

  // Metrics
  const metricLabels = document.querySelectorAll('.metric-label');
  if (metricLabels.length >= 3) {
    metricLabels[0].textContent = t.confidence;
    metricLabels[1].textContent = t.moistureLevel;
    metricLabels[2].textContent = t.foundIn;
  }

  // Soil info box headings
  const infoHeadings = document.querySelectorAll('.soil-info-box h4');
  if (infoHeadings.length >= 3) {
    infoHeadings[0].textContent = t.aboutSoil;
    infoHeadings[1].textContent = t.characteristics;
    infoHeadings[2].textContent = t.recommendedCrops;
  }

  // Moisture range
  const moistureH4 = document.querySelector('.moisture-range-section h4');
  if (moistureH4) moistureH4.textContent = t.moistureRange;

  const rangeLabels = document.querySelectorAll('.range-labels span');
  if (rangeLabels.length >= 4) {
    rangeLabels[0].textContent = t.dry;
    rangeLabels[3].textContent = t.wet;
  }

  // Top 3
  const top3H4 = document.querySelector('.top3-section h4');
  if (top3H4) top3H4.textContent = t.top3;

  // Analyse another button
  const anotherBtn = document.querySelector('.result-content .btn-upload-fill');
  if (anotherBtn) anotherBtn.textContent = t.analyseAnother;
}

function updateLangButton() {
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.textContent = currentLang === 'en' ? 'தமிழ்' : 'English';
  }
}