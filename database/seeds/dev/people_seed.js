
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('people').del()
        .then(function () {
            // Inserts seed entries
            const users = [
                { fname: 'Matt', lname: 'Blakely' },
                { fname: 'Rod', lname: 'Thornhill' },
                { fname: 'Chris', lname: 'Stassen' },
                { fname: 'Darrell', lname: 'Dotson' },
                { fname: 'Meghan', lname: 'Davey' },
                { fname: 'Charleen', lname: 'Bortot' },
                { fname: 'Carol', lname: 'Wilson' },
                { fname: 'Bernie', lname: 'Hillier' },
                { fname: 'Tyler', lname: 'Fry' },
                { fname: 'Kory', lname: 'Gorsky' },
                { fname: 'Andrew', lname: 'Hillier' },
                { fname: 'Humphrey', lname: 'Huang' },
                { fname: 'Tyler', lname: 'Devries' },
                { fname: 'Eric', lname: 'Adamski' },
                { fname: 'Dustin', lname: 'Or' },
                { fname: 'Patrick', lname: 'Vienneau' },
                { fname: 'Scott', lname: 'Davey' },
                { fname: 'Jon', lname: 'Scarr'},
            ].map((user, index) => {
                return ({
                    id: index + 1,
                    name: `${user.fname} ${user.lname}`,
                    email: `${user.fname}.${user.lname}@mb3online.com`.tolowercase(),
                    password: 'abc123'
                });
            });

            return knex('people').insert(users);
        });
};
