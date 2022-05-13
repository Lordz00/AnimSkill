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
                btnUni.style.backgroundColor = 'yellow';
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


    // let radios = document.querySelectorAll('input');
    // let checkboxes = document.querySelectorAll('input');
    // let prof;
    // for (let i = 0; i < checkboxes.length; i++) {
    //     if (checkboxes[i].type === 'checkbox' && checkboxes[i].checked) {
    //         // get value, set checked flag or do whatever you need to
    //         prof = checkboxes[i].value;
    //     }
    // }

    // let testProf = console.log(prof);

    // let primary = document.querySelector('#primary');
    // primary.addEventListener('click', testProf);










    // This one is going to create helmet arrays
    let helmets = new Array();
    // this one is temporary for tests

    // create new helmet entry
    function addHelmets() {
        let nHelmets = helmets.length + 1;
        helmets.push('itm' + nHelmets);

        // draw new helmet entry
        const drawHelmets = () => {
            ctx.fillStyle = itmColor;
            ctx.fillRect(nHelmets * 32, 0, 32, 32);
        }

        drawHelmets();
    };

    // remove helmet entry
    function removeHelmets() {
        let nHelmets = helmets.length;
        ctx.clearRect(nHelmets * 32, 0, 32, 32)
        helmets.pop();
    }



    // adding and removing helmets
    const btnAddHelmets = document.querySelector('#addHelm-btn');
    btnAddHelmets.addEventListener('click', addHelmets);
    const btnRemHelmets = document.querySelector('#remHelm-btn');
    btnRemHelmets.addEventListener('click', removeHelmets);



    // setting rarirty
    // const rareZwy = document.querySelector('#iRareZwy');
    // rareZwy.addEventListener = ('check', )

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




// OLD UNUSED CODE




// // BTN DRAW FUNCTIONS
// const drawUni = () => {
//     ctx.fillStyle = 'yellow';
//     ctx.fillRect(32, 0, 32, 32);
// }

// let btnUni = document.querySelector('#Unikat');
// btnUni.addEventListener('click', drawUni)

// // works, don't use now




// function createItem(typ, rare, prof, att) {



//     let item = Object.create({
//         type: typ,
//         rarity: rare,
//         profession: prof,
//         attribute: att,
//     });

//     console.log(item);
// }


// let itemType = document.querySelector('#iType');
// function itemRare (rare) {
//     if(document.getElementById('#iRareZwy').checked) {
//         console.log('RARE: Zwykły');
//     } else if(document.getElementById('#iRareUni').checked) {
//         console.log('RARE: Unikat');
//     } else if(document.getElementById('#iRareHer').checked) {
//         console.log('RARE: Heroik');
//     } else if(document.getElementById('#iRareLeg').checked) {
//         console.log('RARE: Legenda');
//     } else {
//         console.log('error');
//     }
// }

// itemRare();
// let profesja
// // Add event listener on keypress
// document.addEventListener('keypress', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
// }, false);