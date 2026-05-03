<?php
/**
 * Plugin Name: Inkluyo Accessibility
 * Plugin URI: https://inkluyo.com
 * Description: The 1-line accessibility widget that adapts your site to your visitors' needs without touching a single component.
 * Version: 1.0.0
 * Author: Inkluyo
 * Author URI: https://inkluyo.com
 * License: GPL2
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

// 1. Hook to wp_footer to inject the script
add_action('wp_footer', 'inkluyo_inject_widget_script');

function inkluyo_inject_widget_script() {
    $color = get_option('inkluyo_color', '#6c47ff');
    $position = get_option('inkluyo_position', 'bottom-right');
    $lang = get_option('inkluyo_lang', 'es');

    // URL of the global CDN
    $script_url = "https://cdn.inkluyo.com/v1/widget.js";

    echo "\n<!-- Inkluyo Accessibility Widget -->\n";
    echo "<script \n";
    echo "  src=\"" . esc_url($script_url) . "\" \n";
    echo "  data-inkluyo-widget \n";
    echo "  data-primary-color=\"" . esc_attr($color) . "\" \n";
    echo "  data-position=\"" . esc_attr($position) . "\" \n";
    echo "  data-lang=\"" . esc_attr($lang) . "\" \n";
    echo "  defer>\n";
    echo "</script>\n";
    echo "<!-- End Inkluyo -->\n";
}

// 2. Register settings menu
add_action('admin_menu', 'inkluyo_register_settings_menu');

function inkluyo_register_settings_menu() {
    add_options_page(
        'Inkluyo',
        'Inkluyo',
        'manage_options',
        'inkluyo-settings',
        'inkluyo_settings_page_html'
    );
}

// 3. Register settings fields
add_action('admin_init', 'inkluyo_register_settings');

function inkluyo_register_settings() {
    register_setting('inkluyo_settings_group', 'inkluyo_color');
    register_setting('inkluyo_settings_group', 'inkluyo_position');
    register_setting('inkluyo_settings_group', 'inkluyo_lang');
}

// 4. HTML for the settings page
function inkluyo_settings_page_html() {
    if (!current_user_can('manage_options')) {
        return;
    }
    
    // Add WP Color Picker script
    wp_enqueue_style('wp-color-picker');
    wp_enqueue_script('wp-color-picker');
    ?>
    <div class="wrap">
        <h1>Inkluyo Accessibility Settings</h1>
        <p>Configure your accessibility widget appearance and language.</p>
        <form method="post" action="options.php">
            <?php settings_fields('inkluyo_settings_group'); ?>
            <table class="form-table">
                <tr valign="top">
                    <th scope="row">Primary Color</th>
                    <td>
                        <input type="text" name="inkluyo_color" value="<?php echo esc_attr(get_option('inkluyo_color', '#6c47ff')); ?>" class="inkluyo-color-picker" />
                        <p class="description">Choose the main color for the floating button and accents.</p>
                    </td>
                </tr>
                <tr valign="top">
                    <th scope="row">Position</th>
                    <td>
                        <select name="inkluyo_position">
                            <option value="bottom-right" <?php selected(get_option('inkluyo_position', 'bottom-right'), 'bottom-right'); ?>>Bottom Right</option>
                            <option value="bottom-left" <?php selected(get_option('inkluyo_position'), 'bottom-left'); ?>>Bottom Left</option>
                        </select>
                    </td>
                </tr>
                <tr valign="top">
                    <th scope="row">Language</th>
                    <td>
                        <select name="inkluyo_lang">
                            <option value="es" <?php selected(get_option('inkluyo_lang', 'es'), 'es'); ?>>Spanish (es)</option>
                            <option value="en" <?php selected(get_option('inkluyo_lang'), 'en'); ?>>English (en)</option>
                        </select>
                    </td>
                </tr>
            </table>
            <?php submit_button('Save Changes'); ?>
        </form>
    </div>
    <script>
        jQuery(document).ready(function($){
            $('.inkluyo-color-picker').wpColorPicker();
        });
    </script>
    <?php
}
