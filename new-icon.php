<?php
/*
Plugin Name: New Post Icon
Description: 新しい投稿のタイトルに「NEW!」アイコンを追加する。
Version: 1.0
Author: NguyenDuc
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

function add_new_icon_to_title($title, $id)
{
    $days = 10; // Số ngày để hiển thị biểu tượng "NEW!"

    if (get_post_type($id) == 'post') {
        $now = date_i18n('U'); // Lấy thời gian hiện tại
        $post_time = get_the_time('U', $id); // Lấy thời gian đăng bài
        $last = $now - ($days * 24 * 60 * 60); // Tính thời gian cho khoảng thời gian đã định
        if ($post_time > $last) {
            $title = $title . ' <span class="new-txt">NEW!</span>';
        }
    }
    return $title;
}

add_filter('the_title', 'add_new_icon_to_title', 20, 2);
