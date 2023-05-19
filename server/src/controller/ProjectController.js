const ProjectDb = require("../models/Project");
const UserDb = require('../models/User');

exports.project_controller = {
  getProjectList: (req, res) => {
    const filters = req.params.filters.split(",");
    let pipeline = [];
    if (filters[0] === "all")
      pipeline = [
        {
          $project: {
            _id: 1,
            PROJECT_NAME: 1,
            POSTED_BY: 1,
            PROJECT_IMAGE_URL: 1,
            TAGS: 1,
          },
        },
      ];
    else {
      pipeline = [
        {
          $match: {
            TAGS: { $in: filters },
          },
        },
        {
          $addFields: {
            matchedValues: { $size: { $setIntersection: ["$TAGS", filters] } },
          },
        },
        { $sort: { matchedValues: -1 } },
        {
          $project: {
            _id: 1,
            PROJECT_NAME: 1,
            POSTED_BY: 1,
            PROJECT_IMAGE_URL: 1,
            TAGS: 1,
          },
        },
      ];
    }
    ProjectDb.aggregate(pipeline)
      .then((list) => {
        res.status(200).json(list);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          success: false,
        });
      });
  },

  getProjectById: (req, res) => {
    const id = req.params.id;
    ProjectDb.findById(id)
      .then((list) => {
        res.status(200).json(list);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          success: false,
        });
      });
  },

  postProject: (req, res) => {
    req.body.POSTED_BY = req.body.email;
    const {
      PROJECT_NAME,
      POSTED_BY,
      DESCRIPTION,
      PROJECT_IMAGE_URL,
      GITHUB_LINK,
      LINKEDIN_LINK,
      TAGS,
    } = req.body;
    if (
      PROJECT_NAME &&
      POSTED_BY &&
      DESCRIPTION &&
      PROJECT_IMAGE_URL &&
      GITHUB_LINK &&
      LINKEDIN_LINK &&
      TAGS
    ) {
      const new_project = new ProjectDb(req.body);
      new_project
        .save()
        .then((item) => {
          UserDb.updateOne(
            {USER_EMAIL: req.body.email},
            {$push : {REPOSITORIES: {
              id: item._id,
              NAME: item.PROJECT_NAME
            }}}
          ).then(res=>{
          })
          res.status(200).json({
            success: true,
          });
        })
        .catch((err) => {
          res.status(400).json({
            success: false,
          });
        });
    } else {
      res.status(400).json({
        success: false,
        message: "Please Complete All fields",
      });
    }
  },

  getFilters: (req, res) => {
    const pipeline = [
      {
        $project: {
          _id: 0,
          TAGS: 1,
        },
      },
    ];
    ProjectDb.aggregate(pipeline)
      .then((list) => {
        res.status(200).json(list);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          success: false,
        });
      });
  },
};
