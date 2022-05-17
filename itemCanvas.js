// loads JS
window.onload = function () {

    // creates canvas
    const canvas = document.querySelector('#myCanvas');
    const ctx = canvas.getContext('2d');

    // drawImage(img, dx, dy)
    // drawImage(img, dx, dy, dw, dh)
    // drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
    // drawImage(img, startX, startY, StartWidth, StartHeight, )

    // BASIC IMAGE for the CANVAS
    let iconTile = new Image();
    iconTile.src = 'grid-icons.png';

    iconTile.onload = function () {

        ctx.drawImage(iconTile, 0, 0, 32, 512, 0, 0, 32, 512);
    }


    // RARITY of the ITEM
    let rare = 'zwy'; //default
    let itmGrey = 'grey';
    let itmYell = '#bdbd03';
    let itmBlue = '#1a5fdf';
    let itmRed = '#a0032a';
    let itmColor = itmGrey;

    //  set item color
    const setItemZwy = () => {
        itmColor = itmGrey;

        let btnZwy = document.querySelector('#iRareZwy');
        let btnUni = document.querySelector('#iRareUni');
        let btnHer = document.querySelector('#iRareHer');
        let btnLeg = document.querySelector('#iRareLeg');
        btnZwy.style.backgroundColor = 'grey';
        btnUni.style.backgroundColor = 'DarkSlateGrey';
        btnHer.style.backgroundColor = 'DarkSlateGrey';
        btnLeg.style.backgroundColor = 'DarkSlateGrey';

    }
    const setItemUni = () => {
        itmColor = itmYell;

        let btnZwy = document.querySelector('#iRareZwy');
        let btnUni = document.querySelector('#iRareUni');
        let btnHer = document.querySelector('#iRareHer');
        let btnLeg = document.querySelector('#iRareLeg');
        btnZwy.style.backgroundColor = 'DarkSlateGrey';
        btnUni.style.backgroundColor = '#a5a504';
        btnHer.style.backgroundColor = 'DarkSlateGrey';
        btnLeg.style.backgroundColor = 'DarkSlateGrey';
    }
    const setItemHer = () => {
        itmColor = itmBlue;

        let btnZwy = document.querySelector('#iRareZwy');
        let btnUni = document.querySelector('#iRareUni');
        let btnHer = document.querySelector('#iRareHer');
        let btnLeg = document.querySelector('#iRareLeg');
        btnZwy.style.backgroundColor = 'DarkSlateGrey';
        btnUni.style.backgroundColor = 'DarkSlateGrey';
        btnHer.style.backgroundColor = 'blue';
        btnLeg.style.backgroundColor = 'DarkSlateGrey';
    }
    const setItemLeg = () => {
        itmColor = itmRed;

        let btnZwy = document.querySelector('#iRareZwy');
        let btnUni = document.querySelector('#iRareUni');
        let btnHer = document.querySelector('#iRareHer');
        let btnLeg = document.querySelector('#iRareLeg');
        btnZwy.style.backgroundColor = 'DarkSlateGrey';
        btnUni.style.backgroundColor = 'DarkSlateGrey';
        btnHer.style.backgroundColor = 'DarkSlateGrey';
        btnLeg.style.backgroundColor = 'red';

        console.log('coś działa');
    }


    // ITEM FEATURES
    // professions
    let war = false;
    let pal = false;
    let hun = false;
    let bla = false;
    let tra = false;
    let mag = false;
    let all = true;
    // attributes
    let tox = false;
    let gr = false;
    let heal = false;
    let fire = false;
    let light = false;
    let cold = false;
    // profession: w, p, h, b, t, m
    // attributes: tox, gr, heal, fire, light, cold

    // switch buttons prof
    function togWar() {
        if (war == false) {
            war = true;
            warSwitch.style.backgroundColor = 'DarkSlateGrey';
        } else {
            war = false;
            warSwitch.style.backgroundColor = '#0d6efd';

        }
        all = false;
    }

    function togPal() {
        if (pal == false) {
            pal = true;
            palSwitch.style.backgroundColor = 'DarkSlateGrey';
        } else {
            pal = false;
            palSwitch.style.backgroundColor = '#0d6efd';

        }
        all = false;
    }

    function togHun() {
        if (hun == false) {
            hun = true;
            hunSwitch.style.backgroundColor = 'DarkSlateGrey';
        } else {
            hun = false;
            hunSwitch.style.backgroundColor = '#0d6efd';

        }
        all = false;
    }

    function togBla() {
        if (bla == false) {
            bla = true;
            blaSwitch.style.backgroundColor = 'DarkSlateGrey';
        } else {
            bla = false;
            blaSwitch.style.backgroundColor = '#0d6efd';

        }
        all = false;

    }

    function togTra() {
        if (tra == false) {
            tra = true;
            traSwitch.style.backgroundColor = 'DarkSlateGrey';
        } else {
            tra = false;
            traSwitch.style.backgroundColor = '#0d6efd';

        }
        all = false;

    }

    function togMag() {
        if (mag == false) {
            mag = true;
            magSwitch.style.backgroundColor = 'DarkSlateGrey';
        } else {
            mag = false;
            magSwitch.style.backgroundColor = '#0d6efd';

        }
        all = false;

    }

    function togAll() {
        war = false;
        pal = false;
        hun = false;
        bla = false;
        tra = false;
        mag = false;
        all = true;
        warSwitch.style.backgroundColor = '#0d6efd';
        palSwitch.style.backgroundColor = '#0d6efd';
        hunSwitch.style.backgroundColor = '#0d6efd';
        blaSwitch.style.backgroundColor = '#0d6efd';
        traSwitch.style.backgroundColor = '#0d6efd';
        magSwitch.style.backgroundColor = '#0d6efd';

        console.log(war);
        console.log(pal);
        console.log(hun);
        console.log(bla);
        console.log(tra);
        console.log(mag);
        console.log(all);

    };


    // switch buttons att
    let toxSwitch = document.querySelector('#toxSwitch')
    let grSwitch = document.querySelector('#grSwitch')
    let healSwitch = document.querySelector('#healSwitch')
    let fireSwitch = document.querySelector('#fireSwitch')
    let lightSwitch = document.querySelector('#lightSwitch')
    let coldSwitch = document.querySelector('#coldSwitch')


    function togTox() {
        if (tox == false) {
            tox = true;
            toxSwitch.style.backgroundColor = 'DarkSlateGrey';
        } else {
            tox = false;
            toxSwitch.style.backgroundColor = '#237023';

        }
        gr = false;
        grSwitch.style.backgroundColor = '#8a1739';
        heal = false;
        healSwitch.style.backgroundColor = '#02af2d';
        fire = false;
        fireSwitch.style.backgroundColor = '#d84400';
        light = false;
        lightSwitch.style.backgroundColor = '#a5a504';
        cold = false;
        coldSwitch.style.backgroundColor = '#1c89c9';
    }

    function togGr() {
        if (gr == false) {
            gr = true;
            grSwitch.style.backgroundColor = 'DarkSlateGrey';
        } else {
            gr = false;
            grSwitch.style.backgroundColor = '#8a1739';

        }
        tox = false;
        toxSwitch.style.backgroundColor = '#237023';
        heal = false;
        healSwitch.style.backgroundColor = '#02af2d';
        fire = false;
        fireSwitch.style.backgroundColor = '#d84400';
        light = false;
        lightSwitch.style.backgroundColor = '#a5a504';
        cold = false;
        coldSwitch.style.backgroundColor = '#1c89c9';
    }

    function togHeal() {
        if (heal == false) {
            heal = true;
            healSwitch.style.backgroundColor = 'DarkSlateGrey';
        } else {
            heal = false;
            healSwitch.style.backgroundColor = '#02af2d';

        }
        tox = false;
        toxSwitch.style.backgroundColor = '#237023';
        gr = false;
        grSwitch.style.backgroundColor = '#8a1739';
        fire = false;
        fireSwitch.style.backgroundColor = '#d84400';
        light = false;
        lightSwitch.style.backgroundColor = '#a5a504';
        cold = false;
        coldSwitch.style.backgroundColor = '#1c89c9';
    }

    function togFire() {
        if (fire == false) {
            fire = true;
            fireSwitch.style.backgroundColor = 'DarkSlateGrey';
        } else {
            fire = false;
            fireSwitch.style.backgroundColor = '#d84400';

        }
        tox = false;
        toxSwitch.style.backgroundColor = '#237023';
        gr = false;
        grSwitch.style.backgroundColor = '#8a1739';
        heal = false;
        healSwitch.style.backgroundColor = '#02af2d';
        light = false;
        lightSwitch.style.backgroundColor = '#a5a504';
        cold = false;
        coldSwitch.style.backgroundColor = '#1c89c9';

    }

    function togLight() {
        if (light == false) {
            light = true;
            lightSwitch.style.backgroundColor = 'DarkSlateGrey';
        } else {
            light = false;
            lightSwitch.style.backgroundColor = '#a5a504';

        }
        tox = false;
        toxSwitch.style.backgroundColor = '#237023';
        gr = false;
        grSwitch.style.backgroundColor = '#8a1739';
        heal = false;
        healSwitch.style.backgroundColor = '#02af2d';
        fire = false;
        fireSwitch.style.backgroundColor = '#d84400';
        cold = false;
        coldSwitch.style.backgroundColor = '#1c89c9';

    }

    function togCold() {
        if (cold == false) {
            cold = true;
            coldSwitch.style.backgroundColor = 'DarkSlateGrey';
        } else {
            cold = false;
            coldSwitch.style.backgroundColor = '#1c89c9';

        }
        tox = false;
        toxSwitch.style.backgroundColor = '#237023';
        gr = false;
        grSwitch.style.backgroundColor = '#8a1739';
        heal = false;
        fire = false;
        fireSwitch.style.backgroundColor = '#d84400';
        light = false;
        lightSwitch.style.backgroundColor = '#a5a504';

    }

    function attReset () {
        tox = false;
        toxSwitch.style.backgroundColor = '#237023';
        gr = false;
        grSwitch.style.backgroundColor = '#8a1739';
        heal = false;
        healSwitch.style.backgroundColor = '#02af2d';
        fire = false;
        fireSwitch.style.backgroundColor = '#d84400';
        light = false;
        lightSwitch.style.backgroundColor = '#a5a504';
        cold = false;
        coldSwitch.style.backgroundColor = '#1c89c9';
    }



    // prof events
    warSwitch.addEventListener('click', togWar);
    palSwitch.addEventListener('click', togPal);
    hunSwitch.addEventListener('click', togHun);
    blaSwitch.addEventListener('click', togBla);
    traSwitch.addEventListener('click', togTra);
    magSwitch.addEventListener('click', togMag);
    allSwitch.addEventListener('click', togAll);

    // key shortcut
    document.addEventListener('keydown', (event) => {
         
        const keyPress = event.key;

        if (keyPress === 'w') {
            togWar();
        } else if (keyPress === 'p') {
            togPal();
            
        } else if (keyPress === 'h') {
            togHun();
            
        } else if (keyPress === 'b') {
            togBla();
            
        } else if (keyPress === 't') {
            togTra();
            
        } else if (keyPress === 'm') {
            togMag();
            
        } else {
            return;
        }
    }, false);





    // att events
    toxSwitch.addEventListener('click', togTox);
    grSwitch.addEventListener('click', togGr);
    healSwitch.addEventListener('click', togHeal);
    fireSwitch.addEventListener('click', togFire);
    lightSwitch.addEventListener('click', togLight);
    coldSwitch.addEventListener('click', togCold);


        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === 'j') {
                togTox();
            } else if (keyPress === 'k') {
                togGr();
                
            } else if (keyPress === 'l') {
                togHeal();
                
            } else if (keyPress === ',') {
                togFire();
                
            } else if (keyPress === '.') {
                togLight();
                
            } else if (keyPress === '/') {
                togCold();
                
            } else {
                return;
            }
        }, false);

    // TABLE SIZES and NOTES
    // itmHeight1 = 0
    // itmHeight2 = 32 * 1
    // itmHeight3 = 32 * 2
    // itmHeight4 = 32 * 3
    // itmHeight5 = 32 * 4
    // itmHeight6 = 32 * 5
    // itmHeight7 = 32 * 6
    // itmHeight8 = 32 * 7
    // itmHeight9 = 32 * 8
    // itmHeight10 = 32 * 9
    // itmHeight11 = 32 * 10
    // itmHeight12 = 32 * 11
    // itmHeight13 = 32 * 12
    // itmHeight14 = 32 * 13
    // itmHeight15 = 32 * 14
    // itmHeight16 = 32 * 15
    //  PROFS
    // W        ctx.drawImage(iconTile, 32, 0, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
    // P        ctx.drawImage(iconTile, 32, 32, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
    // H        ctx.drawImage(iconTile, 32*2, 0, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
    // B        ctx.drawImage(iconTile, 32*2, 32, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
    // T        ctx.drawImage(iconTile, 32*3, 32, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
    // M        ctx.drawImage(iconTile, 32*3, 0, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
    //  ATTS
    // tox      ctx.drawImage(iconTile, 32, 32*3, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
    // gr       ctx.drawImage(iconTile, 32*2, 32*2, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
    // heal     ctx.drawImage(iconTile, 32*3, 32*2, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
    // fire     ctx.drawImage(iconTile, 32, 32*4, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
    // light    ctx.drawImage(iconTile, 32*2, 32*3, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
    // cold     ctx.drawImage(iconTile, 32*3, 32*3, 32, 32, varRow * 32, itmHeight * 32, 32, 32);

    // ctx.drawImage(iconTile, 32, 32, 32, 32, nNecklaces * 32, 32, 32, 32);


    // THIS ONE DRAWS ATTRIBUTES
    let varRow;
    let itmHeight;

    function drawDesc() {
        const drawWar = () => {
            if (war == true) {
                ctx.drawImage(iconTile, 32, 0, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
            }
        }
        const drawPal = () => {
            if (pal == true) {

                ctx.drawImage(iconTile, 32, 32, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
            }
        }
        const drawHun = () => {
            if (hun == true) {

                ctx.drawImage(iconTile, 32 * 2, 0, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
            }
        }
        const drawBla = () => {
            if (bla == true) {

                ctx.drawImage(iconTile, 32 * 3, 32, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
            }
        }
        const drawTra = () => {
            if (tra == true) {

                ctx.drawImage(iconTile, 32 * 2, 32, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
            }
        }
        const drawMag = () => {
            if (mag == true) {

                ctx.drawImage(iconTile, 32 * 3, 0, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
            }
        }
        const drawTox = () => {
            if (tox == true) {

                ctx.drawImage(iconTile, 32, 32 * 2, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
            }
        }
        const drawGr = () => {
            if (gr == true) {

                ctx.drawImage(iconTile, 32 * 2, 32 * 2, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
            }
        }
        const drawHeal = () => {
            if (heal == true) {

                ctx.drawImage(iconTile, 32 * 3, 32 * 2, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
            }
        }
        const drawFire = () => {
            if (fire == true) {

                ctx.drawImage(iconTile, 32, 32 * 3, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
            }
        }
        const drawLight = () => {
            if (light == true) {

                ctx.drawImage(iconTile, 32 * 2, 32 * 3, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
            }
        }
        const drawCold = () => {
            if (cold == true) {
                ctx.drawImage(iconTile, 32 * 3, 32 * 3, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
            }
        }
        drawWar();
        drawPal();
        drawHun();
        drawBla();
        drawTra();
        drawMag();
        drawTox();
        drawGr();
        drawHeal();
        drawFire();
        drawLight();
        drawCold();
    }

    // LOCK PROF AND ATTRIBUTES
    function lockAttCloth() {
        tox = false;
        gr = false;
        fire = false;
        light = false;
        cold = false;
    };
    // LOCK MAGIC FOR PHYSICALS
    function lockAttPhysical() {
        fire = false;
        light = false;
        cold = false;
    };

    function lockAttMagic() {
        tox = false;
        gr = false;
    };

    // HELMETS
    function Helmets() {


        // HELMETS
        let helmets = new Array();

        // create new helmet entry
        function addHelmets() {
            let nHelmets = helmets.length + 1;
            helmets.push('itm' + nHelmets);

            // draw new helmet entry
            const drawHelmets = () => {
                ctx.fillStyle = itmColor;
                varRow = nHelmets;
                itmHeight = 0;
                lockAttCloth();
                ctx.fillRect(nHelmets * 32, itmHeight * 32, 32, 32);
                drawDesc();
            }

            drawHelmets();
        };

        // remove helmet entry
        function removeHelmets() {
            itmHeight = 0;
            let nHelmets = helmets.length;
            if (nHelmets > 0) {
                ctx.clearRect(nHelmets * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            helmets.pop();
        }


        // adding and removing helmets
        const btnAddHelmets = document.querySelector('#addHelm-btn');
        btnAddHelmets.addEventListener('click', addHelmets);
        const btnRemHelmets = document.querySelector('#remHelm-btn');
        btnRemHelmets.addEventListener('click', removeHelmets);

        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === '1') {
                addHelmets();
                togAll();
                attReset();
            } else if (keyPress === '!') {
                removeHelmets();
                return;
            }
        }, false);

    }
    Helmets();


    // NECKLACES
    function Necklaces() {

        let necklaces = new Array();

        // create new necklace entry
        function addNecklaces() {
            let nNecklaces = necklaces.length + 1;
            necklaces.push('itm' + nNecklaces);

            // draw new necklace entry
            const drawNecklaces = () => {
                ctx.fillStyle = itmColor;
                varRow = nNecklaces;
                itmHeight = 1;
                lockAttCloth();
                ctx.fillRect(nNecklaces * 32, itmHeight * 32, 32, 32);
                drawDesc();

            }

            drawNecklaces();
        };

        // remove necklace entry
        function removeNecklaces() {
            let nNecklaces = necklaces.length;
            itmHeight = 1;
            if (nNecklaces > 0) {
                ctx.clearRect(nNecklaces * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            necklaces.pop();
        }
        // adding and removing necklaces
        const btnAddNecklaces = document.querySelector('#addNeck-btn');
        btnAddNecklaces.addEventListener('click', addNecklaces);
        const btnRemNecklaces = document.querySelector('#remNeck-btn');
        btnRemNecklaces.addEventListener('click', removeNecklaces);


        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === '2') {
                addNecklaces();
                togAll();
                attReset();
            } else if (keyPress === '@') {
                removeNecklaces();
                return;
            }
        }, false);


    }
    Necklaces();

    // RINGS
    function Rings() {


        let rings = new Array();

        // create new ring entry
        function addRings() {
            let nRings = rings.length + 1;
            rings.push('itm' + nRings);

            // draw new ring entry
            const drawRings = () => {
                ctx.fillStyle = itmColor;
                varRow = nRings;
                itmHeight = 2;
                lockAttCloth();
                ctx.fillRect(nRings * 32, itmHeight * 32, 32, 32);
                drawDesc();

            }

            drawRings();
        };

        // remove ring entry
        function removeRings() {
            let nRings = rings.length;
            itmHeight = 2;

            if (nRings > 0) {
                ctx.clearRect(nRings * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            rings.pop();
        }
        // adding and removing rings
        const btnAddRings = document.querySelector('#addRing-btn');
        btnAddRings.addEventListener('click', addRings);
        const btnRemRings = document.querySelector('#remRing-btn');
        btnRemRings.addEventListener('click', removeRings);



        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === '3') {
                addRings();
                togAll();
                attReset();
            } else if (keyPress === '#') {
                removeRings();
                return;
            }
        }, false);


    }
    Rings();

    // GLOVES
    function Gloves() {


        let gloves = new Array();

        // create new gloves entry
        function addGloves() {
            let nGloves = gloves.length + 1;
            gloves.push('itm' + nGloves);

            // draw new gloves entry
            const drawGloves = () => {
                ctx.fillStyle = itmColor;
                varRow = nGloves;
                itmHeight = 3;
                lockAttCloth();
                ctx.fillRect(nGloves * 32, itmHeight * 32, 32, 32);
                drawDesc();

            }

            drawGloves();
        };

        // remove gloves entry
        function removeGloves() {
            let nGloves = gloves.length;
            itmHeight = 3;

            if (nGloves > 0) {
                ctx.clearRect(nGloves * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            gloves.pop();
        }

        const btnAddGloves = document.querySelector('#addGloves-btn');
        btnAddGloves.addEventListener('click', addGloves);
        const btnRemGloves = document.querySelector('#remGloves-btn');
        btnRemGloves.addEventListener('click', removeGloves);

        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === '4') {
                addGloves();
                togAll();
                attReset();
            } else if (keyPress === '$') {
                removeGloves();
                return;
            }
        }, false);


    }
    Gloves();


    // ARMOR
    function Armor() {


        let armor = new Array();

        // create new armor entry
        function addArmor() {
            let nArmor = armor.length + 1;
            armor.push('itm' + nArmor);

            // draw new armor entry
            const drawArmor = () => {
                ctx.fillStyle = itmColor;
                varRow = nArmor;
                itmHeight = 4;
                lockAttCloth();
                ctx.fillRect(nArmor * 32, itmHeight * 32, 32, 32);
                drawDesc();

            }

            drawArmor();
        };

        // remove armor entry
        function removeArmor() {
            let nArmor = armor.length;
            itmHeight = 4;

            if (nArmor > 0) {
                ctx.clearRect(nArmor * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            armor.pop();
        }

        const btnAddArmor = document.querySelector('#addArmor-btn');
        btnAddArmor.addEventListener('click', addArmor);
        const btnRemArmor = document.querySelector('#remArmor-btn');
        btnRemArmor.addEventListener('click', removeArmor);

        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === '5') {
                addArmor();
                togAll();
                attReset();
            } else if (keyPress === '%') {
                removeArmor();
                return;
            }
        }, false);


    }
    Armor();


    // BOOTS
    function Boots() {


        let boots = new Array();

        // create new boots entry
        function addBoots() {
            let nBoots = boots.length + 1;
            boots.push('itm' + nBoots);

            // draw new boots entry
            const drawBoots = () => {
                ctx.fillStyle = itmColor;
                varRow = nBoots;
                itmHeight = 5;
                ctx.fillRect(nBoots * 32, itmHeight * 32, 32, 32);
                drawDesc();

            }

            drawBoots();
        };

        // remove boots entry
        function removeBoots() {
            let nBoots = boots.length;
            itmHeight = 5;

            if (nBoots > 0) {
                ctx.clearRect(nBoots * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            boots.pop();
        }

        const btnAddBoots = document.querySelector('#addBoots-btn');
        btnAddBoots.addEventListener('click', addBoots);
        const btnRemBoots = document.querySelector('#remBoots-btn');
        btnRemBoots.addEventListener('click', removeBoots);

        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === '6') {
                addBoots();
                togAll();
                attReset();
            } else if (keyPress === '^') {
                removeBoots();
                return;
            }
        }, false);


    }
    Boots();



    // BOWS
    function Bow() {


        let bow = new Array();

        // create new bow entry
        function addBow() {
            let nBow = bow.length + 1;
            bow.push('itm' + nBow);

            // draw new bow entry
            const drawBow = () => {
                ctx.fillStyle = itmColor;
                varRow = nBow;
                itmHeight = 6;
                ctx.fillRect(nBow * 32, itmHeight * 32, 32, 32);
                drawDesc();

            }

            drawBow();
        };

        // remove bow entry
        function removeBow() {
            let nBow = bow.length;
            itmHeight = 6;

            if (nBow > 0) {
                ctx.clearRect(nBow * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            bow.pop();
        }

        const btnAddBow = document.querySelector('#addBow-btn');
        btnAddBow.addEventListener('click', addBow);
        const btnRemBow = document.querySelector('#remBow-btn');
        btnRemBow.addEventListener('click', removeBow);

        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === '7') {
                addBow();
                togAll();
                attReset();
            } else if (keyPress === '&') {
                removeBow();
                return;
            }
        }, false);

    }
    Bow();

    // ARROW
    function Arrow() {


        let arrow = new Array();

        // create new arrow entry
        function addArrow() {
            let nArrow = arrow.length + 1;
            arrow.push('itm' + nArrow);

            // draw new arrow entry
            const drawArrow = () => {
                ctx.fillStyle = itmColor;
                varRow = nArrow;
                itmHeight = 7;
                ctx.fillRect(nArrow * 32, itmHeight * 32, 32, 32);
                drawDesc();

            }

            drawArrow();
        };

        // remove arrow entry
        function removeArrow() {
            let nArrow = arrow.length;
            itmHeight = 7;

            if (nArrow > 0) {
                ctx.clearRect(nArrow * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            arrow.pop();
        }

        const btnAddArrow = document.querySelector('#addArrow-btn');
        btnAddArrow.addEventListener('click', addArrow);
        const btnRemArrow = document.querySelector('#remArrow-btn');
        btnRemArrow.addEventListener('click', removeArrow);

        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === '8') {
                addArrow();
                togAll();
                attReset();
            } else if (keyPress === '*') {
                removeArrow();
                return;
            }
        }, false);

    }
    Arrow();




    // QUIVER
    function Quiver() {


        let quiver = new Array();

        // create new quiver entry
        function addQuiver() {
            let nQuiver = quiver.length + 1;
            quiver.push('itm' + nQuiver);

            // draw new quiver entry
            const drawQuiver = () => {
                ctx.fillStyle = itmColor;
                varRow = nQuiver;
                itmHeight = 8;
                lockAttCloth();
                ctx.fillRect(nQuiver * 32, itmHeight * 32, 32, 32);
                drawDesc();

            }

            drawQuiver();
        };

        // remove quiver entry
        function removeQuiver() {
            let nQuiver = quiver.length;
            itmHeight = 8;

            if (nQuiver > 0) {
                ctx.clearRect(nQuiver * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            quiver.pop();
        }

        const btnAddQuiver = document.querySelector('#addQuiver-btn');
        btnAddQuiver.addEventListener('click', addQuiver);
        const btnRemQuiver = document.querySelector('#remQuiver-btn');
        btnRemQuiver.addEventListener('click', removeQuiver);

        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === '9') {
                addQuiver();
                togAll();
                attReset();
            } else if (keyPress === '(') {
                removeQuiver();
                return;
            }
        }, false);

    }
    Quiver();





    // SABRE
    function Sabre() {


        let sabre = new Array();

        // create new Sabre entry
        function addSabre() {
            let nSabre = sabre.length + 1;
            sabre.push('itm' + nSabre);

            // draw new Sabre entry
            const drawSabre = () => {
                ctx.fillStyle = itmColor;
                varRow = nSabre;
                itmHeight = 9;
                ctx.fillRect(nSabre * 32, itmHeight * 32, 32, 32);
                drawDesc();

            }

            drawSabre();
        };

        // remove Sabre entry
        function removeSabre() {
            let nSabre = sabre.length;
            itmHeight = 9;

            if (nSabre > 0) {
                ctx.clearRect(nSabre * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            sabre.pop();
        }

        const btnAddSabre = document.querySelector('#addSabre-btn');
        btnAddSabre.addEventListener('click', addSabre);
        const btnRemSabre = document.querySelector('#remSabre-btn');
        btnRemSabre.addEventListener('click', removeSabre);

        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === '0') {
                addSabre();
                togAll();
                attReset();
            } else if (keyPress === ')') {
                removeSabre();
                return;
            }
        }, false);

    }
    Sabre();


    // SHIELD
    function Shield() {


        let shield = new Array();

        // create new Shield entry
        function addShield() {
            let nShield = shield.length + 1;
            shield.push('itm' + nShield);

            // draw new Shield entry
            const drawShield = () => {
                ctx.fillStyle = itmColor;
                varRow = nShield;
                itmHeight = 10;
                lockAttCloth();
                ctx.fillRect(nShield * 32, itmHeight * 32, 32, 32);
                drawDesc();

            }

            drawShield();
        };

        // remove Shield entry
        function removeShield() {
            let nShield = shield.length;
            itmHeight = 10;

            if (nShield > 0) {
                ctx.clearRect(nShield * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            shield.pop();
        }

        const btnAddShield = document.querySelector('#addShield-btn');
        btnAddShield.addEventListener('click', addShield);
        const btnRemShield = document.querySelector('#remShield-btn');
        btnRemShield.addEventListener('click', removeShield);

        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === '-') {
                addShield();
                togAll();
                attReset();
            } else if (keyPress === '_') {
                removeShield();
                return;
            }
        }, false);

    }
    Shield();


    // DAGGER
    function Dagger() {


        let dagger = new Array();

        // create new Dagger entry
        function addDagger() {
            let nDagger = dagger.length + 1;
            dagger.push('itm' + nDagger);

            // draw new Dagger entry
            const drawDagger = () => {
                ctx.fillStyle = itmColor;
                varRow = nDagger;
                itmHeight = 11;
                lockAttPhysical();
                ctx.fillRect(nDagger * 32, itmHeight * 32, 32, 32);
                drawDesc();

            }

            drawDagger();
        };

        // remove Dagger entry
        function removeDagger() {
            let nDagger = dagger.length;
            itmHeight = 11;

            if (nDagger > 0) {
                ctx.clearRect(nDagger * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            dagger.pop();
        }

        const btnAddDagger = document.querySelector('#addDagger-btn');
        btnAddDagger.addEventListener('click', addDagger);
        const btnRemDagger = document.querySelector('#remDagger-btn');
        btnRemDagger.addEventListener('click', removeDagger);

        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === '=') {
                addDagger();
                togAll();
                attReset();
            } else if (keyPress === '+') {
                removeDagger();
                return;
            }
        }, false);

    }
    Dagger();


    // WAND
    function Wand() {


        let wand = new Array();

        // create new wand entry
        function addWand() {
            let nWand = wand.length + 1;
            wand.push('itm' + nWand);

            // draw new wand entry
            const drawWand = () => {
                ctx.fillStyle = itmColor;
                varRow = nWand;
                itmHeight = 12;
                lockAttMagic();
                ctx.fillRect(nWand * 32, itmHeight * 32, 32, 32);
                drawDesc();

            }

            drawWand();
        };

        // remove Wand entry
        function removeWand() {
            let nWand = wand.length;
            itmHeight = 12;

            if (nWand > 0) {
                ctx.clearRect(nWand * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            wand.pop();
        }

        const btnaddWand = document.querySelector('#addWand-btn');
        btnaddWand.addEventListener('click', addWand);
        const btnRemWand = document.querySelector('#remWand-btn');
        btnRemWand.addEventListener('click', removeWand);

        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === '[') {
                addWand();
                togAll();
                attReset();
            } else if (keyPress === '{') {
                removeWand();
                return;
            }
        }, false);
    }
    Wand();


    // ORB
    function Orb() {


        let orb = new Array();

        // create new orb entry
        function addOrb() {
            let nOrb = orb.length + 1;
            orb.push('itm' + nOrb);

            // draw new orb entry
            const drawOrb = () => {
                ctx.fillStyle = itmColor;
                varRow = nOrb;
                itmHeight = 13;
                lockAttMagic();
                ctx.fillRect(nOrb * 32, itmHeight * 32, 32, 32);
                drawDesc();

            }

            drawOrb();
        };

        // remove orb entry
        function removeOrb() {
            let nOrb = orb.length;
            itmHeight = 13;

            if (nOrb > 0) {
                ctx.clearRect(nOrb * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            orb.pop();
        }

        const btnaddOrb = document.querySelector('#addOrb-btn');
        btnaddOrb.addEventListener('click', addOrb);
        const btnRemOrb = document.querySelector('#remOrb-btn');
        btnRemOrb.addEventListener('click', removeOrb);

        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === ']') {
                addOrb();
                togAll();
                attReset();
            } else if (keyPress === '}') {
                removeOrb();
                return;
            }
        }, false);
    }
    Orb();


    // Sword
    function Sword() {


        let sword = new Array();

        // create new Sword entry
        function addSword() {
            let nSword = sword.length + 1;
            sword.push('itm' + nSword);

            // draw new Sword entry
            const drawSword = () => {
                ctx.fillStyle = itmColor;
                varRow = nSword;
                itmHeight = 14;
                ctx.fillRect(nSword * 32, itmHeight * 32, 32, 32);
                drawDesc();

            }

            drawSword();
        };

        // remove Sword entry
        function removeSword() {
            let nSword = sword.length;
            itmHeight = 14;

            if (nSword > 0) {
                ctx.clearRect(nSword * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            sword.pop();
        }

        const btnAddSword = document.querySelector('#addSword-btn');
        btnAddSword.addEventListener('click', addSword);
        const btnRemSword = document.querySelector('#remSword-btn');
        btnRemSword.addEventListener('click', removeSword);

        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === ';') {
                addSword();
                togAll();
                attReset();
            } else if (keyPress === ':') {
                removeSword();
                return;
            }
        }, false);
    }
    Sword();



    // Axe
    function Axe() {


        let axe = new Array();

        // create new axe entry
        function addAxe() {
            let nAxe = axe.length + 1;
            axe.push('itm' + nAxe);

            // draw new axe entry
            const drawAxe = () => {
                ctx.fillStyle = itmColor;
                varRow = nAxe;
                itmHeight = 15;
                ctx.fillRect(nAxe * 32, itmHeight * 32, 32, 32);
                drawDesc();

            }

            drawAxe();
        };

        // remove axe entry
        function removeAxe() {
            let nAxe = axe.length;
            itmHeight = 15;

            if (nAxe > 0) {
                ctx.clearRect(nAxe * 32, itmHeight * 32, 32, 32)
            } else {
                console.log('przestań');
            }
            axe.pop();
        }

        const btnAddAxe = document.querySelector('#addAxe-btn');
        btnAddAxe.addEventListener('click', addAxe);
        const btnRemAxe = document.querySelector('#remAxe-btn');
        btnRemAxe.addEventListener('click', removeAxe);

        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === '\'') {
                addAxe();
                togAll();
                attReset();
            } else if (keyPress === '\"') {
                removeAxe();
                return;
            }
        }, false);
    }
    Axe();

    // exporting


    const exportCanvas = () => {




        let imageData = ctx.getImageData(960, 640, 960, 640);

        // R - The color red (from 0-255)
        // G - The color green (from 0-255)
        // B - The color blue (from 0-255)
        // A - The alpha channel (from 0-255; 0 is transparent and 255 is fully visible)

        for (var i = 0; i < imageData.data.length; i += 4) {

            var average = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
            imageData.data[i] = average; // Red
            imageData.data[i + 1] = average; // Green
            imageData.data[i + 2] = average; // Blue
            //imageData.data[i+3] = 50;   // Alpha
        }
        ctx.putImageData(imageData, 960, 640);
        let dataURL = canvas.toDataURL();

        canvas.src = dataURL;

        // Save canvas image as data url ( default: PNG)
    };
    exportCanvas();


    // setting rarirty
    // const rareZwy = document.querySelector('#iRareZwy');


    let btnZwy = document.querySelector('#iRareZwy');
    btnZwy.addEventListener('click', setItemZwy);
    let btnUni = document.querySelector('#iRareUni');
    btnUni.addEventListener('click', setItemUni);
    let btnHer = document.querySelector('#iRareHer');
    btnHer.addEventListener('click', setItemHer);
    let btnLeg = document.querySelector('#iRareLeg');
    btnLeg.addEventListener('click', setItemLeg);

        // key shortcut
        document.addEventListener('keydown', (event) => {
             
            const keyPress = event.key;

            if (keyPress === 'z') {
                setItemZwy();
            } else if (keyPress === 'x') {
                setItemUni();
                
            } else if (keyPress === 'c') {
                setItemHer();
                
            } else if (keyPress === 'v') {
                setItemLeg();
                
            } else {
                return;
            }
        }, false);


    // KEY SHORTCUTS

    // document.addEventListener('keydown', e => {
    //     e.preventDefault();
    //         if (
    //             e.key.toLowerCase === '1'
    //         ) {
    //             alert('jeden')
    //         }
    // });











}