//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    const objectInCache = cache.find((item) => item.hash === hash);

    if (objectInCache) {
      console.log("Из кеша: " + objectInCache.value);
      return "Из кеша: " + objectInCache.value;
    }

    const result = func(...args);
    cache.push({ hash, value: result });

    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutID = null;
  let firstCall = true;

  function wrapper(...args) {
    wrapper.allCount++;

    if (firstCall) {
      firstCall = false;
      wrapper.count++;
      func.apply(this, args);
    } else {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      timeoutID = setTimeout(() => {
        wrapper.count++;
        func.apply(this, args);
        timeoutID = null;
      }, delay);
    }
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}
