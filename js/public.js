$(document).ready(function() {

	// Запуск pjax с фрагментами обновления
	$(document).pjax('body');
	$('.umockup').on('pjax:success', function() {
		$.pjax({
			url: window.location.href,
			container: '.umockup',
			fragment: '.umockup > *'
		});
	});

	// Отправка формы обратной связи
	$("button").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("#Форма").trigger("reset");
		});
		return false;
	});

});
