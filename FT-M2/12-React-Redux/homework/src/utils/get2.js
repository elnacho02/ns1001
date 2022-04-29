export function get2(path) {
    return fetch("https://api.themoviedb.org/3/search/movie?api_key=a734fefe2cf2f2c7b213cfc55a4d1aa8&query="+path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((result) => result.json());
  }

 /*  fetch("https://api.themoviedb.org/3/search/movie?api_key=a734fefe2cf2f2c7b213cfc55a4d1aa8&query=Jack+Reacher")
  .then(response => response.json())
  .then(data => console.log(data)); */