var ObjectUtils;

ObjectUtils = {
  isArray: function(obj) {
    return '[object Array]' === Object.prototype.toString.call(obj);
  }
};
