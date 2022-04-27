var Sport = {
    class: 2,
    pupils: 5,
    show_about: function (clas, pup) {
        console.log("В спорткомплексе " + this.Sport_names + " занимается " + clas + " групп по " + pup + " человек " + " по " + this.special_school + " . " + "\nВсего человек занимающихся плаванием - " + clas + pup + "." + "Спорткомплекс имеет несколько " + " групп " + " одного возраста - " + this.class_names + ".")
    },
    replenishment: function (new_class) {
        Sport.class += new_class;
        console.log("Изменилось количество групп : " + Sport.class);
    },
    set property(count) {
        this.pupils = count;
    },
};
Object.defineProperty(Sport, 'class_names', {
    value: ["А", "Б"],
    writable: false,
    enumerable: true,
    configurable: false
});
Object.defineProperty(Sport, 'Sport_names', {
    value: "Одаренность",
    writable: false,
    enumerable: true,
    configurable: false
});
Object.defineProperty(Sport, 'special_school', {
    value: "плаванию",
    writable: false,
    enumerable: true,
    configurable: false
});
var classf = Sport.class;
var peoples = Sport.pupils;
var new_class = 2; //Добавить 2 группы
Sport.show_about(classf, peoples);
Sport.replenishment(new_class);
Sport.property = 7;
console.log("Кол-во человек в группах сейчас : " + Sport.pupils);