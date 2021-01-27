## uMockup v1.0

![](https://habrastorage.org/webt/l_/q0/dd/l_q0ddo_hfr10f89swszbnj0ubi.png)

------------



## Краткое знакомство


------------

#### / browsersync.bat
> Файлы для запуска проекта на browsersync. 
Для его корректной работы, пожалуйста установите сначала 
[node.js](https://nodejs.org/en/ "node.js") .
Затем установите [browsersync](https://browsersync.io/ "browsersync").  
Затем установите его для своего проекта `npm install -g browser-sync` . 
Откройте файл в текстовом редакторе,  И вместо  ` "umockup.server"  ` - Укажите адресс своего проекта. Например,  ` mywebsite.local  `

#### / apps 
>  Временно хранящиеся файлы, так же бэкап проекта если это потребуется.

#### /css
- main.css  - Основные таблицы стилей
- fonts.css - Подключение старонних шрифтов
- normalize.css - Обнуление стилей CSS3 + Bootstrap 4 Grid System

#### /fonts
> - Папка со шрифтами

#### /img
>##### favicon - Папка с иконками сайта
- Папка с картинками

#### /js 
>- public.js - Основные скрипты сайта

#### /libs
- jquery - Библиотека jQuery
- html5shiv - Библиотека для корректной работы HTML5 в IE
- respond - Библиотека для корректной работы CSS3 в IE
- modernizr - Библиотека для корректной работы HTML5 (audio,video,canvas и т.д)
- pjax - Плагин позволяющий обновлять вам только заданный участок страницы. Тем самым ускоряет загрузку страницы.
