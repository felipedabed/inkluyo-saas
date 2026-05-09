<?php
/**
 * Plugin Name: Inkluyo Accessibility Widget
 * Plugin URI: https://inkluyo.com/plugin
 * Description: WCAG 2.1 AA compliant accessibility widget. Add dyslexia mode, high contrast, text sizing, and more to your site in seconds. No coding required.
 * Version: 1.0.0
 * Author: Inkluyo Team
 * Author URI: https://github.com/felipedabed/inkluyo-saas
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: inkluyo-accessibility
 * Domain Path: /languages
 * Requires at least: 5.0
 * Requires PHP: 7.4
 */

/**
 * Exit if accessed directly.
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Define constants
define( 'INKLUYO_VERSION', '1.0.0' );
define( 'INKLUYO_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'INKLUYO_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

/**
 * Inject Inkluyo widget script into footer.
 */
add_action( 'wp_footer', 'inkluyo_inject_widget_script', 99 );

/**
 * Inject widget script with settings.
 */
function inkluyo_inject_widget_script() {
    $color    = get_option( 'inkluyo_color', '#6c47ff' );
    $position = get_option( 'inkluyo_position', 'bottom-right' );
    $lang     = get_option( 'inkluyo_lang', 'es' );
    $hide_badge = get_option( 'inkluyo_hide_badge', false );

    // CDN URL for the widget
    $script_url = 'https://inkluyo.com/widget/widget.iife.js';

    ?>
    <!-- Inkluyo Accessibility Widget v<?php echo esc_attr( INKLUYO_VERSION ); ?> -->
    <script
        src="<?php echo esc_url( $script_url ); ?>"
        data-inkluyo-widget
        data-primary-color="<?php echo esc_attr( $color ); ?>"
        data-position="<?php echo esc_attr( $position ); ?>"
        data-lang="<?php echo esc_attr( $lang ); ?>"
        <?php echo ( $hide_badge ? 'data-hide-badge="true"' : '' ); ?>
        defer
    ></script>
    <!-- End Inkluyo -->
    <?php
}

/**
 * Register admin menu.
 */
add_action( 'admin_menu', 'inkluyo_register_admin_menu' );

/**
 * Add menu item to WordPress admin.
 */
function inkluyo_register_admin_menu() {
    add_options_page(
        __( 'Inkluyo Settings', 'inkluyo-accessibility' ),
        __( 'Inkluyo', 'inkluyo-accessibility' ),
        'manage_options',
        'inkluyo-settings',
        'inkluyo_admin_page'
    );
}

/**
 * Register settings.
 */
add_action( 'admin_init', 'inkluyo_register_settings' );

/**
 * Register plugin settings.
 */
function inkluyo_register_settings() {
    register_setting( 'inkluyo_settings_group', 'inkluyo_color' );
    register_setting( 'inkluyo_settings_group', 'inkluyo_position' );
    register_setting( 'inkluyo_settings_group', 'inkluyo_lang' );
    register_setting( 'inkluyo_settings_group', 'inkluyo_hide_badge' );
}

/**
 * Render admin settings page.
 */
function inkluyo_admin_page() {
    if ( ! current_user_can( 'manage_options' ) ) {
        return;
    }

    // Enqueue color picker
    wp_enqueue_style( 'wp-color-picker' );
    wp_enqueue_script( 'wp-color-picker' );

    $color       = get_option( 'inkluyo_color', '#6c47ff' );
    $position    = get_option( 'inkluyo_position', 'bottom-right' );
    $lang        = get_option( 'inkluyo_lang', 'es' );
    $hide_badge  = get_option( 'inkluyo_hide_badge', false );
    ?>
    <div class="wrap">
        <h1><?php esc_html_e( 'Inkluyo Accessibility Settings', 'inkluyo-accessibility' ); ?></h1>
        <p><?php esc_html_e( 'Configure your accessibility widget to match your brand and serve your visitors better.', 'inkluyo-accessibility' ); ?></p>

        <form method="post" action="options.php">
            <?php settings_fields( 'inkluyo_settings_group' ); ?>
            <table class="form-table">
                <tr valign="top">
                    <th scope="row">
                        <label for="inkluyo_color"><?php esc_html_e( 'Primary Color', 'inkluyo-accessibility' ); ?></label>
                    </th>
                    <td>
                        <input
                            type="text"
                            id="inkluyo_color"
                            name="inkluyo_color"
                            value="<?php echo esc_attr( $color ); ?>"
                            class="inkluyo-color-picker"
                        />
                        <p class="description">
                            <?php esc_html_e( 'Choose the main color for the accessibility button and menu.', 'inkluyo-accessibility' ); ?>
                        </p>
                    </td>
                </tr>

                <tr valign="top">
                    <th scope="row">
                        <label for="inkluyo_position"><?php esc_html_e( 'Widget Position', 'inkluyo-accessibility' ); ?></label>
                    </th>
                    <td>
                        <select id="inkluyo_position" name="inkluyo_position">
                            <option value="bottom-right" <?php selected( $position, 'bottom-right' ); ?>>
                                <?php esc_html_e( 'Bottom Right', 'inkluyo-accessibility' ); ?>
                            </option>
                            <option value="bottom-left" <?php selected( $position, 'bottom-left' ); ?>>
                                <?php esc_html_e( 'Bottom Left', 'inkluyo-accessibility' ); ?>
                            </option>
                        </select>
                        <p class="description">
                            <?php esc_html_e( 'Choose where the floating accessibility button appears on your site.', 'inkluyo-accessibility' ); ?>
                        </p>
                    </td>
                </tr>

                <tr valign="top">
                    <th scope="row">
                        <label for="inkluyo_lang"><?php esc_html_e( 'Default Language', 'inkluyo-accessibility' ); ?></label>
                    </th>
                    <td>
                        <select id="inkluyo_lang" name="inkluyo_lang">
                            <option value="es" <?php selected( $lang, 'es' ); ?>>
                                <?php esc_html_e( 'Español (Spanish)', 'inkluyo-accessibility' ); ?>
                            </option>
                            <option value="en" <?php selected( $lang, 'en' ); ?>>
                                <?php esc_html_e( 'English', 'inkluyo-accessibility' ); ?>
                            </option>
                            <option value="pt" <?php selected( $lang, 'pt' ); ?>>
                                <?php esc_html_e( 'Português (Portuguese)', 'inkluyo-accessibility' ); ?>
                            </option>
                        </select>
                        <p class="description">
                            <?php esc_html_e( 'Set the default language for the accessibility widget.', 'inkluyo-accessibility' ); ?>
                        </p>
                    </td>
                </tr>

                <tr valign="top">
                    <th scope="row">
                        <label for="inkluyo_hide_badge"><?php esc_html_e( 'Hide "Powered by Inkluyo"', 'inkluyo-accessibility' ); ?></label>
                    </th>
                    <td>
                        <input
                            type="checkbox"
                            id="inkluyo_hide_badge"
                            name="inkluyo_hide_badge"
                            value="1"
                            <?php checked( $hide_badge, 1 ); ?>
                        />
                        <p class="description">
                            <?php esc_html_e( 'Check to hide the "Powered by Inkluyo" branding badge. We appreciate attribution!', 'inkluyo-accessibility' ); ?>
                        </p>
                    </td>
                </tr>
            </table>

            <?php submit_button( __( 'Save Settings', 'inkluyo-accessibility' ) ); ?>
        </form>

        <div style="margin-top: 40px; padding: 20px; background: #f5f5f5; border-radius: 4px;">
            <h2><?php esc_html_e( 'Need Help?', 'inkluyo-accessibility' ); ?></h2>
            <p>
                <?php esc_html_e( 'Visit our documentation or contact support at ', 'inkluyo-accessibility' ); ?>
                <a href="https://inkluyo.com" target="_blank" rel="noopener">inkluyo.com</a>
            </p>
        </div>
    </div>

    <script>
        jQuery( document ).ready( function( $ ) {
            $( '.inkluyo-color-picker' ).wpColorPicker();
        } );
    </script>
    <?php
}
