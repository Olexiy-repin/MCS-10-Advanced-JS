// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js
// https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js

/*
 * Завантаження скриптів
 */

//TODO: Рішення через колбеки
// const loadScript = (scriptUrl, onSuccess, onError) => {
//   const scriptEl = document.createElement('script');

//   scriptEl.src = scriptUrl;

//   scriptEl.addEventListener('load', event => {
//     onSuccess(`${scriptUrl} завантажився успішно!`);
//   });

//   scriptEl.addEventListener('error', event => {
//     onError(`${scriptUrl} не завантажився!`);
//   });

//   document.head.append(scriptEl);
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   message => {
//     console.log(message);

//     loadScript(
//       'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js',
//       message => {
//         console.log(message);

//         loadScript(
//           'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
//           message => {
//             console.log(message);
//           },
//           errMessage => {
//             console.log(errMessage);
//           }
//         );
//       },
//       errMessage => {
//         console.log(errMessage);
//       }
//     );
//   },
//   errMessage => {
//     console.log(errMessage);
//   }
// );

//TODO: Рішення через проміси
const loadScript = scriptUrl => {
  const promise = new Promise((resolve, reject) => {
    const scriptEl = document.createElement('script');

    scriptEl.src = scriptUrl;

    scriptEl.addEventListener('load', event => {
      resolve(`${scriptUrl} завантажився успішно!`);
    });

    scriptEl.addEventListener('error', event => {
      reject(`${scriptUrl} не завантажився!`);
    });

    document.head.append(scriptEl);
  });

  return promise;
};

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
  .then(message => {
    console.log(message);
  })
  .catch(errMessage => {
    console.log(errMessage);
  });

loadScript('https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js')
  .then(message => {
    console.log(message);

    return loadScript('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');
  })
  .then(message => {
    console.log(message);
  })
  .catch(errMessage => {
    console.log(errMessage);
  });
