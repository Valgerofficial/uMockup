# uMockup



![](https://i.ibb.co/YQnZkfs/4x.jpg)

#


>  **uMockup** - это готовый фреймворк, для быстрых решений. А точнее, это набор **HTML,CSS,JS,PHP** файлов для быстрого старта вашего проекта. В нем обнулены все стандартные стили. Подключены нужные библиотеки для корректной работы в браузере, таких как **Internet Explorer** и т.д. Ниже имеется описание папок и файлов, что бы вам было понятно.. с чем вы имеете дело. Спасибо! Приятной работы!


## / ._browsersync


> **._browsersync** - это файл конфигурации для плагина Browsersync, для того что бы он заработал, **переименуйте его**,  например **umockup_server.bat**. Данный файл имеет расширение **.bat**, так как является файлом для автоматического запуска сервера.  Внутри данного файла имеется код :
``
start browser-sync start --proxy "umockup.server" --files "php/*.php,css/*.css,js/*.js,html/*.html,*.*"
`` .
> Для запуска вашего сервера, необходимо изменить название **umockup.server** на свое.. к примеру **mywebsite.ru** . Тогда у вас всё объязательно заработает. Так же изночально нужно установить **nodejs** и **browsersync** . 


## / .htaccess


> Это файл конфигурации сервера, в нем всё просто.. написано пару строк для быстрой загрузки и кэширования шрифтов и картинок.. что бы клиент не ждал повторной загрузки. А так же прописаны файлы для страниц ошибок **403, 404, 500** .


## / mail.php


> Это скрипт для отправки писем на почту, скрипт проверен и работает на 100%, если у вас вдруг что-то не получается.. посмотрите настройки своего сервера. Для его корректной работы необходимо добавить JavaScript -

````
	$("Ваш класс").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", // Скрипт в корневой папке
			data: th.serialize()
		}).done(function() {
			alert("Спасибо!");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
````

## / css


| Файл | Описание |
| ------ | ------ |
| **apps.css** | Тут находятся переменные и базовые стили для сайта, анимации.. дополнительные классы конфигурации и т.д |
| **fonts.css** | Шрифты исключительно в формате **woff** и **woff2** так как их поддерживают практически все браузеры за исключением Internet Explorer. |
| **main.css** | Это основной файл стилей в нем прописываются все стили для сайта. |
| **normalize.css** | Это мой собственный файл обнуления стилей CSS3. В данном файле убраны подчеркивание с ссылок, убраны марки на списках, все HTML5 теги прописаны как блочные и т.д. Так же добавлина Bootstrap 5 Grid System на технологии FlexBox. |


## / FONTS

>**Montserrat** - В этой папке находятся подключенные шрифты для сайта.


## / IMG


>**Favicon** - В этой папке находятся иконки для сайта, различных размеров для различных устройств.


## / JS

>**public.js** - В данном файле содержуться основные скрипты сайта, подключение различных библиотек и т.д


## / LIBS

| Файл | Описание |
| ------ | ------ |
| **jQuery** | Библиотека jQuery. |
| **HTML5Shiv** | Библиотека для корректной работы HTML5 в IE. |
| **Respond** |  Библиотека для корректной работы CSS3 в IE. |
| **Modernizr** | Библиотека для корректной работы HTML5 (audio,video,canvas и т.д). |
| **Pjax** | Плагин позволяющий обновлять вам только заданный участок страницы. Тем самым ускоряет загрузку страницы.. |

## Структура страницы



```
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="ru-Ru"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="ru-Ru"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="ru-Ru"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]>
<!--><html lang="ru"><!--<![endif]-->
<head>
	<meta charset="UTF-8">
	<title>Заголовок</title>
	<meta http-equiv="X-UA-Compatible" content="IE-edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="description">
	<meta name="author" content="author">

	<link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png">

	<link rel="stylesheet" href="css/fonts.css">
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/apps.css">
	<link rel="stylesheet" href="css/main.css">

	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queris -->
    <!-- [if lt IE 9]>
    	<script src="libs/html5shiv/es5-shim.min.js"></script>
		<script src="libs/html5shiv/html5shiv.min.js"></script>
		<script src="libs/html5shiv/html5shiv-printshiv.min.js"></script>
		<script src="libs/respond/respond.min.js"></script>
    <![endif]-->
</head>
<body>
	
	<div class="greeting">
		<h1>Давайте начнем!</h1>
	</div>

	<div class="hidden">
		<!-- Скрытый код -->
	</div>
	
	<script src="libs/jquery/jquery.min.js"></script>
	<script src="libs/modernizr/modernizr.min.js"></script>
	<script src="libs/pjax/jquery.pjax.min.js"></script>
	<script src="js/public.js"></script>
</body>
</html>

```
---



#### Спасибо за внимание! Я надеюсь мой фреймворк поможет вам в реализации ваших идей в жизнь. Вы можете сказать мне спасибо!


[ВКонтакте](https://vk.com/valgeroff)  [Инстаграм](https://instagram.com/valgerofficial)  [Беханс](https://www.behance.net/valgerofficial)
