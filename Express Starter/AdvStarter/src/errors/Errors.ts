class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public isOperational: boolean = true
  ) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}



export class NotFound extends AppError {
    constructor (message : string) {
        super(message, 404);
    }
}

export class BadRequest extends AppError {
    constructor(message : string){
        super(message, 400);
    }
}



export class Unauthorized extends AppError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

export class Forbidden extends AppError {
  constructor(message = "Forbidden") {
    super(message, 403);
  }
}

export class Conflict extends AppError {
  constructor(message = "Conflict") {
    super(message, 409);
  }
}

export class TooManyRequests extends AppError {
  constructor(message = "Too many requests") {
    super(message, 429);
  }
}
