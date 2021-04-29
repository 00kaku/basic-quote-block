<?php
/**
 * Plugin Name:       Basics QUote Block Plugin
 * Plugin URI:        https://github.com/00kaku/basic-quote-block
 * Description:       A basic block to enter a quote block with the author name, image and the citation of the quote.
 * Version:           1.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Akash Sharma
 * Author URI:        https://github.com/00kaku
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html

 * @package           BasicQuoteBlock
 * @author            Akash Sharma
 * @copyright         2019 Akash Sharma
 * @license           GPL-2.0-or-later
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
