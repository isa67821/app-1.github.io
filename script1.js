

function berakna() {
  
  var vikt     = parseFloat(document.getElementById("vikt").value);
  var langd    = parseFloat(document.getElementById("langd").value);
  var alder    = parseFloat(document.getElementById("alder").value);
  var kon      = document.getElementById("kon").value;
  var aktivitet = parseFloat(document.getElementById("aktivitet").value);
  var mal      = document.getElementById("mal").value;

  var resultatDiv = document.getElementById("resultat");

  
  if (!vikt || !langd || !alder || kon === "" || isNaN(aktivitet) || mal === "") {
    resultatDiv.style.display = "block";
    document.getElementById("ut-kalorier").textContent = "–";
    document.getElementById("ut-protein").textContent  = "–";
    document.getElementById("rad-mal").textContent = "⚠️ Fyll i alla fält för att få ett resultat!";
    document.getElementById("tips-lista").innerHTML = "";
    return;
  }

  
  var bmr;
  if (kon === "man") {
    bmr = 10 * vikt + 6.25 * langd - 5 * alder + 5;
  } else {
    bmr = 10 * vikt + 6.25 * langd - 5 * alder - 161;
  }

 
  var tdee = Math.round(bmr * aktivitet);

  
  var kaloriMal;
  var proteinMultiplikator;
  var malText;
  var malKlass;

  if (mal === "minska") {
    kaloriMal = tdee - 500;          
    proteinMultiplikator = 2.0;       
    malText = "Mål: Gå ner i vikt. Du äter " + 500 + " kcal under ditt underhållsbehov (" + tdee + " kcal). Högt proteinintag hjälper dig bevara muskelmassa under viktnedgång.";
    malKlass = "minska";
  } else if (mal === "behalla") {
    kaloriMal = tdee;
    proteinMultiplikator = 1.6;
    malText = "Mål: Behålla vikten. Du äter precis vad kroppen förbrukar (" + tdee + " kcal). Bra proteinintag håller dig mätt och musklerna starka.";
    malKlass = "";
  } else {
    kaloriMal = tdee + 300;          
    proteinMultiplikator = 2.2;      
    malText = "Mål: Gå upp i vikt / bygga muskler. Du äter " + 300 + " kcal över ditt underhållsbehov (" + tdee + " kcal). Högt protein och träning är nyckeln till muskelökning.";
    malKlass = "oka";
  }

 
  var protein = Math.round(vikt * proteinMultiplikator);

  
  document.getElementById("ut-kalorier").textContent = kaloriMal;
  document.getElementById("ut-protein").textContent  = protein;
  document.getElementById("rad-mal").textContent     = malText;

  
  var boxKalorier = document.getElementById("box-kalorier");
  var boxProtein  = document.getElementById("box-protein");

  boxKalorier.className = "resultat-box " + malKlass;
  boxProtein.className  = "resultat-box " + malKlass;

  
  var tips = [];

  tips.push({
    ikon: "fa-solid fa-circle-check",
    text: "Ditt dagliga proteinmål är " + protein + " g. Dela upp det på 3–4 måltider för bäst upptagning."
  });

  if (mal === "minska") {
    tips.push({ ikon: "fa-solid fa-circle-check", text: "Ät proteinrika livsmedel som kyckling, ägg, quark och fisk – de håller dig mätt längre." });
    tips.push({ ikon: "fa-solid fa-circle-check", text: "Drick mycket vatten – hunger och törst förväxlas ofta." });
    tips.push({ ikon: "fa-solid fa-circle-check", text: "Minska på socker och vitt bröd. Välj fullkorn och grönsaker som bas." });
  } else if (mal === "behalla") {
    tips.push({ ikon: "fa-solid fa-circle-check", text: "Varierad kost med bra proteinkällor, komplexa kolhydrater och hälsosamma fetter." });
    tips.push({ ikon: "fa-solid fa-circle-check", text: "Rör på dig minst 30 min om dagen – det håller ämnesomsättningen igång." });
  } else {
    tips.push({ ikon: "fa-solid fa-circle-check", text: "Styrketräna 3–4 gånger i veckan för att maximera muskeluppbyggnad." });
    tips.push({ ikon: "fa-solid fa-circle-check", text: "Ät en proteinkälla inom 30–60 min efter träning (ägg, kvarg, proteinshake)." });
    tips.push({ ikon: "fa-solid fa-circle-check", text: "Sov minst 7–8 timmar – återhämtning är avgörande för muskelväxt." });
  }

 
  var tipsDiv = document.getElementById("tips-lista");
  tipsDiv.innerHTML = "";

  for (var i = 0; i < tips.length; i++) {
    var item = document.createElement("div");
    item.className = "tips-item";
    item.innerHTML = '<i class="' + tips[i].ikon + '"></i><span>' + tips[i].text + '</span>';
    tipsDiv.appendChild(item);
  }

  
  resultatDiv.style.display = "block";
  resultatDiv.classList.remove("dold");
}