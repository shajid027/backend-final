const validate = (schema) => async (req, res, next) => {
  try {
    const parsed = await schema.parseAsync(req.body);
    req.body = parsed;
    next();
  } catch (err) {
    let Message = err.message;

    
    if (typeof Message === 'string' && Message.startsWith('[')) {
      try {
        const parsedErrors = JSON.parse(Message);
        if (Array.isArray(parsedErrors) && parsedErrors[0]?.message) {
          Message = parsedErrors[0].message;
        }
      } catch (e) {
        console.error(e);
      }
    }

    return res.status(422).json({
      Message,
    });
  }
};

module.exports = validate;
