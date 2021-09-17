[![HTML Version](https://img.shields.io/badge/HTML5-f06529)]()
[![CSS3 Version](https://img.shields.io/badge/CSS3-2965f1)]()
[![Javascript Version](https://img.shields.io/badge/JS-f0db4f)]()
[![SCSS Version](https://img.shields.io/badge/SCSS-ff7518)]()
[![Node Version](https://img.shields.io/badge/Node-16.4.2-blue)]()
[![Vue Version](https://img.shields.io/badge/Vue.js-3-CC2336)]()
[![VueRouter Version](https://img.shields.io/badge/Vue-Router-CC2336)]()
[![Vuex Version](https://img.shields.io/badge/Vuex-CC2336)]()
---

# Test

### Инструкция запуска проекта
```
Версия node: 16.4.2;
Запускаем npm install в папке проекта;
Запускаем vue (npm run serve) и открываем проект;
Переходим на вкладку Users.

```
### Описание задачи

```
Необходимо реализовать интерфейс поиска пользователей.
Данные по пользователям берем с https://api.github.com/search/users?q={имя пользователя} 
(документация https://developer.github.com/v3/search/#search-users)

Требования:
- Поиск: по логину;
- Сортировка: по кол-ву репозиториев (возрастанию/убыванию);
- Использовать Vue.js;
- Подгрузка списка при скролле либо пагинация;
- При клике на элемент - открываются подробности (как и какие на усмотрение разработчика).

Дополнительно:
- Для работы с данными использовать Vuex;
- Для роутинга - VueRouter.

```