<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Простейший поисковик на JavaScript</title>
</head>
<body>
    <div id="container">
        <input type="text" id="search-query" placeholder="Введите запрос...">
        <button id="search-button">Найти</button>
        <div id="results-container"></div>
    </div>

    <script>
        // Функция для поиска результатов
        function search() {
            let query = document.getElementById("search-query").value;
            if (query === "") {
                alert("Введите запрос!");
                return;
            }

            // Здесь идет ваш код для выполнения поиска (здесь просто выводим результаты в консоль)
            console.log("Выполняется поиск по запросу " + query);
        }

        // Привязываем обработчик события нажатия на кнопку поиска
        document.getElementById("search-button").addEventListener("click", search);
    </script>
//Поиски могут не заработать из-за простоты кода
