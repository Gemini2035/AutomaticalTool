// import { httpRequest } from "@/hooks";

export type GetCookie = () => Promise<string>;

// TODO: cookie获取代码化

export const getCookie: GetCookie = async () =>
  'qcc_did=a7a3c38c-d046-4a2a-8072-6cb58eb22832; UM_distinctid=191d06e9d71581-07345aed99cde1-17525637-13c680-191d06e9d728e2; QCCSESSID=925422a3fc44da3b00e04be477; acw_tc=0a47308e17271011191891998e00408d83e38ca549aa1663bbd2d28ac46b3f; CNZZDATA1254842228=976068649-1725778796-https%253A%252F%252Fwww.google.com%252F%7C1727101174; tfstk=foUi_sspNv95eA-ntMu1mD64xgjpfCgj4-LxHqHVYvkBBdLTgqk03vUtB53w1kw8aFUOfqLm5qgVeTQRyCNslqWTNkIWCvlswZLqQfRwmL_AeTQRJVdk-yW8DDKO-BcjLflquf5H8jlxufo2u6DEibt2Q-y4T6cxZjlwuEke8jlmuxyqu6VerhOEB-y_8Og8UBbIcG4KscDDkvL09zT-qYPZKER0-fvqU5kHuEk6UoE8g-WDk4r7KrmzeZYIW7qE8fqhgHkZqlytO-bk7Az3_PkT79LtQPNU2reFgEk0Yuou45WpxXqU6ymLzTYmfky_Vm4ApagT27Uj4P7MFvnSi80ax98gUgzwY3RZbEGFMy-XcclItYhZF1232SmNb6fH4uiZOf7Rt6xbxclItYCht3JnbXGNy'