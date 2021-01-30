$(document).ready(function() {

	// Запуск pjax с фрагментами обновления
	$(document).pjax('body');
	$('.greeting').on('pjax:success', function() {
		$.pjax({
			url: window.location.href,
			container: '.greeting',
			fragment: '.greeting > h1'
		});
	});

	// Отправка формы обратной связи
	$("#Форма").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#Форма").trigger("reset");
		});
		return false;
	});

});