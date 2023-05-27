import Ad from "../model/Ad.js";

export const getAllAd = async (req, res) => {
  try {
    const data = await Ad.find({});
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const getAd = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Ad.findById({ _id: id });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const createAd = async (req, res) => {
  const { text, image } = req.body;
  try {
    const data = await Ad.create({
      image: image,
      text: text,
    });

    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const deleteAd = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Ad.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
