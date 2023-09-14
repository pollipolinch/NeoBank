import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CardForm,
  AppStatus,
  IOffer,
  ISortValue,
  CardSliceState,
  IPostScoringData,
  IPostCode,
} from "../types/types";
import { request } from "../requests/Request";
import { transformData } from "../helpers/transformData";
import { checkSortValue } from "../helpers/checkSortValue";

export const initialState: CardSliceState = {
  loader: false,
  selectedOffer: false,
  getOffers: false,
  modal: false,
  approveModal: false,
  codeErrorStatus: false,
  status: null,
  monthlyPayments: [],
};

export const postData = createAsyncThunk(
  "cardSlice/postData",
  async (data: CardForm) => {
    const body = JSON.stringify({
      ...data,
      middleName: data.middleName ? data.middleName : null,
    });
    const url = `http://localhost:8080/application`;
    const { PostApplication } = request();
    const result = await PostApplication(url, "POST", body);
    return result;
  }
);
export const postSelectedOffer = createAsyncThunk(
  "cardSlice/postSelectedOffer",
  async (data: IOffer) => {
    const body = JSON.stringify(data);
    const { PostMail } = request();
    const url = `http://localhost:8080/application/apply`;
    const res = await PostMail(url, "POST", body);
    return res;
  }
);
export const getStatus = createAsyncThunk(
  "cardSlice/getStatus",
  async (applicationId: string) => {
    const { PostApplication } = request();
    const url = `http://localhost:8080/admin/application/${applicationId}`;
    const res = await PostApplication(url, "GET", null);
    return res;
  }
);

export const postScoringData = createAsyncThunk(
  "cardSlice/postScoringData",
  async ({ data, applicationId }: IPostScoringData) => {
    const { PostMail } = request();
    const body = JSON.stringify(transformData(data));
    const url = `http://localhost:8080/application/registration/${applicationId}`;
    const res = await PostMail(url, "PUT", body);
    return res;
  }
);

export const postAgree = createAsyncThunk(
  "cardSlice/postAgree",
  async (applicationId: string | undefined) => {
    const { PostMail } = request();
    const url = `http://localhost:8080/document/${applicationId}`;
    const res = await PostMail(url, "POST", null);
    return res;
  }
);

export const postUserSign = createAsyncThunk(
  "cardSlice/postUserSign",
  async (applicationId: string | undefined) => {
    const { PostMail } = request();
    const url = `http://localhost:8080/document/${applicationId}/sign`;
    const res = await PostMail(url, "POST", null);
    return res;
  }
);

export const postCode = createAsyncThunk(
  "cardSlice/postCode",
  async ({ applicationId, code }: IPostCode) => {
    const { PostMail } = request();
    const url = `http://localhost:8080/document/${applicationId}/sign/code`;
    const res = await PostMail(url, "POST", code);
    return res;
  }
);

const CardSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    paymentsDescSort: (state, action) => {
      const sortValue: ISortValue = action.payload;
      if (checkSortValue(sortValue)) {
        state.monthlyPayments = state.monthlyPayments.sort(
          (a, b) => Number(a[sortValue]) - Number(b[sortValue])
        );
      } else
        state.monthlyPayments = state.monthlyPayments.sort((a, b) =>
          a.date.localeCompare(b.date)
        );
    },
    paymentsAscSort: (state, action) => {
      const sortValue: ISortValue = action.payload;
      if (checkSortValue(sortValue)) {
        state.monthlyPayments = state.monthlyPayments.sort(
          (a, b) => Number(b[sortValue]) - Number(a[sortValue])
        );
      } else
        state.monthlyPayments = state.monthlyPayments
          .sort((a, b) => a.date.localeCompare(b.date))
          .reverse();
    },
    showModal: (state, action) => {
      state.modal = action.payload;
    },
    approveModal: (state, action) => {
      state.approveModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postData.pending, (state) => {
        state.loader = true;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.loader = false;
        const offers = action.payload.sort(
          (a: IOffer, b: IOffer) => a.totalAmount - b.totalAmount
        );
        localStorage.setItem("offers", JSON.stringify(offers));
        state.getOffers = true;
      })
      .addCase(postSelectedOffer.pending, (state) => {
        state.loader = true;
      })
      .addCase(postSelectedOffer.fulfilled, (state) => {
        state.loader = false;
        state.getOffers = false;
        state.selectedOffer = true;
        state.status = AppStatus.APPROVED;
      })
      .addCase(getStatus.pending, (state) => {
        state.loader = true;
      })
      .addCase(getStatus.fulfilled, (state, action) => {
        console.log(action.payload.status);
        state.status = action.payload.status;
        if (action.payload.status === AppStatus.PREAPPROVAL) {
          state.getOffers = true;
        }
        if (action.payload.status !== AppStatus.PREAPPROVAL) {
          state.selectedOffer = true;
        }
        const monthlyPayments = action.payload.credit?.paymentSchedule;
        if (monthlyPayments) state.monthlyPayments = monthlyPayments;
        state.status = action.payload.status;
        state.loader = false;
      })
      .addCase(postScoringData.pending, (state) => {
        state.loader = true;
      })
      .addCase(postScoringData.fulfilled, (state) => {
        state.loader = false;
        state.status = AppStatus.CC_APPROVED;
      })
      .addCase(postAgree.pending, (state) => {
        state.loader = true;
      })
      .addCase(postAgree.fulfilled, (state) => {
        state.status = AppStatus.DOCUMENT_CREATED;
        state.loader = false;
      })
      .addCase(postUserSign.pending, (state) => {
        state.loader = true;
      })
      .addCase(postUserSign.fulfilled, (state) => {
        state.loader = false;
      })
      .addCase(postCode.pending, (state) => {
        state.loader = true;
        state.codeErrorStatus = false;
      })
      .addCase(postCode.rejected, (state) => {
        state.loader = false;
        state.codeErrorStatus = true;
      })
      .addCase(postCode.fulfilled, (state) => {
        state.loader = false;
        state.status = AppStatus.CREDIT_ISSUED;
      });
  },
});

const { actions, reducer } = CardSlice;

export default reducer;

export const { showModal, approveModal, paymentsDescSort, paymentsAscSort } =
  actions;
