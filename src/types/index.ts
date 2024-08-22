export interface FileDataCopilot {
  representative: string;
  commerce: string;
  phone: string;
}

export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
