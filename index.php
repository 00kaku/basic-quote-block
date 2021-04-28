<?php
/**
 * Plugin Name: Basic Quote Block
 * Description: A basic quote block.
 * Author: Akash Sharma
 * Author URI: http://github.com/00kaku

 * @package 'basic'
 * Version: 1.0
 */

/**
 * Function to enqueue scripts for the block.

 * @return void
 */
function enqueue_scripts() {
	$asset_file = is_readable( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' ) && require plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
	wp_register_script(
		'basic-quote-block',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
	wp_register_style(
		'basic-quote-block-style-editor',
		plugins_url( 'src/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'src/editor.css' )
	);

	wp_register_style(
		'basic-quote-block-style',
		plugins_url( 'src/style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'src/style.css' )
	);

	register_block_type(
		'basic/quote-block',
		array(
			'api_version'   => 2,
			'editor_script' => 'basic-quote-block',
			'style'         => 'basic-quote-block-style',
			'editor_style'  => 'basic-quote-block-style-editor',
		)
	);
}

add_action( 'init', 'enqueue_scripts' );
