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
        images: ['url1', 'url2'],
        location: {
            lat: 45.1245,
            long: 17.12445,
        },
        createdBy: 'uuid-add-support',
        dateAdded: '24-10-2020',
        viewTimes: 0,
    },
    {
        id: '223456uuid',
        title: 'Hlace',
        description: 'Dobra hlaca',
        price: 50.12,
        categoryID: 3,
        images: [],
        location: {
            lat: 45.98,
            long: 17.98,
        },
        createdBy: 'uuid-add-support2',
        dateAdded: '24-10-2020',
        viewTimes: 10,
    },
    {
        id: '323456uuid',
        title: 'Zvucnik',
        description: 'Dobra zvucnik',
        price: 5,
        categoryID: 1,
        images: ['url1', 'url2'],
        location: {
            lat: 44.1245,
            long: 16.12445,
        },
        createdBy: 'uuid-add-support3',
        dateAdded: '24-10-2020',
        viewTimes: 0,
    },
    {
        id: '423456uuid',
        title: 'Honor x6 superphone',
        description: 'Dobra televizor',
        price: 500,
        categoryID: 7,
        images: ['url1', 'url2', 'url3'],
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
