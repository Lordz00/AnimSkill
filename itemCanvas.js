window.onload = function () {



    const canvas = document.querySelector('#myCanvas');
    const ctx = canvas.getContext('2d');





    // let iconTile = new Image();
    // iconTile.src = 'grid-icons.png';


    // iconTile.onload = function () {

    //     ctx.drawImage(iconTile, 0, 0);
    // }





    // drawImage(img, dx, dy)
    // drawImage(img, dx, dy, dw, dh)
    // drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
    // drawImage(img, startX, startY, StartWidth, StartHeight, )

    // BASIC IMAGE
    let iconTile = new Image();
    iconTile.src = 'grid-icons.png';

    iconTile.onload = function () {

        ctx.drawImage(iconTile, 0, 0, 32, 512, 0, 0, 32, 512);
    }


    // BTN DRAW FUNCTIONS
    const drawUni = () => {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(32, 0, 32, 32);
    }

    let btnUni = document.querySelector('#Unikat');
    btnUni.addEventListener('click', drawUni)

    // works, don't use now




    function createItem(typ, rare, prof, att) {



        let item = Object.create({
            type: typ,
            rarity: rare,
            profession: prof,
            attribute: att,
        });

        console.log(item);
    }


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


    let radios = document.querySelectorAll('input');
    let rare;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            rare = radios[i].value;
        }
    }

    console.log(rare);

    let checkboxes = document.querySelectorAll('input');
    let prof;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type === 'checkbox' && checkboxes[i].checked) {
            // get value, set checked flag or do whatever you need to
            prof = checkboxes[i].value;
        }
    }

    let testProf = console.log(prof);

    let primary = document.querySelector('#primary');
    primary.addEventListener('click', testProf);





    let profesja
    // Add event listener on keypress
    document.addEventListener('keypress', (event) => {
        var name = event.key;
        var code = event.code;
        // Alert the key name and key code on keydown
        alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    }, false);

}