import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "What gender": "What gender do you identify with?",
          "Please share": "Please share how do you identify yourself",
          "Female": "Female",
          "Male": "Male",
          "Other": "Other",
          "What age?": "What is your age?",
          "18-29": "18-29 years",
          "30-39": "30-39 years",
          "40-49": "40-49 years",
          "What do you hate": "What do you hate the most in a book?",
          hate: "hate",
          "Lack of logic": "Lack of logic",
          "A slow speed": "A slow speed",
          "Lack of humor": "Lack of humor",
          "Way too": "Way too generic ending",
          "Next": "Next",
          "What favorite topics?": "What are your favorite topics?",
          "Choose up": "Choose up to 3 topics you like",
          Werewolf: "Werewolf",
          Romance: "Romance",
          Action: "Action",
          "Young Adult": "Young Adult",
          "Royal Obsession": "Royal Obsession",
          "Bad Boy": "Bad Boy",
          Billionaire: "Billionaire",
          Finding: "Finding collections for you...",
          Email: "Email",
          "Enter email": "Enter your email to get full access",
          "Your email": "Your email",
          "I agree": "By continuing I agree with Privacy policy and Terms of use.",
          "Thank you": "Thank you",
          "for supporting": "for supporting us and passing quiz",
          Download: "Download my answers",
          "Retake quiz": "Retake quiz",
        }
      },
      fr: {
        translations: {
          "What gender": "Quel genre vous identifiez-vous?",
          "Please share": "Veuillez partager comment vous vous identifiez",
          "Female": "Femme",
          "Male": "Homme",
          "Other": "Autre",
          "What age?": "Quel âge avez-vous?",
          "18-29": "18-29 ans",
          "30-39": "30-39 ans",
          "40-49": "40-49 ans",
          "What do you hate": "Qu'est-ce que vous détestez le plus dans un livre?",
          "Lack of logic": "Manque de logique",
          "A slow speed": "Une vitesse lente",
          "Lack of humor": "Manque d'humour",
          "Way too": "Fin beaucoup trop générique",
          "Next": "Suivant",
          "What favorite topics?": "Quels sont vos sujets préférés?",
          "Choose up": "Choisissez jusqu'à 3 sujets que vous aimez",
          Werewolf: "Loup-garou",
          Romance: "Romance",
          Action: "Action",
          "Young Adult": "Jeune adulte",
          "Royal Obsession": "Obsession royale",
          "Bad Boy": "Mauvais garçon",
          Billionaire: "Milliardaire",
          Finding: "Trouver des collections pour vous...",
          Email: "E-mail",
          "Enter email": "Entrez votre email pour obtenir un accès complet",
          "Your email": "Votre email",
          "I agree": "En continuant, j'accepte la politique de confidentialité et les conditions d'utilisation.",
          "Thank you": "Merci",
          "for supporting": "de nous soutenir et de passer le quiz",
          Download: "Télécharger mes réponses",
          "Retake quiz": "Refaire le quiz",
        }
      },
      de: {
        translations: {
          "What gender": "Welches Geschlecht identifizieren Sie sich mit?",
          "Please share": "Bitte teilen Sie mit, wie Sie sich identifizieren",
          "Female": "Weiblich",
          "Male": "Männlich",
          "Other": "Andere",
          "What age?": "Wie alt sind Sie?",
          "18-29": "18-29 Jahre",
          "30-39": "30-39 Jahre",
          "40-49": "40-49 Jahre",
          "What do you hate": "Was hassen Sie am meisten an einem Buch?",
          "Lack of logic": "Mangel an Logik",
          "A slow speed": "Eine langsame Geschwindigkeit",
          "Lack of humor": "Mangel an Humor",
          "Way too": "Viel zu generisches Ende",
          "Next": "Weiter",
          "What favorite topics?": "Was sind Ihre Lieblingsthemen?",
          "Choose up": "Wählen Sie bis zu 3 Themen aus, die Ihnen gefallen",
          Werewolf: "Werwolf",
          Romance: "Romantik",
          Action: "Aktion",
          "Young Adult": "Junge Erwachsene",
          "Royal Obsession": "Königliche Besessenheit",
          "Bad Boy": "Schlechter Junge",
          Billionaire: "Milliardär",
          Finding: "Sammlungen für Sie finden...",
          Email: "E-Mail",
          "Enter email": "Geben Sie Ihre E-Mail ein, um vollen Zugriff zu erhalten",
          "Your email": "Ihre E-Mail",
          "I agree": "Durch die Fortsetzung stimme ich der Datenschutzrichtlinie und den Nutzungsbedingungen zu.",
          "Thank you": "Danke",
          "for supporting": "für die Unterstützung und das Bestehen des Quiz",
          Download: "Meine Antworten herunterladen",
          "Retake quiz": "Quiz erneut machen",
        }
      },
      es: {
        translations: {
          "What gender": "¿Con qué género te identificas?",
          "Please share": "Por favor, comparte cómo te identificas",
          "Female": "Mujer",
          "Male": "Hombre",
          "Other": "Otro",
          "What age?": "¿Qué edad tienes?",
          "18-29": "18-29 años",
          "30-39": "30-39 años",
          "40-49": "40-49 años",
          "What do you hate": "¿Qué es lo que más odias en un libro?",
          "Lack of logic": "Falta de lógica",
          "A slow speed": "Una velocidad lenta",
          "Lack of humor": "Falta de humor",
          "Way too": "Final demasiado genérico",
          "Next": "Siguiente",
          "What favorite topics?": "¿Cuáles son tus temas favoritos?",
          "Choose up": "Elige hasta 3 temas que te gusten",
          Werewolf: "Hombre lobo",
          Romance: "Romance",
          Action: "Acción",
          "Young Adult": "Joven adulto",
          "Royal Obsession": "Obsesión real",
          "Bad Boy": "Chico malo",
          Billionaire: "Multimillonario",
          Finding: "Encontrando colecciones para ti...",
          Email: "Correo electrónico",
          "Enter email": "Ingresa tu correo electrónico para obtener acceso completo",
          "Your email": "Tu correo electrónico",
          "I agree": "Al continuar, acepto la política de privacidad y los términos de uso.",
          "Thank you": "Gracias",
          "for supporting": "por apoyarnos y aprobar el cuestionario",
          Download: "Descargar mis respuestas",
          "Retake quiz": "Volver a realizar el cuestionario",
        }
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    // interpolation: {
    //   escapeValue: false
    // }
    interpolation: {
      escapeValue: false, // react already safes from xss
      format: (value, format, lng) => {
        if (format === 'link' || format === 'span') {
          return value;
        }
        return value.toString();
      },
    },
  });

export default i18n;