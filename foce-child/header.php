<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
		<nav id="site-navigation" class="main-navigation">   
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span class="line">X</span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
            <div class="burger-title menu-toggle">
                <span>Fleurs d'orangers & chats errants</span>  
            </div>
            <ul>
                <div class="left-animation-burger menu-toggle">
                    <div class="orchid-burger"></div>
                    <div class="cat1-burger"></div>
                    <div class="flower-burger"></div>
                    <div class="cat2-burger"></div>
                </div>
                <img class="img-title-burger menu-toggle" src="\koukaki\wp-content\themes\foce\assets\images\logo.png" alt="logo"/>
                <li><a href="#story">Histoire</a></li>
                <li><a href="#characters">Personnages</a></li>
                <li class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></li>
                <li><a href="#place">Lieu</a></li>
                <li><a href="#studio">Studio Koukaki</a></li>
                <div class="right-animation-burger menu-toggle">
                    <div class="sunflower-burger"></div>
                    <div class="cat3-burger"></div>
                    <div class="randomflower-burger"></div>
                    <div class="hibiscusfooter-burger"></div>
                </div>
                <span class="footer-burger-menu menu-toggle">STUDIO KOUKAKI</span>
            </ul>
            
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
