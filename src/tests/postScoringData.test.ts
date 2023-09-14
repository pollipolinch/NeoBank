import { request } from "../utils/requests/Request";
import { ScoringForm } from "../utils/types/types";

import { transformData } from "../utils/helpers/transformData";

const { PostMail } = request();
const postScoring = async (data: ScoringForm, applicationId: string) => {
  const body = JSON.stringify(transformData(data));
  const url = `http://localhost:8080/application/registration/${applicationId}`;
  const res = await PostMail(url, "PUT", body);
  return res;
};

const mockJsonPromise = Promise.resolve(200);
const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

describe("postScoringForm", () => {
  test("correct scoring data", async () => {
    const application = "110";
    const postData: ScoringForm = {
      dependentAmount: 1,
      employerINN: 234178945623,
      employmentStatus: "EMPLOYED",
      position: "MID_MANAGER",
      salary: 140000,
      workExperienceCurrent: 21,
      workExperienceTotal: 30,
      gender: "FAMALE",
      maritalStatus: "SINGLE",
      passportIssueBranch: "378903",
      passportIssueDate: "2019-09-23",
    };
    const res = await postScoring(postData, application);
    console.log(res);
    expect(res).toEqual(true);
  });
});
