const statusCodes = {
  success: {
    200: "OK",
    201: "Created",
  },
  error: {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
  },
};

class Response {
  static success(code: keyof typeof statusCodes.success, data?: unknown) {
    return {
      success: true,
      code,
      message: statusCodes.success[code],
      data,
    };
  }

  static error(
    code: keyof typeof statusCodes.error,
    data?: { details?: unknown }
  ) {
    return {
      success: false,
      code,
      message: statusCodes.error[code],
      data,
    };
  }
}

export const responseSuccess = Response.success;
export const responseError = Response.error;
