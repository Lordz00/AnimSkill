
    // template
    function template() {


      // template
      let template = new Array();

      // create new template entry
      function templateAdd() {
          let templateNum = template.length + 1;
          template.push('itm' + templateNum);

          // draw new template entry
          const templateDraw = () => {
              ctx.fillStyle = itmColor;
              varRow = templateNum;
              itmHeight = 0;
              lockAttCloth();
              ctx.fillRect(templateNum * 32, itmHeight * 32, 32, 32);
              drawDesc();
          }

          templateDraw();
      };

      // remove template entry
      function templateRem() {
          itmHeight = 0;
          let templateNum = template.length;
          if (templateNum > 0) {
              ctx.clearRect(templateNum * 32, itmHeight * 32, 32, 32)
          } else {
              console.log('stop doing that');
          }
          template.pop();
      }


      // adding and removing template
      const bttemplateNumAdd = document.querySelector('#templateAdd-btn');
      bttemplateNumAdd.addEventListener('click', templateAdd);
      const btnRemtemplate = document.querySelector('#templateRem-btn');
      btnRemtemplate.addEventListener('click', templateRem);

      // key shortcut
      document.addEventListener('keydown', (event) => {
          event.preventDefault();
          const keyPress = event.key;

          if (keyPress === '1') {
              templateAdd();
              togAll();
              attReset();
          } else if (keyPress === '!') {
              removetemplate();
              return;
          }
      }, false);

  }
  template();