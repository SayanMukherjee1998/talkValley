const adsModel = require("../model/ads");
const companiesModel = require("../model/companies");
exports.fetch = async (req, res) => {

  try {
    const search_docs = await companiesModel.aggregate([
      {
        $lookup: {
          from: `${adsModel}`,
          localField: "companyId",
          foreignField: "_id",
          as: "searchDocs",
        },
      },
    ]);
    
    res.status(200).send(search_docs);
  } catch (err) {
    res.status(400).send("Data Not Found",err)
  }
};

exports.addCompanies = (req, res) => {
  const companies = new companiesModel({
    companyId: req.body.companyId,
    primaryText: req.body.primaryText,
    headline: req.body.headline,
    description: req.body.description,
    CTA: req.body.CTA,
    imageUrl: req.body.imageUrl,
  });
  companies
    .save()
    .then((result) => {
      res.status(200).send(`Company details saved.`);
    })
    .catch((err) => res.status(400).send("Data Not Saved", err));
};
exports.addAds = (req, res) => {
  const ads = new adsModel({
    id : req.body.id,
    name: req.body.name,
    url: req.body.url,
  });
  ads
    .save()
    .then((result) => {
      res.status(200).send(`${req.body.name} saved`);
    })
    .catch((err) => res.status(400).send("Data Not Saved", err));
};
