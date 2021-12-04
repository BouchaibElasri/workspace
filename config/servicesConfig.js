let environment  = require('../config/environment').environment();
let localSubjectServiceUrl   = 'http://localhost:8081/api/v1/subjects';
let SUBJECT_SERVICE_URL    = process.env.SUBJECT_SERVICE_URL || (process.env.NODE_ENV === "test" ? environment.TEST_SUBJECT_SERVICE_URL : localSubjectServiceUrl);

module.exports = {
    SUBJECT_SERVICE_URL
}
