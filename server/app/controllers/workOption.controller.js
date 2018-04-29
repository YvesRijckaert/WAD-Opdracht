const WorkOption = require("../models/WorkOption.model");

//je krijgt altijd een request en een response binnen van al de functies

exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: "WorkOption naam mag niet leeg zijn"
    });
  }

  const workOption = new WorkOption({
    name: req.body.name,
    location: req.body.location,
    startHour: req.body.startHour,
    endHour: req.body.endHour,
    salaryPerHour: req.body.salaryPerHour
  });

  workOption
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error"
      });
    });
};

exports.findAll = (req, res) => {
  WorkOption.find()
    .then(workOptions => {
      res.send(workOptions);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error"
      });
    });
};

exports.findOne = (req, res) => {
  WorkOption.findById(req.params.workOptionId)
    .then(workOption => {
      if (!workOption) {
        return res.status(404).send({
          message: "workOption not found with id " + req.params.workOptionId
        });
      }
      res.send(workOption);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "workOption not found with id " + req.params.workOptionId
        });
      }
      return res.status(500).send({
        message:
          "Error retrieving workOption with id " + req.params.workOptionId
      });
    });
};

exports.update = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: "workOption name can not be empty"
    });
  }

  WorkOption.findByIdAndUpdate(
    req.params.workOptionId,
    {
      name: req.body.name,
      location: req.body.location,
      startHour: req.body.startHour,
      endHour: req.body.endHour,
      salaryPerHour: req.body.salaryPerHour
    },
    { new: true }
  )
    .then(workOption => {
      if (!workOption) {
        return res.status(404).send({
          message: "workOption not found with id " + req.params.workOptionId
        });
      }
      res.send(workOption);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "workOption not found with id " + req.params.workOptionId
        });
      }
      return res.status(500).send({
        message: "Error updating workOption with id " + req.params.workOptionId
      });
    });
};

exports.delete = (req, res) => {
  WorkOption.findByIdAndRemove(req.params.workOptionId)
    .then(workOption => {
      if (!workOption) {
        return res.status(404).send({
          message: "workOption not found with id " + req.params.workOptionId
        });
      }
      res.send({ message: "workOption deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "workOption not found with id " + req.params.workOptionId
        });
      }
      return res.status(500).send({
        message:
          "Could not delete workOption with id " + req.params.workOptionId
      });
    });
};
