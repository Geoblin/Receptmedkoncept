const recipes = [
    // {
        // id:,
    //     name: "",
    //     tags: "",
    //     text: "",
    //     ingredience:[

    //     ],
    //     Description: ""
    // image: "",
    // },

    {
        id:0,
        name: "köttbullar med potatismos och brunsås",
        tags: "kött, potatis, svensk, biff",
        text: "It's meatballs, what you expecting?",
        ingredience: [
            "Potato: 8",
            "Meatballs: 20",
            "salt"
        ],
        Description: "Boil the potato. Mash them up. Fry the meatballs on high until it looks like LTT's UPS", 
        image: "",
    },
    {
        id:1,
        name: "Chili con carne",
        tags: "gryta, bönor, mexikan",
        text: "Chili con carne är en mustig och het gryta med köttfärs, chili, vita bönor, paprika och tomater. Detta klassiska mexikanska recept är både lättlagat och uppskattat av dina middagsgäster.",
        ingredience: [
            "2 gula lökar",
            "350 g nötfärs",
            "1 msk olja",
            "färsk eller torkad chili (efter smak)",
            "1 tsk paprikapulver",
            "1 krm svartpeppar",
            "3/4 tsk salt",
            "1 msk japansk soja",
            "1 burk hela tomater (à 400 g)",
            "2 burkar vita bönor i tomatsås (à 440 g)",
            "Till servering",
            "salladskål",
            "hackad persilja",
            "sås på vinägrett",
            "Tillbehör",
            "jalapeñopeppar",
            "chips eller brytbröd",
            "För alla"
        ],
        Description: "Skala och hacka lökarna. Bryn färsen i oljan i en gryta, gärna av gjutjärn, tills den fått fin färg. Blanda ner löken och låt den steka med en stund. Smaka av med chili, paprika, svartpeppar, salt och soja. Tillsätt tomaterna och låt alltsammans koka ihop tills smaken är mustig och röran blivit tjock. Ju längre koktid, desto fylligare smak. Tillsätt bönorna och låt alltsammans bli varmt. Smaka av med mer kryddor om så behövs. Till servering: Servera rätten rykande het med tillbehören och en sallad med strimlad salladskål, rikligt med hackad persilja och en vinägrettsås.",
        image: "20 olika recept/Köttfärs/Chili con carne/chili_con_carne.jpg",
    },
    {
        id:2,
        name: "Färsbiffar med balsamvinägerstekt svamp",
        tags: "kött, svamp",
        text: "Färsbiffar går hem hos de flesta. Här äts dem med ett klassiskt tillbehör så som potatismos, och ett lite mera modernt tillbehör balsamvinägerstekt svamp. Låt färska champinjoner stekas med lök och balsamvinäger, och tillsätt lite persilja innan servering. Ett perfekt tillbehör till biffar helt enkelt. ",
        ingredience: [
            "4 portioner",
            "Mos",
            "900 g mjölig potatis",
            "2 1/2 dl mjölk",
            "1 msk smör",
            "Biffar",
            "1 ägg",
            "1/2 dl mjölk",
            "2 msk ströbröd",
            "1 vitlöksklyfta",
            "ca 500 g nötfärs",
            "1/2 tsk salt",
            "2 krm peppar",
            "1 msk olja",
            "Svamp",
            "250 g färska champinjoner",
            "1 gul lök",
            "1 msk smör eller olja",
            "2 msk balsamvinäger",
            "1 förp färsk persilja (à 20 g)",
            "1/2 förp cosmopolitansallad",
            "För alla",
        ],
        Description: "Gör så här Sätt ugnen på 200°C.\n Mos: Koka upp vatten i en kastrull.\n Skala potatisen och dela den i jämnstora mindre bitar.\n Lägg potatisen i kastrullen och låt småkoka under lock tills den är mjuk.\n Biffar: Blanda ägg och mjölk och rör sedan i ströbrödet.\n Låt svälla någon minut.\n Riv vitlöksklyftan fint.\n Blanda ströbrödsblandningen med färs, vitlök, salt och peppar.\n Forma färsen till 2 biffar per portion.\n Bryn biffarna i oljan i en stekpanna.\n Stek biffarna klart mitt i ugnen ca 10 minuter, eller tills innertemperaturen på biffarna är 70°C.\n Mos: Häll av vattnet och låt potatisen ånga av utan lock.\n Värm mjölken.\n Mosa potatisen med en potatisstöt eller vispa försiktigt sönder den med elvisp.\n Tillsätt den varma mjölken och smaka av med salt och peppar.\n Vispa moset luftigt.\n Svamp: Skär svampen i skivor.\n Skala och skiva löken.\n Fräs svamp och lök i smöret i en stekpanna.\n Häll över vinägern och drag av pannan från plattan.\n Krydda med salt och peppar.\n Hacka persiljan och vänd ner.\n Skär salladen i bitar.\n Servera biffarna med mos, svampfräs och sallad.\n Tips Smaksätt gärna färsen med lite dijonsenap.\n",
        image: "20 olika recept/köttfärs/Färsbiffar med balsamvinägerstekt svamp/farsbiffar_med_balsamvinagerstekt_svamp_.jpg",
    },
    {
        id:3,
        name: "Kebabspett med couscous och currydipp",
        tags: "kebab, kött",
        text: "Kebab till folket! Snabbmat hemma istället för ute. Spetten steks i pannan, couscous kokas i spiskummin och en dipp med smak av curry rörs ihop. Sedan är middagen serverad!",
        ingredience: [
            "4 portioner",
            "2 1/2 dl lätt crème fraiche",
            "2 tsk curry",
            "salt",
            "peppar",
            "2 förp kebabspett (à 360 g)",
            "1/2 msk olja",
            "1 gul lök",
            "1/2 msk olja",
            "1 tsk spiskummin",
            "1/2 grönsaksbuljongtärning",
            "4 port couscous",
            "1 gurka",
            "För alla",

            "Kontrollera noga innehållet i buljongen.",
            "Fri från ägg.",
            "Gör glutenfri: välj glutenfri couscous.",
            "Gör laktosfri: välj laktosfri crème fraiche.",
            "Gör mjölkproteinfri: byt ut crème fraiche till mjölkproteinfri ersättningsprodukt."
        ],
        Description: "Gör så här Blanda crème fraiche och curry och smaka av med salt och peppar.\n Stek spetten ca 10 minuter i oljan i en stekpanna, vänd då och då.\n Skala och hacka löken och fräs i oljan i en kastrull någon minut.\n Tillsätt spiskummin, smulad buljongtärning och vatten enligt anvisning  på couscousförpackningen.\n Låt koka upp och häll i couscousen, ta av från plattan.\n Låt stå och dra ca 5 minuter.\n Skär gurkan i tärningar och vänd ner i currydippen eller servera bredvid.\n Servera dippen med spett och couscous.\n ",
        image: "20 olika recept/köttfärs/Kebabspett med couscous och currydipp/kebabspett_med_couscous_och_currydipp_.jpg",
    },
    {
        id:4,
        name: "Drum sticks chimichurri med rostad potatis",
        tags: "potatis, kyckling",
        text: "Allt på en plåt, enklare än så blir det inte att laga maten. Potatis, morötter och kyckling görs här på samma plåt i ugnen. Kycklingen kryddar du med lite extra med smaksatt kryddig grillsås. Servera med de ugnsrostade grönsakerna och vitlökssås.",
        ingredience: [
            "4 portioner",
            "900 g delikatesspotatis",
            "350 g morötter",
            "1 msk olja",
            "salt",
            "svartpeppar",
            "2 förp kycklingben (à 900 g)",
            "1 förp chimichurri grillsås/marinad (à 200 g)",
            "1 förp kall vitlökssås (à 200 g)",
            "För alla",

            "Fri från gluten. Innehåller laktos, mjölkprotein och ägg."
        ],
        Description: "Gör så här Sätt ugnen på 225°C.\n Blanda potatis, morötter (skär morötterna i mindre bitar om de är stora) och olja i en bunke.\n Krydda med salt och peppar och häll ut på en plåt.\n  Blanda kyckling och grillsås i bunken och lägg kycklingen på potatisen och morötterna.\n  Sätt in plåten mitt i ugnen tills kycklingbenens innertemperatur är 82°C inne vid benet, ca 25 minuter.\n Servera kyckling, potatis och morötter med vitlökssås.\n Tips Gör egen chimichurri.\n",
        image: "20 olika recept/kyckling/Drum sticks chimichurri med rostad potatis/drum_sticks_chimichurri_med_rostad_potatis.jpg",
    },
    {
        id:5,
        name: "Kyckling med krämig spetskål och mandel",
        tags: "kyckling",
        text: "Kyckling och rosmarin passar oerhört bra ihop, det är sedan gammalt. Att spetskål i vin, timjan och grädde skulle vara en lika ljuv kombo kommer du att få upptäcka här. Rätten toppas med hackad mandel.",
        ingredience: [
            "4 portioner",
            "4 port matvete",
            "Spetskål",
            "250 g spetskål",
            "1/2 påse salladslök",
            "1/2 msk olja",
            "2 msk hackad färsk timjan",
            "1 dl vitt matlagningsvin",
            "2 1/2 dl vispgrädde",
            "1 dl riven grana padano",
            "salt",
            "peppar",
            "1 dl skållad hel mandel",
            "Kyckling",
            "600 g snabbfilé av kyckling",
            "1/2 msk olja",
            "1 tsk torkad rosmarin",
            "2 vitlöksklyftor",
            "För alla",

            "Gör glutenfri: byt matvete mot ris eller annat glutenfritt gryn.",
            "Gör laktosfri: välj laktosfri grädde.",
            "Gör mjölkproteinfri: byt ut grädde och ost mot mjölkproteinfria ersättningsprodukter.",
            "Gör äggfri: känsliga äggallergiker bör välja ost utan konserveringsämnet E1105 Lysozym."
        ],
        Description: "Gör så här Koka matvetet enligt anvisningen på förpackningen.\n Spetskål: Ansa och skär kålen i mindre bitar och salladslöken i skivor.\n Fräs kålen i oljan i en kastrull.\n Hacka och rör i timjanen.\n  Sänk värmen och tillsätt vinet och grädden.\n Låt sjuda 5 minuter och rör därefter i osten och salladslöken.\n Smaka av med salt och peppar.\n Kyckling: Stek kycklingen i oljan i en stekpanna ca 8 minuter, vänd då och då, krydda med rosmarin, salt och peppar.\n  Pressa vitlöken i pannan i slutet av stekningen.\n Spetskål: Grovhacka mandeln och strö den över kålen.\n Servera kålen med kyckling och matvete.\n Tips Ringla lite honung över kålen när den steks.\n Mandeln kan rostas i en stekpanna.\n",
        image: "20 olika recept/kyckling/Kyckling med krämig spetskål och mandel/kyckling_med_kramig_spetskal_och_mandel_.jpg",
    },
    {
        id:6,
        name: "Kyckling men ljummen grekisk sallad",
        tags: "kyckling, ",
        text: "En klassisk grekisk sallad med oliver, paprika, fetaost och rödlök kommer här, i kombination med oreganodoftande kyckling och kokt ris. Smaklig spis!",
        ingredience: [
            "4 portioner",
            "Kyckling",
            "4 kycklingfiléer",
            "1/2 msk olja",
            "1 tsk torkad oregano",
            "salt",
            "peppar",
            "Yoghurt",
            "1 vitlöksklyfta",
            "2 dl matyoghurt",
            "Grekisk sallad",
            "250 g tomatmix",
            "1 grön paprika",
            "1 rödlök",
            "150 g fetaost",
            "1 tsk honung",
            "2 msk balsamvinäger",
            "1 msk olivolja",
            "1 msk tomatpuré",
            "1 förp kalamonoliver (à 240 g)",
            "65 g mâchesallad",
            "För alla",
        ],
        Description: "Gör så här Koka riset enligt anvisningen på förpackningen.\n Kyckling: Stek kycklingen i oljan i en stekpanna ca 8 minuter, eller tills den har en innertempereratur på 72°C, vänd då och då.\n  Krydda med oregano, salt och peppar.\n  Yoghurt: Pressa vitlöken i yoghurten och smaka av med salt och peppar.\n Grekisk sallad: Skär tomaterna i halvor.\n Dela, kärna ur och skär paprikan i bitar.\n Skala och skär löken i tunna skivor.\n Smula fetaosten grovt.\n Blanda honung, vinäger, olivolja och tomatpuré i en kastrull och värm.\n Rör i tomaterna och paprikan.\n  Ta av kastrullen från värmen och vänd ner osten och oliverna.\n Servera kycklingen med ljummen grekisk sallad, yoghurt, ris och sallad.\n",
        image: "20 olika recept/kyckling/Kyckling med ljummen grekisk sallad/kyckling_med_ljummen_grekisk_sallad_.jpg",
    },
    {
        id:7,
        name: "Kycklingfilé med krämig vitlökspotatis",
        tags: "kyckling",
        text: "Mmm, potatis i en krämig vitlöks- och persiljesås går sannerligen inte av för hackor. Passar utmärkt till stekt kyckling som smaksätts med timjan, salt och peppar. Smaklig måltid!",
        ingredience:[
            "4 portioner",
            "900 g delikatesspotatis",
            "2 dl crème fraiche",
            "1 vitlöksklyfta",
            "salt",
            "peppar",
            "1/2 förp färsk persilja (à 20 g)",
            "4 snabbfiléer av kyckling",
            "1/2 msk olja",
            "1/2 tsk torkad timjan",
            "250 g körsbärstomater",
            "För alla",

            "Fri från gluten och ägg.",
            "Gör laktosfri: välj laktosfri crème fraiche.",
            "Gör mjölkproteinfri: byt ut crème fraiche till mjölkproteinfri ersättningsprodukt.",
        ],
        Description: "Gör så här Tvätta och koka potatisen.\n Blanda crème fraiche och pressad vitlök.\n Krydda med salt och peppar.\n Hacka persiljan och vänd ner.\n  Stek kycklingen i oljan i en stekpanna ca 10 minuter vänd då och då.\n Krydda med timjan, salt och peppar.\n  Häll av potatisen, dela den och vänd ner i crème fraichen.\n Dela tomaterna och vänd ner.\n  Servera den varma potatissalladen med kycklingen.\n ",
        image: "20 olika recept/kyckling/Kycklingfilé med krämig vitlökspotatis/kycklingfilé_med_kramig_vitlokspotatis.jpg",
    },
    {
        id:8,
        name: "Indisk vegogryta med couscous",
        tags: "vegetariskt, couscous",
        text: "Smakrik och snabb att laga är denna Indieninspirerade gryta som innehåller både vegobitar och blomkål. Perfekt tandoorismak ger den färdiga såsen och till det serveras couscous med vackert röda granatäppelkärnor.",
        ingredience:[
            "4 portioner",
            "Couscous",
            "4 dl vatten",
            "2 tsk spiskummin",
            "2 msk olivolja",
            "2 krm salt",
            "4 dl couscous",
            "1 kruka mynta",
            "1 granatäpple",
            "1 förp tandoorisås (à 350 g)",
            "200 ml kokosmjölk",
            "1 förp opanerade vegobitar (à 300 g)",
            "300 g fryst blomkål",
            "För alla",

            "Kontrollera noga innehållet i tandoorisåsen och vegobitarna.",
            "Fri från ägg. Innehåller laktos och mjölkprotein.",
            "Gör glutenfri: välj glutenfri couscous eller annat glutenfritt gryn.",
        ],
        Description: "Couscous: Koka upp vatten (gärna i en vattenkokare för att spara tid).\n Blanda vatten, spiskummin, olivolja och salt.\n Häll blandningen över couscousen.\n Täck med plastfolie och låt svälla ca 20 minuter.\n Rör om då och då.\n  Koka upp tandoorisåsen med kokosmjölken i en kastrull och låt sjuda 5 minuter.\n  Couscous: Hacka myntan och kärna ur granatäpplet och blanda med couscousen.\n  Häll vegobitar och den frysta blomkålen i såsen i kastrullen och låt sjuda 5 minuter.\n  Servera grytan med couscousen.\n",
        image: "20 olika recept/vegetariskt/Indisk vegogryta med couscous/indisk_vegogryta_med_couscous.jpg",
    },
    {
        id:9,
        name: "Lufsa med rotfrukter och fetaostsallad",
        tags: "rotfrukt, vegetariskt",
        text: "Supergod lufsa med fina rotfrukter som potatis, palsternackor och morötter som ger lufsan fin smak. Servera gärna med en klassisk fetaostsallad med paprika, tomater och rödlök.",
        ingredience:[
            "4 portioner",
            "smör eller margarin (till formen)",
            "2 ägg",
            "6 dl mjölk",
            "1 tsk salt",
            "3 dl vetemjöl",
            "1 kruka oregano",
            "500 g potatis",
            "2 palsternackor (à ca 150 g)",
            "3 morötter (à ca 100 g)",
            "Sallad",
            "400 g romanticatomater",
            "1 rödlök",
            "1 grön paprika",
            "1/2 msk olivolja",
            "1/2 msk rödvinsvinäger",
            "1 förp fetaost (à 150 g)",
            "För alla",
            "Innehåller gluten och ägg.",
            "Gör laktosfri: välj laktosfria produkter av smör, mjölk och ost.",
            "Gör mjölkproteinfri: byt ut smör, mjölk och ost mot mjölkproteinfria ersättningsprodukter.",
        ],
        Description: "Sätt ugnen på 225°C.\n Smörj en ugnsform, ca 20x30 cm, med matfettet (för 4 port).\n Vispa ihop ägg, 1 1/2 dl av mjölken och salt (för 4 port).\n Tillsätt vetemjölet och vispa till en slät smet.\n Vispa ner resten av mjölken.\n  Grovhacka hälften av oreganon och rör ner den i smeten.\n Tvätta potatis, palsternackor och morötter och riv dem grovt på ett rivjärn.\n Blanda ner rivet i smeten.\n Häll smeten i formen.\n Grädda mitt i ugnen ca 35 minuter eller tills ytan är knaprig och har fått fin färg.\n Sallad: Skär tomaterna i halvor och skala och skiva rödlöken.\n Dela, kärna ur och skär paprikan i bitar.\n Grovhacka resten av oreganon.\n  Blanda tomater, lök, paprika och oregano med olivolja och vinäger.\n Smula fetaosten över salladen.\n Servera lufsan med salladen.\n",
        image: "20 olika recept/vegetariskt/Lufsa med rotfrukter och fetaostsallad/lufsa_med_rotfrukter_och_fetaostsallad.jpg",
    },
    {
        id:10,
        name: "Quinoa tacos",
        tags: "taco",
        text: "Variera dina vegotacos genom att göra färs på quinoa. Fyll tortillas med smak av rödbeta eller morot med smarrig quinoafärs och goda tillbehör. Så enkelt och gott!",
        ingredience:[
            "4 portioner",
            "Tacofärs av quinoa",
            "2 1/2 dl röd quinoa",
            "1/2 grönsaksbuljongtärning",
            "1 msk olja",
            "1 påse taco kryddmix (à 28 g)",
            "Tillbehör",
            "1 förp majskorn (à 150 g)",
            "1 avokado",
            "1 förp körsbärstomater (à 250 g)",
            "1 knippe rädisor (à ca 300 g)",
            "1/2 galia- eller honungsmelon",
            "1 förp medium tortillabröd (gärna med smak av rödbeta eller morot)",
            "150 g blandad sallad",
            "2 dl gräddfil",
            "1 förp dippsås (gärna nacho ostdipp) à 250 g",
            "1 burk medium salsa (gärna ananassalsa) à 230 g",
            "För alla",
            "Kontrollera noga innehållet i buljongen, kryddmixen och ostdippen.",
            "Fri från ägg. Innehåller laktos och mjölkprotein.",
            "Gör glutenfri: välj glutenfritt tortillabröd.",
        ],
        Description: "Quinoa: Koka quinoa enligt anvisningen på förpackning med buljongtärningen. Sätt ugnen på 225°C. Rör ner oljan i quinoan och bred ut på en plåt. Rosta quinoan mitt i ugnen ca 15 minuter Rör om en gång under tiden. Ta ut plåten och rör i tacokryddan. Tillbehör: Häll av majsen. Dela, kärna ur och gröp ur avokadon. Skär den i tärningar. Skär tomaterna i skivor och ansa och skär rädisorna i skivor.  Skär melonen i bitar.  Servera tortillabröden med grönsakerna, övriga tillbehör och quinoan. Tips Avokadon kan blandas med lite hackad chili.",
        image: "20 olika recept/vegetariskt/Quinoa tacos/quinoa_tacos.jpg",
    },
    {
        id:11,
        name: "Ugnsratatouille med linser, zucchini, tomatsås och vitost",
        tags: "zucchini, vegetariskt",
        text: "Njut av en god ratatouille som du gör i ugnen, det ger en mustigare och smakrikare grönsaksröra och det är dessutom enkelt att laga, då den sköter sig själv i ugnen. Toppa med krämig vitost och lite krispig persilja.",
        ingredience:[
            "6 portioner",
            "1 zucchini (à ca 300 g)",
            "1 aubergine (à ca 300 g)",
            "2 rödlökar",
            "2 röda eller gula paprikor",
            "4 tomater",
            "2 förp kokta gröna linser (à 390 g)",
            "390 g pastasås basilika",
            "2 vitlöksklyftor",
            "salt",
            "svartpeppar",
            "390 g pastasås chili",
            "2 msk olivolja",
            "2 förp vitost hel bit (10%, à 150 g)",
            "1 kruka persilja",
            "Till servering",
            "bröd",
            "crème fraiche (gärna franska örter)",
            "För alla",
            "Kontrollera noga innehållet i pastasåserna.",
            "Gör glutenfri: välj glutenfritt bröd.",
            "Gör laktosfri: välj laktosfria produkter av ost och crème fraiche.",
            "Gör mjölkproteinfri: byt ut ost och crème fraiche mot mjölkproteinfria ersättningsprodukter.",
        ],
        Description: "Sätt ugnen på 225˚C.\n Ansa och skiva zucchini och aubergine i ca 1 cm tjocka skivor.\n Skala och skär lökarna i tunna skivor.\n  Dela, kärna ur och skär paprikorna i ca 1 cm tjocka skivor.\n Skiva tomaterna.\n Häll linserna i en sil, spola dem i kallt vatten och låt rinna av.\n Blanda linserna och pastasåsen med basilikasmak.\n Pressa i vitlöken.\n Smaksätt med salt och peppar.\n Lägg linsblandningen i botten på en långpanna.\n Varva alla skivade grönsaker på linsblandningen.\n Krydda grönsakerna med salt och peppar.\n  Ringla över pastasåsen med chilismak och olivoljan.\n Sätt in långpannan mitt i ugnen i 25 minuter.\n Ta ut långpannan och smula på osten och sätt in mitt i ugnen ca 10 minuter.\n Toppa plåten med persilja.\n Till servering: Servera ugnsratatouillen med bröd och crème fraiche.\n",
        image: "",
    },
    {
        id:12,
        name: "Klassiska köttbullar",
        tags: "köttbullar, ",
        text: "Svensk klassiker nummer ett! Alla älskar vi köttbullar och de passar till allt från middag till aptitretare! Lätta att variera med kryddor och olika tillbehör. Favoritrecept!",
        ingredience:[
            "4 portioner",
            "1 1/2 dl mjölk",
            "5 msk ströbröd",
            "500 g nöt- eller blandfärs",
            "1/2 gul lök (skalad och riven)",
            "1 ägg",
            "1 tsk salt",
            "1 krm peppar",
            "1/2 tsk socker",
            "smör eller margarin",
            "Serveringsförslag",
            "kokt potatis eller potatismos",
            "lingonsylt",
            "pressgurka",
            "För alla",
            "Innehåller gluten.",
            "Gör laktosfri: välj laktosfria produkter av mjölk och matfett.",
            "Gör mjölkproteinfri: byt ut mjölk och matfett mot mjölkproteinfria ersättningsprodukter.",
            "Gör äggfri: uteslut ägget.",
        ],
        Description: "Blanda mjölk och ströbröd.\n Låt svälla i 10 minuter.\n Tillsätt färs, lök, ägg, salt, peppar och socker i ströbrödsblandningen.\n Arbeta färsen smidig.\nFukta händerna med kallt vatten och forma köttbullar.\n Stek några i taget i matfett, skaka pannan då och då så att köttbullarna rullar runt och håller sig runda.\n Serveringsförslag: Servera köttbullarna med kokt potatis eller Potatismos , Lingonsylt och Pressgurka.\n",
        image: "20 olika recept/köttfärs/Klassiska köttbullar/klassiska_kottbullar.jpg",
    },
    {
        id:13,
        name: "Fiskgryta med saffran och vitt vin",
        tags: "fisk",
        text: "En god fiskgryta går sällan av för hackor. Denna variant innehåller saffran, vin, tomater, sej och dill, för att nämna några smaker. Grytan serveras tillsammans med kokt potatis.",
        ingredience:[
            "4 portioner",
            "900 g potatis",
            "1/2 påse salladslök (à 125 g)",
            "1 rödlök",
            "1 msk olja",
            "1 vitlöksklyfta",
            "1 förp saffran (à 1/2 g)",
            "1 dl vitt matlagningsvin",
            "1 burk hela tomater (à 400 g)",
            "2 1/2 dl fiskbuljong (vatten och tärning eller fond)",
            "2 dl crème fraiche",
            "600 g sej",
            "1 citron",
            "1 förp färsk dill (à 20 g) ",
        ],
        Description: "Skala och koka potatisen i saltat vatten.\n Ansa och skiva salladslöken.\n Skala och skär rödlöken i skivor.\n Fräs rödlöken i oljan i en gryta och pressa i vitlöken.\n Rör i saffran och tillsätt vinet.\n Låt koka upp.\n Rör ner tomater, fiskbuljong och crème fraiche och låt sjuda 3 minuter under omrörning.\n Skär sejen i ca 3 cm stora bitar.\n Lägg fiskbitarna och salladslöken i grytan och sjud under lock ca 5 minuter.\n Skär citronen i klyftor.\n Grovhacka dillen och rör ner i grytan och servera med potatis och citronklyftor.\n",
        image: "20 olika recept/fisk/Fiskgryta med saffran och vitt vin/fiskgryta_med_saffran_och_vitt_vin.jpg",
    },
    {
        id:14,
        name: "Laxburgare med salsa och rostad morot",
        tags: "fisk",
        text: "Snabblagad och smakrik fiskmåltid. Till laxburgarna serveras ugnsbakade potatisklyftor och morötter samt den krispiga kålen pak choi. Servera laxburgarna med frisk och kryddig salsa av mango och ananas.",
        ingredience:[
            "4 portioner",
            "2 bakpotatisar (à ca 300 g)",
            "500 g morötter (gärna små)",
            "1 msk olja",
            "salt",
            "svartpeppar",
            "2 förp laxburgare (à 220 g)",
            "250 g pak choi",
            "1 förp salsasås (gärna med mango, papaya & ananas, à 220 g)",
            "För alla",
            "Kontrollera noga innehållet i burgarna.",
            "Fri från gluten, laktos och mjölkprotein. Innehåller ägg.",
        ],
        Description: "Sätt ugnen på 225°C och sätt in en plåt.\n Skär potatisen i klyftor.\n Skölj, ansa och dela morötterna på längden.\n Blanda potatis, morötter och olja i en bunke och krydda med salt och peppar.\n Häll ut på den varma plåten och rosta i ugnen tills potatisen är mjuk, ca 25 minuter.\n Tillaga burgarna enligt anvisningen på förpackningen.\n Strimla pak choien.\n Servera burgarna med rostad potatis och morot, pak choi och salsa.\n",
        image: "20 olika recept/fisk/Laxburgare med salsa och rostad morot/laxburgare_med_salsa_och_rostad_morot.jpg",
    },
    {
        id:15,
        name: "Laxfilé i ugn med citron",
        tags: "fisk",
        text: "Somrig laxfilé i ugn smaksatt med syrlig citron. Laxfilén tar 25 minuter i ugnen, så du hinner koka perfekt färskpotatis och förbereda övriga tillbehör under tiden. Servera laxen med potatis och en god sås, och gärna en härlig grönsallad!",
        ingredience:[
            "8 portioner",
            "ca 1 1/4 kg färsk laxfilé utan skinn",
            "2 msk olja",
            "1 1/2 tsk salt",
            "1 tsk svartpeppar",
            "1 msk finrivet citronskal ",
        ],
        Description: "Detta recept är en del i Söndagspreppen, ett smart sätt att förbereda flera rätter för att vinna tid senare i veckan.\n Som t ex i  Lax med rostad färskpotatis, rödbetor och picklad gurka eller Paj med rödbetor, getost och lax.\nSätt ugnen på 175°C.\nLägg laxen i en smord ugnsform.\n Ringla över olja och strö över salt, peppar och citronskal.\nStäll in i ugnen ca 25 minuter eller tills laxen har en innertemperatur på 56°C.\n",
        image: "20 olika recept/fisk/laxfilé_i_ugn_med_citron/laxfilé_i_ugn_med_citron.jpg",
    },
    {
        id:16,
        name: "Fetaostbakad lax med gräslökscrème och potatis",
        tags: "fisk",
        text: "Lättlagad och snabb vardagslax som lagar sig själv i ugnen. Servera ugnslaxen med kräm gjord av crème fraiche och färsk gräslök och gärna kokt potatis.",
        ingredience:[
            "4 portioner",
            "900 g potatis (gärna delikatess)",
            "600 g laxfilé i bit",
            "svartpeppar",
            "150 g fetaost",
            "1 förp färsk gräslök (à 20 g)",
            "2 dl lätt crème fraiche",
            "salt",
            "För alla",
            "Fri från gluten och ägg. Innehåller mjölkprotein.",
            "Gör laktosfri: välj laktosfria produkter av fetaost och crème fraiche.",
        ],
        Description: "Sätt ugnen på 225°C.\n Koka potatisen.\n Lägg laxen i en ugnsform, krydda med peppar och smula över fetaosten.\n Sätt in formen mitt i ugnen tills laxens innertemperatur är 56°C, ca 23 minuter.\n Strimla gräslöken, rör ihop den med crème fraichen och smaka av med salt.\n Servera laxen med potatis och gräslökscrème.\n ",
        image: "20 olika recept/fisk/Fetaostbakad lax med gräslökscrème och potatis/fetaostbakad_lax_med_graslokscrème_och_potatis.jpg",
    },
    {
        id:17,
        name: "Blomkål i ugn med laxfilé, curry och smulad vitost",
        tags: "fisk",
        text: "Att laga hela måltiden på samma plåt i ugnen, det blir gott och är enkel matlagning. Blomkålen får härlig smak och gul färg av curryn och liten krämighet av vitosten och lax i ugn smakar alltid gott. Servera gärna med rostad mandel och mangold.",
        ingredience:[
            "4 portioner",
            "1 blomkålshuvud (à ca 800 g)",
            "50 g smör",
            "2 msk olivolja",
            "1 msk curry",
            "salt",
            "peppar",
            "1 förp kokta kikärtor (à 390 g)",
            "4 port laxfilé (à ca 140 g)",
            "150 g vitost hel bit (10%)",
            "1 kruka gräslök",
            "1 dl flagad rostad mandel",
            "2 dl matyoghurt",
            "65 g röd mangold ",
        ],
        Description: "Tina laxen (om fryst används).\n Sätt ugnen på 225˚C.\n Sätt in en långpanna mitt i ugnen.\n  Ansa och skär blomkålshuvudet i ca 4 cm tjocka klyftor.\n Smält smöret tillsammans med oljan i en kastrull och blanda med curryn.\n Lägg blomkålsskivorna i den förvärmda långpannan.\n Pensla med currysmöret och krydda med salt och peppar.\n Sätt in mitt i ugnen i 8 minuter.\n Häll kikärtorna i ett durkslag, spola dem i kallt vatten och låt rinna av.\n Lägg kikärtor och lax på plåten.\n Krydda laxen med salt och peppar.\n Smula osten över blomkålen och kikärtorna.\n  Sätt in plåten mitt i ugnen 8 minuter eller tills laxen har en innertemperatur på 56˚C.\n Skär gräslöken fint.\n Strö gräslök och mandel på plåten och servera med yoghurt och röd mangold.\n Tips Blanda lite mango chutney i yoghurten.\n",
        image: "20 olika recept/fisk/Blomkål i ugn med laxfilé, curry och smulad vitost/blomkal_i_ugn_med_laxfilé__curry_och_smulad_vitost.jpg",
    },

]

function exportlist(){
    return recipes;
}