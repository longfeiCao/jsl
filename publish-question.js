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
    "x-xsrf-token": "a6MBea3rZtk%2BfpJ5I2MGGsYtdwVwMBoix%2F5DxrgEayK2EUkaSUC42Rue%2Bn0s7GXusvK%2BBxBLru2Aw%2B1NROjldXMKrpoDRapqUCAhyIV9feQ%3D",
    "cookie": "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGV4aWFuZ2xhLmNvbVwvYXV0aFwvd29ya193ZWNoYXRfbG9naW5fY2FsbGJhY2siLCJpYXQiOjE2ODY1NDk3OTIsImV4cCI6MTY4OTE0MTc5MiwibmJmIjoxNjg2NTQ5NzkyLCJqdGkiOiI2NU9PcHN2R3BvUENXYmowIiwic3ViIjoiNTgyMTI0MzA0ZjEwMTFlYThlZTg1MjU0MDBlZGVmMjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3IiwiY29tcGFueV9pZCI6ImViNWE3Njc2NDYzMTExZWE4NzhiNTI1NDAwMmYxMDIwIiwic3RhZmZfdXVpZCI6IjU4MTYwM2I2NGYxMDExZWFiNjUwNTI1NDAwZWRlZjIxIn0.E34q6ha2eKWV1g4KCk9t6pwR2uzPahR8xapmEgbjR9A; company_server_type=workwechat; company_code=jsjsl; company_old_code=eb59bc2c463111ea97115254002f1020; company_display_name=%E6%B1%9F%E8%8B%8F%E9%87%91%E4%B8%9D%E5%88%A9; ti18nLng=zh-CN; XSRF-TOKEN=a6MBea3rZtk%252BfpJ5I2MGGsYtdwVwMBoix%252F5DxrgEayK2EUkaSUC42Rue%252Bn0s7GXusvK%252BBxBLru2Aw%252B1NROjldXMKrpoDRapqUCAhyIV9feQ%253D",
    "Referer": "https://jsjsl.lexiangla.com/?company_from=jsjsl",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "POST"
}).then(response => response.json()).then(data => console.log(data)).catch(err => console.error(err));
