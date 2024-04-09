<?php

$fields = [
    'user_name' => filter_var($_POST["user_name"], FILTER_SANITIZE_STRING),
    'company' => filter_var($_POST["company"], FILTER_SANITIZE_STRING),
    'department' => filter_var($_POST["department"], FILTER_SANITIZE_STRING),
    'user_email' => filter_var($_POST["user_email"], FILTER_SANITIZE_EMAIL),
    'user_phone' => filter_var($_POST["user_phone"], FILTER_SANITIZE_STRING),
    'inquiry' => filter_var($_POST["inquiry"], FILTER_SANITIZE_STRING),
    'user_question' => filter_var($_POST["user_question"], FILTER_SANITIZE_STRING),
];

var_dump($fields);

$admin_email = 'Digital_Production_G@ms-ad-hd.com';
$admin_subject = 'MS&ADインターリスク総研(取引先診断サービス)お問い合わせ・資料請求フォームに入力がありました';
$admin_message = '
<p>MS&ADインターリスク総研(取引先診断サービス)お問い合わせ・資料請求フォームに入力がありました。</p>
<p>--■お問い合わせ年月日: ' . date('Y') . '年' . (date('m') - 0) . '月' . (date("d") - 0) . '日</p>
<p>--■氏名 : ' . $fields['user_name'] . '</p>
<p>--■会社名 : ' . $fields['company'] . '</p>
<p>--■部署名 : ' . $fields['department'] . '</p>
<p>--■メールアドレス : ' . $fields['user_email'] . '</p>
<p>--■電話番号 : ' . $fields['user_phone'] . '</p>
<p>--■お問い合わせ内容 : ' . $fields['inquiry'] . '</p>
<p>--■ご質問・不明点等 : ' . $fields['user_question'] . '</p>
';

$headers = 'Content-Type: text/html; charset=utf-8' . "\r\n" .
    "From: Digital_Production_G@ms-ad-hd.com \r\n";


mail($admin_email, $admin_subject, $admin_message, $headers);
