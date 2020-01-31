
exports.seed = async function(knex) {
  await knex("drivers").insert([
    {
      name: "Joan",
      email: "joan@gmail.com",
      password: "password", 
      location: "Kampala",
      price: "100 shillings",
    },
    {
      name: "Florence",
      email: "fl@email.com",
      password: "password", 
      location: "Kampala",
      price: "200 shillings",
    },
    {
      name: "Emmanuel",
      email: "em1@gmail.com",
      password: "password", 
      location: "Nansana",
      price: "100 shillings",
    },
    {
      name: "Deborah",
      email: "db2@email.com",
      password: "password", 
      location: "Kira",
      price: "100 shillings",
    },
    {
      name: "Elijah",
      email: "elijah@email.com",
      password: "password", 
      location: "Kampala",
      price: "150 shillings",
    },
    {
      name: "Moses",
      email: "moses@email.com",
      password: "password", 
      location: "Kira",
      price: "200 shillings",
    },
    {
      name: "Namazzi",
      email: "namzz@email.com",
      password: "password", 
      location: "Nansana",
      price: "200 shillings",
    },
    {
      name: "Namono",
      email: "namo@email.com",
      password: "password", 
      location: "Nansana",
      price: "200 shillings",
    },
    {
      name: "Sanyu",
      email: "sanyu@email.com",
      password: "password", 
      location: "Nansana",
      price: "200 shillings",
    },
    { 
      name: "Akiki",
      email: "akiki@email.com",
      password: "password", 
      location: "Kampala",
      price: "200 shillings",
    },
    { 
      name: "Bwanbale",
      email: "bwanbale@email.com",
      password: "password", 
      location: "Kampala",
      price: "200 shillings",
    },
    { 
      name: "Kaikara",
      email: "kaik4@email.com",
      password: "password", 
      location: "Kampala",
      price: "200 shillings",
    },
    { 
      name: "Mukisa",
      email: "Mus@5email.com",
      password: "password", 
      location: "Kampala",
      price: "200 shillings",
    },
    { 
      name: "Shayla",
      email: "sha@email.com",
      password: "password", 
      location: "Kira",
      price: "100 shillings",
    },
    { 
      name: "Nasiche",
      email: "nasiche5@email.com",
      password: "password", 
      location: "Nansana",
      price: "100 shillings",
    },
    { 
      name: "Abbo",
      email: "abbo1@email.com",
      password: "password", 
      location: "Kira",
      price: "100 shillings",
    },
    { 
      name: "Dembe",
      email: "dembe2@email.com",
      password: "password", 
      location: "Kampala",
      price: "100 shillings",
    },
    { 
      name: "Miremba",
      email: "miremba1@email.com",
      password: "password", 
      location: "Kampala",
      price: "100 shillings",
    },
    { 
      name: "Natukunda",
      email: "natu@email.com",
      password: "password", 
      location: "Kampala",
      price: "100 shillings",
    },
    { 
      name: "Achen",
      email: "achen@email.com",
      password: "password", 
      location: "Nansana",
      price: "200 shillings",
    },
  ])
};
