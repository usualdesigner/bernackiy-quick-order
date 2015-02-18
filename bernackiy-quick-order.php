<?php
/**
 * Plugin Name: Bernackiy Quick Order
 * Version: 1.0.0
 * Author: Aleksey Bernackiy
 * Author URI: http://bernackiy.name
 */

wp_enqueue_script('jquery');

wp_enqueue_script('jquery_cookie', plugins_url('assets/jquery-cookie/src/jquery.cookie.js', __FILE__));
wp_enqueue_script('bernackiy_quick_order_js', plugins_url('assets/bernackiy-quick-order.js', __FILE__));

class BernackiyQuickOrderPlugin
{
    function init($attributes)
    {
        //
    }

    public static function render($view)
    {
        $template_path = plugins_url('/', __FILE__) . '/templates/' . $view . '.php';
        ob_start();
        include($template_path);
        $output = ob_get_clean();
        return $output;
    }
}
