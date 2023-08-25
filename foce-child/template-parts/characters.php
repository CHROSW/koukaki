<?php
?>
<article id="characters">
    <div class="main-character">
        <h3>Les personnages</h3>
        <?php
        $main_character = $characters_query->posts[0];
        echo '<div class="swiper mySwiper">';
        echo '<div class="swiper-wrapper">';
        echo '<div  class="swiper-slide">';
        echo '<figure>';
        echo get_the_post_thumbnail( $main_character->ID, 'full' );
        echo '<figcaption>'. $main_character->post_title . '</figcaption>';
        echo '</figure>';
        echo '</div>';
        $characters_query->next_post();
        while ( $characters_query->have_posts() ) {
            $characters_query->the_post();
            echo '<div  class="swiper-slide">';
            echo '<figure>';
            echo get_the_post_thumbnail( get_the_ID(), 'full' );
            echo '<figcaption>';
            echo the_title();
            echo'</figcaption>';
            echo '</figure>';
            echo '</div>';
        }
        echo '</div>';
        echo '</div>';
        //echo '<div class="swiper-pagination"></div>';
        ?>
    </div>
</article>