const validationMethod = (role, method) => {
  if (method === 'GET' && role) return true;
  if (method !== 'GET' && role === 'admin') {
    return true;
  }
  return false;
};

const authRole = (req, res, next) => {
  const { method } = req;
  const { employee } = req;
  
  const isAuthorized = validationMethod(employee.role, method);
  
  if (isAuthorized) return next();

  res.status(401).json({ message: 'Role not allowed' })     
};

module.exports = authRole;