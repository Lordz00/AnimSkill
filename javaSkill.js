// ENEMY


// function blank() {

//   document.getElementById("myImgEnemy").src="blank";

// }

// INNE

// const enemy = document.querySelector('#myImgEnemy')
// const enemyTwo = document.querySelector('#myImgEnemyTwo')
// const self = document.querySelector('#myImgSelf')
// const ally = document.querySelector('#myImgAlly')

const change = (el, source) => {
  el.src = source
}

const reset = () => {
  change(document.querySelector('#myImgEnemy'), "img/null.gif")
  change(document.querySelector('#myImgEnemyTwo'), "img/null.gif")
  change(document.querySelector('#myImgSelf'), "img/null.gif")
  change(document.querySelector('#myImgAlly'), "img/null.gif")
}

// function reset() {

//   document.getElementById("myImgEnemy").src="img/null.gif";
//   document.getElementById("myImgEnemyTwo").src="img/null.gif";
//   document.getElementById("myImgSelf").src="img/null.gif";
//   document.getElementById("myImgAlly").src="img/null.gif";



// }


//WOJOWNIK

const imgChange = (skill) => document.getElementById("myImgEnemy").src=`${skill}`;






function blyskAtak() {

  document.getElementById("myImgEnemy").src="img/woj/blyskawiczny-atak.gif";

}

function niszCios() {

  document.getElementById("myImgEnemy").src="img/woj/niszczycielskiCios.gif";

}

function attTar() {

  document.getElementById("myImgEnemy").src="img/woj/zdruzgotanie.gif";

}


function oglusz() {

  document.getElementById("myImgEnemy").src="img/woj/ogluszenie.gif";

}

function taunt() {

  document.getElementById("myImgSelf").src="img/taunt.gif";

}

function oslTar() {

  document.getElementById("myImgSelf").src="img/woj/oslona-tarcza.gif";

}

function krwioSzal() {

  document.getElementById("myImgSelf").src="img/woj/krwiozerczy-szal.gif";

}

function agrAtt() {

  document.getElementById("myImgEnemy").src="img/woj/agresywny-atak.gif";

}

function szarza() {

  document.getElementById("myImgSelf").src="img/woj/szarza.gif";

}

function eneRegen() {

  document.getElementById("myImgSelf").src="img/univ/energyRegen.gif";

}

function kamSkor() {

  document.getElementById("myImgAlly").src="img/woj/kamienna-skora.gif";

}

function parCio() {

  document.getElementById("myImgEnemy").src="img/woj/paralizujacy-cios.gif";

}

function wamp() {

  document.getElementById("myImgEnemy").src="img/woj/wampiryzm.gif";

}


function okrzBoj() {

  document.getElementById("myImgSelf").src="img/woj/okrzyk-bojowy.gif";

}


function blank() {

  document.getElementById("myImgEnemy").src="blank";

}






//LOWCA
function blyskStrzal() {

    document.getElementById("myImgEnemy").src="img/low/blyskawiczny-strzal.gif";
  
  }


function podwStrzal() {

  document.getElementById("myImgEnemy").src="img/low/podwojny-strzal.gif";

}

function zatStrzal() {

  document.getElementById("myImgEnemy").src="img/low/zatruta-strzala.gif";

}

function wynRan() {

  document.getElementById("myImgEnemy").src="img/low/wyniszczajce-rany.gif";

}


function lekkiNac() {

  document.getElementById("myImgEnemy").src="img/low/lekki-naciag.gif";

}

function orlStrzal() {

  document.getElementById("myImgEnemy").src="img/low/orla-strzala.gif";

}

function strzalStopa() {

  document.getElementById("myImgEnemy").src="img/low/strzal-stopa.gif";

}

function zdraGrot() {

  document.getElementById("myImgEnemy").src="img/low/zdradziecki-grot.gif";

}


function deszczStrzal() {

  document.getElementById("myImgEnemy").src="img/low/deszcz-strzal.gif";
  document.getElementById("myImgEnemyTwo").src="img/low/deszcz-strzal.gif";


}

const mark = () => {
  document.getElementById("myImgEnemy").src="img/low/markBeast.gif";

}

function heal() {

  document.getElementById("myImgAlly").src="img/heal.gif";

}

function restoGreen() {

  document.getElementById("myImgSelf").src="img/univ/restorationGreen.gif";
  document.getElementById("myImgAlly").src="img/univ/restorationGreen.gif";


}

function saBoost() {

  document.getElementById("myImgSelf").src="img/univ/saBoost2.gif";
  document.getElementById("myImgAlly").src="img/univ/saBoost2.gif";


}

// MAG

function fireBall() {

  document.getElementById("myImgEnemy").src="img/mag/kula-ognia.gif";

}

function porazenie() {

  document.getElementById("myImgEnemy").src="img/mag/porazenie.gif";

}

function toxicBullet() {

  document.getElementById("myImgEnemy").src="img/mag/toxicBullet.gif";

}

function smokeBullet() {

  document.getElementById("myImgEnemy").src="img/mag/smokeBullet.gif";

}

function lanPior() {

  document.getElementById("myImgEnemy").src="img/mag/porazenie.gif";
  document.getElementById("myImgEnemyTwo").src="img/mag/porazenie.gif";

}

function lodPoc() {

  document.getElementById("myImgEnemy").src="img/mag/lodowy-pocisk.gif";

}

function fuzZyw() {

  document.getElementById("myImgEnemy").src="img/mag/fuzja-zywiolow.gif";

}


function szadz() {

  document.getElementById("myImgEnemy").src="img/mag/szadz.gif";
  document.getElementById("myImgEnemyTwo").src="img/mag/szadz.gif";


}
function fireWall() {

  document.getElementById("myImgEnemy").src="img/mag/fireWall.gif";
  document.getElementById("myImgEnemyTwo").src="img/mag/fireWall.gif";


}

function manaReg() {

  document.getElementById("myImgSelf").src="img/univ/manaRegen.gif";
  document.getElementById("myImgAlly").src="img/univ/manaRegen.gif";

}


// PALADYN

function fireAtt() {

  document.getElementById("myImgEnemy").src="img/pal/gorace-uderzenie.gif";

}

function lightStrike() {

  document.getElementById("myImgEnemy").src="img/pal/porazajacy-cios.gif";

}

function iceStrike() {

  document.getElementById("myImgEnemy").src="img/pal/pchniecie-mrozu.gif";

}

function gniewBog() {

  document.getElementById("myImgEnemy").src="img/pal/gniew-bogow.gif";

}

function blank() {

  document.getElementById("myImgEnemy").src="blank";

}

// TROPICIEL

function ploStrzal() {

  document.getElementById("myImgEnemy").src="img/trop/plonaca-strzala.gif";

}

function porStrzal() {

  document.getElementById("myImgEnemy").src="img/trop/porazajaca-strzala.gif";

}

function lodStrzal() {

  document.getElementById("myImgEnemy").src="img/trop/lodowa-strzala.gif";

}

function podwStrzal() {

  document.getElementById("myImgEnemy").src="img/trop/podwojny-strzal.gif";

}

function supStrzal() {

  document.getElementById("myImgEnemy").src="img/trop/strzala-z-niespodzianka.gif";

}

function wycStrzal() {

  document.getElementById("myImgEnemy").src="img/trop/wycienczajaca-strzala.gif";

}
function rytZyw() {

  document.getElementById("myImgSelf").src="img/trop/rytual-ochrony.gif";
  document.getElementById("myImgAlly").src="img/trop/rytual-ochrony.gif";

}

function gradStrzal() {

  document.getElementById("myImgEnemy").src="img/trop/grad-strzal.gif";
  document.getElementById("myImgEnemyTwo").src="img/trop/grad-strzal.gif";


}

function blank() {

  document.getElementById("myImgEnemy").src="blank";

}

// TANC
function truPchn() {

  document.getElementById("myImgEnemy").src="img/tanc/trujace-pchniecie.gif";

}

function podUd() {

  document.getElementById("myImgEnemy").src="img/tanc/podstepne-uderzenie.gif";

}

function rozpAta() {

  // document.getElementById("myImgEnemy").src="img/tanc/rozpraszajacy-atak.gif";
  document.getElementById("myImgEnemy").src="img/stun.gif";

}

function rozjusz() {

  document.getElementById("myImgEnemy").src="img/tanc/rozjuszenie.gif";

}

function debuffRed() {

  document.getElementById("myImgEnemy").src="img/univ/debuffRed.gif";

}

function blank() {

  document.getElementById("myImgEnemy").src="blank";

}

// OTHER

function blok() {

  document.getElementById("myImgAlly").src="img/blok.gif";

}

function blank() {

  document.getElementById("myImgEnemy").src="blank";

}

function blank() {

  document.getElementById("myImgEnemy").src="blank";

}

function blank() {

  document.getElementById("myImgEnemy").src="blank";

}


function edit() {

    document.getElementById("myImgSelf").src="img/quma.gif";
  
  }