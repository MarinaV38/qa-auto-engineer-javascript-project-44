### Hexlet tests и качество кода
[![Actions Status](https://github.com/MarinaV38/qa-auto-engineer-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/MarinaV38/qa-auto-engineer-javascript-project-44/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=MarinaV38_qa-auto-engineer-javascript-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=MarinaV38_qa-auto-engineer-javascript-project-44)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=MarinaV38_qa-auto-engineer-javascript-project-44&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=MarinaV38_qa-auto-engineer-javascript-project-44)

### Brain Games на JavaScript

Сборник консольных мини-игр для прокачки логики и навыков работы с Node.js. Каждая игра задаёт три вопроса подряд. Неправильный ответ завершает попытку и показывает корректный результат.

### Используемые технологии

- Node.js + npm — запуск, установка и публикация CLI-пакета.
- ECMAScript Modules, eslint (Stylistic rules) — поддержание единого стиля кода.
- readline-sync — взаимодействие с пользователем через консоль.
- GitHub Actions и SonarCloud — автоматическая проверка и мониторинг качества.

### Установка и запуск

```bash
# Установка игр:
git clone https://github.com/MarinaV38/qa-auto-engineer-javascript-project-44.git
cd qa-auto-engineer-javascript-project-44
make install
sudo npm link

# Запуск игр:
brain-even
brain-calc
brain-gcd
brain-progression
brain-prime
```

### Игры проекта

- `brain-games` — приветствие и знакомство с игроком.
- `brain-even` — определяем, является ли случайное число чётным (правильный ответ: `yes` или `no`). Для локального запуска используйте `make brain-even`.
- `brain-calc` — вычисляем результат случайного выражения с операциями `+`, `-`, `*`. Запуск локально: `make brain-calc`.
- `brain-gcd` — ищем наибольший общий делитель двух чисел. Запуск локально: `make brain-gcd`.
- `brain-progression` — восстанавливаем пропущенный элемент случайной арифметической прогрессии. Запуск локально: `make brain-progression`.
- `brain-prime` — определяем, является ли случайное число простым. Запуск локально: `make brain-prime`.

### Демонстрация brain-even

[![asciicast](https://asciinema.org/a/60E43E7kikY1d7w5AkpSxh8yN.svg)](https://asciinema.org/a/60E43E7kikY1d7w5AkpSxh8yN)

### Демонстрация brain-calc

[![asciicast](https://asciinema.org/a/0u5Nor2eNKnIgwLkEQ4ceY6RV.svg)](https://asciinema.org/a/0u5Nor2eNKnIgwLkEQ4ceY6RV)

### Демонстрация brain-gcd

[![asciicast](https://asciinema.org/a/rbu3ArBRPPUUeso7F2G5dahqe.svg)](https://asciinema.org/a/rbu3ArBRPPUUeso7F2G5dahqe)

### Демонстрация brain-progression

[![asciicast](https://asciinema.org/a/PmL8pp5YB9JPCCqMA5OCdOOkc.svg)](https://asciinema.org/a/PmL8pp5YB9JPCCqMA5OCdOOkc)

### Демонстрация brain-prime

[![asciicast](https://asciinema.org/a/zIGcBhKjUOEwyD0Wd8Wb8H5zn.svg)](https://asciinema.org/a/zIGcBhKjUOEwyD0Wd8Wb8H5zn)
