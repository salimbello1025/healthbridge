// ============================================================
// HEALTHBRIDGE AI — PART 2 (JavaScript)
// Paste this entire block into Part 1, right after the
// <script> tag where it says "PART 2 GOES HERE", then save
// the combined file as healthbridge.html
// ============================================================

// ---------- 1. TRANSLATIONS ----------
const translations = {
  en: {
    nav_home: "Home", nav_checker: "Symptom Guidance", nav_findcare: "Find Care", nav_records: "My Records", nav_maternal: "Maternal & Child",
    nav_firstaid: "First Aid", nav_tips: "Health Tips", nav_appointment: "Book Visit", nav_pharmacy: "Pharmacy", nav_community: "Q&A",
    eyebrow: "Built for Nigeria, in your language",
    hero_title: "Bridging People to <span>Healthcare</span>",
    hero_sub: "Check symptoms, find nearby doctors, keep your health records, and get maternal & child health guidance — in English, Hausa, Yoruba or Igbo. Works on any phone.",
    hero_cta1: "Check my symptoms", hero_cta2: "Find a doctor",
    stat1: "Languages supported", stat2: "States covered", stat3: "Guidance access", stat4: "Naira to use",
    feat_head: "Everything you need, in one place", feat_sub: "Four tools built around how care actually happens in your community.",
    feat1_title: "Symptom Guidance", feat1_body: "Describe how you feel in your own language and get clear next-step guidance — not a diagnosis, a direction.",
    feat2_title: "Find Nearby Care", feat2_body: "Search clinics, hospitals and pharmacies by state and LGA, even on a low-data connection.",
    feat3_title: "Personal Health Records", feat3_body: "Log symptoms, medicines and vitals over time, and show them to a health worker when you visit.",
    checker_head: "Tell us how you're feeling", checker_sub: "This gives general guidance only. It never replaces a visit to a qualified health worker.",
    checker_bot_name: "HealthBridge Guide", checker_status: "Online", checker_placeholder: "Type your symptom, e.g. fever and headache...",
    checker_note: "If you have severe bleeding, chest pain, difficulty breathing, or loss of consciousness, go to the nearest emergency room immediately.",
    checker_greeting: "Hello! Tell me what symptoms you're experiencing and I'll share some general guidance.",
    findcare_head: "Search by state and LGA", findcare_sub: "A starting directory of facilities — more are added as HealthBridge grows.",
    findcare_btn: "Search", findcare_locate: "Use my location", findcare_locating: "Finding your location...",
    findcare_all_states: "All states", findcare_all_lgas: "All LGAs", findcare_no_results: "No facilities found for that area yet.",
    findcare_start: "Choose a state and press Search, or use your location.",
    records_head: "Personal Health Records", records_sub: "Keep a simple record of symptoms, medicines and vitals to share with a doctor.",
    records_form_title: "Add a record", records_type_label: "Type", records_type_symptom: "Symptom", records_type_medicine: "Medicine",
    records_type_vital: "Vital reading", records_title_label: "Title", records_notes_label: "Notes", records_add_btn: "Save record",
    records_list_title: "Your records", records_empty: "No records yet. Add your first one.",
    mc_head: "Guidance for mothers and children",
    mc1_title: "During pregnancy", mc1_sub: "Simple guidance for each stage, and warning signs that need urgent care.",
    mc1_li1: "Antenatal visit reminders", mc1_li2: "Warning signs to watch for", mc1_li3: "Nutrition guidance by trimester",
    mc2_title: "Child health", mc2_sub: "Track growth milestones and common childhood illnesses.",
    mc2_li1: "Immunization schedule", mc2_li2: "Growth & feeding milestones", mc2_li3: "Common illness guidance",
    footer_text: "Not a substitute for professional medical care. Always consult a qualified health worker.",
    firstaid_eyebrow: "Emergency essentials", firstaid_head: "First Aid Guides", firstaid_sub: "Quick, general steps while you get to professional help. Tap a topic to expand.",
    tips_eyebrow: "Stay ahead of illness", tips_head: "Health Tips", tips_sub: "Simple, everyday habits that make a real difference.",
    appt_eyebrow: "Plan a visit", appt_head: "Request an Appointment", appt_sub: "Send a visit request — a facility staff member will follow up to confirm.",
    appt_name_label: "Full name", appt_phone_label: "Phone number", appt_date_label: "Preferred date", appt_facility_label: "Facility",
    appt_reason_label: "Reason for visit", appt_submit_btn: "Send request",
    appt_disclaimer: "This sends a request only — it is not an automatic confirmed booking. A facility may contact you to confirm.",
    appt_confirm_msg: "Request saved. Please also call the facility directly to confirm your visit, since this demo does not send it automatically.",
    pharmacy_eyebrow: "Before you travel", pharmacy_head: "Medicine Availability", pharmacy_sub: "Check common medicines by facility.",
    pharmacy_demo_note: "Demo feature: this shows sample data for illustration, not live pharmacy stock. Always call ahead to confirm.",
    pharmacy_search_placeholder: "Search a medicine, e.g. Paracetamol",
    community_eyebrow: "Ask, learn, share", community_head: "Ask a Health Worker", community_sub: "Post a general health question. Saved on this device for now.",
    community_placeholder: "Type your question...", community_submit_btn: "Post",
    community_note: "Questions here are saved only on your device for this demo. A live version would connect everyone through a shared server.",
    emergency_text: "In a medical emergency, call your local emergency number now.", emergency_btn: "Emergency numbers",
    emergency_title: "Emergency numbers (Nigeria)",
    record_placeholder_title: "e.g. Headache, Paracetamol, Blood pressure"
  },
  ha: {
    nav_checker: "Jagoran Alamun Rashin Lafiya", nav_findcare: "Nemo Kiwon Lafiya", nav_records: "Bayanaina", nav_maternal: "Uwa da Yara",
    nav_firstaid: "Agajin Gaggawa", nav_tips: "Shawarwarin Lafiya", nav_appointment: "Nemi Ziyara", nav_pharmacy: "Kantin Magani", nav_community: "Tambaya",
    eyebrow: "An gina domin Najeriya, cikin harshenka",
    hero_title: "Haɗa Mutane da <span>Kiwon Lafiya</span>",
    hero_sub: "Bincika alamun rashin lafiya, nemo likitoci kusa da kai, ajiye bayanan lafiyarka, kuma sami jagora kan lafiyar uwa da yara — cikin Turanci, Hausa, Yoruba ko Igbo. Yana aiki a kowane wayar hannu.",
    hero_cta1: "Duba alamuna", hero_cta2: "Nemo likita",
    stat1: "Harsuna da ake amfani", stat2: "Jihohi da aka rufe", stat3: "Samun jagora", stat4: "Naira don amfani",
    feat_head: "Duk abin da kake bukata, a wuri guda", feat_sub: "Kayan aiki hudu da aka gina bisa yadda kula lafiya ke faruwa a unguwarka.",
    feat1_title: "Jagoran Alamun Rashin Lafiya", feat1_body: "Bayyana yadda kake ji cikin harshenka domin samun jagora — ba ganewar asali ba, sai kwatance.",
    feat2_title: "Nemo Kiwon Lafiya Kusa", feat2_body: "Bincika asibiti, dakin magani da kantin magani ta jiha da kananan hukumomi, ko da yanar gizo yana da rauni.",
    feat3_title: "Bayanan Lafiyarka", feat3_body: "Rubuta alamun rashin lafiya, magunguna da ma'aunan lafiya, ka nuna wa ma'aikacin lafiya idan ka ziyarce shi.",
    checker_head: "Gaya mana yadda kake ji", checker_sub: "Wannan jagora ne kawai. Ba ya maye gurbin ziyarar ma'aikacin lafiya.",
    checker_bot_name: "Jagoran HealthBridge", checker_status: "Yana kan layi", checker_placeholder: "Rubuta alamarka, misali zazzabi da ciwon kai...",
    checker_note: "Idan kana da zubar jini mai yawa, ciwon kirji, wahalar numfashi, ko rashin sani, je asibiti mafi kusa nan take.",
    checker_greeting: "Sannu! Gaya mani alamun da kake ji domin in baka jagora.",
    findcare_head: "Bincika ta jiha da kananan hukumomi", findcare_sub: "Jerin farko na asibitoci — ana kara ƙarawa yayin da HealthBridge ke girma.",
    findcare_btn: "Bincika", findcare_locate: "Yi amfani da wurina", findcare_locating: "Ana neman wurinka...",
    findcare_all_states: "Dukkan jihohi", findcare_all_lgas: "Dukkan kananan hukumomi", findcare_no_results: "Ba a sami asibiti a wannan yanki ba tukuna.",
    findcare_start: "Zaɓi jiha sannan ka danna Bincika, ko amfani da wurinka.",
    records_head: "Bayanan Lafiyarka", records_sub: "Rike bayanan alamun rashin lafiya, magunguna da ma'aunai domin nuna wa likita.",
    records_form_title: "Ƙara bayani", records_type_label: "Nau'i", records_type_symptom: "Alamar rashin lafiya", records_type_medicine: "Magani",
    records_type_vital: "Ma'aunin lafiya", records_title_label: "Take", records_notes_label: "Ƙarin bayani", records_add_btn: "Ajiye",
    records_list_title: "Bayananka", records_empty: "Babu bayani tukuna. Ƙara na farko.",
    mc_head: "Jagora domin uwaye da yara",
    mc1_title: "Lokacin ciki", mc1_sub: "Sauƙin jagora domin kowane mataki, da alamun gargaɗi da ke buƙatar kulawa cikin gaggawa.",
    mc1_li1: "Tunatarwa domin ziyarar likita", mc1_li2: "Alamun gargaɗi da za a kula da su", mc1_li3: "Jagoran abinci mai gina jiki bisa watanni",
    mc2_title: "Lafiyar Yara", mc2_sub: "Bibiyar girma da cututtukan yara na kowa.",
    mc2_li1: "Jadawalin allurar rigakafi", mc2_li2: "Ci gaban girma da ciyarwa", mc2_li3: "Jagora kan cututtukan yara",
    footer_text: "Ba maye gurbin kulawar likita ba ne. Ka tuntuɓi ma'aikacin lafiya koyaushe.",
    emergency_text: "Idan akwai gaggawar lafiya, kira lambar gaggawa ta yankinka yanzu.", emergency_btn: "Lambobin gaggawa",
    emergency_title: "Lambobin gaggawa (Najeriya)",
    record_placeholder_title: "misali Ciwon kai, Paracetamol, Hawan jini"
  },
  yo: {
    nav_checker: "Itọsọna Àpẹẹrẹ Àìsàn", nav_findcare: "Wa Ìtọ́jú", nav_records: "Àkọsílẹ̀ Mi", nav_maternal: "Ìyá àti Ọmọ",
    nav_firstaid: "Ìrànlọ́wọ́ Kánjú", nav_tips: "Ìmọ̀ràn Ìlera", nav_appointment: "Wá Ìbẹ̀wò", nav_pharmacy: "Ilé Ìtajà Oògùn", nav_community: "Ìbéèrè",
    eyebrow: "A kọ́ fún Nàìjíríà, ní èdè rẹ",
    hero_title: "Ìsopọ̀ Ènìyàn sí <span>Ìlera</span>",
    hero_sub: "Ṣàyẹ̀wò àpẹẹrẹ àìsàn, wa dókítà tó wà nítòsí, tọ́jú àkọsílẹ̀ ìlera rẹ, kí o sì gba ìtọ́ni lórí ìlera ìyá àti ọmọ — ní Gẹ̀ẹ́sì, Hausa, Yorùbá tàbí Igbo. Ó ń ṣiṣẹ́ lórí fóònù kankan.",
    hero_cta1: "Ṣàyẹ̀wò àpẹẹrẹ mi", hero_cta2: "Wa dókítà",
    stat1: "Èdè tí ó wà", stat2: "Ìpínlẹ̀ tí ó bò", stat3: "Ìtọ́sọ́nà nígbàkúùgbà", stat4: "Náírà láti lò",
    feat_head: "Ohun gbogbo tí o nílò, ní ibi kan", feat_sub: "Irinṣẹ́ mẹ́rin tí a kọ́ gẹ́gẹ́ bí ìtọ́jú ìlera ṣe ń ṣẹlẹ̀ ní àdúgbò rẹ.",
    feat1_title: "Itọsọna Àpẹẹrẹ Àìsàn", feat1_body: "Ṣàpèjúwe bí ara rẹ ṣe rí ní èdè rẹ láti gba ìtọ́sọ́nà tó ṣe kedere — kì í ṣe àyẹ̀wò dókítà, ṣùgbọ́n ìtọ́ni.",
    feat2_title: "Wa Ìtọ́jú Nítòsí", feat2_body: "Ṣàyẹ̀wò ilé ìwòsàn àti ilé ìtajà oògùn nípasẹ̀ ìpínlẹ̀ àti LGA, kódà lórí ẹ̀rọ alátagbà kékeré.",
    feat3_title: "Àkọsílẹ̀ Ìlera Rẹ", feat3_body: "Kọ àpẹẹrẹ àìsàn, oògùn àti ìdiwọn ìlera sílẹ̀, kí o sì fi hàn sí òṣìṣẹ́ ìlera nígbà tí o bá lọ síbẹ̀.",
    checker_head: "Sọ fún wa bí ara rẹ ṣe rí", checker_sub: "Èyí jẹ́ ìtọ́sọ́nà gbogbogbò nìkan. Kò rọ́pò lílọ sí ọ̀dọ̀ òṣìṣẹ́ ìlera tó gbẹ́kẹ̀lé.",
    checker_bot_name: "Atọ́nà HealthBridge", checker_status: "Ó wà lórí ayélujára", checker_placeholder: "Kọ àpẹẹrẹ àìsàn rẹ, bí ìba àti orí fífọ́...",
    checker_note: "Bí ẹ̀jẹ̀ bá ń jáde lọ́pọ̀lọpọ̀, tí àyà ń dun ọ, tí ìmí ń le, tàbí tí o dá lásán, lọ sí ilé ìwòsàn tó sún mọ́ ọ lẹ́sẹ̀kẹsẹ̀.",
    checker_greeting: "Ẹ nlẹ́! Sọ àpẹẹrẹ àìsàn tí o ní fún mi kí n lè fún ọ ní ìtọ́sọ́nà gbogbogbò.",
    findcare_head: "Wá nípasẹ̀ ìpínlẹ̀ àti LGA", findcare_sub: "Àtòjọ ilé ìwòsàn àkọ́kọ́ — a ń fi kún un bí HealthBridge ṣe ń dàgbà.",
    findcare_btn: "Wá", findcare_locate: "Lo ipò mi", findcare_locating: "Ń wá ipò rẹ...",
    findcare_all_states: "Gbogbo ìpínlẹ̀", findcare_all_lgas: "Gbogbo LGA", findcare_no_results: "Kò sí ilé ìwòsàn tí a rí ní agbègbè yẹn síbẹ̀.",
    findcare_start: "Yan ìpínlẹ̀ kí o sì tẹ Wá, tàbí lo ipò rẹ.",
    records_head: "Àkọsílẹ̀ Ìlera Rẹ", records_sub: "Tọ́jú àkọsílẹ̀ àpẹẹrẹ àìsàn, oògùn àti ìdiwọn ìlera láti fi hàn sí dókítà.",
    records_form_title: "Fi àkọsílẹ̀ kún", records_type_label: "Irú", records_type_symptom: "Àpẹẹrẹ àìsàn", records_type_medicine: "Oògùn",
    records_type_vital: "Ìdiwọn ìlera", records_title_label: "Àkọlé", records_notes_label: "Àlàyé kún", records_add_btn: "Fi pamọ́",
    records_list_title: "Àkọsílẹ̀ rẹ", records_empty: "Kò sí àkọsílẹ̀ síbẹ̀. Fi èyí àkọ́kọ́ kún.",
    mc_head: "Ìtọ́sọ́nà fún àwọn ìyá àti ọmọ",
    mc1_title: "Nígbà oyún", mc1_sub: "Ìtọ́sọ́nà rọrùn fún ìpele kọ̀ọ̀kan, àti àmì ìkìlọ̀ tí ó nílò ìtọ́jú kánjú.",
    mc1_li1: "Ìránnilétí ìbẹ̀wò ṣáájú ìbímọ", mc1_li2: "Àmì ìkìlọ̀ láti kíyèsí", mc1_li3: "Ìtọ́sọ́nà oúnjẹ fún oṣù kọ̀ọ̀kan",
    mc2_title: "Ìlera Ọmọ", mc2_sub: "Tọpa ìdàgbàsókè àti àìsàn tí ó wọ́pọ̀ láàrin àwọn ọmọdé.",
    mc2_li1: "Àtòjọ abẹ́rẹ́ àjẹsára", mc2_li2: "Ìdàgbàsókè àti bí a ṣe ń bọ́ ọmọ", mc2_li3: "Ìtọ́sọ́nà àìsàn tó wọ́pọ̀",
    footer_text: "Kì í ṣe àropò fún ìtọ́jú dókítà. Máa lọ sí ọ̀dọ̀ òṣìṣẹ́ ìlera nígbà gbogbo.",
    emergency_text: "Bí pàjáwìrì ìlera bá wà, pe nọ́mbà pàjáwìrì agbègbè rẹ nísinsìnyí.", emergency_btn: "Nọ́mbà pàjáwìrì",
    emergency_title: "Nọ́mbà pàjáwìrì (Nàìjíríà)",
    record_placeholder_title: "bí Orí fífọ́, Paracetamol, Ìdiwọn ẹ̀jẹ̀"
  },
  ig: {
    nav_checker: "Nduzi Mgbaàmà Ọrịa", nav_findcare: "Chọta Ọgwụgwọ", nav_records: "Ndekọ M", nav_maternal: "Nne na Nwa",
    nav_firstaid: "Enyemaka Mberede", nav_tips: "Ndụmọdụ Ahụike", nav_appointment: "Chọọ Nleta", nav_pharmacy: "Ụlọ Ahịa Ọgwụ", nav_community: "Ajụjụ",
    eyebrow: "Emere maka Naịjirịa, n'asụsụ gị",
    hero_title: "Ijikọta Ndị Mmadụ na <span>Ahụike</span>",
    hero_sub: "Nyochaa mgbaàmà ọrịa, chọta dọkịta dị nso, debe ndekọ ahụike gị, ma nweta nduzi ahụike nne na nwa — n'asụsụ Bekee, Hausa, Yoruba ma ọ bụ Igbo. Ọ na-arụ ọrụ na ekwentị ọ bụla.",
    hero_cta1: "Nyochaa mgbaàmà m", hero_cta2: "Chọta dọkịta",
    stat1: "Asụsụ dị", stat2: "Steeti e kpuchiri", stat3: "Nnweta nduzi", stat4: "Naira iji jiri ya",
    feat_head: "Ihe niile ị chọrọ, n'otu ebe", feat_sub: "Ngwaọrụ anọ e mere dabere na otú nlekọta ahụike si eme n'obodo gị.",
    feat1_title: "Nduzi Mgbaàmà Ọrịa", feat1_body: "Kọwaa otú ahụ dị gị n'asụsụ gị iji nweta nduzi doro anya — ọ bụghị nchọpụta ọrịa, kama ntụziaka.",
    feat2_title: "Chọta Nlekọta Dị Nso", feat2_body: "Chọọ ụlọ ọgwụ na ụlọ ahịa ọgwụ site na steeti na LGA, ọbụna na netwọk dị ala.",
    feat3_title: "Ndekọ Ahụike Onwe", feat3_body: "Dekọọ mgbaàmà ọrịa, ọgwụ na ihe atụ ahụike n'ime oge, gosi ha onye ọrụ ahụike mgbe ị ga-eleta ya.",
    checker_head: "Gwa anyị otú ahụ dị gị", checker_sub: "Nke a na-enye naanị nduzi izugbe. Ọ dịghị anọchi anya ileta onye ọrụ ahụike ruru eru.",
    checker_bot_name: "Onye Nduzi HealthBridge", checker_status: "Ọ nọ n'ịntanetị", checker_placeholder: "Dee mgbaàmà ọrịa gị, dịka ahụ ọkụ na isi ọwụwa...",
    checker_note: "Ọ bụrụ na ị na-agba ọbara nke ukwuu, obi na-egbu gị mgbu, ike ọ na-agwụ gị iku ume, ma ọ bụ ị dara ada, gaa ụlọ ọgwụ mberede kacha nso ozugbo.",
    checker_greeting: "Ndewo! Gwa m mgbaàmà ọrịa ị nwere ka m nyere gị nduzi izugbe.",
    findcare_head: "Chọọ site na steeti na LGA", findcare_sub: "Ndepụta mmalite nke ụlọ ọgwụ — a na-agbakwunye ka HealthBridge na-eto.",
    findcare_btn: "Chọọ", findcare_locate: "Jiri ebe m nọ", findcare_locating: "Na-achọ ebe ị nọ...",
    findcare_all_states: "Steeti niile", findcare_all_lgas: "LGA niile", findcare_no_results: "Ahụtụbeghị ụlọ ọgwụ na mpaghara ahụ.",
    findcare_start: "Họrọ steeti wee pịa Chọọ, ma ọ bụ jiri ebe ị nọ.",
    records_head: "Ndekọ Ahụike Onwe", records_sub: "Debe ndekọ mfe nke mgbaàmà ọrịa, ọgwụ na ihe atụ ahụike iji gosi dọkịta.",
    records_form_title: "Tinye ndekọ", records_type_label: "Ụdị", records_type_symptom: "Mgbaàmà ọrịa", records_type_medicine: "Ọgwụ",
    records_type_vital: "Ihe atụ ahụike", records_title_label: "Isiokwu", records_notes_label: "Nkọwa ọzọ", records_add_btn: "Chekwaa",
    records_list_title: "Ndekọ gị", records_empty: "Enweghị ndekọ ugbu a. Tinye nke mbụ gị.",
    mc_head: "Nduzi maka ndị nne na ụmụaka",
    mc1_title: "N'oge ime", mc1_sub: "Nduzi mfe maka usoro ọ bụla, na ihe ịrịba ama nke chọrọ nlekọta ngwa ngwa.",
    mc1_li1: "Ncheta nleta tupu ọmụmụ", mc1_li2: "Ihe ịrịba ama ị ga-elerịba anya", mc1_li3: "Nduzi nri dịka ọnwa ime si dị",
    mc2_title: "Ahụike Nwa", mc2_sub: "Soro uto na ọrịa ụmụaka a na-ahụkarị.",
    mc2_li1: "Usoro agba mgbochi ọrịa", mc2_li2: "Uto na inye nri nwa", mc2_li3: "Nduzi ọrịa a na-ahụkarị",
    footer_text: "Ọ bụghị ihe nnọchi nlekọta dọkịta ọkachamara. Na-ajụta onye ọrụ ahụike mgbe niile.",
    emergency_text: "Ọ bụrụ na ọ bụ ihe mberede ahụike, kpọọ nọmba mberede mpaghara gị ugbu a.", emergency_btn: "Nọmba mberede",
    emergency_title: "Nọmba mberede (Naịjirịa)",
    record_placeholder_title: "dịka Isi ọwụwa, Paracetamol, Ọgụgụ ọbara"
  }
};

let currentLang = "en";

function applyTranslations(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    const key = el.getAttribute("data-i18n");
    if(!dict[key]) return;
    if(key === "hero_title"){
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function(el){
    const key = el.getAttribute("data-i18n-placeholder");
    if(dict[key]) el.setAttribute("placeholder", dict[key]);
  });
  const emergencyText = document.getElementById("emergency-text");
  if(emergencyText) emergencyText.textContent = dict.emergency_text;
  const emergencyBtn = document.getElementById("emergency-btn");
  if(emergencyBtn) emergencyBtn.textContent = dict.emergency_btn;

  document.querySelectorAll(".lang-btn").forEach(function(btn){
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  if(typeof renderRecords === "function") renderRecords();
  if(typeof renderFacilityPrompt === "function") renderFacilityPrompt();
  const greetingChatLog = document.getElementById("chat-log");
  if(greetingChatLog && greetingChatLog.children.length === 0 && typeof addMessage === "function"){
    addMessage("bot", dict.checker_greeting);
  }
}

document.querySelectorAll(".lang-btn").forEach(function(btn){
  btn.addEventListener("click", function(){
    applyTranslations(btn.getAttribute("data-lang"));
  });
});

// ---------- 1b. SHARED DATA & CLOUD SYNC (needed on every page) ----------
const FACILITIES = [
  { name: "Abia State Specialist Hospital", type: "Hospital", state: "Abia", lga: "Umuahia", lat: 5.5265, lng: 7.4864 },
  { name: "Federal Medical Centre Yola", type: "Hospital", state: "Adamawa", lga: "Yola", lat: 9.2035, lng: 12.4954 },
  { name: "University of Uyo Teaching Hospital", type: "Hospital", state: "Akwa Ibom", lga: "Uyo", lat: 5.0377, lng: 7.9128 },
  { name: "Chukwuemeka Odumegwu Ojukwu Teaching Hospital", type: "Hospital", state: "Anambra", lga: "Awka", lat: 6.212, lng: 7.074 },
  { name: "Abubakar Tafawa Balewa Teaching Hospital", type: "Hospital", state: "Bauchi", lga: "Bauchi", lat: 10.3103, lng: 9.8439 },
  { name: "Federal Medical Centre Yenagoa", type: "Hospital", state: "Bayelsa", lga: "Yenagoa", lat: 4.9267, lng: 6.2676 },
  { name: "Benue State University Teaching Hospital", type: "Hospital", state: "Benue", lga: "Makurdi", lat: 7.7322, lng: 8.5391 },
  { name: "University of Maiduguri Teaching Hospital", type: "Hospital", state: "Borno", lga: "Maiduguri", lat: 11.8333, lng: 13.15 },
  { name: "University of Calabar Teaching Hospital", type: "Hospital", state: "Cross River", lga: "Calabar", lat: 4.9589, lng: 8.3269 },
  { name: "Federal Medical Centre Asaba", type: "Hospital", state: "Delta", lga: "Asaba", lat: 6.1987, lng: 6.698 },
  { name: "Alex Ekwueme Federal University Teaching Hospital", type: "Hospital", state: "Ebonyi", lga: "Abakaliki", lat: 6.3249, lng: 8.1137 },
  { name: "University of Benin Teaching Hospital", type: "Hospital", state: "Edo", lga: "Benin City", lat: 6.335, lng: 5.6037 },
  { name: "Ekiti State University Teaching Hospital", type: "Hospital", state: "Ekiti", lga: "Ado-Ekiti", lat: 7.621, lng: 5.2213 },
  { name: "Enugu State University Teaching Hospital", type: "Hospital", state: "Enugu", lga: "Enugu East", lat: 6.4413, lng: 7.5086 },
  { name: "Federal Teaching Hospital Gombe", type: "Hospital", state: "Gombe", lga: "Gombe", lat: 10.2897, lng: 11.1673 },
  { name: "Federal Medical Centre Owerri", type: "Hospital", state: "Imo", lga: "Owerri", lat: 5.484, lng: 7.0351 },
  { name: "Sheikh Muhammadu Sanusi II Specialist Hospital", type: "Hospital", state: "Jigawa", lga: "Dutse", lat: 11.7566, lng: 9.3387 },
  { name: "Barau Dikko Teaching Hospital", type: "Hospital", state: "Kaduna", lga: "Kaduna North", lat: 10.534, lng: 7.439 },
  { name: "Murtala Muhammad Specialist Hospital", type: "Hospital", state: "Kano", lga: "Kano Municipal", lat: 12.0022, lng: 8.5919 },
  { name: "Federal Teaching Hospital Katsina", type: "Hospital", state: "Katsina", lga: "Katsina", lat: 12.9908, lng: 7.6018 },
  { name: "Federal Medical Centre Birnin Kebbi", type: "Hospital", state: "Kebbi", lga: "Birnin Kebbi", lat: 12.453, lng: 4.1975 },
  { name: "Federal Medical Centre Lokoja", type: "Hospital", state: "Kogi", lga: "Lokoja", lat: 7.7999, lng: 6.7337 },
  { name: "University of Ilorin Teaching Hospital", type: "Hospital", state: "Kwara", lga: "Ilorin West", lat: 8.4966, lng: 4.5426 },
  { name: "Lagos Island General Hospital", type: "Hospital", state: "Lagos", lga: "Lagos Island", lat: 6.455, lng: 3.3941 },
  { name: "Dalhatu Araf Specialist Hospital", type: "Hospital", state: "Nasarawa", lga: "Lafia", lat: 8.4939, lng: 8.5162 },
  { name: "General Hospital Minna", type: "Hospital", state: "Niger", lga: "Minna", lat: 9.6139, lng: 6.5569 },
  { name: "Federal Medical Centre Abeokuta", type: "Hospital", state: "Ogun", lga: "Abeokuta South", lat: 7.1475, lng: 3.3619 },
  { name: "University of Medical Sciences Teaching Hospital", type: "Hospital", state: "Ondo", lga: "Akure South", lat: 7.2508, lng: 5.1958 },
  { name: "Adeoyo Maternity Teaching Hospital", type: "Hospital", state: "Oyo", lga: "Ibadan North", lat: 7.39, lng: 3.907 },
  { name: "Jos University Teaching Hospital", type: "Hospital", state: "Plateau", lga: "Jos North", lat: 9.8965, lng: 8.8583 },
  { name: "Rivers State University Teaching Hospital", type: "Hospital", state: "Rivers", lga: "Port Harcourt", lat: 4.8156, lng: 7.0498 },
  { name: "Usmanu Danfodiyo University Teaching Hospital", type: "Hospital", state: "Sokoto", lga: "Sokoto North", lat: 13.0059, lng: 5.2476 },
  { name: "Federal Medical Centre Jalingo", type: "Hospital", state: "Taraba", lga: "Jalingo", lat: 8.8833, lng: 11.3667 },
  { name: "Federal Teaching Hospital Damaturu", type: "Hospital", state: "Yobe", lga: "Damaturu", lat: 11.7469, lng: 11.9609 },
  { name: "Federal Medical Centre Gusau", type: "Hospital", state: "Zamfara", lga: "Gusau", lat: 12.1704, lng: 6.6641 },
  { name: "National Hospital Abuja", type: "Hospital", state: "FCT", lga: "Abuja Municipal", lat: 9.0765, lng: 7.3986 },
  { name: "Gbagada General Hospital", type: "Hospital", state: "Lagos", lga: "Kosofe", lat: 6.554, lng: 3.388 },
  { name: "Ikeja Community Clinic", type: "Clinic", state: "Lagos", lga: "Ikeja", lat: 6.6018, lng: 3.3515 },
  { name: "Kano Central Pharmacy", type: "Pharmacy", state: "Kano", lga: "Fagge", lat: 12.0072, lng: 8.51 },
  { name: "Kaduna South Clinic", type: "Clinic", state: "Kaduna", lga: "Kaduna South", lat: 10.487, lng: 7.43 },
  { name: "Braithwaite Memorial Specialist Hospital", type: "Hospital", state: "Rivers", lga: "Port Harcourt", lat: 4.7789, lng: 7.0134 },
  { name: "Ibadan North Clinic", type: "Clinic", state: "Oyo", lga: "Ibadan North", lat: 7.3964, lng: 3.9167 },
  { name: "Enugu Central Pharmacy", type: "Pharmacy", state: "Enugu", lga: "Enugu North", lat: 6.4584, lng: 7.5464 }
];

let records = [];
try {
  const saved = localStorage.getItem("healthbridge_records");
  if(saved) records = JSON.parse(saved);
} catch(e) {
  records = []; // localStorage unavailable (e.g. sandboxed preview) — falls back to in-memory only
}

function saveRecordsToStorage(){
  try {
    localStorage.setItem("healthbridge_records", JSON.stringify(records));
  } catch(e) {
    // silently ignore — records still work in-memory for this session
  }
}

let qaPosts = [];
try {
  const savedQA = localStorage.getItem("healthbridge_qa");
  if(savedQA) qaPosts = JSON.parse(savedQA);
} catch(e) { qaPosts = []; }

const STOCK_ANSWERS = [
  "Thanks for asking — a health worker will typically want to examine you directly for something like this. In the meantime, the Symptom Guidance tool above can give general pointers.",
  "This is a good question to bring to your nearest clinic — use the Find Care section to locate one close to you.",
  "General self-care (rest, fluids, hygiene) helps with many mild symptoms, but please see a health worker if things don't improve within a couple of days."
];

function saveQAToStorage(){
  try { localStorage.setItem("healthbridge_qa", JSON.stringify(qaPosts)); } catch(e) { /* ignore */ }
}

function syncToCloud(){
  if(!auth.currentUser) return; // guest mode: stays device-local only
  db.collection("users").doc(auth.currentUser.uid).set({
    records: records,
    qaPosts: qaPosts
  }, { merge: true }).catch(function(err){
    console.error("Cloud sync failed:", err);
  });
}

function loadFromCloud(uid){
  db.collection("users").doc(uid).get().then(function(doc){
    if(doc.exists){
      const data = doc.data();
      records = data.records || [];
      qaPosts = data.qaPosts || [];
      saveRecordsToStorage();
      saveQAToStorage();
      if(typeof renderRecords === "function") renderRecords();
      if(typeof renderQA === "function") renderQA();
    } else {
      // First time this account has logged in — push whatever is on this device up as the starting cloud state
      syncToCloud();
    }
  }).catch(function(err){
    console.error("Cloud load failed:", err);
  });
}

// ---------- 2. NAV TOGGLE ----------
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
navToggle.addEventListener("click", function(){
  navLinks.classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(function(a){
  a.addEventListener("click", function(){ navLinks.classList.remove("open"); });
});

// ---------- 3. EMERGENCY NUMBERS ----------
document.getElementById("emergency-btn").addEventListener("click", function(){
  const dict = translations[currentLang];
  alert(
    dict.emergency_title + "\n\n" +
    "National Emergency Number: 112\n" +
    "Nigeria Police: 112 / 199\n" +
    "Federal Fire Service: 112\n" +
    "NCDC Emergency Line: 6232\n\n" +
    "If you cannot reach these, go directly to the nearest hospital or clinic."
  );
});

if(document.getElementById("checker")){
// ---------- 4. SYMPTOM CHECKER ----------
const chatLog = document.getElementById("chat-log");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");

function addMessage(role, text){
  const div = document.createElement("div");
  div.className = "msg " + role;
  div.textContent = text;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}

const RED_FLAGS = [
  "chest pain", "can't breathe", "cannot breathe", "difficulty breathing",
  "unconscious", "not breathing", "heavy bleeding", "severe bleeding",
  "convulsion", "seizure", "ciwon kirji", "numfashi", "àyà", "ìmí", "obi na-egbu", "iku ume"
];

const SYMPTOM_RESPONSES = [
  { keys: ["fever", "zazzabi", "ìba", "ahụ ọkụ", "temperature"],
    text: "A fever can have many causes, including malaria, which is common in Nigeria. Rest, drink plenty of fluids, and consider a malaria test at a nearby clinic if it continues beyond a day or is very high." },
  { keys: ["headache", "ciwon kai", "orí fífọ́", "isi ọwụwa"],
    text: "Headaches are often linked to dehydration, stress, or fever. Rest in a cool, quiet place and drink water. See a health worker if it is severe, sudden, or comes with vision changes." },
  { keys: ["cough", "tari", "ikọ", "ụkwara"],
    text: "A cough that lasts more than two weeks, or comes with fever and chest pain, should be checked by a health worker to rule out infections such as TB or pneumonia." },
  { keys: ["diarrhea", "diarrhoea", "gudawa", "ìgbẹ́gbuuru", "afọ ọsịsọ"],
    text: "Keep drinking fluids to avoid dehydration — oral rehydration salts help if available. See a clinic if it lasts more than two days, or if there is blood or high fever." },
  { keys: ["pregnant", "pregnancy", "ciki", "oyún", "ime"],
    text: "During pregnancy, mild nausea and tiredness are common. Keep up antenatal visits, eat small frequent meals, and go to a clinic immediately for heavy bleeding, severe pain, or blurred vision." },
  { keys: ["malaria"],
    text: "Fever, chills, and body aches can point to malaria, which is common in Nigeria. A rapid test at the nearest clinic can confirm this — please don't self-medicate without one." }
];

function generateResponse(rawText){
  const text = rawText.toLowerCase();
  for(const flag of RED_FLAGS){
    if(text.indexOf(flag.toLowerCase()) !== -1){
      return { flag: true, text: "This could be serious. Please go to the nearest emergency room or call 112 right now — do not wait." };
    }
  }
  for(const item of SYMPTOM_RESPONSES){
    for(const key of item.keys){
      if(text.indexOf(key.toLowerCase()) !== -1){
        return { flag: false, text: item.text };
      }
    }
  }
  return { flag: false, text: "Thanks for sharing that. It's best to have a health worker examine you for a clear picture — you can search 'Find Care' above for a clinic near you. If things get worse quickly, seek care immediately." };
}

function sendChat(){
  const val = chatInput.value.trim();
  if(!val) return;
  addMessage("user", val);
  chatInput.value = "";
  setTimeout(function(){
    const res = generateResponse(val);
    addMessage(res.flag ? "flag" : "bot", res.text);
  }, 350);
}

chatSend.addEventListener("click", sendChat);
chatInput.addEventListener("keydown", function(e){
  if(e.key === "Enter") sendChat();
});

// ---------- 4b. VOICE NOTE RECORDING ----------
const chatMic = document.getElementById("chat-mic");
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;
let speechRecognizer = null;
let liveTranscript = "";

function addAudioMessage(audioUrl, transcript){
  const div = document.createElement("div");
  div.className = "msg user-audio";
  const audio = document.createElement("audio");
  audio.controls = true;
  audio.src = audioUrl;
  div.appendChild(audio);
  if(transcript){
    const t = document.createElement("div");
    t.className = "transcript";
    t.textContent = "\"" + transcript + "\"";
    div.appendChild(t);
  }
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function startRecording(){
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
    alert("Voice recording is not supported on this device/browser.");
    return;
  }
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream){
      audioChunks = [];
      liveTranscript = "";
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.addEventListener("dataavailable", function(e){
        audioChunks.push(e.data);
      });

      mediaRecorder.addEventListener("stop", function(){
        const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
        const audioUrl = URL.createObjectURL(audioBlob);
        addAudioMessage(audioUrl, liveTranscript.trim());
        stream.getTracks().forEach(function(track){ track.stop(); });

        setTimeout(function(){
          if(liveTranscript.trim()){
            const res = generateResponse(liveTranscript);
            addMessage(res.flag ? "flag" : "bot", res.text);
          } else {
            addMessage("bot", "Voice note received. For the clearest guidance, please also type your symptom in the box above.");
          }
        }, 350);
      });

      mediaRecorder.start();
      isRecording = true;
      chatMic.classList.add("recording");
      chatMic.textContent = "■";

      // Optional live transcription where the browser supports it
      const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
      if(SpeechRecognitionAPI){
        speechRecognizer = new SpeechRecognitionAPI();
        speechRecognizer.continuous = true;
        speechRecognizer.interimResults = false;
        speechRecognizer.lang = currentLang === "en" ? "en-NG" : currentLang;
        speechRecognizer.addEventListener("result", function(event){
          for(let i = event.resultIndex; i < event.results.length; i++){
            if(event.results[i].isFinal){
              liveTranscript += " " + event.results[i][0].transcript;
            }
          }
        });
        speechRecognizer.addEventListener("error", function(){ /* transcription unavailable, audio note still works */ });
        try { speechRecognizer.start(); } catch(e) { /* ignore */ }
      }
    })
    .catch(function(){
      alert("Microphone permission was denied. You can still type your symptom above.");
    });
}

function stopRecording(){
  if(mediaRecorder && isRecording){
    mediaRecorder.stop();
  }
  if(speechRecognizer){
    try { speechRecognizer.stop(); } catch(e) { /* ignore */ }
  }
  isRecording = false;
  chatMic.classList.remove("recording");
  chatMic.textContent = "🎤";
}

chatMic.addEventListener("click", function(){
  if(isRecording){
    stopRecording();
  } else {
    startRecording();
  }
});

}

if(document.getElementById("findcare")){
// ---------- 5. FIND CARE DATA + GEOLOCATION ----------

const stateSelect = document.getElementById("state-select");
const lgaSelect = document.getElementById("lga-select");
const facilityResults = document.getElementById("facility-results");
const findcareControls = document.querySelector(".findcare-controls");

function uniqueStates(){
  return Array.from(new Set(FACILITIES.map(function(f){ return f.state; }))).sort();
}
function lgasForState(state){
  return Array.from(new Set(FACILITIES.filter(function(f){ return f.state === state; }).map(function(f){ return f.lga; }))).sort();
}

function populateStateSelect(){
  const dict = translations[currentLang];
  stateSelect.innerHTML = "";
  const allOpt = document.createElement("option");
  allOpt.value = ""; allOpt.textContent = dict.findcare_all_states;
  stateSelect.appendChild(allOpt);
  uniqueStates().forEach(function(s){
    const opt = document.createElement("option");
    opt.value = s; opt.textContent = s;
    stateSelect.appendChild(opt);
  });
  populateLgaSelect("");
}

function populateLgaSelect(state){
  const dict = translations[currentLang];
  lgaSelect.innerHTML = "";
  const allOpt = document.createElement("option");
  allOpt.value = ""; allOpt.textContent = dict.findcare_all_lgas;
  lgaSelect.appendChild(allOpt);
  if(state){
    lgasForState(state).forEach(function(l){
      const opt = document.createElement("option");
      opt.value = l; opt.textContent = l;
      lgaSelect.appendChild(opt);
    });
  }
}

stateSelect.addEventListener("change", function(){
  populateLgaSelect(stateSelect.value);
});

function renderFacilities(list, distanceLabel){
  facilityResults.innerHTML = "";
  const dict = translations[currentLang];
  if(list.length === 0){
    const p = document.createElement("p");
    p.id = "record-empty";
    p.textContent = dict.findcare_no_results;
    facilityResults.appendChild(p);
    return;
  }
  list.forEach(function(f){
    const card = document.createElement("div");
    card.className = "facility-card";
    const dist = distanceLabel && f._distanceKm !== undefined ? " · " + f._distanceKm.toFixed(1) + " km" : "";
    card.innerHTML =
      '<div class="fc-name">' + f.name + '</div>' +
      '<div class="fc-meta">' + f.lga + ", " + f.state + dist + '</div>' +
      '<span class="facility-badge">' + f.type + '</span>';
    facilityResults.appendChild(card);
  });
}

function renderFacilityPrompt(){
  const dict = translations[currentLang];
  facilityResults.innerHTML = '<p id="record-empty">' + dict.findcare_start + '</p>';
}

document.getElementById("search-facilities").addEventListener("click", function(){
  const state = stateSelect.value;
  const lga = lgaSelect.value;
  const filtered = FACILITIES.filter(function(f){
    return (!state || f.state === state) && (!lga || f.lga === lga);
  });
  renderFacilities(filtered, false);
});

// Haversine distance in km
function distanceKm(lat1, lng1, lat2, lng2){
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Inject "Use my location" / Live Tracking button into the find-care controls
const locateBtn = document.createElement("button");
locateBtn.className = "btn btn-ghost";
locateBtn.type = "button";
locateBtn.style.color = "#14213D";
locateBtn.style.border = "1px solid #E4DCC9";
locateBtn.textContent = translations[currentLang].findcare_locate;
locateBtn.id = "locate-btn";
findcareControls.insertBefore(locateBtn, findcareControls.firstChild);

const locateStatus = document.createElement("span");
locateStatus.id = "locate-status";
locateStatus.style.cssText = "font-size:0.78rem; color:var(--text-soft); display:flex; align-items:center; gap:6px; margin-left:4px;";
findcareControls.insertBefore(locateStatus, locateBtn.nextSibling);

let watchId = null;
let isTracking = false;

function updateNearestFacilities(userLat, userLng){
  const withDistance = FACILITIES.map(function(f){
    return Object.assign({}, f, { _distanceKm: distanceKm(userLat, userLng, f.lat, f.lng) });
  });
  withDistance.sort(function(a, b){ return a._distanceKm - b._distanceKm; });
  const nearest = withDistance.slice(0, 5);

  if(nearest.length > 0){
    stateSelect.value = nearest[0].state;
    populateLgaSelect(nearest[0].state);
    lgaSelect.value = "";
  }
  renderFacilities(nearest, true);
}

function startLiveTracking(){
  if(!navigator.geolocation){
    alert("Geolocation is not supported on this device/browser.");
    return;
  }
  isTracking = true;
  locateBtn.textContent = "Stop live tracking";
  locateStatus.innerHTML = '<span style="width:8px;height:8px;border-radius:50%;background:var(--red);display:inline-block;animation:pulse 1.2s infinite;"></span> Live';

  watchId = navigator.geolocation.watchPosition(
    function(position){
      updateNearestFacilities(position.coords.latitude, position.coords.longitude);
    },
    function(error){
      let msg = "Could not get your location.";
      if(error.code === error.PERMISSION_DENIED) msg = "Location permission was denied. You can still search by state and LGA above.";
      alert(msg);
      stopLiveTracking();
    },
    { enableHighAccuracy: true, maximumAge: 15000, timeout: 15000 }
  );
}

function stopLiveTracking(){
  isTracking = false;
  if(watchId !== null){
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
  const dict = translations[currentLang];
  locateBtn.textContent = dict.findcare_locate;
  locateStatus.innerHTML = "";
}

locateBtn.addEventListener("click", function(){
  if(isTracking){
    stopLiveTracking();
  } else {
    startLiveTracking();
  }
});

}

if(document.getElementById("records")){
// ---------- 6. PERSONAL HEALTH RECORDS ----------
const recordType = document.getElementById("record-type");
const recordTitle = document.getElementById("record-title");
const recordNotes = document.getElementById("record-notes");
const recordItems = document.getElementById("record-items");
const recordEmpty = document.getElementById("record-empty");

document.getElementById("record-add").addEventListener("click", function(){
  const title = recordTitle.value.trim();
  if(!title){
    recordTitle.focus();
    return;
  }
  records.unshift({
    id: Date.now(),
    type: recordType.value,
    title: title,
    notes: recordNotes.value.trim(),
    date: new Date().toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })
  });
  recordTitle.value = "";
  recordNotes.value = "";
  saveRecordsToStorage();
  syncToCloud();
  renderRecords();
});

function renderRecords(){
  const dict = translations[currentLang];
  recordItems.innerHTML = "";
  if(records.length === 0){
    recordEmpty.textContent = dict.records_empty;
    recordEmpty.style.display = "block";
    return;
  }
  recordEmpty.style.display = "none";
  const typeLabels = {
    symptom: dict.records_type_symptom,
    medicine: dict.records_type_medicine,
    vital: dict.records_type_vital
  };
  records.forEach(function(r){
    const card = document.createElement("div");
    card.className = "record-card";
    card.innerHTML =
      '<div>' +
        '<div class="rc-type">' + (typeLabels[r.type] || r.type) + '</div>' +
        '<div class="rc-title">' + r.title + '</div>' +
        (r.notes ? '<div style="font-size:0.85rem;color:#5B6472;margin-top:2px;">' + r.notes + '</div>' : '') +
        '<div class="rc-date">' + r.date + '</div>' +
      '</div>';
    const delBtn = document.createElement("button");
    delBtn.textContent = "✕";
    delBtn.setAttribute("aria-label", "Delete record");
    delBtn.addEventListener("click", function(){
      records = records.filter(function(item){ return item.id !== r.id; });
      saveRecordsToStorage();
      syncToCloud();
      renderRecords();
    });
    card.appendChild(delBtn);
    recordItems.appendChild(card);
  });
}

}

// ---------- 0. FIREBASE AUTH ----------
const firebaseConfig = {
  apiKey: "AIzaSyBTJyEjiTO8oOvuUaOXqToiNPp77LTSln8",
  authDomain: "healthbridge-e1df8.firebaseapp.com",
  projectId: "healthbridge-e1df8",
  storageBucket: "healthbridge-e1df8.firebasestorage.app",
  messagingSenderId: "662643995657",
  appId: "1:662643995657:web:e393a1b8353bb7ed62f4d8",
  measurementId: "G-VJ0JSVNFX6"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const authModalOverlay = document.getElementById("auth-modal-overlay");
const accountBtn = document.getElementById("account-btn");

function openAuthModal(){ authModalOverlay.classList.add("open"); }
function closeAuthModal(){ authModalOverlay.classList.remove("open"); }

document.getElementById("auth-modal-close").addEventListener("click", closeAuthModal);
authModalOverlay.addEventListener("click", function(e){
  if(e.target === authModalOverlay) closeAuthModal();
});

document.querySelectorAll(".modal-tab").forEach(function(tab){
  tab.addEventListener("click", function(){
    document.querySelectorAll(".modal-tab").forEach(function(t){ t.classList.remove("active"); });
    tab.classList.add("active");
    document.querySelectorAll(".modal-panel").forEach(function(p){ p.style.display = "none"; });
    document.getElementById("panel-" + tab.getAttribute("data-tab")).style.display = "block";
  });
});

accountBtn.addEventListener("click", function(){
  if(auth.currentUser){
    auth.signOut();
  } else {
    openAuthModal();
  }
});

function friendlyAuthError(error){
  const code = error.code || "";
  if(code.indexOf("email-already-in-use") !== -1) return "That email already has an account. Try logging in instead.";
  if(code.indexOf("weak-password") !== -1) return "Password should be at least 6 characters.";
  if(code.indexOf("invalid-email") !== -1) return "Please enter a valid email address.";
  if(code.indexOf("user-not-found") !== -1 || code.indexOf("wrong-password") !== -1 || code.indexOf("invalid-credential") !== -1) return "Incorrect email or password.";
  if(code.indexOf("too-many-requests") !== -1) return "Too many attempts. Please wait a moment and try again.";
  return "Something went wrong. Please try again.";
}

document.getElementById("signup-submit").addEventListener("click", function(){
  const name = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value;
  const errorEl = document.getElementById("signup-error");
  errorEl.textContent = "";

  if(!name || !email || !password){
    errorEl.textContent = "Please fill in every field.";
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(function(cred){
      return cred.user.updateProfile({ displayName: name });
    })
    .then(function(){
      closeAuthModal();
    })
    .catch(function(error){
      errorEl.textContent = friendlyAuthError(error);
    });
});

document.getElementById("login-submit").addEventListener("click", function(){
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;
  const errorEl = document.getElementById("login-error");
  errorEl.textContent = "";

  if(!email || !password){
    errorEl.textContent = "Please enter your email and password.";
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(function(){
      closeAuthModal();
    })
    .catch(function(error){
      errorEl.textContent = friendlyAuthError(error);
    });
});

document.getElementById("reset-submit").addEventListener("click", function(){
  const email = document.getElementById("reset-email").value.trim();
  const msgEl = document.getElementById("reset-message");
  msgEl.className = "auth-msg";
  msgEl.textContent = "";

  if(!email){
    msgEl.classList.add("auth-error");
    msgEl.textContent = "Please enter your email address.";
    return;
  }

  auth.sendPasswordResetEmail(email)
    .then(function(){
      msgEl.style.color = "var(--green)";
      msgEl.textContent = "Reset link sent. Please check your email inbox (and spam folder).";
    })
    .catch(function(error){
      msgEl.classList.add("auth-error");
      msgEl.textContent = friendlyAuthError(error);
    });
});

auth.onAuthStateChanged(function(user){
  const recordsStatus = document.getElementById("records-sync-status");
  const qaStatus = document.getElementById("qa-sync-status");
  if(user){
    accountBtn.textContent = (user.displayName || user.email.split("@")[0]) + " · Log Out";
    if(recordsStatus) recordsStatus.textContent = "Synced to your account — accessible from any device you log into.";
    if(qaStatus) qaStatus.textContent = "Synced to your account. (Still visible only to you, not a shared public board yet.)";
    loadFromCloud(user.uid);
  } else {
    accountBtn.textContent = "Sign In";
    if(recordsStatus) recordsStatus.textContent = "Saved on this device only — sign in to sync across devices.";
    if(qaStatus) qaStatus.textContent = "Saved on this device only for now. Sign in to keep this with your account.";
  }
});


// ---------- 8. THEME SWITCHER ----------
let currentTheme = "light";
try {
  const savedTheme = localStorage.getItem("healthbridge_theme");
  if(savedTheme) currentTheme = savedTheme;
} catch(e) { /* fall back to default */ }

function applyTheme(theme){
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme === "light" ? "" : theme);
  document.querySelectorAll(".theme-btn").forEach(function(btn){
    btn.classList.toggle("active", btn.getAttribute("data-theme") === theme);
  });
  try { localStorage.setItem("healthbridge_theme", theme); } catch(e) { /* ignore */ }
}

document.querySelectorAll(".theme-btn").forEach(function(btn){
  btn.addEventListener("click", function(){
    applyTheme(btn.getAttribute("data-theme"));
  });
});

if(document.getElementById("firstaid")){
// ---------- 9. FIRST AID GUIDES ----------
const FIRST_AID_TOPICS = [
  { icon: "🫁", title: "Choking", body: "If they can cough or speak, encourage coughing. If they cannot breathe, cough, or speak: give 5 firm back blows between the shoulder blades, then 5 abdominal thrusts (Heimlich manoeuvre). Repeat until it clears or help arrives. Call for emergency help immediately if the person turns blue or loses consciousness." },
  { icon: "🔥", title: "Burns", body: "Cool the burn under cool (not ice-cold) running water for at least 10-20 minutes. Remove any tight clothing or jewellery near the area before it swells. Do not apply butter, oil, or toothpaste. Cover loosely with clean, non-stick cloth. Seek medical care urgently for large, deep, or facial burns." },
  { icon: "🐍", title: "Snake bite", body: "Keep the person calm and still to slow venom spread. Remove tight items like rings near the bite. Keep the bitten limb lower than the heart if possible. Do NOT cut the wound, suck out venom, or apply a tight tourniquet. Get to a hospital immediately — antivenom may be needed." },
  { icon: "🩸", title: "Severe bleeding", body: "Apply firm, direct pressure to the wound with a clean cloth. Keep pressing without lifting to check. Raise the injured area above heart level if possible. Call for emergency help if bleeding does not slow, or if it's a deep wound, or from the head, neck, or abdomen." },
  { icon: "😵", title: "Fainting / unconsciousness", body: "Lay the person flat and raise their legs slightly if they feel faint. If unconscious but breathing, place them on their side (recovery position). If not breathing normally, begin CPR if trained and call for emergency help immediately." },
  { icon: "🌡️", title: "Very high fever", body: "Remove excess clothing and sponge the skin with lukewarm (not cold) water. Keep the person hydrated with water or oral rehydration solution. Seek urgent care if fever is very high, lasts more than 2 days, or comes with stiff neck, rash, or confusion — this could be malaria, meningitis or another serious infection." }
];

function renderFirstAid(){
  const wrap = document.getElementById("firstaid-accordion");
  wrap.innerHTML = "";
  FIRST_AID_TOPICS.forEach(function(topic, i){
    const item = document.createElement("div");
    item.className = "accordion-item";
    item.innerHTML =
      '<div class="accordion-head">' +
        '<span><span class="icon">' + topic.icon + '</span> ' + topic.title + '</span>' +
        '<span class="chev">▾</span>' +
      '</div>' +
      '<div class="accordion-body"><div class="accordion-body-inner">' + topic.body + '</div></div>';
    item.querySelector(".accordion-head").addEventListener("click", function(){
      item.classList.toggle("open");
    });
    wrap.appendChild(item);
  });
}

}

if(document.getElementById("tips")){
// ---------- 10. HEALTH TIPS ----------
const HEALTH_TIPS = [
  { tag: "Malaria prevention", title: "Sleep under a treated net", body: "Insecticide-treated mosquito nets remain one of the most effective ways to prevent malaria, especially for children and pregnant women." },
  { tag: "Hygiene", title: "Wash hands at key moments", body: "Wash with soap before eating or cooking, and after using the toilet, to cut down on diarrhoea and infections." },
  { tag: "Maternal health", title: "Attend antenatal visits", body: "Regular antenatal check-ups catch problems early and track both mother and baby's health through pregnancy." },
  { tag: "Nutrition", title: "Eat a variety of local foods", body: "Combining grains, beans, vegetables, and fruits gives a more complete range of nutrients than relying on one staple." },
  { tag: "Child health", title: "Keep vaccines on schedule", body: "Routine immunization protects children from preventable diseases like measles, polio, and whooping cough." },
  { tag: "Water safety", title: "Boil or treat drinking water", body: "Where clean water isn't guaranteed, boiling or using water treatment tablets reduces the risk of typhoid and cholera." }
];

function renderHealthTips(){
  const grid = document.getElementById("tips-grid");
  grid.innerHTML = "";
  HEALTH_TIPS.forEach(function(tip){
    const card = document.createElement("div");
    card.className = "tip-card";
    card.innerHTML =
      '<span class="tip-tag">' + tip.tag + '</span>' +
      '<h3>' + tip.title + '</h3>' +
      '<p>' + tip.body + '</p>';
    grid.appendChild(card);
  });
}

}

if(document.getElementById("appointment")){
// ---------- 11. APPOINTMENT REQUEST ----------
function populateApptFacility(){
  const select = document.getElementById("appt-facility");
  select.innerHTML = "";
  FACILITIES.forEach(function(f){
    const opt = document.createElement("option");
    opt.value = f.name;
    opt.textContent = f.name + " — " + f.lga + ", " + f.state;
    select.appendChild(opt);
  });
}

document.getElementById("appt-submit").addEventListener("click", function(){
  const name = document.getElementById("appt-name").value.trim();
  const phone = document.getElementById("appt-phone").value.trim();
  const date = document.getElementById("appt-date").value;
  const facility = document.getElementById("appt-facility").value;
  const reason = document.getElementById("appt-reason").value.trim();

  if(!name || !phone || !date){
    alert("Please fill in your name, phone number, and preferred date.");
    return;
  }

  const confirmBox = document.getElementById("appt-confirm");
  const dict = translations[currentLang];
  confirmBox.style.display = "block";
  confirmBox.innerHTML =
    "<strong>" + (dict.appt_confirm_msg || "Request saved.") + "</strong><br><br>" +
    "<strong>Name:</strong> " + name + "<br>" +
    "<strong>Phone:</strong> " + phone + "<br>" +
    "<strong>Date:</strong> " + date + "<br>" +
    "<strong>Facility:</strong> " + facility + "<br>" +
    (reason ? "<strong>Reason:</strong> " + reason : "");

  document.getElementById("appt-name").value = "";
  document.getElementById("appt-phone").value = "";
  document.getElementById("appt-date").value = "";
  document.getElementById("appt-reason").value = "";
});

}

if(document.getElementById("pharmacy")){
// ---------- 12. PHARMACY STOCK CHECKER (DEMO DATA ONLY) ----------
const MEDICINE_STOCK = ["Paracetamol", "Amoxicillin", "ORS (Oral Rehydration Salts)", "Artemether-Lumefantrine (malaria)", "Ibuprofen", "Multivitamins", "Zinc tablets", "Folic acid"];

function seededStatus(seedStr){
  // Deterministic pseudo-status so results stay consistent per facility+medicine, purely for demo purposes
  let hash = 0;
  for(let i = 0; i < seedStr.length; i++){ hash = (hash * 31 + seedStr.charCodeAt(i)) % 997; }
  if(hash % 3 === 0) return "out";
  if(hash % 3 === 1) return "low";
  return "in";
}

function populatePharmacyFacility(){
  const select = document.getElementById("pharmacy-facility");
  select.innerHTML = "";
  FACILITIES.forEach(function(f){
    const opt = document.createElement("option");
    opt.value = f.name;
    opt.textContent = f.name;
    select.appendChild(opt);
  });
}

function renderPharmacyStock(){
  const facility = document.getElementById("pharmacy-facility").value;
  const search = document.getElementById("pharmacy-search").value.trim().toLowerCase();
  const results = document.getElementById("pharmacy-results");
  results.innerHTML = "";

  const list = MEDICINE_STOCK.filter(function(m){ return !search || m.toLowerCase().indexOf(search) !== -1; });

  if(list.length === 0){
    results.innerHTML = '<p style="color:var(--text-soft);font-size:0.88rem;">No matching medicine in the demo list.</p>';
    return;
  }

  list.forEach(function(med){
    const status = seededStatus(facility + med);
    const badgeClass = status === "in" ? "stock-in" : status === "low" ? "stock-low" : "stock-out";
    const badgeText = status === "in" ? "In stock" : status === "low" ? "Low stock" : "Out of stock";
    const row = document.createElement("div");
    row.className = "stock-row";
    row.innerHTML = '<span>' + med + '</span><span class="stock-badge ' + badgeClass + '">' + badgeText + '</span>';
    results.appendChild(row);
  });
}

document.getElementById("pharmacy-facility").addEventListener("change", renderPharmacyStock);
document.getElementById("pharmacy-search").addEventListener("input", renderPharmacyStock);

}

if(document.getElementById("community")){
// ---------- 13. COMMUNITY Q&A (DEVICE-LOCAL ONLY) ----------
function renderQA(){
  const list = document.getElementById("qa-list");
  list.innerHTML = "";
  qaPosts.forEach(function(post){
    const item = document.createElement("div");
    item.className = "qa-item";
    item.innerHTML =
      '<div class="qa-question">' + post.question + '</div>' +
      '<div class="qa-meta">' + post.date + '</div>' +
      '<div class="qa-answer">' + post.answer + '</div>';
    list.appendChild(item);
  });
}

document.getElementById("qa-submit").addEventListener("click", function(){
  const input = document.getElementById("qa-input");
  const q = input.value.trim();
  if(!q) return;
  const answer = STOCK_ANSWERS[Math.floor(Math.random() * STOCK_ANSWERS.length)];
  qaPosts.unshift({
    question: q,
    answer: answer,
    date: new Date().toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })
  });
  input.value = "";
  saveQAToStorage();
  syncToCloud();
  renderQA();
});

}

// ---------- 7. INIT ----------
if(typeof populateStateSelect === "function") populateStateSelect();
if(typeof populateApptFacility === "function") populateApptFacility();
if(typeof populatePharmacyFacility === "function") populatePharmacyFacility();
if(typeof renderFirstAid === "function") renderFirstAid();
if(typeof renderHealthTips === "function") renderHealthTips();
if(typeof renderPharmacyStock === "function") renderPharmacyStock();
if(typeof renderQA === "function") renderQA();
applyTheme(currentTheme);
applyTranslations("en");
