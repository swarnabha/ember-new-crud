/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let applicationsRouter = express.Router();
  let idCounter = 1;

  applicationsRouter.get('/', function(req, res) {
    console.warn("get>>>>>>>>>>>>>>>>>")

    res.send({
      data: [
        {
          id: 1,
          attributes:
          {
            name: "John Deo",
            age: "21",
            phone: 9204498551,
            email: "johndeo@email.com"
          },
          type: "applications"
        }
      ]
    });
    res.status(200).end();
  });

  applicationsRouter.post('/', function(req, res) {
    console.warn("post>>>>>>>>>>>>>>>>>")

    idCounter ++; 

    res.send({
      data: {
        id: idCounter,
        attributes:
        {
          name: req.body.data.attributes.name,
          age: req.body.data.attributes.age,
          phone: req.body.data.attributes.phone,
          email: req.body.data.attributes.email
        },
        type: "application"
      }
    })
    res.status(201).end();
  });



  applicationsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/applications', require('body-parser').json({ type: 'application/*+json' }), applicationsRouter);

};
