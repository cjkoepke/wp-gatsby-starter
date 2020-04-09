<?php

namespace WGS;

/**
 * Add theme supports here for Gatsby retrieval.
 *
 * @since 0.1.0
 */
add_action('after_setup_theme', function () {
	add_theme_support('post-thumbnails');
	add_theme_support('html5', [
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	]);
});
