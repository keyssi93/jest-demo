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
      userName: 'aniki',
      firstName: 'Billy',
      lastName: 'Herrington',
      age: 50,
      likes: ['C#', 'Ruby', 'Go', 'Kotlin'],
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