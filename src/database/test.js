const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  await saveOrphanage(db, {
    lat: "-24.0084851",
    lng: "-46.4183927",
    name: "Lar dos meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "999999999",
    images: [
      "https://images.unsplash.com/photo-1595967783875-c371f35d8049?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1594753154778-273013529793?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0"
  });
  
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  // console.log(orphanage);

  // console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'));
});