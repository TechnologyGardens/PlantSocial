# PlantSocial
Plant Social is a small database which contains information about plant interactions. Some plants benefit from being planted in proximity to others, while some relationships are deteriorating. Contribute your experience so we can all know what to plant together

Current version implements simple prototype version of the PlantSocial app.Two models are introduced one for plants and one for users along with all necessary crud operations. Whole words text search is iplemented for the fields of the plant model. 

Simple authentication system (using passport.js) is implemented using five strategies:Local, Facebook, Google, Twitter, LinkedIn. When social login is performed user accouts are created with the e-mail address of the user and generated password. Currently no password reset is implemented and Twitter integration is not completed.
