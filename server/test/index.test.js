const app = require("../src/app");
const session = require("supertest");
const agent = session(app);
// const axios = require("axios");

const character = {
    id: 123,
    name: 'Dai',
    species: 'Human',
    gender: 'Female',
    status: 'Alive',
    origin: {
        name:'Earth'
    },
    image: 'image.jpg',
}

describe("Test de RUTAS", () => {

  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await request.get("/rickandmorty/character/1");
      expect(response.statusCode).toBe(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await request.get("/rickandmorty/character/1");
      for (const prop in character) {
        expect(response.body).toHaveProperty(prop);
      }
    });
    it("Si hay un error responde con status 500", async () => {
      const response = await request.get("/rickandmorty/character/3243");
      expect(response.statusCode).toBe(500);
    });
  });


  describe("GET rickandmorty/login", () => {
    it("Responde con un objeto con la propiedad acces en true si la información del usuario es valida", async () => {
      const response = await request.get(
        "rickandmorty/login?email=serfabian619@gmail.com&password=c"
      );
      const access = { access: true };
      expect(response.body).toEqual(access);
    });
    it("Responde con un objeto con la propiedad acces en true si la información del usuario es valida", async () => {
      const response = await request.get(
        "rickandmorty/login?email=serfabian619@gmail.com&password=sisi"
      );
      const access = { access: false };
      expect(response.body).toEqual(access);
    });
  });

  
  describe('POST /rickandmorty/fav', () => {
    it('Debe guardar el personaje en favs', async () => {
        const response = await request.post('/rickandmorty/fav').send(character)
        expect(response.body).toContainEqual(character)
    })
    it('Debe agregar personajes a favoritos sin eliminar los anteriores', async () => {
        character.id = 1923;
        character.name = 'FT-37a'
        const response = await request.post('/rickandmorty/fav').send(character);
        expect(response.body.length).toBe(2)
    })
  })


  describe('DELETE /rickandmorty/fav/:id  ', () => {
    it('Si el id solicitado no esxiste, debería retirnar un arreglo con todos los favoritos', async () => {
        const response = await request.delete('/rickandmorty/fav/tuqte76')
        expect(response.body.length).toBe(2)
    })
    it('Si el id enviado existe debería eliminarlo de favoritos', async () => {
        const response = await request.delete('/rickandmorty/fav/1923')
        expect(response.body.length).toBe(1)
    })
  })
});
