export interface ServerResponse {
  status: string;
  message: String;
  data: any;
  paginationObject: {
    total: number;
    pageNo: number;
    pageSize: number;
  } | any;
}
