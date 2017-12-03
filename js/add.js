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

$(document).on('click', '.open-options2', function(event) {
  event.preventDefault();
  $('#modal-options2').iziModal('open');
});
$('#modal-options2').iziModal({
  headerColor: '#26A69A', //ヘッダー部分の色
  width: 400, //横幅
  overlayColor: 'rgba(0, 0, 0, 0.5)', //モーダルの背景色
  transitionIn: 'fadeInUp', //表示される時のアニメーション
  transitionOut: 'fadeOutDown', //非表示になる時のアニメーション
  padding: 20
});

$(document).on('click', '.open-options3', function(event) {
  event.preventDefault();
  $('#modal-options3').iziModal('open');
});
$('#modal-options3').iziModal({
  headerColor: '#26A69A', //ヘッダー部分の色
  width: 400, //横幅
  overlayColor: 'rgba(0, 0, 0, 0.5)', //モーダルの背景色
  transitionIn: 'fadeInUp', //表示される時のアニメーション
  transitionOut: 'fadeOutDown', //非表示になる時のアニメーション
  padding: 20
});