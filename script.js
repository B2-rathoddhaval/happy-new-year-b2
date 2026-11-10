/* =========================================================
   B2 – Our Forever Story
   script.js  — translations, navigation, timeline,
                interactions and lightweight animations.
   To edit any text: change it inside the `content` object below.
   ========================================================= */

(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* =======================================================
     1. CONTENT / TRANSLATIONS
     Every visible string lives here, in English (en) and Gujarati (gu).
     ======================================================= */
  const content = {
    /* ------------------------- ENGLISH ------------------------- */
    en: {
      meta: {
        title: "B2 – Our Forever Story | For Janvi, My Lakshmi",
        lang: "en"
      },
      ui: {
        open: "Open menu", close: "Close menu",
        special: "Special Memory"
      },
      nav: { home: "Home", story: "Our Story", memories: "Memories", timeline: "Timeline", radha: "Radha Madhav", promise: "Our Promise", forever: "Forever" },
      hero: {
        eyebrow: "B2 – Our Forever Story",
        title: "Every Love Story Is Beautiful, But Ours Is My Favourite.",
        sub: "Some people enter your life unexpectedly and slowly become your entire world. You came into my life as a simple conversation, but today you are my happiness, my peace, my love, and my Lakshmi.",
        n1: "My B2", n2: "My Bittu", n3: "My Sunshine", n4: "My Lakshmi", n5: "My Forever Love",
        btn1: "Explore Our Story", btn2: "Relive Our Memories",
        since: "Since 16 August 2024 – And Still Choosing Each Other."
      },
      wish: {
        kicker: "A New Year Wish",
        title: "Saal Mubarak, My B2 – My Lakshmi",
        text: "May this new year fill your life with endless smiles, good health, and every happiness your heart wishes for. Thank you for filling my life with light. This year and every year, I want to celebrate every festival with you.",
        line: "A new year, new dreams… but only one name in my heart – you. ❤️"
      },
      begin: {
        kicker: "How It All Began",
        title: "From a Message to My Forever",
        p1: "Our story started on <strong>16 August 2024</strong>.",
        p2: "We started talking on WhatsApp. At that time, we were just two people getting to know each other. We never knew that one simple message would slowly become such an important part of our lives.",
        p3: "What started as a conversation gradually became friendship, attachment, trust, affection, and a beautiful love story.",
        p4: "Today, you are not just someone I talk to every day. You are my favourite person, my happiness, my comfort, and the person with whom I dream of spending my life.",
        quote: "“One message started our story. A thousand memories made it special. And a lifetime is what I wish for us.”"
      },
      june: {
        kicker: "Our Most Special Date",
        title: "The Day We Said Those Three Magical Words",
        p1: "There are some dates that never become ordinary again. 20 June 2026 is one of those dates for us.",
        p2: "That was the day we both finally expressed what was already living in our hearts. We said <strong>“I LOVE YOU”</strong> to each other.",
        p3: "It was more than just three words. It was a moment of acceptance, happiness, emotions, and the beginning of a new chapter in our relationship.",
        p4: "That day also became special with our first hug and first kiss. I will always keep this date close to my heart.",
        ily: "I LOVE YOU, B2 ❤️",
        highlight: "20.06.2026 – The Day Our Hearts Spoke The Same Language."
      },
      tl: {
        kicker: "Our Love Story Timeline",
        title: "Every Date, A Chapter Of Us",
        hint: "Tap a card to open the memory."
      },
      timeline: [
        { date: "16 August 2024", icon: "💬", title: "The First Message",
          text: ["Our WhatsApp conversation began.", "A simple message became the beginning of a beautiful journey."] },
        { date: "20 June 2026", icon: "❤️", special: true, tag: "Three Magical Words", title: "Three Magical Words",
          text: ["We said “I Love You” to each other.", "Our first hug and first kiss made this day even more special."] },
        { date: "29 June 2026", icon: "🤍", title: "A Little Closer",
          text: ["Our bond became deeper.", "We started understanding each other's emotions, feelings, and expectations."] },
        { date: "07 July 2026", icon: "🤝", title: "A Promise From The Heart",
          text: ["A special day of commitment, feelings, trust, and promises.", "A moment that became an important part of our relationship."] },
        { date: "11 July 2026", icon: "🎶", title: "Beautiful Little Moments",
          text: ["Songs, photographs, care, hair oil, massage, and beautiful moments together.", "Sometimes love is found in the smallest acts of care."] },
        { date: "16 July 2026", icon: "🍽️", title: "A Day Full of Memories",
          text: ["Dosa at Radhika Restaurant, Ajay's birthday cake, candlelight lunch, songs, hair oil, and moments that brought us closer."] },
        { date: "28 July 2026", icon: "🎂", special: true, tag: "My B2's Birthday", title: "My B2's Birthday",
          text: ["A day dedicated to my favourite person.", "Candlelight lunch, songs, massage, hair oil, A–Z love cards, memories, and promises.", "A birthday that became a beautiful chapter in our story."] },
        { date: "15 August 2026", icon: "📺", title: "Another Beautiful Memory",
          text: ["Songs, TV time, massage, hair oil, and moments of closeness.", "A simple day made special because we were together."] },
        { date: "17 August 2026", icon: "🌧️", title: "Understanding Each Other",
          text: ["An emotional day. We both experienced strong emotions, shared tears, and eventually understood each other better.", "Because a real relationship is not about never having difficult moments. It is about listening, understanding, and choosing each other with respect."] },
        { date: "26 October 2026", icon: "🌹", special: true, tag: "A Surprise I Will Never Forget", title: "A Surprise I Will Never Forget",
          text: ["Janvi prepared a beautiful surprise for me in a hotel room. I waited outside for around 20–30 minutes while she prepared everything.", "When I entered, the room was decorated with:"],
          list: ["Rose petals", "A heart shape on the bed", "Candles & beautiful lights", "Chocolates", "Heart-shaped flowers", "A handwritten love letter", "Soft romantic music", "Two pastries", "Heart-shaped biscuits"],
          after: ["Her handwritten letter touched my heart so deeply that I became emotional and cried while reading it.", "It was not just a decorated room. It was her love, effort, thoughtfulness, and the beautiful way she made me feel special."],
          quote: "“Some surprises are not remembered because of what they contain, but because of how deeply they touch your heart.”" }
      ],
      bond: {
        kicker: "Our Bond, Beyond Words",
        title: "Some Feelings Cannot Be Explained in Words.",
        p1: "Our relationship is not limited to saying “I Love You”. We share emotional closeness, romantic moments, affection, hugs, kisses, and private memories that belong only to us.",
        p2: "With time, we have become more comfortable and closer to each other. Those moments are personal, special, and private.",
        p3: "Our connection is not only about attraction. It is about trust, respect, consent, emotional safety, comfort, and understanding.",
        quote: "“Our closeness is not just about being together. It is about feeling safe, loved, respected, and understood with each other.”"
      },
      bondCards: [
        { icon: "🔐", title: "Trust", text: "The foundation of everything we share." },
        { icon: "💫", title: "Loyalty", text: "Choosing each other with honesty." },
        { icon: "🙏", title: "Respect", text: "Valuing each other's feelings and individuality." },
        { icon: "🌸", title: "Care", text: "Finding happiness in taking care of each other." },
        { icon: "👂", title: "Understanding", text: "Listening even when words are difficult." },
        { icon: "🕯️", title: "Intimacy", text: "A beautiful bond built on mutual comfort, affection, and trust." }
      ],
      radha: {
        kicker: "Radha & Krishna – Our Inspiration",
        title: "Radha Without Krishna Is Incomplete, And Krishna Without Radha Is Unimaginable.",
        p1: "Radha and Krishna represent a love that goes beyond ordinary definitions. Their love teaches us that true connection is not only about being physically together.",
        p2: "It is about understanding each other's souls, respecting each other's feelings, and remaining connected through love and devotion.",
        p3: "I often see a little inspiration from Radha and Krishna in our relationship. I call you my B2, my Bittu, my Lakshmi. And I love imagining our story with the blessings of Radha Madhav.",
        quote: "“May our love always carry the purity of Radha's devotion and the warmth of Krishna's affection.”"      },
      lak: {
        kicker: "My Lakshmi",
        title: "You Are Not Just My Love. You Are My Lakshmi.",
        p1: "B2, I call you my Lakshmi because you bring happiness, positivity, love, and warmth into my life. Your presence makes ordinary days feel special.",
        p2: "You are my happiness, my peace, my favourite person, and someone I genuinely wish to see smiling every day.",
        p3: "I do not want to measure your importance through words. I want to show it through my actions, respect, care, and the way I stand beside you.",
        p4: "You deserve happiness, success, good health, and all the beautiful things life can offer.",
        highlight: "My B2. My Bittu. My Lakshmi. My Forever."
      },
      pr: {
        kicker: "Our Promise",
        title: "My Promises To You",
        quote: "“I cannot promise that every day will be perfect, but I can promise that I will keep trying to make our relationship stronger, kinder, and more beautiful.”"
      },
      promises: [
        "I promise to respect you and your individuality.",
        "I promise to value your feelings.",
        "I promise to stand beside you during difficult times.",
        "I promise to celebrate your happiness and success.",
        "I promise to listen and understand rather than simply argue.",
        "I promise to maintain honesty and loyalty.",
        "I promise to care for you without making you feel restricted.",
        "I promise to respect your dreams and support your growth.",
        "I promise to make our relationship a safe and comfortable place for both of us.",
        "I promise to keep choosing love, patience, and understanding."
      ],
      fut: {
        kicker: "Our Future Home",
        title: "One Day, From Our Dreams To Our Home.",
        p1: "Today, we have beautiful memories, promises, and dreams. And one of my biggest dreams is to see us building a home together.",
        p2: "A home filled with love, laughter, respect, care, little arguments, quick apologies, celebrations, and countless memories. A place where both of us can be ourselves, support each other's dreams, and grow together.",
        p3: "I imagine ordinary mornings, evening conversations, festivals, family moments, and a lifetime of little happiness.",
        p4: "I don't want to rush our future. I want us to prepare for it with understanding, maturity, mutual readiness, and the blessings of our families.",
        mlabel: "A Hope, Not A Hurry",
        mtext: "By the time 2026–2027 comes to an end, I hope we can sit together, talk about our marriage, discuss our future with our families, and take a beautiful step towards building our own home.",
        quote: "“One day, I don't want to say goodbye after meeting you. I want to come home with you.”"
      },
      let: {
        kicker: "A Letter For My B2",
        title: "Dear B2, My Favourite Person...",
        body: [
          "My dearest B2,",
          "Sometimes I wonder how one simple conversation could become such a beautiful part of my life.",
          "From our first WhatsApp message to the day we said “I Love You”, every step has given me something to remember.",
          "You have given me beautiful memories, emotional moments, laughter, affection, and a feeling that is difficult to explain.",
          "I love your presence in my life. I love the way you care. I love the little things you do. I love the memories we have created. And I especially love calling you my Lakshmi.",
          "I know we are both learning, growing, and understanding each other with every passing day.",
          "I don't expect a perfect relationship. I want a genuine one. A relationship where we can talk openly, respect each other, laugh together, forgive each other, and keep growing.",
          "I wish to see you happy, healthy, successful, and smiling. And if life gives us the opportunity, I would love to turn all these beautiful dreams into our reality.",
          "<span class='thanks'>Thank you for being my B2.<br>Thank you for being my Bittu.<br>Thank you for being my Lakshmi.</span>",
          "<span class='ily-line'>I Love You.</span>"
        ],
        sign: "Always with love,<br/><span>Your Ghuvad ❤️</span>"
      },
      ask: {
        title: "One Little Question, B2...",
        q: "Do you know how special you are to me?",
        btn: "Click To Find Out ❤️",
        a1: "More than yesterday, less than tomorrow. You are loved, respected, and cherished.",
        a2: "Forever My B2 – My Lakshmi."
      },
      fin: {
        kicker: "Forever Starts With Us",
        title: "To My B2, My Bittu, My Lakshmi...",
        body: [
          "Thank you for becoming such a beautiful part of my life.",
          "From 16 August 2024 to today, we have created memories that I will always treasure.",
          "20 June 2026 will always be special because that was the day we said those three magical words to each other. And every date after that has added another beautiful chapter to our story.",
          "I don't know exactly what tomorrow holds, but I know that I want to keep building our future with love, trust, respect, patience, and understanding.",
          "<span class='bless'>May Radha Madhav bless our bond.<br>May your smile never fade.<br>May we keep growing together.<br>And may one day, our dream of having a home together become our beautiful reality.</span>"
        ],
        highlight: "Not Just A Love Story. A Lifetime Of Memories Yet To Be Made.",
        d1: "Our Story Began.", d2: "Our Hearts Said I Love You.", d3k: "Forever", d3: "Our Dream."
      },
      foot: {
        l1: "Made with love, for my one and only B2.",
        l2: "Dedicated to Janvi – My Bittu, My Lakshmi, My Forever.",
        copy: "Made with ❤️ by Madhav."
      }
    },

    /* ------------------------- GUJARATI ------------------------- */
    gu: {
      meta: {
        title: "B2 – આપણી હંમેશની કહાની | જાનવી માટે, મારી લક્ષ્મી",
        lang: "gu"
      },
      ui: {
        open: "મેનુ ખોલો", close: "મેનુ બંધ કરો",
        special: "ખાસ યાદ"
      },
      nav: { home: "હોમ", story: "આપણી કહાની", memories: "યાદો", timeline: "સફર", radha: "રાધા માધવ", promise: "મારું વચન", forever: "હંમેશ માટે" },
      hero: {
        eyebrow: "B2 – આપણી હંમેશની કહાની",
        title: "દરેક પ્રેમકહાની સુંદર હોય છે, પણ આપણી કહાની મારા માટે સૌથી ખાસ છે.",
        sub: "કેટલાક લોકો અચાનક જીવનમાં આવે છે અને ધીમે ધીમે આખી દુનિયા બની જાય છે. તું મારા જીવનમાં એક સામાન્ય વાતચીત બનીને આવી હતી, પણ આજે તું મારી ખુશી, મારી શાંતિ, મારો પ્રેમ અને મારી લક્ષ્મી છે.",
        n1: "મારી B2", n2: "મારી Bittu", n3: "મારી Sunshine", n4: "મારી લક્ષ્મી", n5: "મારો હંમેશનો પ્રેમ",
        btn1: "આપણી કહાની જુઓ", btn2: "આપણી યાદો ફરી જીવો",
        since: "16 ઓગસ્ટ 2024 થી – અને આજે પણ એકબીજાને જ પસંદ કરીએ છીએ."
      },
      wish: {
        kicker: "નવા વર્ષની શુભેચ્છા",
        title: "સાલ મુબારક, મારી B2 – મારી લક્ષ્મી",
        text: "નવું વર્ષ તારા જીવનમાં અઢળક સ્મિત, સારું સ્વાસ્થ્ય અને તારા દિલની દરેક ખુશી લઈને આવે. મારા જીવનને રોશનીથી ભરી દેવા માટે આભાર. આ વર્ષે અને દરેક વર્ષે, હું દરેક તહેવાર તારી સાથે જ ઉજવવા માગું છું.",
        line: "નવું વર્ષ, નવાં સપનાં… પણ દિલમાં એક જ નામ – તું. ❤️"
      },
      begin: {
        kicker: "બધું કેવી રીતે શરૂ થયું",
        title: "એક મેસેજથી મારા હંમેશ સુધી",
        p1: "આપણી કહાની <strong>16 ઓગસ્ટ 2024</strong> ના દિવસે શરૂ થઈ.",
        p2: "આપણે WhatsApp પર વાત કરવાનું શરૂ કર્યું. ત્યારે આપણે ફક્ત બે લોકો હતા, જે એકબીજાને ઓળખી રહ્યા હતા. આપણને ખબર પણ નહોતી કે એક સાદો મેસેજ ધીમે ધીમે આપણા જીવનનો આટલો મહત્વનો ભાગ બની જશે.",
        p3: "જે વાતચીતથી શરૂ થયું, એ ધીમે ધીમે મિત્રતા, લગાવ, વિશ્વાસ, લાગણી અને એક સુંદર પ્રેમકહાની બની ગયું.",
        p4: "આજે તું ફક્ત એવી વ્યક્તિ નથી જેની સાથે હું રોજ વાત કરું છું. તું મારી સૌથી પ્રિય વ્યક્તિ છે, મારી ખુશી, મારો સહારો, અને એ વ્યક્તિ જેની સાથે આખી જિંદગી વિતાવવાનું હું સપનું જોઉં છું.",
        quote: "“એક મેસેજથી આપણી વાત શરૂ થઈ, હજારો યાદોએ એને ખાસ બનાવી અને હવે આખી જિંદગી સાથે જીવવાનું મારું સપનું છે.”"
      },
      june: {
        kicker: "આપણી સૌથી ખાસ તારીખ",
        title: "એ દિવસ જ્યારે આપણે એ ત્રણ જાદુઈ શબ્દો કહ્યા",
        p1: "કેટલીક તારીખો ક્યારેય સામાન્ય નથી રહેતી. 20 જૂન 2026 આપણા માટે એવી જ એક તારીખ છે.",
        p2: "એ દિવસે આપણે બંનેએ આખરે એ કહી દીધું જે પહેલેથી આપણા દિલમાં હતું. આપણે એકબીજાને પહેલી વાર દિલથી <strong>“I LOVE YOU”</strong> કહ્યું.",
        p3: "એ દિવસ માત્ર ત્રણ શબ્દોનો નહોતો, પણ આપણી લાગણીઓ, સ્વીકાર, ખુશી અને આપણા સંબંધના એક નવા અધ્યાયની શરૂઆતનો હતો.",
        p4: "એ જ દિવસે આપણું પહેલું આલિંગન અને પહેલું ચુંબન પણ થયું, જેણે એ દિવસને વધુ ખાસ બનાવી દીધો. આ તારીખ હું હંમેશા મારા દિલની નજીક રાખીશ.",
        ily: "I LOVE YOU, B2 ❤️",
        highlight: "20.06.2026 – જે દિવસે આપણા દિલ એક જ ભાષા બોલ્યા."
      },
      tl: {
        kicker: "આપણી પ્રેમકહાનીની સફર",
        title: "દરેક તારીખ, આપણો એક અધ્યાય",
        hint: "યાદ ખોલવા માટે કાર્ડ પર ટેપ કરો."
      },
      timeline: [
        { date: "16 ઓગસ્ટ 2024", icon: "💬", title: "પહેલો મેસેજ",
          text: ["આપણી WhatsApp પરની વાતચીત શરૂ થઈ.", "એક સાદો મેસેજ એક સુંદર સફરની શરૂઆત બની ગયો."] },
        { date: "20 જૂન 2026", icon: "❤️", special: true, tag: "ત્રણ જાદુઈ શબ્દો", title: "ત્રણ જાદુઈ શબ્દો",
          text: ["આપણે એકબીજાને “I Love You” કહ્યું.", "આપણા પહેલા આલિંગન અને પહેલા ચુંબને આ દિવસને હજી વધુ ખાસ બનાવી દીધો."] },
        { date: "29 જૂન 2026", icon: "🤍", title: "થોડા વધુ નજીક",
          text: ["આપણો સંબંધ વધુ ઊંડો બન્યો.", "આપણે એકબીજાની લાગણીઓ, ભાવનાઓ અને અપેક્ષાઓને સમજવા લાગ્યા."] },
        { date: "07 જુલાઈ 2026", icon: "🤝", title: "દિલથી આપેલું વચન",
          text: ["પ્રતિબદ્ધતા, લાગણીઓ, વિશ્વાસ અને વચનોનો એક ખાસ દિવસ.", "એક એવી પળ જે આપણા સંબંધનો મહત્વનો ભાગ બની ગઈ."] },
        { date: "11 જુલાઈ 2026", icon: "🎶", title: "સુંદર નાની નાની પળો",
          text: ["ગીતો, ફોટા, કાળજી, વાળમાં તેલ, મસાજ અને સાથે વિતાવેલી સુંદર પળો.", "ક્યારેક પ્રેમ સૌથી નાની નાની કાળજીમાં જ મળી જાય છે."] },
        { date: "16 જુલાઈ 2026", icon: "🍽️", title: "યાદોથી ભરેલો દિવસ",
          text: ["રાધિકા રેસ્ટોરન્ટમાં ઢોસા, અજયના જન્મદિવસની કેક, કેન્ડલલાઇટ લંચ, ગીતો, વાળમાં તેલ અને એવી પળો જેણે આપણને વધુ નજીક લાવ્યા."] },
        { date: "28 જુલાઈ 2026", icon: "🎂", special: true, tag: "મારી B2 નો જન્મદિવસ", title: "મારી B2 નો જન્મદિવસ",
          text: ["મારી સૌથી પ્રિય વ્યક્તિને સમર્પિત એક દિવસ.", "કેન્ડલલાઇટ લંચ, ગીતો, મસાજ, વાળમાં તેલ, A–Z લવ કાર્ડ્સ, યાદો અને વચનો.", "એક જન્મદિવસ જે આપણી કહાનીનો એક સુંદર અધ્યાય બની ગયો."] },
        { date: "15 ઓગસ્ટ 2026", icon: "📺", title: "વધુ એક સુંદર યાદ",
          text: ["ગીતો, સાથે TV જોવાનો સમય, મસાજ, વાળમાં તેલ અને નજીકતાની પળો.", "એક સાદો દિવસ, જે ફક્ત એટલે ખાસ બન્યો કારણ કે આપણે સાથે હતા."] },
        { date: "17 ઓગસ્ટ 2026", icon: "🌧️", title: "એકબીજાને સમજવાનો દિવસ",
          text: ["એક ભાવુક દિવસ. આપણે બંનેએ ઊંડી લાગણીઓ અનુભવી, સાથે આંસુ વહાવ્યા, અને અંતે એકબીજાને વધુ સારી રીતે સમજ્યા.", "કારણ કે સાચો સંબંધ એ નથી જેમાં ક્યારેય મુશ્કેલ પળો ન આવે. સાચો સંબંધ એ છે જેમાં આપણે સાંભળીએ, સમજીએ અને માન સાથે એકબીજાને જ પસંદ કરીએ."] },
        { date: "26 ઓક્ટોબર 2026", icon: "🌹", special: true, tag: "ક્યારેય ન ભૂલાય એવું સરપ્રાઈઝ", title: "ક્યારેય ન ભૂલાય એવું સરપ્રાઈઝ",
          text: ["જાનવીએ મારા માટે એક હોટલ રૂમમાં સુંદર સરપ્રાઈઝ તૈયાર કર્યું હતું. એ બધું તૈયાર કરતી હતી ત્યારે હું લગભગ 20–30 મિનિટ બહાર રાહ જોતો રહ્યો.", "જ્યારે હું અંદર ગયો, ત્યારે રૂમ આ રીતે સજાવેલો હતો:"],
          list: ["ગુલાબની પાંખડીઓ", "બેડ પર દિલનો આકાર", "મીણબત્તીઓ અને સુંદર લાઇટ્સ", "ચોકલેટ્સ", "દિલ આકારના ફૂલો", "હાથથી લખેલો પ્રેમપત્ર", "ધીમું રોમેન્ટિક સંગીત", "બે પેસ્ટ્રી", "દિલ આકારના બિસ્કિટ"],
          after: ["એના હાથે લખેલા પત્રે મારા દિલને એટલું સ્પર્શ્યું કે વાંચતા વાંચતા હું ભાવુક થઈ ગયો અને રડી પડ્યો.", "એ ફક્ત સજાવેલો રૂમ નહોતો. એ એનો પ્રેમ, એની મહેનત, એની કાળજી અને મને ખાસ અનુભવ કરાવવાની એની સુંદર રીત હતી."],
          quote: "“કેટલાક સરપ્રાઈઝ એમાં શું હતું એના માટે નહીં, પણ એ દિલને કેટલું ઊંડે સ્પર્શી ગયા એના માટે યાદ રહે છે.”" }
      ],
      bond: {
        kicker: "આપણો સંબંધ, શબ્દોથી પર",
        title: "કેટલીક લાગણીઓ શબ્દોમાં સમજાવી શકાતી નથી.",
        p1: "આપણો સંબંધ ફક્ત “I Love You” કહેવા સુધી સીમિત નથી. આપણે ભાવનાત્મક નજીકતા, રોમેન્ટિક પળો, લાગણી, આલિંગન, ચુંબન અને એવી ખાનગી યાદો વહેંચીએ છીએ જે ફક્ત આપણી છે.",
        p2: "સમય સાથે આપણે એકબીજા સાથે વધુ સહજ અને વધુ નજીક બન્યા છીએ. એ પળો અંગત છે, ખાસ છે અને ફક્ત આપણી છે.",
        p3: "આપણું જોડાણ ફક્ત આકર્ષણ પૂરતું નથી. એ વિશ્વાસ, માન, સંમતિ, ભાવનાત્મક સલામતી, સહજતા અને સમજણ પર ટકેલું છે.",
        quote: "“આપણી નજીકતા ફક્ત સાથે હોવા વિશે નથી. એ એકબીજા સાથે સુરક્ષિત, પ્રેમભર્યું, માનભર્યું અને સમજાયેલું અનુભવવા વિશે છે.”"
      },
      bondCards: [
        { icon: "🔐", title: "વિશ્વાસ", text: "આપણે જે કંઈ વહેંચીએ છીએ એનો પાયો." },
        { icon: "💫", title: "વફાદારી", text: "પ્રામાણિકતાથી એકબીજાને પસંદ કરવું." },
        { icon: "🙏", title: "માન", text: "એકબીજાની લાગણીઓ અને વ્યક્તિત્વની કદર કરવી." },
        { icon: "🌸", title: "કાળજી", text: "એકબીજાનું ધ્યાન રાખવામાં ખુશી શોધવી." },
        { icon: "👂", title: "સમજણ", text: "શબ્દો મુશ્કેલ હોય ત્યારે પણ સાંભળવું." },
        { icon: "🕯️", title: "નજીકતા", text: "પરસ્પર સહજતા, લાગણી અને વિશ્વાસથી બનેલું સુંદર બંધન." }
      ],
      radha: {
        kicker: "રાધા અને કૃષ્ણ – આપણી પ્રેરણા",
        title: "કૃષ્ણ વિના રાધા અધૂરી છે, અને રાધા વિના કૃષ્ણની કલ્પના પણ અશક્ય છે.",
        p1: "રાધા અને કૃષ્ણ એવા પ્રેમનું પ્રતીક છે જે સામાન્ય વ્યાખ્યાઓથી પર છે. રાધા અને કૃષ્ણનો પ્રેમ આપણને શીખવે છે કે સાચો પ્રેમ માત્ર સાથે રહેવાનું નામ નથી.",
        p2: "પરંતુ એકબીજાની લાગણીઓને સમજવાનું, માન આપવાનું અને પ્રેમ તથા ભક્તિથી દિલથી જોડાયેલા રહેવાનું નામ છે.",
        p3: "આપણા સંબંધમાં મને ઘણીવાર રાધા-કૃષ્ણની થોડી પ્રેરણા દેખાય છે. હું તને મારી B2, મારી Bittu, મારી લક્ષ્મી કહું છું. અને રાધા માધવના આશીર્વાદ સાથે આપણી કહાનીની કલ્પના કરવી મને ખૂબ ગમે છે.",
        quote: "“આપણા પ્રેમમાં હંમેશા રાધાની ભક્તિ જેવી પવિત્રતા અને કૃષ્ણના સ્નેહ જેવી હૂંફ રહે.”"      },
      lak: {
        kicker: "મારી લક્ષ્મી",
        title: "તું ફક્ત મારો પ્રેમ નથી. તું મારી લક્ષ્મી છે.",
        p1: "B2, હું તને મારી લક્ષ્મી કહું છું કારણ કે તારા આવવાથી મારા જીવનમાં ખુશી, સકારાત્મકતા, પ્રેમ અને હૂંફ આવી છે. તારી હાજરી સામાન્ય દિવસોને પણ ખાસ બનાવી દે છે.",
        p2: "તું મારી ખુશી છે, મારી શાંતિ છે, મારી સૌથી પ્રિય વ્યક્તિ છે, અને હું દિલથી ઈચ્છું છું કે તને રોજ હસતી જોઉં.",
        p3: "તારું મહત્વ હું શબ્દોથી માપવા નથી માગતો. હું એ મારાં કાર્યો, માન, કાળજી અને તારી સાથે ઊભા રહેવાની મારી રીતથી બતાવવા માગું છું.",
        p4: "તું ખુશી, સફળતા, સારું સ્વાસ્થ્ય અને જીવનની દરેક સુંદર વસ્તુની હકદાર છે. તારી ખુશી મારા માટે ખૂબ મહત્વની છે.",
        highlight: "મારી B2. મારી Bittu. મારી લક્ષ્મી. મારું હંમેશ."
      },
      pr: {
        kicker: "મારું વચન",
        title: "તને આપેલાં મારાં વચનો",
        quote: "“હું વચન નથી આપી શકતો કે દરેક દિવસ પરફેક્ટ હશે, પણ એ વચન જરૂર આપું છું કે આપણા સંબંધને વધુ મજબૂત, વધુ પ્રેમાળ અને વધુ સુંદર બનાવવાની કોશિશ હું હંમેશા કરતો રહીશ.”"
      },
      promises: [
        "હું વચન આપું છું કે તને અને તારા વ્યક્તિત્વને હંમેશા માન આપીશ.",
        "હું વચન આપું છું કે તારી લાગણીઓની કદર કરીશ.",
        "હું વચન આપું છું કે મુશ્કેલ સમયમાં તારી પડખે ઊભો રહીશ.",
        "હું વચન આપું છું કે તારી ખુશી અને સફળતાને દિલથી ઉજવીશ.",
        "હું વચન આપું છું કે ફક્ત દલીલ કરવાને બદલે તને સાંભળીશ અને સમજીશ.",
        "હું વચન આપું છું કે પ્રામાણિકતા અને વફાદારી જાળવીશ.",
        "હું વચન આપું છું કે તારી કાળજી રાખીશ, પણ તને ક્યારેય બંધનમાં હોવાનો અનુભવ નહીં થવા દઉં.",
        "હું વચન આપું છું કે તારાં સપનાંને માન આપીશ અને તારી પ્રગતિમાં સાથ આપીશ.",
        "હું વચન આપું છું કે આપણા સંબંધને આપણા બંને માટે સલામત અને સહજ જગ્યા બનાવીશ.",
        "હું વચન આપું છું કે હંમેશા પ્રેમ, ધીરજ અને સમજણને જ પસંદ કરતો રહીશ."
      ],
      fut: {
        kicker: "આપણું ભવિષ્યનું ઘર",
        title: "એક દિવસ, આપણાં સપનાંથી આપણા ઘર સુધી.",
        p1: "આજે આપણી પાસે સુંદર યાદો, વચનો અને સપનાં છે. અને મારું સૌથી મોટું સપનું છે કે આપણે બંને સાથે મળીને એક ઘર બનાવીએ.",
        p2: "એક એવું ઘર જે પ્રેમ, હાસ્ય, માન, કાળજી, નાની નાની રકઝક, ઝટપટ માફી, ઉજવણીઓ અને અગણિત યાદોથી ભરેલું હોય. એક એવી જગ્યા જ્યાં આપણે બંને જેવા છીએ એવા રહી શકીએ, એકબીજાનાં સપનાંને સાથ આપીએ અને સાથે આગળ વધીએ.",
        p3: "હું સામાન્ય સવારો, સાંજની વાતો, તહેવારો, પરિવાર સાથેની પળો અને આખી જિંદગીની નાની નાની ખુશીઓની કલ્પના કરું છું.",
        p4: "હું આપણા ભવિષ્ય માટે ઉતાવળ નથી કરવા માગતો. હું ઈચ્છું છું કે આપણે સમજણ, પરિપક્વતા, બંનેની તૈયારી અને આપણા પરિવારોના આશીર્વાદ સાથે એની તૈયારી કરીએ.",
        mlabel: "એક આશા, ઉતાવળ નહીં",
        mtext: "2026–2027 પૂરું થાય ત્યાં સુધીમાં મારી ઈચ્છા છે કે આપણે બંને શાંતિથી બેસીને આપણા લગ્ન વિશે વાત કરીએ, પરિવાર સાથે ચર્ચા કરીએ અને આપણા સુંદર ભવિષ્ય તરફ એક પગલું આગળ વધીએ.",
        quote: "“એક દિવસ, તને મળ્યા પછી હું ‘આવજે’ કહેવા નથી માગતો. હું તારી સાથે ઘરે આવવા માગું છું.”"
      },
      let: {
        kicker: "મારી B2 માટે એક પત્ર",
        title: "પ્રિય B2, મારી સૌથી પ્રિય વ્યક્તિ...",
        body: [
          "મારી વહાલી B2,",
          "ક્યારેક મને નવાઈ લાગે છે કે એક સાદી વાતચીત મારા જીવનનો આટલો સુંદર ભાગ કેવી રીતે બની ગઈ.",
          "આપણા પહેલા WhatsApp મેસેજથી લઈને એ દિવસ સુધી જ્યારે આપણે “I Love You” કહ્યું, દરેક પગલાએ મને કંઈક યાદ રાખવા જેવું આપ્યું છે.",
          "તેં મને સુંદર યાદો, ભાવુક પળો, હાસ્ય, સ્નેહ અને એક એવી લાગણી આપી છે જે શબ્દોમાં સમજાવવી મુશ્કેલ છે.",
          "મારા જીવનમાં તારી હાજરી મને ખૂબ ગમે છે. તું જે રીતે કાળજી રાખે છે એ મને ગમે છે. તારી નાની નાની વાતો મને ગમે છે. આપણે બનાવેલી યાદો મને ગમે છે. અને ખાસ તો, તને મારી લક્ષ્મી કહેવું મને ખૂબ ગમે છે.",
          "હું જાણું છું કે આપણે બંને દરેક દિવસ સાથે શીખી રહ્યા છીએ, આગળ વધી રહ્યા છીએ અને એકબીજાને સમજી રહ્યા છીએ.",
          "મને પરફેક્ટ સંબંધની અપેક્ષા નથી. મારે સાચો સંબંધ જોઈએ છે. એવો સંબંધ જ્યાં આપણે ખુલ્લા દિલે વાત કરી શકીએ, એકબીજાને માન આપીએ, સાથે હસીએ, એકબીજાને માફ કરીએ અને આગળ વધતા રહીએ.",
          "હું તને હંમેશા ખુશ, સ્વસ્થ, સફળ અને હસતી જોવા ઈચ્છું છું. અને જો જિંદગી આપણને મોકો આપે, તો આ બધાં સુંદર સપનાંને આપણી હકીકત બનાવવાનું મને ખૂબ ગમશે.",
          "<span class='thanks'>મારી B2 બનવા માટે આભાર.<br>મારી Bittu બનવા માટે આભાર.<br>મારી લક્ષ્મી બનવા માટે આભાર.</span>",
          "<span class='ily-line'>I Love You.</span>"
        ],
        sign: "હંમેશા પ્રેમ સાથે,<br/><span>તારો ઘુવડ ❤️</span>"
      },
      ask: {
        title: "એક નાનકડો સવાલ, B2...",
        q: "તને ખબર છે કે તું મારા માટે કેટલી ખાસ છે?",
        btn: "જાણવા માટે ક્લિક કર ❤️",
        a1: "ગઈકાલ કરતાં વધુ, આવતીકાલ કરતાં ઓછું. તને પ્રેમ મળે છે, માન મળે છે, અને તું ખૂબ વહાલી છે.",
        a2: "હંમેશા મારી B2 – મારી લક્ષ્મી."
      },
      fin: {
        kicker: "હંમેશની શરૂઆત આપણાથી",
        title: "મારી B2, મારી Bittu, મારી લક્ષ્મીને...",
        body: [
          "મારા જીવનનો આટલો સુંદર ભાગ બનવા માટે તારો આભાર.",
          "16 ઓગસ્ટ 2024 થી આજ સુધી, આપણે એવી યાદો બનાવી છે જેને હું હંમેશા સાચવીને રાખીશ.",
          "20 જૂન 2026 હંમેશા ખાસ રહેશે, કારણ કે એ દિવસે આપણે એકબીજાને એ ત્રણ જાદુઈ શબ્દો કહ્યા હતા. અને એ પછીની દરેક તારીખે આપણી કહાનીમાં એક નવો સુંદર અધ્યાય ઉમેર્યો છે.",
          "આવતીકાલે શું થશે એ મને બરાબર ખબર નથી, પણ એટલું જાણું છું કે હું પ્રેમ, વિશ્વાસ, માન, ધીરજ અને સમજણ સાથે આપણું ભવિષ્ય બનાવતો રહેવા માગું છું.",
          "<span class='bless'>રાધા માધવ આપણા સંબંધને આશીર્વાદ આપે.<br>તારું સ્મિત ક્યારેય ઝાંખું ન પડે.<br>આપણે સાથે આગળ વધતા રહીએ.<br>અને એક દિવસ, સાથે ઘર બનાવવાનું આપણું સપનું આપણી સુંદર હકીકત બને.</span>"
        ],
        highlight: "ફક્ત એક પ્રેમકહાની નહીં. હજુ બનવાની બાકી યાદોની આખી જિંદગી.",
        d1: "આપણી કહાની શરૂ થઈ.", d2: "આપણાં દિલે I Love You કહ્યું.", d3k: "હંમેશ", d3: "આપણું સપનું."
      },
      foot: {
        l1: "પ્રેમથી બનાવેલું, મારી એકમાત્ર B2 માટે.",
        l2: "જાનવીને સમર્પિત – મારી Bittu, મારી લક્ષ્મી, મારું હંમેશ.",
        copy: "માધવ દ્વારા ❤️ થી બનાવેલું."
      }
    }
  };

  /* =======================================================
     2. HELPERS
     ======================================================= */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const get = (obj, path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
  const heartSVG = '<svg aria-hidden="true"><use href="#i-heart"/></svg>';

  // English is always the default language on load.
  let lang = "en";

  /* =======================================================
     3. RENDERERS for list-based sections
     ======================================================= */
  function renderTimeline(t) {
    const list = $("#timelineList");
    const openIdx = new Set($$(".tl-item.is-open", list).map(el => +el.dataset.i));
    list.innerHTML = t.timeline.map((m, i) => {
      const paras = m.text.map(p => `<p>${p}</p>`).join("");
      const items = m.list ? `<ul>${m.list.map(x => `<li>${x}</li>`).join("")}</ul>` : "";
      const after = m.after ? m.after.map(p => `<p>${p}</p>`).join("") : "";
      const quote = m.quote ? `<p class="tl-card__quote">${m.quote}</p>` : "";
      const isOpen = openIdx.has(i) || (openIdx.size === 0 && m.special);
      return `
        <li class="tl-item reveal ${m.special ? "is-special" : ""} ${isOpen ? "is-open" : ""}" data-i="${i}">
          <div class="tl-card">
            <button class="tl-card__head" aria-expanded="${isOpen}" aria-controls="tl-body-${i}">
              <span class="tl-card__icon" aria-hidden="true">${m.icon}</span>
              <span class="tl-card__meta">
                <span class="tl-card__date">${m.date}</span>
                <span class="tl-card__title">${m.title}</span>
                ${m.special ? `<span class="tl-tag">✦ ${t.ui.special}</span>` : ""}
              </span>
              <span class="tl-card__toggle" aria-hidden="true">+</span>
            </button>
            <div class="tl-card__body" id="tl-body-${i}"><div>${paras}${items}${after}${quote}</div></div>
          </div>
        </li>`;
    }).join("");
  }

  function renderBond(t) {
    $("#bondGrid").innerHTML = t.bondCards.map(c => `
      <div class="bond-card reveal">
        <div class="bond-card__icon" aria-hidden="true">${c.icon}</div>
        <h3>${c.title}</h3>
        <p>${c.text}</p>
      </div>`).join("");
  }

  function renderPromises(t) {
    $("#promiseList").innerHTML = t.promises.map((p, i) => `
      <li class="promise reveal">
        <span class="promise__num">${i + 1}</span>
        <p>${p}</p>
      </li>`).join("");
  }

  function renderParagraphs(sel, arr) {
    const el = $(sel);
    if (el) el.innerHTML = arr.map(p => `<p>${p}</p>`).join("");
  }

  /* =======================================================
     4. LANGUAGE SWITCH (no reload)
     ======================================================= */
  function applyLanguage(next) {
    lang = next;
    const t = content[lang];
    document.documentElement.lang = t.meta.lang;
    document.title = t.meta.title;

    // Simple keyed strings
    $$("[data-i18n]").forEach(el => {
      const val = get(t, el.dataset.i18n);
      if (typeof val === "string") el.innerHTML = val;
    });

    // Multi-paragraph blocks
    renderParagraphs('[data-i18n="let.body"]', t.let.body);
    renderParagraphs('[data-i18n="fin.body"]', t.fin.body);

    // Lists
    renderTimeline(t);
    renderBond(t);
    renderPromises(t);

    // Aria labels
    const burger = $("#burger");
    burger.setAttribute("aria-label", burger.getAttribute("aria-expanded") === "true" ? t.ui.close : t.ui.open);

    // Toggle state
    $$(".lang__btn").forEach(b => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on);
    });

    observeReveals();
  }

  $$(".lang__btn").forEach(b => b.addEventListener("click", () => {
    if (b.dataset.lang !== lang) applyLanguage(b.dataset.lang);
  }));

  /* =======================================================
     5. NAVIGATION — sticky style, mobile menu, active link
     ======================================================= */
  const nav = $("#nav");
  const burger = $("#burger");
  const links = $("#navLinks");

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    links.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? content[lang].ui.close : content[lang].ui.open);
    if (open) nav.classList.add("is-scrolled"); else onScroll();
  }
  burger.addEventListener("click", () => setMenu(!links.classList.contains("is-open")));
  $$("a", links).forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

  // Highlight the link of the section in view
  const navMap = { home: "home", story: "story", memories: "memories", timeline: "timeline", radha: "radha", promise: "promise", forever: "forever" };
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const id = en.target.id;
      if (!navMap[id]) return;
      $$("a", links).forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  Object.keys(navMap).forEach(id => { const s = document.getElementById(id); if (s) sectionObserver.observe(s); });

  /* =======================================================
     6. SCROLL REVEAL
     ======================================================= */
  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) { en.target.classList.add("is-visible"); revealObserver.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
    : null;

  function observeReveals() {
    $$(".reveal:not(.is-visible)").forEach(el => {
      if (!revealObserver || reduceMotion) el.classList.add("is-visible");
      else revealObserver.observe(el);
    });
  }

  /* =======================================================
     7. TIMELINE — open / close cards (event delegation)
     ======================================================= */
  $("#timelineList").addEventListener("click", e => {
    const btn = e.target.closest(".tl-card__head");
    if (!btn) return;
    const item = btn.closest(".tl-item");
    const open = !item.classList.contains("is-open");
    item.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", open);
  });

  /* =======================================================
     8. INTERACTIVE LOVE BUTTON
     ======================================================= */
  const loveBtn = $("#loveBtn");
  const answer = $("#loveAnswer");
  loveBtn.addEventListener("click", () => {
    answer.hidden = false;
    loveBtn.setAttribute("aria-expanded", "true");
    if (reduceMotion) return;
    const burst = $(".burst", answer);
    burst.innerHTML = "";
    for (let i = 0; i < 18; i++) {
      const a = (Math.PI * 2 * i) / 18;
      const r = 90 + Math.random() * 90;
      const h = document.createElement("i");
      h.innerHTML = heartSVG;
      h.style.setProperty("--x", `${Math.cos(a) * r}px`);
      h.style.setProperty("--y", `${Math.sin(a) * r}px`);
      h.style.color = i % 3 ? "#D88C9A" : "#D6B477";
      h.style.animationDelay = `${Math.random() * 0.15}s`;
      burst.appendChild(h);
    }
  });

  /* =======================================================
     9. AMBIENT DECOR — petals & particles (lightweight)
     ======================================================= */
  function spawnPetals() {
    if (reduceMotion) return;
    const layer = $(".petals");
    const count = window.innerWidth < 640 ? 9 : 16;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      const isHeart = i % 4 === 0;
      p.className = "petal" + (isHeart ? " petal--heart" : "");
      if (isHeart) p.innerHTML = heartSVG;
      p.style.left = Math.random() * 100 + "vw";
      p.style.setProperty("--drift", (Math.random() * 160 - 80) + "px");
      p.style.animationDuration = 14 + Math.random() * 14 + "s";
      p.style.animationDelay = -Math.random() * 25 + "s";
      const s = 0.7 + Math.random() * 0.7;
      p.style.width = (isHeart ? 11 : 13) * s + "px";
      p.style.height = (isHeart ? 11 : 11) * s + "px";
      layer.appendChild(p);
    }
  }

  function spawnParticles() {
    if (reduceMotion) return;
    const layer = $(".radha__particles");
    for (let i = 0; i < 26; i++) {
      const d = document.createElement("i");
      d.style.left = Math.random() * 100 + "%";
      d.style.top = Math.random() * 100 + "%";
      d.style.animationDelay = Math.random() * 5 + "s";
      d.style.animationDuration = 4 + Math.random() * 4 + "s";
      layer.appendChild(d);
    }
  }

  /* =======================================================
     10. RADHA-KRISHNA IMAGE FALLBACK
     ======================================================= */
  const rkImg = $("#radhaImg");
  const rkFrame = rkImg.closest(".radha__frame");
  const useFallback = () => rkFrame.classList.add("is-fallback");
  rkImg.addEventListener("error", useFallback);
  if (rkImg.complete && rkImg.naturalWidth === 0 && rkImg.getAttribute("loading") !== "lazy") useFallback();

  /* =======================================================
     INIT
     ======================================================= */
  applyLanguage(lang);
  spawnPetals();
  spawnParticles();
})();
