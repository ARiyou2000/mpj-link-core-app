class ApiResponse {
  action: boolean;
  result: any;

  constructor(action: boolean, result: any) {
    this.action = action;
    this.result = result;
  }
}

export default ApiResponse;
