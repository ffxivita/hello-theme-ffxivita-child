<?php
function hello_elementor_child_enqueue(): void
{
    wp_enqueue_style('hello-elementor-child-theme', get_stylesheet_directory_uri() . '/style.css', ['hello-elementor-theme-style'], '1.0', 'all');
}
function xivita_ad_css_enqueue(): void
{
	wp_enqueue_style('xivita-ad-css', get_stylesheet_directory_uri() . '/ads.css', ['hello-elementor-child-theme'], '1.2', 'all');
}

function xivita_css_enqueue(): void
{
	wp_enqueue_style('xivita-authors', get_stylesheet_directory_uri() . '/assets/css/authors.css', ['xivita-ad-css'], '1.2', 'all');
}

add_action('wp_enqueue_scripts', 'hello_elementor_child_enqueue', 30);
add_action('wp_enqueue_scripts','xivita_ad_css_enqueue', 99);
add_action('wp_enqueue_scripts', 'xivita_css_enqueue', 99);