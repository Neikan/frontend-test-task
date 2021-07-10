# Тестовое задание на позицию фронтенд разработчика

## Цель

Тестовое задание заключается в создании SPA для использования следующего API https://rickandmortyapi.com/documentation/#character

## Требования

### Технические

- Использование TypeScript и React обязательно
- Можно использовать любое открытое ПО (библиотеки, наборы компонентов)
- Желательно использовать MobX и не стоит использовать Redux

### Функциональные

- Пагинированный вывод списка `Character` (имя, изображение, пол, статус)
- Возможность добавления персонажа в избранное. Список должен сохраняться в браузере и синхронизироваться между вкладками
- Поиск по имени, фильтр по полу и статусу. Поисковый запрос должен модифицировать URL и применяться после перезагрузки страницы
- Программный компонент пагинации/фильтрации должен быть универсальным, т.е. должна быть возможность легко его переиспользовать для других сущностей (`Location`, `Episode`)
