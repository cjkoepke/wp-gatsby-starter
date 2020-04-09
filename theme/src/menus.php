<?php

namespace WGS;

/**
 * Set up theme menus for Gatsby retrieval.
 * 
 * @since 0.1.0
 */
add_action('after_setup_theme', function () {
    register_nav_menus([
        'primary' => __('Primary Menu', 'wp-tailwind')
    ]);
});
