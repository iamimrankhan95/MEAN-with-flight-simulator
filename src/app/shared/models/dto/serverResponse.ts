export class ServerResponse {
  constructor(data = null) {
    this.data = data;
  }
  status: string;
  message: string;
  data: any;
  paginationObject: {
    total: number;
    pageNo: number;
    pageSize: number;
  } | any;
}
