const {
  createPrefenceController,
} = require("../controllers/mercadoPagoController");

const createPreferenceHandler = async (req, res) => {
  try {
    const mp = {
      items: req.body.map((item) => ({
        title: item.title,
        quantity: Number(item.quantity),
        unit_price: Number(item.precio),
        currency_id: "ARS",
      })),
      back_urls: {
        success: "https://fscorrales.github.io/success_page/",
        failure: "https://fscorrales.github.io/failure_page/",
        pending: "https://fscorrales.github.io/pending_page/",
      },
      auto_return: "approved",
    };
    console.log(mp);
    const response = await createPrefenceController(mp);
    res.json({ id: response.id });
  } catch (error) {
    res.status(400).send({ Error: error.message });
  }
};

module.exports = {
  createPreferenceHandler,
};
