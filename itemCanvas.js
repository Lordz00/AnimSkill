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
    let itmYell = 'yellow';
    let itmBlue = 'blue';
    let itmRed = 'red';
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
    }

    const checkRare = () => {
        console.log(rare);
        console.log(itmColor);
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
        let war = false;
        let pal = false;
        let hun = false;
        let bla = false;
        let tra = false;
        let mag = false;
        let all = true;
        warSwitch.style.backgroundColor = '#0d6efd';
        palSwitch.style.backgroundColor = '#0d6efd';
        hunSwitch.style.backgroundColor = '#0d6efd';
        blaSwitch.style.backgroundColor = '#0d6efd';
        traSwitch.style.backgroundColor = '#0d6efd';
        magSwitch.style.backgroundColor = '#0d6efd';

    }


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





    // prof events
    warSwitch.addEventListener('click', togWar);
    palSwitch.addEventListener('click', togPal);
    hunSwitch.addEventListener('click', togHun);
    blaSwitch.addEventListener('click', togBla);
    traSwitch.addEventListener('click', togTra);
    magSwitch.addEventListener('click', togMag);
    allSwitch.addEventListener('click', togAll);
    // att events
    toxSwitch.addEventListener('click', togTox);
    grSwitch.addEventListener('click', togGr);
    healSwitch.addEventListener('click', togHeal);
    fireSwitch.addEventListener('click', togFire);
    lightSwitch.addEventListener('click', togLight);
    coldSwitch.addEventListener('click', togCold);
    // tests
    const testProfession = () => {
        console.log(`war: ${war}`);
        console.log(`pal: ${pal}`);
        console.log(`hun: ${hun}`);
        console.log(`bla: ${bla}`);
        console.log(`tra: ${tra}`);
        console.log(`mag: ${mag}`);
        console.log(`all: ${all}`);

    }

    let testProf = document.querySelector('#testProf');
    testProf.addEventListener('click', testProfession);



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
    function drawDesc () {
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

                ctx.drawImage(iconTile, 32 * 2, 32, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
            }
        }
        const drawTra = () => {
            if (tra == true) {

                ctx.drawImage(iconTile, 32 * 3, 32, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
            }
        }
        const drawMag = () => {
            if (mag == true) {

                ctx.drawImage(iconTile, 32 * 3, 0, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
            }
        }
        const drawTox = () => {
            if (tox == true) {

                ctx.drawImage(iconTile, 32, 32 * 3, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
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


    //DRAWING TEST
    let testBtn = document.querySelector('#primary')
    let testBtnSecond = document.querySelector('#secondary')
    const drawTest = () => {
        varRow = 5;
        itmHeight = 10;
        ctx.drawImage(iconTile, 32*3, 32*3, 32, 32, varRow * 32, itmHeight * 32, 32, 32);
        
    }
    const drawTestDesc = () => {
        varRow = 3;
        itmHeight = 11;
        drawDesc();
        
    }
    testBtn.addEventListener('click', drawTest);
    testBtnSecond.addEventListener('click', drawTestDesc);








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



    // NECKLACES
    let necklaces = new Array();

    // create new necklace entry
    function addNecklaces() {
        let nNecklaces = necklaces.length + 1;
        necklaces.push('itm' + nNecklaces);

        // draw new helmet entry
        const drawNecklaces = () => {
            ctx.fillStyle = itmColor;
            varRow = nNecklaces;
            itmHeight = 1;
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



    // BLUEPRINT
    let rings = new Array();

    // create new necklace entry
    function addRings() {
        let nRings = rings.length + 1;
        rings.push('itm' + nRings);

        // draw new helmet entry
        const drawRings = () => {
            ctx.fillStyle = itmColor;
            varRow = nRings;
            itmHeight = 2;
            ctx.fillRect(nRings * 32, itmHeight * 32, 32, 32);
            drawDesc();

        }

        drawRings();
    };

    // remove blueprint entry
    function removeRings() {
        let nRings = rings.length;

        if (nRings > 0) {
            ctx.clearRect(nRings * 32, itmHeight * 32, 32, 32)
        } else {
            console.log('przestań');
        }
        rings.pop();
    }



















    // adding and removing helmets
    const btnAddHelmets = document.querySelector('#addHelm-btn');
    btnAddHelmets.addEventListener('click', addHelmets);
    const btnRemHelmets = document.querySelector('#remHelm-btn');
    btnRemHelmets.addEventListener('click', removeHelmets);
    // adding and removing necklaces
    const btnAddNecklaces = document.querySelector('#addNeck-btn');
    btnAddNecklaces.addEventListener('click', addNecklaces);
    const btnRemNecklaces = document.querySelector('#remNeck-btn');
    btnRemNecklaces.addEventListener('click', removeNecklaces);
    // adding and removing rings
    const btnAddRings = document.querySelector('#addRing-btn');
    btnAddRings.addEventListener('click', addRings);
    const btnRemRings = document.querySelector('#remRing-btn');
    btnRemRings.addEventListener('click', removeRings);



    // setting rarirty
    // const rareZwy = document.querySelector('#iRareZwy');

    const testingRare = document.querySelector('#testRare');
    testingRare.addEventListener('click', checkRare);


    let btnZwy = document.querySelector('#iRareZwy');
    btnZwy.addEventListener('click', setItemZwy);
    let btnUni = document.querySelector('#iRareUni');
    btnUni.addEventListener('click', setItemUni);
    let btnHer = document.querySelector('#iRareHer');
    btnHer.addEventListener('click', setItemHer);
    let btnLeg = document.querySelector('#iRareLeg');
    btnLeg.addEventListener('click', setItemLeg);



}