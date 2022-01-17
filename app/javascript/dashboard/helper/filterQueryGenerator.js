const generatePayload = data => {
  let payload = data.map(item => {
    if (Array.isArray(item.values)) {
      item.values = item.values.map(val => val.id);
    } else if (typeof item.values === 'object') {
      item.values = [item.values.id];
    } else if (!item.values) {
      item.values = [];
    } else {
      item.values = [item.values];
    }
    return item;
  });
  payload[payload.length - 1].query_operator = undefined;
  return { payload };
};

export default generatePayload;
