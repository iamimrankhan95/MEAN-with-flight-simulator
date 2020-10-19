export interface ServerResponse {
  status: string;
  message: string;
  data: any;
  paginationObject: {
    total: number;
    pageNo: number;
    pageSize: number;
  } | any;
}
