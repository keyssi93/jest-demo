//Lookup.js

// Data
const users = [
    {
      userName: 'doom',
      firstName: 'Camilo',
      lastName: 'Villegas',
      age: 22,
      likes: ['Javascript', 'Python', 'C'],
    },
    {
      userName: 'kovrov',
      firstName: 'Abdel',
      lastName: 'Osman',
      age: 99,
      likes: ['Assembly', 'Cobol'],
    },
  ];
  
// lookup()
const lookup = (username, property) => {
  const user = users.find(u => u.userName === username);
  if (!user) {
    throw new Error("Could not find user");
  }
  if (!user.hasOwnProperty(property)) {
    throw new Error("Could not find property");
  }
  return user[property];
};

module.exports = lookup;