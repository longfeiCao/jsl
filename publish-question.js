function getCreateCon() {
  fetch("https://wukong.toutiao.com/wenda/web/nativefeed/brow/?concern_id=6300775428692904450&t=1656056847757&_signature=V7T1egAANQTysyTuvU.S4Ve09W", {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "wendacsrftoken": "3369c7ab7c433a99e0f5c29f46b27774",
      "x-csrftoken": "df58dfae4c12f2f73b0933cf2fc75129.YrVsDw.SRBJv_QCrnwheywjuQIafqHs9QQ",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "tt_webid=7112709818515359269; wendacsrftoken=3369c7ab7c433a99e0f5c29f46b27774; answer_finalFrom=https%3A%2F%2Fwww.baidu.com%2Flink; answer_enterFrom=; cookie_tt_page=8f77072807eea599e8ac932e9205010d; MONITOR_WEB_ID=a142c2ab-ec23-454b-b838-c735064b8fa3; _ga=GA1.2.346950703.1656056814; _gid=GA1.2.427437367.1656056814; _gat=1; passport_csrf_token=732eb18e9da8efd788ba186bb9ebbd4a; passport_csrf_token_default=732eb18e9da8efd788ba186bb9ebbd4a; s_v_web_id=l4s5gvxq_Mhx0oUpv_eYpg_4dTc_BJjU_lBjLqNza2aYC; wenda_last_concern_id=6300775428692904450; csrf_token=df58dfae4c12f2f73b0933cf2fc75129.YrVsDw.SRBJv_QCrnwheywjuQIafqHs9QQ",
      "Referer": "https://wukong.toutiao.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }).then(res=>res.json()).then(data=>{
    let list = data.data.map(item=>{
      let content = item.answer.abstract_text.split(",")
      //  || item.answer.content
      return {
        question: item.question.title,
        answer: content.slice(3,content.length-4),
        qid: item.answer.qid,
        pic: item.answer.content_abstract.image_url || ''
      }
    })

    pub(list[0].question,list[0].answer)
    pubqingxiang(list[1].question,list[1].qid,list[1].pic)
  })
}

function pub(title,content) {
  fetch("https://jsjsl.lexiangla.com/api/v1/questions", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "content-type": "application/json;charset=UTF-8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-auth-type": "api",
      "x-requested-with": "XMLHttpRequest",
      "x-xsrf-token": "a6MBea3rZtk%2BfpJ5I2MGGsYtdwVwMBoix%2F5DxrgEayK2EUkaSUC42Rue%2Bn0s7GXuJlsORBqO0DXNTJe6CcKYzEJK%2F4mH4k4JYSoFuHIIXYU%3D",
      "cookie": "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGV4aWFuZ2xhLmNvbVwvYXV0aFwvd29ya193ZWNoYXRfbG9naW5fY2FsbGJhY2siLCJpYXQiOjE2NTYwNTE1NTIsImV4cCI6MTY1ODY0MzU1MiwibmJmIjoxNjU2MDUxNTUyLCJqdGkiOiIzQTYxODdQRVliODlDNnd6Iiwic3ViIjoiNTgyMTI0MzA0ZjEwMTFlYThlZTg1MjU0MDBlZGVmMjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3IiwiY29tcGFueV9pZCI6ImViNWE3Njc2NDYzMTExZWE4NzhiNTI1NDAwMmYxMDIwIiwic3RhZmZfdXVpZCI6IjU4MTYwM2I2NGYxMDExZWFiNjUwNTI1NDAwZWRlZjIxIn0.DVZyJrwLQTNB43Sr3ZEBvu1cIIWf7F5tqTLxMTTN4sY; company_server_type=workwechat; company_code=jsjsl; company_old_code=eb59bc2c463111ea97115254002f1020; company_display_name=%E6%B1%9F%E8%8B%8F%E9%87%91%E4%B8%9D%E5%88%A9; ti18nLng=zh-CN; XSRF-TOKEN=a6MBea3rZtk%252BfpJ5I2MGGsYtdwVwMBoix%252F5DxrgEayK2EUkaSUC42Rue%252Bn0s7GXuPOYq%252FeERMQ%252Fn7J224kDXGTR%252FpPHFM0YRi9o%252B6x0OZEo%253D",
      "Referer": "https://jsjsl.lexiangla.com/questions/create?company_from=jsjsl",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": `{\"title\":\"${title}\",\"content\":\"${content}\",\"tags\":[\"问题\"]}`,
    "method": "POST"
  }).then(res=>res.json()).then(data=>{
    console.log(data)
  })
}

function pubqingxiang(title,qid,pic) {
  let link = `https://wukong.toutiao.com/question/${qid}/?origin_source=question_click_write_answer_feed`
  fetch("https://jsjsl.lexiangla.com/api/v1/shares", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "content-type": "application/json;charset=UTF-8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-auth-type": "api",
      "x-requested-with": "XMLHttpRequest",
      "x-xsrf-token": "a6MBea3rZtk%2BfpJ5I2MGGsYtdwVwMBoix%2F5DxrgEayK2EUkaSUC42Rue%2Bn0s7GXuJlsORBqO0DXNTJe6CcKYzEJK%2F4mH4k4JYSoFuHIIXYU%3D",
      "cookie": "company_server_type=workwechat; company_code=jsjsl; company_old_code=eb59bc2c463111ea97115254002f1020; company_display_name=%E6%B1%9F%E8%8B%8F%E9%87%91%E4%B8%9D%E5%88%A9; ti18nLng=zh-CN; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGV4aWFuZ2xhLmNvbVwvYXV0aFwvd2VjaGF0X2xvZ2luX2NhbGxiYWNrIiwiaWF0IjoxNjU2MDUzNjYxLCJleHAiOjE2NTg2NDU2NjEsIm5iZiI6MTY1NjA1MzY2MSwianRpIjoicmxPNXBsZDVTcVdhazB2RCIsInN1YiI6IjU4MjEyNDMwNGYxMDExZWE4ZWU4NTI1NDAwZWRlZjIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImNvbXBhbnlfaWQiOiJlYjVhNzY3NjQ2MzExMWVhODc4YjUyNTQwMDJmMTAyMCIsInN0YWZmX3V1aWQiOiI1ODE2MDNiNjRmMTAxMWVhYjY1MDUyNTQwMGVkZWYyMSJ9.0dob-sUIM9qa82a5zGmbyc4DHCVuL1tu8NkkG2oJMW4; XSRF-TOKEN=a6MBea3rZtk%252BfpJ5I2MGGsYtdwVwMBoix%252F5DxrgEayK2EUkaSUC42Rue%252Bn0s7GXuLSiD73wGHwmzJy%252FiRi%252FesKZKX0zprSW1AQVxxvWJSAI%253D",
      "Referer": "https://jsjsl.lexiangla.com/company/global/moments?company_from=jsjsl",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": `{\"module_type\":\"company\",\"module_id\":\"global\",\"multimedia\":{\"type\":\"link\",\"data\":{\"title\":\"${title}\",\"is_lx\":false,\"type\":null,\"pic_url\":\"${pic}\",\"link\":\"${link}\"}},\"content\":\"今日热点\"}`,
    "method": "POST"
  });
}

function pinglunqingxiang(id) {
  fetch(`https://jsjsl.lexiangla.com/api/v1/shares/${id}/replies`, {
    "headers": {
      "accept": "application/json, text/plain, *!/!*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "content-type": "application/json;charset=UTF-8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-auth-type": "api",
      "x-requested-with": "XMLHttpRequest",
      "x-xsrf-token": "a6MBea3rZtk%2BfpJ5I2MGGsYtdwVwMBoix%2F5DxrgEayK2EUkaSUC42Rue%2Bn0s7GXuJlsORBqO0DXNTJe6CcKYzEJK%2F4mH4k4JYSoFuHIIXYU%3D",
      "cookie": "company_server_type=workwechat; company_code=jsjsl; company_old_code=eb59bc2c463111ea97115254002f1020; company_display_name=%E6%B1%9F%E8%8B%8F%E9%87%91%E4%B8%9D%E5%88%A9; ti18nLng=zh-CN; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGV4aWFuZ2xhLmNvbVwvYXV0aFwvd2VjaGF0X2xvZ2luX2NhbGxiYWNrIiwiaWF0IjoxNjU2MDUzNjYxLCJleHAiOjE2NTg2NDU2NjEsIm5iZiI6MTY1NjA1MzY2MSwianRpIjoicmxPNXBsZDVTcVdhazB2RCIsInN1YiI6IjU4MjEyNDMwNGYxMDExZWE4ZWU4NTI1NDAwZWRlZjIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImNvbXBhbnlfaWQiOiJlYjVhNzY3NjQ2MzExMWVhODc4YjUyNTQwMDJmMTAyMCIsInN0YWZmX3V1aWQiOiI1ODE2MDNiNjRmMTAxMWVhYjY1MDUyNTQwMGVkZWYyMSJ9.0dob-sUIM9qa82a5zGmbyc4DHCVuL1tu8NkkG2oJMW4; XSRF-TOKEN=a6MBea3rZtk%252BfpJ5I2MGGsYtdwVwMBoix%252F5DxrgEayK2EUkaSUC42Rue%252Bn0s7GXudpge32Pa7BBEzVQnezSD4D1wLZqyndnofqXCznUQKAU%253D",
      "Referer": "https://jsjsl.lexiangla.com/company/global/moments?company_from=jsjsl",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"module_type\":\"company\",\"module_id\":\"global\",\"content\":\"再学习\"}",
    "method": "POST"
  }).then(res=>res.json()).then(data=>{
    console.log("评论轻享==>",data)
  })
}


function getWendangList() {
  fetch("https://jsjsl.lexiangla.com/api/v1/docs?filter=recommended&limit=20&page=1", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-auth-type": "api",
      "x-requested-with": "XMLHttpRequest",
      "x-xsrf-token": "a6MBea3rZtk%2BfpJ5I2MGGsYtdwVwMBoix%2F5DxrgEayK2EUkaSUC42Rue%2Bn0s7GXuJlsORBqO0DXNTJe6CcKYzEJK%2F4mH4k4JYSoFuHIIXYU%3D",
      "cookie": "company_server_type=workwechat; company_code=jsjsl; company_old_code=eb59bc2c463111ea97115254002f1020; company_display_name=%E6%B1%9F%E8%8B%8F%E9%87%91%E4%B8%9D%E5%88%A9; ti18nLng=zh-CN; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGV4aWFuZ2xhLmNvbVwvYXV0aFwvd2VjaGF0X2xvZ2luX2NhbGxiYWNrIiwiaWF0IjoxNjU2MDUzNjYxLCJleHAiOjE2NTg2NDU2NjEsIm5iZiI6MTY1NjA1MzY2MSwianRpIjoicmxPNXBsZDVTcVdhazB2RCIsInN1YiI6IjU4MjEyNDMwNGYxMDExZWE4ZWU4NTI1NDAwZWRlZjIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImNvbXBhbnlfaWQiOiJlYjVhNzY3NjQ2MzExMWVhODc4YjUyNTQwMDJmMTAyMCIsInN0YWZmX3V1aWQiOiI1ODE2MDNiNjRmMTAxMWVhYjY1MDUyNTQwMGVkZWYyMSJ9.0dob-sUIM9qa82a5zGmbyc4DHCVuL1tu8NkkG2oJMW4; XSRF-TOKEN=a6MBea3rZtk%252BfpJ5I2MGGsYtdwVwMBoix%252F5DxrgEayK2EUkaSUC42Rue%252Bn0s7GXuLSiD73wGHwmzJy%252FiRi%252FesGxqh5W%252FEtxnRVFPQa%252BtQv4%253D",
      "Referer": "https://jsjsl.lexiangla.com/docs?type=recommend&company_from=jsjsl",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }).then(res=>res.json()).then(data=>{
    let list = data.data.map(item=>{
      return {
        target_id: item.target_id
      }
    })

    pinglunwendang(list[1].target_id)
    dianzan(list[5].target_id)
    shoucang(list[5].target_id)
    pinglunqingxiang(list[1].target_id)
  })
}

function getQuestionList() {
  fetch("https://jsjsl.lexiangla.com/api/v1/questions?with_hot_answer=1&limit=20&page=1", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-auth-type": "api",
      "x-requested-with": "XMLHttpRequest",
      "x-xsrf-token": "a6MBea3rZtk%2BfpJ5I2MGGsYtdwVwMBoix%2F5DxrgEayK2EUkaSUC42Rue%2Bn0s7GXuJlsORBqO0DXNTJe6CcKYzEJK%2F4mH4k4JYSoFuHIIXYU%3D",
      "cookie": "company_server_type=workwechat; company_code=jsjsl; company_old_code=eb59bc2c463111ea97115254002f1020; company_display_name=%E6%B1%9F%E8%8B%8F%E9%87%91%E4%B8%9D%E5%88%A9; ti18nLng=zh-CN; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGV4aWFuZ2xhLmNvbVwvYXV0aFwvd2VjaGF0X2xvZ2luX2NhbGxiYWNrIiwiaWF0IjoxNjU2MDUzNjYxLCJleHAiOjE2NTg2NDU2NjEsIm5iZiI6MTY1NjA1MzY2MSwianRpIjoicmxPNXBsZDVTcVdhazB2RCIsInN1YiI6IjU4MjEyNDMwNGYxMDExZWE4ZWU4NTI1NDAwZWRlZjIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImNvbXBhbnlfaWQiOiJlYjVhNzY3NjQ2MzExMWVhODc4YjUyNTQwMDJmMTAyMCIsInN0YWZmX3V1aWQiOiI1ODE2MDNiNjRmMTAxMWVhYjY1MDUyNTQwMGVkZWYyMSJ9.0dob-sUIM9qa82a5zGmbyc4DHCVuL1tu8NkkG2oJMW4; XSRF-TOKEN=a6MBea3rZtk%252BfpJ5I2MGGsYtdwVwMBoix%252F5DxrgEayK2EUkaSUC42Rue%252Bn0s7GXuazJHuM9fEunPOBqNqSR%252FLEd2oJlH5pKr1imOg7vmAtY%253D",
      "Referer": "https://jsjsl.lexiangla.com/questions?company_from=jsjsl",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  }).then(res=>res.json()).then(data=>{
    let list = data.data.map(item=>{
      return {
        id: item.id
      }
    })

    huida(list[0].id)
  })
}

function huida(id) {
  fetch(`https://jsjsl.lexiangla.com/api/v1/questions/${id}/answers`, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "content-type": "application/json;charset=UTF-8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-auth-type": "api",
      "x-requested-with": "XMLHttpRequest",
      "x-xsrf-token": "a6MBea3rZtk%2BfpJ5I2MGGsYtdwVwMBoix%2F5DxrgEayK2EUkaSUC42Rue%2Bn0s7GXuJlsORBqO0DXNTJe6CcKYzEJK%2F4mH4k4JYSoFuHIIXYU%3D",
      "cookie": "company_server_type=workwechat; company_code=jsjsl; company_old_code=eb59bc2c463111ea97115254002f1020; company_display_name=%E6%B1%9F%E8%8B%8F%E9%87%91%E4%B8%9D%E5%88%A9; ti18nLng=zh-CN; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGV4aWFuZ2xhLmNvbVwvYXV0aFwvd2VjaGF0X2xvZ2luX2NhbGxiYWNrIiwiaWF0IjoxNjU2MDUzNjYxLCJleHAiOjE2NTg2NDU2NjEsIm5iZiI6MTY1NjA1MzY2MSwianRpIjoicmxPNXBsZDVTcVdhazB2RCIsInN1YiI6IjU4MjEyNDMwNGYxMDExZWE4ZWU4NTI1NDAwZWRlZjIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImNvbXBhbnlfaWQiOiJlYjVhNzY3NjQ2MzExMWVhODc4YjUyNTQwMDJmMTAyMCIsInN0YWZmX3V1aWQiOiI1ODE2MDNiNjRmMTAxMWVhYjY1MDUyNTQwMGVkZWYyMSJ9.0dob-sUIM9qa82a5zGmbyc4DHCVuL1tu8NkkG2oJMW4; XSRF-TOKEN=a6MBea3rZtk%252BfpJ5I2MGGsYtdwVwMBoix%252F5DxrgEayK2EUkaSUC42Rue%252Bn0s7GXuazJHuM9fEunPOBqNqSR%252FLEfj%252B4FrgNLpIh2c6%252BHLcns%253D",
      "Referer": "https://jsjsl.lexiangla.com/questions/2185e230f07111ecb957fe2a89e7507b?company_from=jsjsl",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"content\":\"<p>学习了！</p>\",\"is_anonymous\":false}",
    "method": "POST"
  });
}

function pinglunwendang(target_id,target_type = 'document') {
  console.log(target_id)
  console.log(`{\"target_id\":\"${target_id}\",\"target_type\":\"${target_type}\",\"content\":\"你好谢谢！ /微笑\"}`)
  fetch("https://jsjsl.lexiangla.com/api/v1/comments", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "content-type": "application/json;charset=UTF-8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-auth-type": "api",
      "x-requested-with": "XMLHttpRequest",
      "x-xsrf-token": "a6MBea3rZtk%2BfpJ5I2MGGsYtdwVwMBoix%2F5DxrgEayK2EUkaSUC42Rue%2Bn0s7GXuJlsORBqO0DXNTJe6CcKYzEJK%2F4mH4k4JYSoFuHIIXYU%3D",
      "cookie": "company_server_type=workwechat; company_code=jsjsl; company_old_code=eb59bc2c463111ea97115254002f1020; company_display_name=%E6%B1%9F%E8%8B%8F%E9%87%91%E4%B8%9D%E5%88%A9; ti18nLng=zh-CN; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGV4aWFuZ2xhLmNvbVwvYXV0aFwvd2VjaGF0X2xvZ2luX2NhbGxiYWNrIiwiaWF0IjoxNjU2MDUzNjYxLCJleHAiOjE2NTg2NDU2NjEsIm5iZiI6MTY1NjA1MzY2MSwianRpIjoicmxPNXBsZDVTcVdhazB2RCIsInN1YiI6IjU4MjEyNDMwNGYxMDExZWE4ZWU4NTI1NDAwZWRlZjIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImNvbXBhbnlfaWQiOiJlYjVhNzY3NjQ2MzExMWVhODc4YjUyNTQwMDJmMTAyMCIsInN0YWZmX3V1aWQiOiI1ODE2MDNiNjRmMTAxMWVhYjY1MDUyNTQwMGVkZWYyMSJ9.0dob-sUIM9qa82a5zGmbyc4DHCVuL1tu8NkkG2oJMW4; XSRF-TOKEN=a6MBea3rZtk%252BfpJ5I2MGGsYtdwVwMBoix%252F5DxrgEayK2EUkaSUC42Rue%252Bn0s7GXuLSiD73wGHwmzJy%252FiRi%252FesJf%252BFrg5PgPSKkkCGGKQuZA%253D",
      "Referer": `https://jsjsl.lexiangla.com/teams/k100005/docs/${target_id}?company_from=jsjsl`,
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": `{\"target_id\":\"${target_id}\",\"target_type\":\"document\",\"content\":\"你好谢谢！ /微笑\"}`,
    "method": "POST"
  }).then(res=>res.json()).then(data=>{
    console.log("评论文档==>",data)
  })
}

function dianzan(target_id) {
  console.log(target_id)
  fetch(`https://jsjsl.lexiangla.com/api/v1/staff/likes/documents/${target_id}`, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-auth-type": "api",
      "x-requested-with": "XMLHttpRequest",
      "x-xsrf-token": "a6MBea3rZtk%2BfpJ5I2MGGsYtdwVwMBoix%2F5DxrgEayK2EUkaSUC42Rue%2Bn0s7GXuJlsORBqO0DXNTJe6CcKYzEJK%2F4mH4k4JYSoFuHIIXYU%3D",
      "cookie": "company_server_type=workwechat; company_code=jsjsl; company_old_code=eb59bc2c463111ea97115254002f1020; company_display_name=%E6%B1%9F%E8%8B%8F%E9%87%91%E4%B8%9D%E5%88%A9; ti18nLng=zh-CN; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGV4aWFuZ2xhLmNvbVwvYXV0aFwvd2VjaGF0X2xvZ2luX2NhbGxiYWNrIiwiaWF0IjoxNjU2MDUzNjYxLCJleHAiOjE2NTg2NDU2NjEsIm5iZiI6MTY1NjA1MzY2MSwianRpIjoicmxPNXBsZDVTcVdhazB2RCIsInN1YiI6IjU4MjEyNDMwNGYxMDExZWE4ZWU4NTI1NDAwZWRlZjIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImNvbXBhbnlfaWQiOiJlYjVhNzY3NjQ2MzExMWVhODc4YjUyNTQwMDJmMTAyMCIsInN0YWZmX3V1aWQiOiI1ODE2MDNiNjRmMTAxMWVhYjY1MDUyNTQwMGVkZWYyMSJ9.0dob-sUIM9qa82a5zGmbyc4DHCVuL1tu8NkkG2oJMW4; XSRF-TOKEN=a6MBea3rZtk%252BfpJ5I2MGGsYtdwVwMBoix%252F5DxrgEayK2EUkaSUC42Rue%252Bn0s7GXuwUs3gsBEH0VBKLl7DuEw%252BNLxUEHjLJV36wq1%252BxRzvEI%253D",
      "Referer": `https://jsjsl.lexiangla.com/teams/k100005/docs/${target_id}?company_from=jsjsl`,
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "PUT"
  }).then(res=>res.json()).then(data=>{
    console.log("点赞===>",data)
  })
}

function shoucang(target_id) {
  fetch(`https://jsjsl.lexiangla.com/api/v1/staff/favorites/documents/${target_id}`, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-auth-type": "api",
      "x-requested-with": "XMLHttpRequest",
      "x-xsrf-token": "a6MBea3rZtk%2BfpJ5I2MGGsYtdwVwMBoix%2F5DxrgEayK2EUkaSUC42Rue%2Bn0s7GXuJlsORBqO0DXNTJe6CcKYzEJK%2F4mH4k4JYSoFuHIIXYU%3D",
      "cookie": "company_server_type=workwechat; company_code=jsjsl; company_old_code=eb59bc2c463111ea97115254002f1020; company_display_name=%E6%B1%9F%E8%8B%8F%E9%87%91%E4%B8%9D%E5%88%A9; ti18nLng=zh-CN; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGV4aWFuZ2xhLmNvbVwvYXV0aFwvd2VjaGF0X2xvZ2luX2NhbGxiYWNrIiwiaWF0IjoxNjU2MDUzNjYxLCJleHAiOjE2NTg2NDU2NjEsIm5iZiI6MTY1NjA1MzY2MSwianRpIjoicmxPNXBsZDVTcVdhazB2RCIsInN1YiI6IjU4MjEyNDMwNGYxMDExZWE4ZWU4NTI1NDAwZWRlZjIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImNvbXBhbnlfaWQiOiJlYjVhNzY3NjQ2MzExMWVhODc4YjUyNTQwMDJmMTAyMCIsInN0YWZmX3V1aWQiOiI1ODE2MDNiNjRmMTAxMWVhYjY1MDUyNTQwMGVkZWYyMSJ9.0dob-sUIM9qa82a5zGmbyc4DHCVuL1tu8NkkG2oJMW4; XSRF-TOKEN=a6MBea3rZtk%252BfpJ5I2MGGsYtdwVwMBoix%252F5DxrgEayK2EUkaSUC42Rue%252Bn0s7GXuazJHuM9fEunPOBqNqSR%252FLH%252B1W0JVpQ3E6sQ%252Fi9Pcxug%253D",
      "Referer": `https://jsjsl.lexiangla.com/teams/k100005/docs/${target_id}?company_from=jsjsl`,
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "PUT"
  })
}

getCreateCon()
getWendangList()
getQuestionList()
