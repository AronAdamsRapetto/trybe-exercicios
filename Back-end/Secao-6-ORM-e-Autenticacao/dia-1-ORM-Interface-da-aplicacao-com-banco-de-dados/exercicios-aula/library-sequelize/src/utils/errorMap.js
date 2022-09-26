const errorMap = {
  'NOT_FOUND': 404,
};

const mapingError = (type) => errorMap[type] || 500;