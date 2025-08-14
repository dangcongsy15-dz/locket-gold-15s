let body = $response.body;

// Chỉ bật trạng thái Gold
body = body.replace(/"is_gold":false/g, '"is_gold":true');

// Set giới hạn quay video 15 giây
body = body.replace(/"max_duration":\d+/g, '"max_duration":15');
if (!body.includes('"max_duration":')) {
    body = body.replace(/}\s*$/, ',"max_duration":15}');
}

$done({ body });
