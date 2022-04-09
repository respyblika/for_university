var Target = {
    shows: [
        ["Дэйв", "машины"],
        ["Анна", "цвты"],
    ],
    targetWork: function ([name, interest]) {
        console.log("Привет, " + name + " , мы знаем, что в круг ваших увлечений входят " + interest + ". Присоединяйтесь к TheBestCompany!). С нами уже: ");

        for (var i = 0; i < this.shows.length; i++) {
            console.log(this.shows[i][0] + " котор(ому/ой) нравятся " + this.shows[i][1] + ".");
        }
    }
}
Target.targetWork(["Инокентий", "шахматы"]);