'use strict';

let utils = require('../utils/writer.js');
let studentService = require('../service/StudentService');

module.exports.assignGradesToStudent = function assignGradesToStudent (req, res, next, body, studentId) {
    studentService.assignGradesToStudent(body, studentId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.assignSubjectToStudent = function assignSubjectToStudent (req, res, next, body, studentId) {
    studentService.assignSubjectToStudent(body, studentId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.createStudent = function createStudent (req, res, next, body) {
    studentService.createStudent(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.deleteASubjectForStudent = function deleteASubjectForStudent (req, res, next, studentId, subjectCode) {
    studentService.deleteASubjectForStudent(studentId, subjectCode)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.deleteStudent = function deleteStudent (req, res, next, studentId) {
    studentService.deleteStudent(studentId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.deleteGradeForStudentSubject = function deleteGradeForStudentSubject (req, res, next, studentId, subjectCode) {
    studentService.deleteGradeForStudentSubject(studentId, subjectCode)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getGradeForStudentSubject = function getGradeForStudentSubject (req, res, next, studentId, subjectCode) {
    studentService.getGradeForStudentSubject(studentId, subjectCode)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getStudent = function getStudent (req, res, next, studentId) {
    studentService.getStudent(studentId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getStudents = function getStudents (req, res, next) {
    studentService.getStudents()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getSubjectForStudent = function getSubjectForStudent (req, res, next, studentId, subjectCode) {
    studentService.getSubjectForStudent(studentId, subjectCode)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.updateStudent = function updateStudent (req, res, next, body, studentId) {
    studentService.updateStudent(body, studentId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.updateSubjectAssignmentForStudent = function updateSubjectAssignmentForStudent (req, res, next, body, studentId, subjectCode) {
    studentService.updateSubjectAssignmentForStudent(body, studentId, subjectCode)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.updatesGradeForStudentSubject = function updatesGradeForStudentSubject (req, res, next, body, studentId, subjectCode) {
    studentService.updateGradeForStudentSubject(body, studentId, subjectCode)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
