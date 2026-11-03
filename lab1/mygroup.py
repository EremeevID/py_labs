groupmates = [
    {
        "name": "Михаил",
        "surname": "Буланов",
        "exams": ["Веб-разработка", "Машинное обучение", "Базы данных"],
        "marks": [4, 3, 5]
    },
    {
        "name": "Анна",
        "surname": "Горохова",
        "exams": ["Анализ данных", "Сетевая безопасность", "Криптография"],
        "marks": [4, 4, 4]
    },
    {
        "name": "Дмитрий",
        "surname": "Гусев",
        "exams": ["Облачные технологии", "Веб-разработка", "Базы данных"],
        "marks": [5, 5, 5]
    },
    {
        "name": "Элина",
        "surname": "Караваева",
        "exams": ["Машинное обучение", "Анализ данных", "Облачные технологии"],
        "marks": [4, 5, 4]
    },
    {
        "name": "Данил",
        "surname": "Миронов",
        "exams": ["Сетевая безопасность", "Криптография", "Веб-разработка"],
        "marks": [3, 4, 3]
    },
    {
        "name": "Алёна",
        "surname": "Шевцова",
        "exams": ["Базы данных", "Анализ данных", "Машинное обучение"],
        "marks": [5, 4, 5]
    }
]


def print_students(students):
    print(u"Имя".ljust(15), u"Фамилия".ljust(15), u"Экзамены".ljust(50), u"Оценки".ljust(20))
    for student in students:
        print(student["name"].ljust(15), student["surname"].ljust(15), str(student["exams"]).ljust(50), str(student["marks"]).ljust(20))


def filter_students_by_avg_mark(students, min_avg):
    result = []
    for student in students:
        avg_mark = sum(student["marks"]) / len(student["marks"])
        if avg_mark > min_avg:
            result.append(student)
    return result


if __name__ == "__main__":
    try:
        user_input = input("Введите средний балл для фильтрации: ")
        threshold = float(user_input)
        filtered = filter_students_by_avg_mark(groupmates, threshold)
        if filtered:
            print_students(filtered)
        else:
            print("Студентов со средним баллом выше заданного не найдено.")
    except ValueError:
        print("Ошибка: введено некорректное число.")
