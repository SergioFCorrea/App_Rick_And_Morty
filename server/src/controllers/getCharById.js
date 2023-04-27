import axios from "axios";
import { response } from "express";
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const id = req.params.id;
    const { data } = await axios(`${URL}${id}`);

    if (!data.name) throw new Error(`Faltan datos del personaje con ID: ${id}`);
    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      origin: data.origin,
      gender: data.gender,
      image: data.image,
      status: data.status,
    };
    return res.status(200).json(character);

  } catch (error) {
    return error.message.includes('ID')
    ? res.status(404).send(error.message)
    : res.status(500).send(error.response.data.error)
  }
};

module.exports = {
  getCharById,
};

// .then((response) => {
//   if (response.data) {
//     const { id, status, name, species, origin, image, gender } = res.data
//     res.json({ id, status, name, species, origin, image, gender })
//   } else {
//     res.status(400).json({message: 'Not found'})
//   }
// })
// .catch(error => {
//   res.status(500).send({message:error.message})
// });

// const getCharById = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const { status, name, species, origin, gender, image } = await axios(`${URL}${id}`);
//     // .then((response) => response.data)
//     // .then(({ status, name, species, origin, gender, image }) => {
//     if (name) {
//       const character = {
//         id,
//         name,
//         species,
//         origin,
//         gender,
//         image,
//         status,
//       };

//       return res.status(200).json(character);
//     }

//     return res.status(404).send("Not found");
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };
