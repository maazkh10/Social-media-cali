backend/
│
├── src/
│ │
│ ├── config/
│ │ ├── db.js
│ │ ├── env.js
│ │ └── logger.js
│ │
│ ├── models/
│ │ ├── User.model.js
│ │ ├── SocialAccount.model.js
│ │ └── Post.model.js
│ │
│ ├── controllers/
│ │ ├── auth.controller.js
│ │ ├── post.controller.js
│ │ └── socialAccount.controller.js
│ │
│ ├── routes/
│ │ ├── auth.routes.js
│ │ ├── post.routes.js
│ │ └── socialAccount.routes.js
│ │
│ ├── services/
│ │ ├── linkedin.service.js
│ │ ├── instagram.service.js
│ │ └── scheduler.service.js
│ │
│ ├── jobs/
│ │ └── publishPost.job.js
│ │
│ ├── middlewares/
│ │ ├── auth.middleware.js
│ │ ├── error.middleware.js
│ │ └── validate.middleware.js
│ │
│ ├── utils/
│ │ ├── apiResponse.js
│ │ ├── dateHelper.js
│ │ └── tokenHelper.js
│ │
│ ├── app.js
│ └── server.js
│
├── .env
├── package.json
└── README.md
