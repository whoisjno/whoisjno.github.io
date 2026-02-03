Qualtrics.SurveyEngine.addOnReady(function()
{

    document.getElementById('NextButton').style.display = 'none';
    document.getElementById('NextButton').insertAdjacentHTML('beforebegin', "<input id=\"checkButton\" type=\"button\" value=\"  →  \" title=\"  →  \" data-runtime-disabled=\"runtime.Disabled\" data-runtime-aria-label=\"runtime.ariaLabel\" data-runtime-hide=\"runtime.Hide\" page-id=\"P_1741224405901\" aria-label=\"Next\" style=\"border:none;color:#fff;font-size:18px;padding:8px 20px;border-radius:4px;cursor:pointer;margin:2px;text-align:center;text-decoration:none;-webkit-appearance:none;transition:background .3s;background-color:#007ac0\">");
    document.getElementById('checkButton').onclick = function fullScreen() {
        launchIntoFullscreen(document.documentElement);
        document.getElementById('NextButton').click();
        document.getElementById('checkButton').style.display = 'none'; // Hide checkButton after click

    };

    function launchIntoFullscreen(element) {
          if(element.requestFullscreen) {
            element.requestFullscreen();
          } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
          } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
          }
    }

});