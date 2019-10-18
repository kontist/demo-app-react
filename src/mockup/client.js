const client = {
    getUser: () => {
        return { name: "Max Mustermann", balance: 12345}
    },
    getTransactions: () => [
        {id: "abc-def", amount: -1000, from: "abc", to: "qwe", purpose: "Lorem ipsum dolor sit amet", date: "2019-10-18 00:00:00"},
        {id: "abc-deg", amount: 20000, from: "test", to: "qwe", purpose: "Buy a new home bla", date: "2019-10-17 12:00:00"},
    ]
};

export default client;