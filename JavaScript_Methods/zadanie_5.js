var FirstClass = {
    children: [
        {name: "Ваня", age: 7},
        {name: "Ира", age: 7},
        {name: "Лиза", age: 6},
        {name: "Андрей", age: 7},
        {name: "Саша", age: 8},
        {name: "Женя", age: 8},
        {name: "Кеша", age: 6},
        {name: "Леша", age: 6}

    ],
    get property() {
        Arrays.sort(children)

    },
    set property({name, age}) {
        arr.concat([this.property()]);
    }
}
