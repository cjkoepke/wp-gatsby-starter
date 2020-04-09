<?php

namespace WGS;

define('WGS_VERSION', wp_get_theme()->version);
define('WGS_DIR', __DIR__);
define('WGS_URL', get_template_directory_uri());

/**
 * Setup the theme default settings.
 * 
 * @since 0.1.0
 */
require_once(WGS_DIR . '/src/support.php');
require_once(WGS_DIR . '/src/menus.php');
require_once(WGS_DIR . '/src/blocks.php');
