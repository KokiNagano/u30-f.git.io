$("#fakeloader").fakeLoader({
        timeToHide:1200, //アイコンが表示される時間(ミリ秒)
        zIndex:"999",//zIndexの値
        spinner:"spinner1",//ローディングアイコンの種類'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
        bgColor:"#2c3840", //RGBもしくはRGBAの16進数の値
        //imagePath:"yourPath/customizedImage.gif" //オリジナル画像を使用する場合の画像へのパス
        });

$(document).on('click', '.open-options', function(event) {
  event.preventDefault();
  $('#modal-options').iziModal('open');
});

$('#modal-options').iziModal({
  headerColor: '#26A69A', //ヘッダー部分の色
  width: 400, //横幅
  overlayColor: 'rgba(0, 0, 0, 0.5)', //モーダルの背景色
  transitionIn: 'fadeInUp', //表示される時のアニメーション
  transitionOut: 'fadeOutDown' //非表示になる時のアニメーション
});