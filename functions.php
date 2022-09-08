<?php
function hello_elementor_child_enqueue(): void
{
    wp_enqueue_style('hello-elementor-child-theme', get_stylesheet_directory_uri() . '/style.css', ['hello-elementor-theme-style'], '1.0', 'all');
}

add_action('wp_enqueue_scripts', 'hello_elementor_child_enqueue', 30);