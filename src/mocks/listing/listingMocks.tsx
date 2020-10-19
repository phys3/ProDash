 interface MockListing {
    id: string;
    title: string;
    description: string;
    price: number;
    categoryID: number;
    images: Array<string>;
    location: {
        lat: number;
        long: number;
    };
    createdBy: string;
    dateAdded: string;
    viewTimes: number;
 }
 
 const listingList: ReadonlyArray<MockListing> = [
    {
        id: '123456uuid',
        title: 'Televizija',
        description: 'Dobra televizor',
        price: 500,
        categoryID: 8,
        images: ['https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png', 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png', 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'],
        location: {
            lat: 45.1245,
            long: 17.12445,
        },
        createdBy: 'uuid-add-support',
        dateAdded: '24-10-2020',
        viewTimes: 0,
    },
    {
        id: '222343456uuid',
        title: 'Hlace',
        description: 'Dobra hlaca',
        price: 50.12,
        categoryID: 3,
        images: ['https://scontent-ams4-1.xx.fbcdn.net/v/t1.15752-9/121025838_710190589574618_4181785737771738883_n.jpg?_nc_cat=103&_nc_sid=ae9488&_nc_ohc=xUarcsGrWrkAX8eY2_F&_nc_ht=scontent-ams4-1.xx&oh=11932343a24fe51107716e33e37a9e26&oe=5FB102E5'],
        location: {
            lat: 45.98,
            long: 17.98,
        },
        createdBy: 'uuid-add-support2',
        dateAdded: '24-10-2020',
        viewTimes: 10,
    },
    {
        id: '3123423456uuid',
        title: 'Zvucnik',
        description: 'Dobra zvucnik',
        price: 5,
        categoryID: 1,
        images: ['https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/121967357_399981311392560_8190238289597772762_o.jpg?_nc_cat=102&_nc_sid=a610ef&_nc_ohc=Rg93UMh7pnwAX-n3nZJ&_nc_ht=scontent-amt2-1.xx&oh=7e834009162b8a9d67604a5c3fb7fc6b&oe=5FB0D880'],
        location: {
            lat: 44.1245,
            long: 16.12445,
        },
        createdBy: 'uuid-add-support3',
        dateAdded: '24-10-2020',
        viewTimes: 0,
    },
    {
        id: '4254323456uuid',
        title: 'Honor x6 superphone',
        description: 'Dobra televizor',
        price: 500,
        categoryID: 7,
        images: ['https://scontent-amt2-1.xx.fbcdn.net/v/t1.15752-9/118833018_244541593436139_1857538274962991222_n.jpg?_nc_cat=106&_nc_sid=ae9488&_nc_ohc=HmEzdfNRqTIAX_i7Jm8&_nc_ht=scontent-amt2-1.xx&oh=1a09ed912e8cc6d62bd9f97e83bed1c7&oe=5FB22DCF'],
        location: {
            lat: 46.1245,
            long: 18.12445,
        },
        createdBy: 'uuid-add-support',
        dateAdded: '24-10-2020',
        viewTimes: 0,
    },
    {
        id: '12653456uuid',
        title: 'Televizija',
        description: 'Dobra televizor',
        price: 500,
        categoryID: 8,
        images: ['https://scontent-ams4-1.xx.fbcdn.net/v/t1.15752-9/117566220_647497849535050_8834735986078408128_n.png?_nc_cat=107&_nc_sid=ae9488&_nc_ohc=luAinf90vaoAX_ClCCi&_nc_ht=scontent-ams4-1.xx&oh=48d05960166ec67a98de81dbe57b3fc6&oe=5FB11D79'],
        location: {
            lat: 45.1245,
            long: 17.12445,
        },
        createdBy: 'uuid-add-support',
        dateAdded: '24-10-2020',
        viewTimes: 0,
    },
    {
        id: '2245433456uuid',
        title: 'Hlace',
        description: 'Dobra hlaca',
        price: 50.12,
        categoryID: 3,
        images: ['https://scontent-ams4-1.xx.fbcdn.net/v/t1.15752-9/116252701_289320102399186_8296000485614386506_n.jpg?_nc_cat=104&_nc_sid=ae9488&_nc_ohc=0y-J1pLppn4AX9AQzRI&_nc_ht=scontent-ams4-1.xx&oh=cf38a990f21d453f0cd5a8bb2821560d&oe=5FAF0D50'],
        location: {
            lat: 45.98,
            long: 17.98,
        },
        createdBy: 'uuid-add-support2',
        dateAdded: '24-10-2020',
        viewTimes: 10,
    },
    {
        id: '34323456uuid',
        title: 'Zvucnik',
        description: 'Dobra zvucnik',
        price: 5,
        categoryID: 1,
        images: ['https://scontent-amt2-1.xx.fbcdn.net/v/t1.15752-9/108433462_278381853413385_3730538671150277303_n.jpg?_nc_cat=101&_nc_sid=ae9488&_nc_ohc=XFFXXvmgjPEAX-ShTl_&_nc_ht=scontent-amt2-1.xx&oh=081dcbba2fca91d4e90ede1b6994f71b&oe=5FB17160'],
        location: {
            lat: 44.1245,
            long: 16.12445,
        },
        createdBy: 'uuid-add-support3',
        dateAdded: '24-10-2020',
        viewTimes: 0,
    },
    {
        id: '427653456uuid',
        title: 'Honor x6 superphone',
        description: 'Dobra televizor',
        price: 500,
        categoryID: 7,
        images: ['https://scontent-ams4-1.xx.fbcdn.net/v/t1.15752-9/99157971_258096498581392_3916187722074554368_n.png?_nc_cat=108&_nc_sid=ae9488&_nc_ohc=PaIHZouIz5wAX_65Yy0&_nc_ht=scontent-ams4-1.xx&oh=f1c784c9d92e079d8111d2e6331ddddf&oe=5FB00B98'],
        location: {
            lat: 46.1245,
            long: 18.12445,
        },
        createdBy: 'uuid-add-support',
        dateAdded: '24-10-2020',
        viewTimes: 0,
    },
    {
        id: '176523456uuid',
        title: 'Televizija',
        description: 'Dobra televizor',
        price: 500,
        categoryID: 8,
        images: ['https://scontent-amt2-1.xx.fbcdn.net/v/t1.15752-9/95912847_271954983959258_7619139453298147328_n.png?_nc_cat=109&_nc_sid=ae9488&_nc_ohc=fspwRmtQ510AX_aur7U&_nc_ht=scontent-amt2-1.xx&oh=e5b66e789f8b82f6c3bde14852279943&oe=5FB1F022'],
        location: {
            lat: 45.1245,
            long: 17.12445,
        },
        createdBy: 'uuid-add-support',
        dateAdded: '24-10-2020',
        viewTimes: 0,
    },
    {
        id: '27623456uuid',
        title: 'Hlace',
        description: 'Dobra hlaca',
        price: 50.12,
        categoryID: 3,
        images: ['https://scontent-amt2-1.xx.fbcdn.net/v/t1.15752-9/93608972_916541635433117_3549634081794818048_n.png?_nc_cat=102&_nc_sid=ae9488&_nc_ohc=uihOrfBqP-gAX8vC-lC&_nc_ht=scontent-amt2-1.xx&oh=78e52aa20930d820fbe38e823493cac3&oe=5FB2009A'],
        location: {
            lat: 45.98,
            long: 17.98,
        },
        createdBy: 'uuid-add-support2',
        dateAdded: '24-10-2020',
        viewTimes: 10,
    },
    {
        id: '876323456uuid',
        title: 'Zvucnik',
        description: 'Dobra zvucnik',
        price: 5,
        categoryID: 1,
        images: ['https://scontent-ams4-1.xx.fbcdn.net/v/t1.15752-9/82323210_1503805516444296_6077908173048512512_n.jpg?_nc_cat=100&_nc_sid=ae9488&_nc_ohc=Ouv_HFrlMyEAX89u_C2&_nc_ht=scontent-ams4-1.xx&oh=bdb61b2217770dbb7a4f64a10728aef6&oe=5FB166F1'],
        location: {
            lat: 44.1245,
            long: 16.12445,
        },
        createdBy: 'uuid-add-support3',
        dateAdded: '24-10-2020',
        viewTimes: 0,
    },
    {
        id: '876423456uuid',
        title: 'Honor x6 superphone',
        description: 'Dobra televizor',
        price: 500,
        categoryID: 7,
        images: ['https://scontent-ams4-1.xx.fbcdn.net/v/t1.15752-9/65439727_428926771028812_2794146924951764992_n.jpg?_nc_cat=108&_nc_sid=ae9488&_nc_ohc=M_Fq4rp0j8AAX9oPjhu&_nc_ht=scontent-ams4-1.xx&oh=60cda99c684f42bfea5b7404f56eae48&oe=5FB2AC7B'],
        location: {
            lat: 46.1245,
            long: 18.12445,
        },
        createdBy: 'uuid-add-support',
        dateAdded: '24-10-2020',
        viewTimes: 0,
    },
    {
        id: '76123456uuid',
        title: 'Televizija',
        description: 'Dobra televizor',
        price: 500,
        categoryID: 8,
        images: ['https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'],
        location: {
            lat: 45.1245,
            long: 17.12445,
        },
        createdBy: 'uuid-add-support',
        dateAdded: '24-10-2020',
        viewTimes: 0,
    },
    {
        id: '54223456uuid',
        title: 'Hlace',
        description: 'Dobra hlaca',
        price: 50.12,
        categoryID: 3,
        images: ['https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'],
        location: {
            lat: 45.98,
            long: 17.98,
        },
        createdBy: 'uuid-add-support2',
        dateAdded: '24-10-2020',
        viewTimes: 10,
    },
    {
        id: '32323456uuid',
        title: 'Zvucnik',
        description: 'Dobra zvucnik',
        price: 5,
        categoryID: 1,
        images: ['https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'],
        location: {
            lat: 44.1245,
            long: 16.12445,
        },
        createdBy: 'uuid-add-support3',
        dateAdded: '24-10-2020',
        viewTimes: 0,
    },
    {
        id: '12423456uuid',
        title: 'Honor x6 superphone',
        description: 'Dobra televizor',
        price: 500,
        categoryID: 7,
        images: ['https://scontent-ams4-1.xx.fbcdn.net/v/t1.15752-9/65439727_428926771028812_2794146924951764992_n.jpg?_nc_cat=108&_nc_sid=ae9488&_nc_ohc=M_Fq4rp0j8AAX9oPjhu&_nc_ht=scontent-ams4-1.xx&oh=60cda99c684f42bfea5b7404f56eae48&oe=5FB2AC7B'],
        location: {
            lat: 46.1245,
            long: 18.12445,
        },
        createdBy: 'uuid-add-support',
        dateAdded: '24-10-2020',
        viewTimes: 0,
    }
]

export default listingList
