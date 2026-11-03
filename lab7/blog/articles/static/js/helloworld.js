var groupmates = [
    {
        "name": "Михаил",
        "surname": "Буланов",
        "group": "БСТ2353",
        "marks": [5, 5, 4, 5]
    },
    {
        "name": "Анна",
        "surname": "Горохова",
        "group": "БСТ2353",
        "marks": [5, 5, 5, 5]
    },
    {
        "name": "Дмитрий",
        "surname": "Гусев",
        "group": "БСТ2353",
        "marks": [4, 4, 3, 4]
    },
    {
        "name": "Элина",
        "surname": "Караваева",
        "group": "БСТ2353",
        "marks": [5, 4, 5, 5]
    },
    {
        "name": "Данил",
        "surname": "Миронов",
        "group": "БСТ2353",
        "marks": [3, 4, 3, 4]
    },
    {
        "name": "Алёна",
        "surname": "Шевцова",
        "group": "БСТ2353",
        "marks": [5, 5, 5, 4]
    },
    {
        "name": "Кирилл",
        "surname": "Смирнов",
        "group": "БАП2301",
        "marks": [4, 5, 4, 4]
    },
    {
        "name": "Иван",
        "surname": "Петров",
        "group": "БВТ2302",
        "marks": [3, 3, 4, 3]
    }
];

console.log(groupmates);

var rpad = function(str, length) {
    str = str.toString();
    while (str.length < length) {
        str = str + ' ';
    }
    return str;
};

var printStudents = function(students) {
    console.log(
        rpad("Имя", 15),
        rpad("Фамилия", 15),
        rpad("Группа", 10),
        rpad("Оценки", 20)
    );
    for (var i = 0; i <= students.length - 1; i++) {
        console.log(
            rpad(students[i]['name'], 15),
            rpad(students[i]['surname'], 15),
            rpad(students[i]['group'], 10),
            rpad(students[i]['marks'], 20)
        );
    }
    console.log('\n');
};

printStudents(groupmates);

var filterByGroup = function(students, targetGroup) {
    if (targetGroup === undefined || targetGroup === null || targetGroup === "") {
        targetGroup = prompt("Введите группу для фильтрации (например, БСТ2353):");
    }
    if (!targetGroup) {
        console.log("Фильтрация отменена: группа не указана.");
        return [];
    }
    targetGroup = targetGroup.trim();
    var filtered = [];
    for (var i = 0; i < students.length; i++) {
        if (students[i]['group'].toLowerCase() === targetGroup.toLowerCase()) {
            filtered.push(students[i]);
        }
    }
    console.log("Студенты группы " + targetGroup + ":");
    printStudents(filtered);
    return filtered;
};

var calculateAverage = function(marks) {
    if (!marks || marks.length === 0) {
        return 0;
    }
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
};

var filterByAverageMark = function(students, minAverage) {
    if (minAverage === undefined || minAverage === null || minAverage === "") {
        var input = prompt("Введите минимальный средний балл (например, 4.0):");
        if (input === null || input.trim() === "") {
            console.log("Фильтрация отменена: балл не указан.");
            return [];
        }
        minAverage = parseFloat(input);
    }
    if (isNaN(minAverage)) {
        console.log("Ошибка: введенное значение не является числом.");
        return [];
    }
    var filtered = [];
    for (var i = 0; i < students.length; i++) {
        var avg = calculateAverage(students[i]['marks']);
        if (avg > minAverage) {
            filtered.push(students[i]);
        }
    }
    console.log("Студенты со средним баллом выше " + minAverage + ":");
    printStudents(filtered);
    return filtered;
};
