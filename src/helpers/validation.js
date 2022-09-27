
// Jobs validation
export function validateJob(values) {
    let errors = {};
    if (!values.job_title) {
        errors.job_title = 'Job Title is required';
    }
    if (!values.salary) {
        errors.salary = 'Salary is required';
    }
    if (!values.description) {
        errors.description = 'Description is required';
    }
    if (!values.employer) {
        errors.employer = 'Employer is required';
    }
    if (!values.jobtype) {
        errors.jobtype = 'Job Type is required';
    }
    if (!values.jobstatus) {
        errors.jobstatus = 'Job Status is required';
    }
    if (!values.jobclass) {
        errors.jobclass = 'Job Class is required';
    }
    if (!values.expiryDate) {
        errors.expiryDate = 'Expiry Date is required';
    }
    return errors;
};



// Candidate validation



export function validateCandidate(values) {
    let errors = {};
    if (!values.fullname) {
        errors.fullname = 'Full Name is required';
    }
    if (!values.firstFname) {
        errors.firstFname = 'Family Name is required';
    }
    if (!values.secondFname) {
        errors.secondFname = 'Second Family Name  is required';
    }
    if (!values.thirdFname) {
        errors.thirdFname = 'Third Family Name is required';
    }
    if (!values.email) {
        errors.email = 'Email Address is required';
    }
    if (!values.reEmail) {
        errors.reEmail = 'Email Address is required';
    }
    if (!values.country) {
        errors.country = 'Country is required';
    }
    if (!values.city) {
        errors.city = 'City is required';
    }
    if (!values.phone) {
        errors.phone = 'Phone  is required';
    }
    if (!values.industry) {
        errors.industry = 'Industry is required';
    }
    if (!values.position) {
        errors.position = 'Position is required';
    }
    if (!values.age) {
        errors.age = 'Age is required';
    }
    if (!values.mobile) {
        errors.mobile = 'Mobile is required';
    }
    if (!values.cv) {
        errors.cv = 'Cv is required';
    }
    if (!values.dateofbth) {
        errors.dateofbth = 'Position is required';

    }
    return errors;
};

