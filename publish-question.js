fetch("https://jsjsl.lexiangla.com/api/v1/points/check-in", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-auth-type": "api",
    "x-requested-with": "XMLHttpRequest",
    "x-xsrf-token": "a6MBea3rZtk%2BfpJ5I2MGGsYtdwVwMBoix%2F5DxrgEayK2EUkaSUC42Rue%2Bn0s7GXuP1sBrACwfUrCtQ4HEoiArKVN3zGLDzeepA1%2B8hd66zA%3D",
    "cookie": "company_server_type=workwechat; company_code=jsjsl; company_old_code=eb59bc2c463111ea97115254002f1020; company_display_name=%E6%B1%9F%E8%8B%8F%E9%87%91%E4%B8%9D%E5%88%A9; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGV4aWFuZ2xhLmNvbVwvYXV0aFwvd2VjaGF0X2xvZ2luX2NhbGxiYWNrIiwiaWF0IjoxNjcwMjIxMTk5LCJleHAiOjE2NzI4MTMxOTksIm5iZiI6MTY3MDIyMTE5OSwianRpIjoibHR3TlNYMmhuT3ZtcVlNViIsInN1YiI6IjU4MjEyNDMwNGYxMDExZWE4ZWU4NTI1NDAwZWRlZjIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImNvbXBhbnlfaWQiOiJlYjVhNzY3NjQ2MzExMWVhODc4YjUyNTQwMDJmMTAyMCIsInN0YWZmX3V1aWQiOiI1ODE2MDNiNjRmMTAxMWVhYjY1MDUyNTQwMGVkZWYyMSJ9.45cHCiE9rd-J7n1h-C4WQD8NkRZ_abb4a-WAS9NCVfk; ti18nLng=zh-CN; XSRF-TOKEN=a6MBea3rZtk%252BfpJ5I2MGGsYtdwVwMBoix%252F5DxrgEayK2EUkaSUC42Rue%252Bn0s7GXu9hTvwWpf7G1K3UGd55qxSqY3PRyHho42l4%252BwHBk8LcY%253D",
    "Referer": "https://jsjsl.lexiangla.com/?company_from=jsjsl",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "POST"
}).then(response => response.json()).then(data => console.log(data)).catch(err => console.error(err));
