const CATEGORIES = {
    INFORMATIKA: {
        id: 1,
        name: 'Informatika',
        children: {
            LAPTOPS: {
                id:6,
                name: 'Prijenosna racunala',
            },
            MOBITELI: {
                id: 7,
                name: 'Smartfoni',
            },
            TELEVIZIJA: {
                id: 8,
                name: 'Televizije',
            },
        },
    },
    VOZILA: {
        id: 2,
        name: 'Vozila',
        children: {
            AUTOMOBILI: {
                id: 4,
                name: 'Automobili',
            },
            MOTOCIKLI: {
                id: 5,
                name: 'Motocikli',
            },
        },
    } ,
    ODIJECA: {
        id: 3,
        name: 'Odijeca',
    },
}

export default CATEGORIES
