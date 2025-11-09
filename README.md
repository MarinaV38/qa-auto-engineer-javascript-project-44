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

[![asciinema](https://asciinema.org/a/PLACEHOLDER_EVEN.svg)](https://asciinema.org/a/PLACEHOLDER_EVEN)

### Демонстрация brain-calc

[![asciinema](https://asciinema.org/a/PLACEHOLDER_CALC.svg)](https://asciinema.org/a/PLACEHOLDER_CALC)

### Демонстрация brain-gcd

[![asciinema](https://asciinema.org/a/PLACEHOLDER_GCD.svg)](https://asciinema.org/a/PLACEHOLDER_GCD)

### Демонстрация brain-progression

[![asciinema](https://asciinema.org/a/PLACEHOLDER_PROGRESSION.svg)](https://asciinema.org/a/PLACEHOLDER_PROGRESSION)

### Демонстрация brain-prime

[![asciinema](https://asciinema.org/a/PLACEHOLDER_PRIME.svg)](https://asciinema.org/a/PLACEHOLDER_PRIME)
