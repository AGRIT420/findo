export default [
    {
        id: '1',
        users: [{
            id: 'u1',
            name: 'Will',
            imageUri: 'http://famousdrinkers.com/wp-content/uploads/2017/01/Will_Smith_by_Gage_Skidmore-200x200.jpg'
        }, {
            id: 'u2',
            name: 'Lionel',
            imageUri: 'https://www.sportico.com/wp-content/uploads/2019/10/messi200x200-1.jpg'
        }],
        messages: [{
            id: 'm1',
            content: 'How are you, Lionel?',
            createdAt: '2022-04-04T21:16:00.000Z',
            user: {
                id: 'u1',
                name: 'Will',
            },
        }, {
            id: 'm2',
            content: 'I am good, thanks',
            createdAt: '2022-04-04T22:04:00.000Z',
            user: {
                id: 'u2',
                name: 'Lionel',
            }
        }]
    }
]