<?php

namespace WGS;

add_filter('allowed_block_types', function () {
    return [
        'core/paragraph',
        'core/heading',
        'core/code',
        'core/image',
        'core/list',
        'core/blockquote',
        'core/button',
    ];
});
