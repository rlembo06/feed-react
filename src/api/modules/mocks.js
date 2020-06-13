export default {
    getAll: () => new Promise((resolve, reject) => {
        resolve([
            { id: '1', name: 'Car'},
            { id: '2', name: 'Aircraft'},
            { id: '2', name: 'Boat'},
        ])
    })
}
