class APIResponse {
  dynamic data;
  List<Map<String, dynamic>> errors;
  int page;
  int pageSize;
  int pageCount;

  APIResponse({
    this.data,
    this.errors,
    this.page,
    this.pageSize,
    this.pageCount,
  });

  factory APIResponse.fromJson(Map<String, dynamic> json) {
    var response = APIResponse();

    response.data = json['data'] ?? null;
    response.errors = json['errors'] ?? [];
    response.page = json['page'] ?? null;
    response.pageSize = json['pageSize'] ?? null;
    response.pageCount = json['pageCount'] ?? null;

    return response;
  }
}
