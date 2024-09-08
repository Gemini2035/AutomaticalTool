// import { httpRequest } from "@/hooks";

export type GetCookie = () => Promise<string>;

// TODO: cookie获取代码化

export const getCookie: GetCookie = async () =>
  'qcc_did=a7a3c38c-d046-4a2a-8072-6cb58eb22832; UM_distinctid=191d06e9d71581-07345aed99cde1-17525637-13c680-191d06e9d728e2; QCCSESSID=db172ea5201faa6c1c37b33c15; tfstk=f1m-wW_EbKB-5KXAkwT0xlVHmRv0dDHrrbk1xWVlRjhxCA5uRzAz9qhIgzV5qLzKMvG9UJArxTuqsAsoqUrhvurUACAMjhXrUkrIijLqt_zbKJthVMNWUPDAXCAMjnqlBinXs2XV-gWYLSw7dkaBHnwQKkw7da9YGJeNR_GIOx9YdJe7daZQlowLQkNIOk9xhUmykW77sM3BlzTNSLx1ciiYHBPteKsLnmy8y5MSCGI9C8U81YNvsYri4yh8ymxR_83jBjy-ThSzVy3S5uip63EjQqc7HXOOJSgt4DUi2CQaN0PE6ugvGgEQVRHLSqvCWS0I3mUx2FXU30DI4Pq6b_NnoAnLpDReDfHSwVasV_IyUcmTL31g6JbWHKQF8zw2F8Cr9BdLHHeYsK2l8wzvu-FMHG7F8zw4H5vDCw7UkE5..'