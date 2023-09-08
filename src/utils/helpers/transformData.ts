import { ScoringForm } from '../types/types';
import { v4 } from 'uuid';

export const transformData = (data: ScoringForm) => {
    const employment = {
        employmentStatus: data.employmentStatus,
        employerINN: data.employerINN,
        salary: Number(data.salary),
        position: data.position,
        workExperienceTotal: Number(data.workExperienceTotal),
        workExperienceCurrent: Number(data.workExperienceCurrent),
    };
    const body = {
        gender: data.gender,
        maritalStatus: data.maritalStatus,
        dependentAmount: Number(data.dependentAmount),
        passportIssueDate: data.passportIssueDate,
        passportIssueBranch: data.passportIssueBranch,
        employment,
        account: v4(),
    };
    return body;
};
