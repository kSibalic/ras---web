export const siteData = {
    meta: {
        title: "Razvojna agencija Srijem | Za poticanje gospodarstva i lokalnog razvoja",
        description: "Stone Template is an awesome dark and beige muted theme for an agency or any other professional service."
    },
    navigation: [
        { text: "POČETNA", href: "/", id: "home" },
        { text: "O NAMA", href: "/pages/about.html", id: "about" },
        { text: "NOVOSTI", href: "/pages/work.html", id: "work" },
        { text: "KONTAKT", href: "/pages/contact.html", id: "contact" }
    ],
    footer: {
        address: {
            name: "Razvojna agencija Srijem d.o.o.",
            subtext: "za poticanje gospodarstva i lokalnog razvoja",
            street: "Trg kralja Tomislava 6, 32245 Nijemci"
        },
        legal: {
            court: "Registrirana kod Trgovačkog suda u Osijeku",
            mbs: "030278224",
            iban: "HR3423400091111240929 Privredne banke Zagreb d.d.",
            oib: "58208923662"
        },
        copyright: "Uprava društva. Sva prava pridržana."
    },
    socials: [
        { type: "facebook", url: "#", icon: "/images/socials/facebook-icon_black.svg" },
        { type: "linkedin", url: "#", icon: "/images/socials/linkdin-icon-black.svg" }
    ]
};

export const popupData = {
    documents: {
        id: "documents",
        title: "DOKUMENTI",
        items: [],
        links: []
    },
    organization: {
        id: "organization",
        title: "ORGANIZACIJSKA STRUKTURA",
        image: "/images/categories/structure_image.png"
    },
    privacy: {
        id: "privacy",
        title: "ZAŠTITA PODATAKA",
        links: [
            { text: "Odluka o imenovanju", url: "/documents/zastitaPodataka/Odluka_o_imenovanju.docx" },
            { text: "Pravilnik o zaštiti osobnih podataka", url: "/documents/zastitaPodataka/PRAVILNIK_O_ZASTITI_OSOBNIH_PODATAKA.docx" }
        ]
    },
    natjecaji: {
        id: "natjecaji",
        title: "NATJEČAJI",
        groups: [
            {
                subtitle: "NATJEČAJ ZA VODITELJA ODJELA",
                links: [
                    { text: "Odluka o objavi natječaja", url: "/documents/natjecaji/Odluka_o_objavi_natjecaja.docx" },
                    { text: "Poziv na testiranje voditelja odjela", url: "/documents/natjecaji/Poziv_testiranje_voditelj_odjela.docx" },
                    { text: "Natječaj za voditelja odjela", url: "/documents/natjecaji/RAS_natjecaj_voditelj_odjela.docx" }
                ]
            },
            {
                subtitle: "NATJEČAJ ZA VODITELJA PROJEKTA",
                links: [
                    { text: "Natječaj za voditelja projekta", url: "/documents/natjecaji/RAS_natjecaj_voditelj_projekta.docx" },
                    { text: "Odluka o poništenju natječaja za voditelja projekta", url: "/documents/natjecaji/Odluka_o_ponistenju_natjecaja_voditelj_projekta.docx" }
                ]
            },
            {
                subtitle: "NATJEČAJ ZA PROJEKTNOG ASISTENTA",
                links: [
                    { text: "Natječaj za projektnog asistenta", url: "/documents/natjecaji/RAS_natjecaj_projektni_asistent.docx" },
                    { text: "Odluka o poništenju natječaja za projektnog asistenta", url: "/documents/natjecaji/Odluka_o_ponistenju_natjecaja_asistent.docx" }
                ]
            },
            {
                subtitle: "NATJEČAJ ZA DIREKTORA",
                links: [
                    { text: "Natječaj za direktora razvojne agencije - 13.09.2024.", url: "/documents/natjecaji/Natjecaj_za_direktora_Razvojne_agencije_Srijem.docx" },
                    { text: "Odluka o poništenju natječaja - 20.09.2024.", url: "/documents/natjecaji/20240920145844977.pdf" },
                    { text: "Natječaj za direktora razvojne agencije - 25.09.2024.", url: "/documents/natjecaji/RAS_natjecaj_direktor_25092024.docx" }
                ]
            },
            {
                subtitle: "NATJEČAJ ZA ZAKUP POSLOVNIH PROSTORA CENTRA ZA POTPORU PODUZETNICIMA",
                links: [
                    { text: "Potrebna dokumentacija (ZIP)", url: "/documents/natjecaji/cpp.zip" }
                ]
            },
            {
                subtitle: "NATJEČAJ ZA PROJEKTNOG ASISTENTA (2025)",
                links: [
                    { text: "Natječaj za projektnog asistenta", url: "/documents/natjecaji/RAS_natjecaj_projektni_asistent_2025.docx" },
                    { text: "Poziv na prethodnu provjeru znanja i sposobnosti", url: "/documents/natjecaj/Natjecaj_projektni_asistent_poziv_2025.docx" }
                ]
            }
        ]
    },
    antikorupcija: {
        id: "antikorupcija",
        title: "ANTIKORUPCIJA",
        html: "<p></p>"
    },
    donacije: {
        id: "donacije",
        title: "DONACIJE I SPONZORSTVA",
        links: [
            { text: "Pravilnik o sponzorstvima i donacijama", url: "/documents/donacijeSponzorstva/PRAVILNIK_o_sponzorstvima_i_donacijama.docx" },
            { text: "Izvješće za 2023. godinu", url: "/documents/donacijeSponzorstva/Izvjesce_za_2023_godinu_donacije_i_sponzorstva.docx" },
            { text: "Izvješće za 2025. godinu", url: "/documents/donacijeSponzorstva/Izvjesce_o_donacijama_2025.doc" }
        ]
    },
    nabava: {
        id: "nabava",
        title: "JAVNA NABAVA",
        description: `
            <p>Temeljem članka 80., st.2. Zakona o javnoj nabavi (NN120/16, 114/22)<br><strong>RAZVOJNA AGENCIJA SRIJEM d.o.o.</strong> za poticanje gospodarstva i lokalnog razvoja, <strong>ne smije</strong> sklapati ugovore o javnoj nabavi sa sljedećim gospodarskim subjektima (u svojstvu ponuditelja, člana zajednice ponuditelja ili podizvoditelja odabranom ponuditelju):</p>
            <br>
            <p><strong>ARURA, obrt za poslovno savjetovanje,</strong><br>vl. Ivan Ćavar<br>Vatrogasna 5, 32100 Vinkovci</p>
            <br>
        `,
        links: [
            { text: "Pravilnik o provedbi postupaka jednostavne nabave", url: "/documents/javnaNabava/Pravilnik_o_provedbi_postupaka_jednostavne_nabave_RAS.docx" },
            { text: "Pravilnik o jednostavnoj nabavi", url: "/documents/javnaNabava/PRAVILNIK_O_JEDNOSTAVNOJ_NABAVI.docx" },
            { text: "Izjava o sukobu interesa - Marko Gluvaković", url: "/documents/javnaNabava/Izjava_o_sukobu_interesa_Marko_Gluvakovic.pdf" }
        ]
    },
    izjava: {
        id: "izjava",
        title: "IZJAVA O PRISTUPAČNOSTI",
        html: `
            <p><strong>Razvojna agencija Srijem d.o.o.</strong> <i>(dalje u tekstu: Agencija)</i> nastoji svoje internetske stranice učiniti pristupačnima u skladu sa Zakonom o pristupačnosti internetskih stranica i programskih rješenja za pokretne uređaje tijela javnog sektora (<strong>„Narodne novine“, broj 17/19;</strong> dalje u tekstu: Zakon o pristupačnosti) kojim se prenosi Direktiva (EU) 2016/2102 Europskog parlamenta i Vijeća od 26. listopada 2016. o pristupačnosti internetskih stranica i mobilnih aplikacija tijela javnog sektora (SL L 327 od 2. prosinca 2016.).</p>
            <p>Ova izjava o pristupačnosti primjenjuje se na internetske stranice na mrežnom mjestu <strong><a href="https://www.ra-srijem.hr/">www.ra-srijem.hr</a></strong></p><br/>
            <p><strong>Stupanj usklađenosti:</strong><p>
            <p>Ove internetske stranice u većoj mjeri su usklađene sa Zakonom o pristupačnosti internetskih stranica i programskih rješenja za pokretne uređaje tijela javnog sektora te Smjernicama CARNET-a za osiguravanje digitalne pristupačnosti koje su pregledane i odobrene od nacionalnih krovnih udruga osoba s invaliditetom. Postavljanjem WP Accessibility plug-ina za pristupačnost ispunjena je većina zahtjeva europske norme EN 301 549 V2.1.2 (2018-08), uz iznimke koje se navode u nastavku.</p><br/>
            <p><strong>Nepristupačnost sadržaja:</strong><p>
            <p>
                Sadržaj naveden u nastavku nepristupačan je zbog sljedećih razloga:<br/>
                • pojedine .pdf datoteke sadržane u objavama nisu u cijelosti nastale izvozom iz izvorišne datoteke iz alata Microsoft Office Word uz odabir opcija za pristupačnost, već skeniranjem tiskanih dokumenata, odnosno nisu pristupačne jer nisu prikladno pripremljene za čitače ekrana<br/>
                • veći dio fotografija i/ili netekstualnog sadržaja internetskih stranica Agencije dekorativnog je karaktera ili se koristi samo za vizualno oblikovanje, pa, sukladno točki 5.1.3.6. europske norme EN 301 549 V2.1.2 (2018-08), određene člankom 7. stavkom 1. Zakona o pristupačnosti, nemaju (i ne moraju imati) svoj alternativni opis. Ipak, neznatan dio slika i datoteka nema prikladan tekstualni opis (alt tekst)<br/>
                • pdf datoteke otvaraju se u istom prozoru (tabu) preglednika, a .doc i .ppt datoteke dostupne su isključivo kao datoteke za preuzimanje<br/>
                • dio poveznica nije podcrtan, odnosno ne sadrži prikladne tekstualne opise
            </p><br/>
            <p><strong>Priprema ove izjave o pristupačnosti:</strong></p>
            <p>Ova Izjava pripremljena je dana <strong>1. srpnja 2020.</strong>, prema Predlošku izjave o pristupačnosti koji je u skladu s <strong>Direktivom (EU) 2016/2102 Europskog parlamenta</strong> i Vijeća o pristupačnosti internetskih stranica i mobilnih aplikacija tijela javnog sektora, a utvrđen je <strong>Provedbenom odlukom komisije EU 2018/1523 11. listopada 2018.</strong> Za pripremu ove Izjave korištena je metoda automatizirane provjere pristupačnosti korištenjem alata WAVE Web Accessibility Evaluation Tool.</p><br/>
            <p><strong>Povratne informacije i podaci za kontakt:</strong><p>
            <p>Ukoliko vam je potrebna pomoć u bilo kojem dijelu naše mrežne stranice <strong><a href="https://www.ra-srijem.hr/">www.ra-srijem.hr</a></strong> ili želite prijaviti problem s pristupačnošću, <strong><a href="pages/contact.html">kontaktirajte nas</a></strong>.</p><br/>
            <p><strong>Postupak praćenja provedbe propisa:</strong></p>
            <p>Povjerenik za informiranje Republike Hrvatske je tijelo nadležno za praćenje usklađenosti mrežnih stranica i programskih rješenja za pokretne uređaje tijela javnog sektora sa zahtjevima pristupačnosti i nadzor nad provedbom Zakona o pristupačnosti.</p>
            <p>U slučaju nezadovoljavajućih odgovora na obavijest ili zahtjev za povratne informacije o pristupačnosti ovih mrežnih stranica, korisnici se mogu obratiti Povjereniku za informiranje telefonom ili putem elektroničke pošte na adresi <strong><a href="mailto:pristupacnost@pristupinfo.hr">pristupacnost@pristupinfo.hr</a></strong></p>
        `
    },
    propisi: {
        id: "propisi",
        title: "PROPISI I BITNI DOKUMENTI",
        links: [
            { text: "Zakon o regionalnom razvoju Republike Hrvatske (NN 147/14, 123/17, 118/18)", url: "https://www.zakon.hr/z/239/Zakon-o-regionalnom-razvoju-Republike-Hrvatske" },
            { text: "Zakon o sustavu strateškog planiranja i upravljanja razvojem Republike Hrvatske (NN 123/17, 151/22)", url: "https://www.zakon.hr/z/975/Zakon-o-sustavu-strateškog-planiranja-i-upravljanja-razvojem-Republike-Hrvatske" },
            { text: "Zakon o unapređenju poduzetničke infrastrukture (NN 93/13, 114/13, 41/14)", url: "https://www.zakon.hr/z/652/Zakon-o-unapređenju-poduzetničke-infrastrukture" },
            { text: "Zakon o trgovačkim društvima (NN 111/93,34/99, 121/99, 52/00, 118/03, 107/09, 125/11, 152/11, 111/12, 68/13, 110/15, 40/19, 34/22, 114/22, 18/23)", url: "https://www.zakon.hr/z/546/Zakon-o-trgovačkim-društvima" },
            { text: "Zakon o radu (NN 93/14, 127/17, 98/19, 151/22, 64/23)", url: "https://www.zakon.hr/z/307/Zakon-o-radu" },
            { text: "Zakon o poticanju razvoja malog gospodarstva (NN 29/02, 63/07, 53/12, 56/13, 121/16)", url: "https://www.zakon.hr/z/527/Zakon-o-poticanju-razvoja-malog-gospodarstva" },
            { text: "Zakon o Agenciji za mobilnost i programe Europske unije (NN 121/17, 30/23)", url: "https://www.zakon.hr/z/385/Zakon-o-Agenciji-za-mobilnost-i-programe-Europske-unije" }
        ]
    },
    pristup: {
        id: "pristup",
        title: "PRISTUP INFORMACIJAMA",
        description: `
            <p><strong>Razvojne agencije Srijem d.o.o.</strong></p><br/>
            <p>Pravo na pristup informacijama uređeno je Zakonom o pravu na pristup informacijama <strong>(Narodne novine br. 25/13, 85/15, 69/22 (dalje: ZPPI))</strong> kojim se uređuje pravo na pristup informacijama i ponovnu uporabu informacija koje posjeduju tijela javne vlasti.</p>
            <p>Razvojna agencija Srijem d.o.o., kao tijelo javne vlasti, u skladu s odredbama ZPPI-a, omogućuje korisnicima ostvarivanje prava na pristup informacijama kao i pravo na ponovnu uporabu informacija. Korisnik prava na pristup informacijama i ponovnu uporabu informacija je svaka domaća ili strana fizička i pravna osoba.</p>
            <p>Pravo na informaciju i ponovnu uporabu informacija ostvaruje se podnošenjem pisanog ili usmenog zahtjeva službeniku za informiranje.</p>
            <p>Pisani zahtjev možete uputiti <strong>putem elektroničke pošte, poštom</strong> ili <strong>predati osobno</strong> na adresi: Razvojna agencija Srijem d.o.o., Trg kralja Tomislava 6, 32245 Nijemci, radnim danom <strong>od 13:00 do 15:00 sati</strong>.</p>
            <p>Zahtjev za informacijom možete podnijeti i usmeno – <strong>telefonski</strong> ili <strong>osobnim dolaskom</strong> u uredovno vrijeme radnim danom <strong>od 13:00 do 15:00 sati</strong>.</p><br/>
            <p><strong>Službenik za informiranje:</strong><br/>Marko Gluvaković<br>Telefon: +385 99 7512 906<br>E-adresa: <a href="mailto:projekti@nijemci.hr">projekti@nijemci.hr</a></p><br/>
            <p><strong>Obrasci</strong></p>
            <p>Razvojna agencija Srijem d.o.o., ima pravo na naknadu stvarnih materijalnih troškova koji nastanu pružanjem informacije korisniku prava na pristup informacijama i ponovnu uporabu informacija, kao i na naknadu troškova dostave tražene informacije, koja se naplaćuje sukladno Kriterijima za određivanje visine naknade stvarnih materijalnih troškova i troškova dostave informacije (NN 12/14, 15/14).</p><br/>
            <p><strong>Izvješća o provedbi zakona o pravu na pristup informacijama Agencije</strong></p><br/>
        `,
        links: [
            { text: "Zahtjev za pristup informacijama", url: "/documents/pristupInformacijama/1_Obrazac_2_Zahtjev_za_pristup_informacijama.doc" },
            { text: "Zahtjev za dopunu ili ispravak informacije", url: "/documents/pristupInformacijama/2_Obrazac_3_Zahtjev_za_dopunu_ili_ispravak_informacije.doc" },
            { text: "Zahtjev za ponovnu uporabu informacija", url: "/documents/pristupInformacijama/3_Obrazac_4_Zahtjev_za_ponovnu_uporabu_informacija.doc" },
            { text: "Odluka o imenovanju službenika za informiranje", url: "/documents/pristupInformacijama/Odluka_o_imenovanju_sluzbenika_za_informiranje.docx" },
            { text: "Izvješće o provedbi Zakona o pravu na pristup informacijama za 2023.", url: "/documents/pristupInformacijama/Godisnje_izvjesce.pdf" },
            { text: "Izvješće o provedbi Zakona o pravu na pristup informacijama za 2025.", url: "/documents/pristupInformacijama/Godisnje_izvjesce_2025.pdf" },
            { text: "Izvješće o provedbi Zakona o pravu na pristup informacijama za 2025. - CSV", url: "/documents/pristupInformacijama/Godisnje_izvjesce_2025.csv" }
        ]
    }
};

export const newsData = [
    {
        id: "sufinanciranje-sportskog-programa",
        title: "Natječaj za sufinanciranje sportskih programa poticanja lokalnog razvoja i sportskih natjecanja u 2026. godini",
        summary: "Ministarstvo turizma i sporta 20.1.2026. godine",
        tags: ["Ministarstvo turizma i sporta"],
        image: "../images/article16/header.jpg",
        content: `
            <p>Ministarstvo turizma i sporta 20.1.2026. godine, objavilo je Natječaj za sufinanciranje sportskih programa poticanja lokalnog razvoja i sportskih natjecanja u 2026. godini.</p>
            <p>Sredstva za provedbu  Natječaja osigurana su u Državnom proračunu Republike Hrvatske za 2026. godinu i projekcije za 2027. i 2028. („Narodne novine“, broj: 152/25) u ukupnome iznosu od 4.098.039,00 eura.</p>
            <p>Cilj ovog natječaja je omogućiti što većem broju korisnika svakodnevno bavljenje organiziranom tjelesnom aktivnošću koja će pridonijeti očuvanju i unaprijeđenu psihofizičku sposobnost i zdravlje kroz stvaranje uvjeta za bavljenje sportom na cjelokupnom području RH, a u skladu sa svojim interesima i sposobnostima.</p>
            
            <p>Natječaj obuhvaća slijedeća programska područja:</p>
            <ul>
                <li>PP1 Poticanje programa bavljenja amaterskim sportom i zdravstveno usmjerenim tjelesnim vježbanjem ( min. iznos sufinanciranja 2.000,00 eura, max. iznos 15.000,00)</li>
                <li>PP2 Poticanje programa organiziranja natjecanja te sudjelovanja na istima na kojima sudjeluju samo sportaši iz Republike Hrvatske te odlazak sportaša na međunarodno natjecanje izvan Republike Hrvatske (min. iznos sufinanciranja 2.000,00 eura, max. Iznos 15.000,00 eura)</li>
                <li>PP3 Poticanje programa organiziranja međunarodnih sportskih natjecanja (min. iznos 10.000,00 eura, max. iznos 30.000,00 eura)</li>
            </ul>

            <p>Poduzetnici početnici:</p>
            <ul>
                <li>1. godinu <b>NE plaćaju</b> korištenje zakupa</li>
                <li>2. godinu iznos zakupa iznosi <b>25%</b> tržišne cijene</li>
                <li>3. godinu <b>50%</b> tržišne cijene</li>
                <li>4. godinu <b>75%</b> tržišne cijene</li>
                <li>5. godinu <b>100%</b> tržišne cijene</li>
            </ul>

            <p>Rok za podnošenje prijava je do 20. veljače 2026. godine do 12,00  sati.</p>
            <p>Pozivamo udruge koje su osnovane sukladno Zakonu o udrugama i Zakonu o sportu da prijave svoj program u skladu s uvjetima i kriterijima propisanim natječajnom dokumentacijom.</p>

            <a href="https://mint.gov.hr/javni-pozivi-i-natjecaji-11414/s-p-o-r-t/22182" target="_blank" class="link-16" style="text-decoration: none; font-size: 18px;"><strong>Pogledajte cjelokupnu natječajnu dokumentaciju</strong></a>
        `,
        metadata: {
            dateAdded: "2026-01-24",
            articleFolder: "article16"
        }
    },
    {
        id: "cpp",
        title: "Zakup poslovnih prostora centra za potporu poduzetnicima",
        summary: "Kako bi podržali rast malih i srednjih poduzetnika te potaknuli inovacije kao i stvorili nova radna mjesta.",
        tags: ["CPP", "Općina Nijemci"],
        image: "../images/article15/header.jpg",
        content: `
            <p>Općina Nijemci osnovala je Centar za potporu poduzetnicima čiji prostor daje u zakup zainteresiranim poduzetnicima.</p>
            <p>Centar je povjeren na upravljanje Razvojnoj agenciji Srijem d.o.o., a isti nudi prostor za rad, točnije 10 poslovnih prostora, 1 prostor konferencijske dvorane te zajedničke prostorije uz razvijen plan upravljanja i razrađenu savjetodavno-edukativno-informativnu ulogu. Trenutno su raspoloživa za zakup još četiri poslovna prostora.</p>
            <p>Svaki ured opremljen je potrebnom uredskom opremom. Njegova uloga u pružanju podrške, mentorstva i resursa ključna je za uspjeh poduzetnika i razvoj lokalne zajednice kao i doprinos uravnoteženom razvoju Vukovarsko-srijemske županije.</p>
            
            <p>Kandidat može biti poduzetnik početnik, postojeći poduzetnik koji ima status poduzetnika početnika ili novi OPG, ima sjedište/prebivalište/poslovnu jedinicu na području Općine Nijemci, da obavlja jednu ili više sljedećih djelatnosti:</p>
            <ul>
                <li>Djelatnost iz područja visoke tehnologije, elektronike, informacijskih i komunikacijskih tehnologija, zelenih tehnologija i održivog razvoja;</li>
                <li>Usluge u području arhitekture, dizajna, različitih oblika medijske komunikacije, promidžbe, izdavaštva, kreativne industrije, digitalne grafike, multimedije i slično;</li>
                <li>Obrazovanje;</li>
                <li>Pakiranje proizvoda te svi ostali poduzetnici kojima se odobri korištenje prostora pod tržišnim uvjetima, a ukoliko za to postoji slobodan prostor.</li>
            </ul>

            <p>Poduzetnici početnici:</p>
            <ul>
                <li>1. godinu <b>NE plaćaju</b> korištenje zakupa</li>
                <li>2. godinu iznos zakupa iznosi <b>25%</b> tržišne cijene</li>
                <li>3. godinu <b>50%</b> tržišne cijene</li>
                <li>4. godinu <b>75%</b> tržišne cijene</li>
                <li>5. godinu <b>100%</b> tržišne cijene</li>
            </ul>

            <p>Izgradnja Centra za potporu poduzetnicima financirana je iz Europskog fonda za regionalni razvoj.</p>

            <a href="../documents/cpp/cpp.zip" download="cpp.zip" target="_blank" class="link-16" style="text-decoration: none; font-size: 18px;"><strong>Ovdje preuzmite potrebne dokumente...</strong></a>
        `,
        metadata: {
            dateAdded: "2024-01-24",
            originalFile: "cpp.html",
            articleFolder: "article15"
        }
    },
    {
        id: "sajam-otok",
        title: "Sajam EU projekata u Otoku",
        summary: "10. svibnja 2024. godine održan je sajam EU projekata u gradu Otoku.",
        tags: ["EU", "PA.CON"],
        image: "../images/article14/header.jpg",
        content: `
            <p>Projekte Općine Nijemci predstavila je <strong>Razvojna agencija Srijem d.o.o.</strong> u suradnji s Turističkom zajednicom Općine Nijemci.</p>
            <p>Na svom štandu zaposlenici Razvojne agencije predstavili su bogat sadržaj turističke ponude Općine Nijemci, te vrlo uspješne projekte kako one vezane uz infrastrukturu tako i one koji se tiču samog turizma.</p>
            <p>Tako se na štandu našao nedavno završen projekt <strong>PA.CON</strong> za koji smo nedavno saznali da nam je odobren i nastavak pod nazivom PA.CON II.</p>
            <p>Predstavljene su biciklističke rute Općine Nijemci, Izletište Sopotac, ptice našeg područja, te mogućnost korištenja nabavljenih bicikala u obilasku navedenih ruta.</p>
            <p>Spomenuli smo i završen projekt <strong>HORIS</strong> – projekt koji nudi turizam konjičkog jahanja.</p>
            <p>Osvrnuli smo se i na izgrađen <strong>CENTAR ZA POTPORU PODUZENTICIMA</strong> kako bi svi zainteresirani saznali da nudimo urede za poduzetnike i poduzetnike početnike.</p>
            <p>Predstavljen je i projekt <strong>Izrada projektno-tehničke dokumentacije za projekt izgradnja Auto parka Lipovac</strong>.</p>
            <p>Svi posjetitelji bili su izrazito zainteresirani za naše projekte, za ono što nudimo i s oduševljenjem su slušali kako se Općina Nijemci trudi i radi na promociji EU projekata.</p>
            <p>Bio je ovo jedan aktivan i poseban dan za promoviranje projekata sufinanciranih od strane Europske unije.</p>
        `,
        metadata: {
            dateAdded: "2024-05-10",
            originalFile: "sajam-otok.html",
            articleFolder: "article14"
        }
    },
    {
        id: "interreg-vi-a-ipa",
        title: "Odobreno 24 projekta u sklopu prvog poziva Interreg VI-A IPA",
        summary: "Programa Hrvatska - Bosna i Hercegovina - Crna Gora 2021. - 2027.",
        tags: ["Interreg", "PA.CON"],
        image: "../images/article13/header.jpg",
        content: `
            <p>Na sastanku Odbora za praćenje, održanog u Mostaru 23. travnja 2024. godine, odobreno je financiranje 24 projekta u sklopu prvog poziva Interreg VI-A IPA Programa Hrvatska - Bosna i Hercegovina - Crna Gora 2021. - 2027, čime se ukupan broj odobrenih projekata u sklopu ovog poziva popeo na 33.</p>
            <p>Predmet odobrenja bile su projekte prijave u okviru Specifičnog cilja 1.1 Istraživanje i inovacije - 6 projekta, Specifičnog cilja 2.4. Prilagodba klimatskim promjenama - 7 projekata, Specifičnog cilja 4.5 Zdravlje - 6 projekata i Specifičnoga cilj 4.6 Turizam i kultura - 5 projekata.</p>
            <p>Općina Nijemci na cilj 4.6. Turizam i kultura prijavila je nastavak projekta PA.CON.</p>
            <p>Novi projekt nosi akronim PA.CON II, a suradnja se nastavlja sa istim partnerima – Grad Tuzla, Udruženje za razvoj NERDA, Centar za promatranje ptica i Javno preduzeće za nacionalne parkove Crne Gore.</p>
            <p>Objava sljedećeg poziva u sklopu Programa okvirno je planirana za kraj 2024. / početak 2025. godine.</p>
            <a href="https://interreg-hr-ba-me.eu/approval-of-twenty-four-projects-within-the-first-call-of-the-interreg-vi-a-ipa-programme-croatia-bosnia-and-herzegovina-montenegro-2021-2027/" target="_blank" class="link-16" style="text-decoration: none; font-size: 18px;"><strong>Saznajte više...</strong></a>
        `,
        metadata: {
            dateAdded: "2024-04-23",
            originalFile: "interreg-vi-a-ipa.html",
            articleFolder: "article13"
        }
    },
    {
        id: "uspostava-reciklaznih-dvorista",
        title: "Objavljen poziv na dostavu projektnih prijedloga 'USPOSTAVA RECIKLAŽNIH DVORIŠTA'",
        summary: "Ministarstvo gospodarstva i održivog razvoja objavilo je Poziv na dostavu projektnih prijedloga “Uspostava reciklažnih dvorišta”.",
        tags: ["MINGOR", "EU fondovi"],
        image: "../images/article12/header.jpg",
        content: `
            <p>Predmet Poziva je uspostava reciklažnih dvorišta iz članka 4. stavka 1. točke 69. Zakona o gospodarenju otpadom (NN, br. 84/21,142/23) (u daljnjem tekstu: ZGO), u skladu s člankom 84. ZGO-a, što uključuje građenje i opremanje novih reciklažnih dvorišta (dalje u tekstu RD) ili nabavu mobilnih reciklažnih dvorišta (u daljnjem tekstu: mobilno RD) naročito u obalnim i otočnim jedinicama lokalne samouprave gdje se u turističkoj sezoni višestruko povećava broj stanovnika koji borave na tim područjima.</p>
            <p>Predmet ovog Poziva nisu reciklažna dvorišta za građevni otpad (sukladno članku 4. stavku 1. točki 70. ZGO-a), niti nabava opreme/vozila za manipulaciju i transport mobilnih RD.</p>
            <p>Svrha Poziva je doprinos povećanju stope odvojeno prikupljenog komunalnog otpada i smanjenju količine otpada koji se odlaže na odlagalište, prvenstveno u obalnim i otočnim JLS-ovima.</p>
            <p>Ukupan raspoloživ iznos bespovratnih sredstava za dodjelu u okviru ovog Poziva je 6.000.000,00 EUR od čega je predviđeno:</p>
            <ul>
                <li>3.500.000,00 EUR za obalne/otočne JLS-ove kao prijavitelje,</li>
                <li>2.500.000,00 EUR za ostale JLS-ove kao prijavitelje</li>
            </ul>
            <p>Najniži odnosno najviši iznos bespovratnih sredstava koji se može dodijeliti pojedinom projektu iznosi:</p>
            <ul>
                <li>reciklažna dvorišta – građevine: najniži iznos – 67.000,00 EUR; najviši iznos – 850.000,00 EUR,</li>
                <li>mobilna reciklažna dvorišta: najniži iznos – 15.000,00 EUR; najviši iznos – 33.000,00 EUR.</li>
            </ul>
            <p>Iznos bespovratnih sredstava koji se može dodijeliti u sklopu ovog Poziva iznosi maksimalno 85% od ukupnog iznosa prihvatljivih troškova projekta.</p>
            <p>Projektni prijedlog se podnosi putem sustava eNPOO u elektroničkom obliku.</p>
            <p>Poziv se provodi kao otvoreni postupak u modalitetu privremenog Poziva s krajnjim rokom dostave projektnih prijedloga do 3. lipnja 2024. godine u 10,00 h. Podnošenje projektnih prijedloga moguće je od 29. travnja 2024. godine od 09,00 h.</p>
            <a href="https://fondovieu.gov.hr/pozivi/107" target="_blank" class="link-16" style="text-decoration: none; font-size: 18px;"><strong>Saznajte više...</strong></a>
        `,
        metadata: {
            dateAdded: "2024-04-15",
            originalFile: "uspostava-reciklaznih-dvorista.html",
            articleFolder: "article12"
        }
    },
    {
        id: "sportsko-igraliste-banovci",
        title: "Izgrađeno sportsko igralište u Banovcima",
        summary: "Cilj projekta bio je poboljšati dostupnost lokalne infrastrukture izgradnjom sportskog igrališta u naselju Banovci.",
        tags: ["MRRFEU", "EU fondovi"],
        image: "../images/article11/header.jpg",
        content: `
            <p>Općina Nijemci prijavila je projekt Izgradnja sportskog igrališta u naselju Banovci na Poziv za iskaz interesa za financiranje projekata prema Programu za poboljšanje infrastrukture na područjima naseljenim pripadnicima nacionalnih manjina koji je raspisalo <strong>Ministarstvo regionalnog razvoja i fondova EU.</strong></p>
            <p>Cilj projekta bio je poboljšati dostupnost lokalne infrastrukture, promicanje ravnopravnosti, nediskriminacije i održivog razvoja izgradnjom sportskog igrališta u naselju Banovci.</p>
            <p>Ugovor je potpisan u studenom 2023. godine i krenulo se u samu izgradnju.</p>
            <p>Odrađeni su zemljani radovi, zatim konstrukcija igrališta i samo opremanje igrališta.</p>
            <p>Projekt je sufinanciran od strane Ministarstva regionalnog razvoja i fondova EU u iznosu od 20.000,00 EUR, a ostatak je osigurala Općina Nijemci.</p>
        `,
        metadata: {
            dateAdded: "2023-11-20",
            originalFile: "sportsko-igraliste-banovci.html",
            articleFolder: "article11"
        }
    },
    {
        id: "sanacija-nk-polet-dns",
        title: "Uspješno završen projekt sanacije NK Polet Donje Novo Selo",
        summary: "Sufinanciran od strane Ministarstva turizma i sporta.",
        tags: ["Ministarstvo turizma", "Općina Nijemci"],
        image: "../images/article10/header.jpg",
        content: `
            <p>Općina Nijemci provela je projekt „Sanacija postojeće sportske građevine i opremanje sportskim rekvizitima i opremom – NK Polet Donje Novo Selo“ koji je sufinanciran od strane Ministarstva turizma i sporta.</p>
            <p>Projektom je sanirana postojeća sportska građevina (odrađeni građevinsko-obrtnički radovi, ugrađena PVC stolarija, stavljena fasada, rampa za osobe s invaliditetom, sanirana limarija i sanitarni čvor), nabavljen namještaj (garderobna klupa s vješalicama, kuhinjski elementi), nabavljena je i sportska oprema i rekviziti (korner zastavice sa štapom, nogometne mreže, nogometne lopte i setovi). Osim navedenog odrađene su i radionice za ravnopravnost spolova te uključivanje djevojčica i žena u sport.</p>
            <p>Ministarstvo je sufinanciralo projekt u iznosu od 13.100,00 EUR, a ostatak sredstava osigurala je Općina Nijemci.</p>
        `,
        metadata: {
            dateAdded: "2023-12-01",
            originalFile: "sanacija-nk-polet-dns.html",
            articleFolder: "article10"
        }
    },
    {
        id: "indikativni-plan-2024",
        title: "Indikativni plan objave natječaja SP ZPP-a za 2024.",
        summary: "Pregled plana objave natječaja.",
        tags: ["Ruralni razvoj", "Ministarstvo poljoprivrede"],
        image: "../images/article9/header.jpg",
        content: "",
        externalUrl: "https://ruralnirazvoj.hr/indikativni-plan-objave-natjecaja-u-2024/?",
        metadata: {
            dateAdded: "2024-01-01",
            note: "External Link",
            articleFolder: "article9"
        }
    },
    {
        id: "zastita-intelektualnog-vlasnistva",
        title: "Zaštita intelektualnog vlasništva",
        summary: "Otvorene prijave za bespovratna sredstva namijenjena zaštiti intelektualnog vlasništva",
        tags: ["EUIPO"],
        image: "../images/article8/header.jpg",
        content: `
            <p>Fond za MSP-ove, koji na inicijativu Europske komisije provodi Ured Europske unije za intelektualno vlasništvo (EUIPO), program je bespovratnih sredstava osmišljen kako bi se malim i srednjim poduzećima (MSP-ovima) iz EU-a pomoglo u zaštiti njihovih prava intelektualnog vlasništva (IV).</p>
            <p>Ukupna sredstva za 2024. godinu iznose 20 milijuna EUR-a i dostupna su od <strong>22. siječnja do 6. prosinca 2024. godine.</strong></p>
            <p>Poduzeća se mogu prijaviti za jedan ili više vrijednosnih kupona (vaučera) u isto vrijeme ili u okviru naknadnih prijava.</p>
            <p><strong>Dostupna su 4 vaučera:</strong></p>
            <p><strong>Vaučer 1.</strong> - za troškove usluge IP Scan-a (ispitivanje potencijala intelektualnog vlasništva poduzeća),</p>
            <p><strong>Vaučer 2.</strong> - za troškove registracije žiga i industrijskog dizajna putem nacionalnih, regionalnih, europskih i međunarodnih sustava zaštite,</p>
            <p><strong>Vaučer 3.</strong> - za troškove prijave patenta na nacionalnoj ili regionalnoj razini, usluge pretraživanje stanja tehnike te troškove pravnog zastupanja za sastavljanje i podnošenje prijave europskog patenta (samo za zastupnike u Registru Europskog patentnog ureda – EPO-a),</p>
            <p><strong>Vaučer 4.</strong> - za troškove prijave zaštite biljnih sorti na nivou Europske unije – troškovi online prijave i ispitivanja</p>
            <a href="https://euipo.europa.eu/tunnel-web/secure/webdav/guest/document_library/contentPdfs/about_euipo/Grants/GR_001_24/gr_001_24_call_notice_hr.pdf" target="_blank" class="link-16" style="text-decoration: none; font-size: 18px;"><strong>Smjernice za podnositelje (PDF)</strong></a><br>
            <a href="https://www.dziv.hr/hr/novosti/otvorene-prijave-za-bespovratna-sredstva-iz-fonda-za-msp-ove-2024,7019.html" target="_blank" class="link-16" style="text-decoration: none; font-size: 18px;"><strong>Više na poveznici...</strong></a>
        `,
        metadata: {
            dateAdded: "2024-01-22",
            originalFile: "zaštita-intelektualnog-vlasništva.html",
            articleFolder: "article8"
        }
    },
    {
        id: "materijalni-uvjeti-dječjih-vrtića",
        title: "Poboljšanje materijalnih uvjeta u dječjim vrtićima",
        summary: "Središnji državni ured za demografiju i mlade objavio je Poziv za prijavu projekata usmjerenih na poboljšanje materijalnih uvjeta u dječjim vrtićima u 2024.",
        tags: ["Dječji vrtić", "Središnji državni ured"],
        image: "../images/article7/header.jpg",
        content: `
            <p>Središnji državni ured za demografiju i mlade objavio je Poziv za prijavu projekata usmjerenih na poboljšanje materijalnih uvjeta u dječjim vrtićima u 2024. godini.</p>
            <p>Cilj Programa je provođenje poticajne demografske i obiteljske politike, kroz razvoj i unapređenje postojećih kapaciteta vanjskih terena i igrališta dječjih vrtića kako bi se omogućila raznolikost prostora za igru te pridonijelo poboljšanju sigurnosti djece u prostorijama objekta i izvan njega.</p>
            
            <p>Prihvatljivi Prijavitelji su:</p>
            <ul>
                <li>jedinice lokalne samouprave i Grad Zagreb, osnivači dječjih vrtića, utvrđeni Planom mreže dječjih vrtića (čl.14. Zakona o predškolskom odgoju i obrazovanju NN 10/97, 107/07, 94/13, 98/19 i 57/22). Prijavitelj mora biti vlasnik objekta u koji se ulaže ili mora imati sporazum/ugovor/odluku o pravu korištenja. Prijavitelj je dužan dostaviti pisanu suglasnost vlasnika nekretnine (u slučaju kada prijavitelj nije vlasnik) na sve zahvate koji će biti predviđeni Projektom,</li>
                <li>jedinice lokalne samouprave, vlasnici prostora u kojemu se odvija jedina djelatnost dječjeg vrtića na području te jedinice lokalne samouprave te koje ovim ulaganjem povećavaju vrijednost vlastite imovine jedinice lokalne</li>
            </ul>

            <p>Prihvatljivi objekti su:</p>
            <ul>
                <li>objekti dječjih vrtića čiji su osnivači jedinice lokalne samouprave na kojima se provode prihvatljive aktivnosti u provedbenom razdoblju i objekti u vlasništvu jedinica lokalne samouprave u kojima se odvija jedina djelatnost dječjeg vrtića na području JLS-a,</li>
                <li>ako se radi o novom objektu dječjeg vrtića koji će tek započeti s radom potrebno je uz Prijavu dostaviti Akt o osnivanju koji donosi osnivač sukladno odredbama Zakona o ustanovama kao i Rješenje o početku obavljanja djelatnosti dječjeg vrtića koje donosi Županijski odnosno gradski ured Grada Zagreba nadležan za poslove odgoja i obrazovanja</li>
            </ul>

            <p>Prihvatljive aktivnosti su: opremanje igrališta dječjih vrtića fiksnom opremom, uređenje okoliša i uređenje postojećih vanjskih terena.</p>
            <p>Jedan Prijavitelj podnosi jednu prijavu u kojoj može tražiti sufinanciranje prihvatljivih aktivnosti za jedan objekt dječjeg vrtića.</p>

            <p>Ukupan iznos sredstava predviđen za provođenje Programa je 3.300.000,00 EUR:</p>
            <ul>
                <li>za jedinice lokalne samouprave razvrstane od I. do IV. skupine po indeksu razvijenosti osiguran je iznos od 1.800.000,00 EUR,</li>
                <li>za jedinice lokalne samouprave razvrstane od V. do VIII. skupine po indeksu razvijenosti osiguran je iznos od 1.500.000,00 EUR</li>
            </ul>

            <p>Rok za podnošenje prijava je 30 kalendarska dana od dana objave na internetskoj stranici Središnjeg državnog ureda za demografiju i mlade, odnosno do 21. veljače 2024. godine.</p>

            <a href="https://mdu.gov.hr/vijesti-4693/poziv-za-prijavu-projekata-usmjerenih-na-poboljsanje-materijalnih-uvjeta-u-djecjim-vrticima-u-2024-godini/6957" target="_blank" class="link-16" style="text-decoration: none; font-size: 18px;"><strong>Saznajte više...</strong></a>
        `,
        metadata: {
            dateAdded: "2024-01-22",
            originalFile: "zaštita-intelektualnog-vlasništva.html",
            articleFolder: "article7"
        }
    },
    {
        id: "indikativni-godisnji-plan-objave-poziva-2024",
        title: "Indikativni godišnji plan objave poziva na dostavu projektnih prijedloga za 2024.",
        summary: "Ministarstvo regionalnog razvoja i fondova Europske unije u svojstvu Upravljačkog tijela objavilo je indikativne godišnje planove objave poziva na dostavu projektnih prijedloga za 2024. godinu u okviru Programa Konkurentnost i kohezija 2021. - 2027. i Integriranog teritorijalnog programa 2021. - 2027.",
        tags: ["Ministarstvo regionalnog razvoja", "EU fondovi"],
        image: "../images/article6/header.jpg",
        content: "",
        externalUrl: "https://eufondovi.gov.hr/indikativni-godisnji-plan-objave-poziva/",
        metadata: {
            dateAdded: "2024-01-01",
            note: "External Link",
            articleFolder: "article6"
        }
    },
    {
        id: "radionica-potencialnih-korisnika-intervencije-73.13",
        title: "PRVA RADIONICA ZA POTENCIJALNE KORISNIKE INTERVENCIJE 73.13.",
        summary: "Potpora javnoj infrastrukturi u ruralnim područjima iz Strateškog plana Zajedničke poljoprivredne politike Republike Hrvatske 2023. – 2027., za prihvatljivu vrstu projekta – nerazvrstana cesta.",
        tags: ["Ministarstvo poljoprivrede", "Radionica"],
        image: "../images/article5/header.jpg",
        content: "",
        externalUrl: "https://ruralnirazvoj.hr/prva-radionica-za-potencijalne-korisnike-intervencije-73-13-za-projekte-izgradnje-rekonstrukcije-nerazvrstanih-cesta/",
        metadata: {
            dateAdded: "",
            note: "External Link",
            articleFolder: "article5"
        }
    },
    {
        id: "poziv-za-iskaz-interesa",
        title: "Poziv za iskaz interesa za financiranje projekata prema programu održivog razvoja lokalne zajednice",
        summary: "Ministarstvo regionalnoga razvoja i fondova Europske unije objavilo je Poziv za iskaz interesa za financiranje projekata prema „Programu održivog razvoja lokalne zajednice“.",
        tags: ["Ministarstvo regionalnog razvoja", "Vlada Republike Hrvatske"],
        image: "../images/article4/header.jpg",
        content: `
            <p>Ministarstvo regionalnoga razvoja i fondova Europske unije objavilo je Poziv za iskaz interesa za financiranje projekata prema „Programu održivog razvoja lokalne zajednice“.</p>
            <p>Cilj Programa je pridonijeti gospodarskoj, socijalnoj i demografskoj revitalizaciji potpomognutih područja u skladu s njihovim razvojnim posebnostima.</p>
            <p>Ukupna sredstva Programa iznose 11.000.000,00 EUR. Jedan podnositelj zahtjeva može podnijeti jedan zahtjev za financiranje. U postupku odabira jednom Korisniku može se odobriti iznos financiranja najviše do 100.000,00 EUR s PDV-om. Najmanji iznos sufinanciranja po programu koji prijavitelj može ugovoriti je 20.000,00 EUR s PDV-om.</p>
            <p>Korisnici Programa su jedinice lokalne i područne (regionalne) samouprave koje su nositelji prihvatljivih aktivnosti na projektu, a u širem smislu svi stanovnici lokalne zajednice na potpomognutim područjima koji imaju korist od provedbenih aktivnosti Programa</p>
            <p>Prihvatljive aktivnosti su radovi na izgradnji, nadogradnji, rekonstrukciji, obnovi, modernizaciji  i adaptaciji prihvatljivih objekata iz područja društvene, javne, komunalne i gospodarske infrastrukture.</p>            
            <p>Rok za podnošenje zahtjeva je 2. veljače 2024. godine do 16:00 sati.</p>

            <a href="https://razvoj.gov.hr/o-ministarstvu/djelokrug-1939/nacionalni-programi-417/program-odrzivog-razvoja-lokalne-zajednice-2024/5489" target="_blank" class="link-16" style="text-decoration: none; font-size: 18px;"><strong>Saznajte više...</strong></a>
        `,
        metadata: {
            dateAdded: "2024-01-22",
            articleFolder: "article4"
        }
    },
    {
        id: "oborinska-odvodnja-lipovac",
        title: "Izgradnja oborinske odvodnje u naselju Lipovac",
        summary: "Izgradnja pješačkih staza te rekonstrukcija parkirališta i oborinske odvodnje u centru naselja Lipovac finacirano od strane Ministarstva regionalnog razvoja i fondova Europske unije.",
        tags: ["EU", "Općina Nijemci"],
        image: "../images/article3/header.jpg",
        content: `
            <p>Općina Nijemci je dana 13. srpnja 2023. godine potpisala Ugovor o financiranju sa Ministarstvom regionalnog razvoja i fondova Europske unije za projekt Izgradnja pješačkih staza te rekonstrukcija parkirališta i oborinske odvodnje u centru naselja Lipovac.</p>
            <p>Ministarstvo regionalnog razvoja i fondova Europske unije sufinancira ovaj projekt sa 40.000,00 EUR, a ostala sredstva osigurala je Općina Nijemci. Razvojna agencija Srijem d.o.o. prati tijek radova na ovom projektu i vodi računa o redovitom izvještavanju prema Ministarstvu.</p>
            <p>Radovi napreduju prema planu, a do sredine sljedeće godine očekuje se završetak svih prijavljenih radova.</p>
        `,
        metadata: {
            dateAdded: "2024-01-22",
            articleFolder: "article3"
        }
    },
    {
        id: "nova-odluka-o-razvrstavanju-jedinica-lokalne-i-podrucne-samouprave",
        title: "Nova odluka o razvrstavanju jedinica lokalne i područne (regionalne) samouprave",
        summary: "Na sjednici Vlade Republike Hrvatske održanoj 4. siječnja 2024. godine donesena je nova Odluka o razvrstavanju jedinica lokalne i područne (regionalne) samouprave prema stupnju razvijenosti.",
        tags: ["Lokalna samouprava", "Vlada Republike Hrvatske"],
        image: "../images/article2/header.jpg",
        content: `
            <p>Na sjednici Vlade Republike Hrvatske održanoj 4. siječnja 2024. godine donesena je nova Odluka o razvrstavanju jedinica lokalne i područne (regionalne) samouprave prema stupnju razvijenosti.</p>
            <p>Indeks razvijenosti donosi se prema sljedećim pokazateljima: stopi nezaposlenosti, dohotku po stanovniku, proračunskim prihodima jedinica lokalne, odnosno područne (regionalne) samouprave po stanovniku, općem kretanju stanovništva, stopi obrazovanosti te indeksu starenja.</p>
            <p>Dana 5. siječnja 2024. godine Odluka je objavljena u Narodnim novinama 3/2024.</p>

            <a href="https://www.zakon.hr/c/podzakonski-propis/59272/nn-3-2024-%285.1.2024.%29%2C-odluka-o-razvrstavanju-jedinica-lokalne-i-podrucne-%28regionalne%29-samouprave-prema-stupnju" target="_blank" class="link-16" style="text-decoration: none; font-size: 18px;"><strong>Više o odluci...</strong></a>
        `,
        metadata: {
            dateAdded: "2024-01-22",
            articleFolder: "article2"
        }
    },
    {
        id: "izgradnja-pjesacke-staze-ag-matosa",
        title: "Izgradnja pješačke staze A.G. Matoša",
        summary: "Završen projekt 'Izgradnja pješačke staze, uređenje odvodnje i kolnih prilaza' u ulici A.G. Matoša u Nijemcima.",
        tags: ["Ruralni razvoj", "Općina Nijemci"],
        image: "../images/article1/header.jpg",
        content: `
            <p>Općina Nijemci završila je projekt „Izgradnja pješačke staze, uređenje odvodnje i kolnih prilaza“ koji je prijavljen na Javni poziv za sufinanciranje projekata gradova i općina za poticanje razvoja komunalnog gospodarstva i ujednačavanje komunalnog standarda u 2023. godini.</p>
            <p>Ministarstvo prostornog uređenja, graditeljstva i državne imovine sufinanciralo je ovaj projekt sa 35.600,00 eura dok je ostatak sredstava osigurala Općina Nijemci.</p>
            <p>Cilj ovog projekta ostvaren je na način da su poboljšane komunalne usluge i uvjeti života i kvalitete u naselju Nijemci, točnije u ulici A. G. Matoša na način da su izgrađeni novi nogostupi, uređena odvodnja i kolni prilazi.</p>
            <p>Ovaj projekt sufinanciran je sredstvima Ministarstva prostornog uređenja, graditeljstva i državne imovine</p>
        `,
        metadata: {
            dateAdded: "2024-01-22",
            articleFolder: "article1"
        }
    },
];
