export class DataServiceError<T> {
  constructor(public error: any, public requestData: T) {}
}
