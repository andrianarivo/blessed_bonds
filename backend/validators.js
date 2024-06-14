exports.isHexColor = (value) => {
  return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(value);
};

exports.isArrayOfIds = (value) => {
  return value.every((id) => Number.isInteger(id) && id >= 0);
};
