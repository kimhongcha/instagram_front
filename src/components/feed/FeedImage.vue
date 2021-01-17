<template>
        <slick id="carousel"       
                ref="slick"
                :options="slickOptions"
                @afterChange="handleAfterChange"
                @beforeChange="handleBeforeChange"
                @breakpoint="handleBreakpoint"
                @destroy="handleDestroy"
                @edge="handleEdge"
                @init="handleInit"
                @reInit="handleReInit"
                @setPosition="handleSetPosition"
                @swipe="handleSwipe"
                @lazyLoaded="handleLazyLoaded"
                @lazyLoadError="handleLazeLoadError">
            <div><img src="../../imgs/img_section/img01.jpg" alt="visual01"></div>
            <div><img src="../../imgs/img_section/img01.jpg" alt="visual01"></div>
            
        </slick>
</template>

<script>
import Slick from "vue-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import '../../../node_modules/slick-carousel/slick/slick'

export default {
    name: 'FeedImage',
    components: {
      Slick
    },
    data() {
      return {
        slickOptions: {
          slidesToShow: 1   ,
        }
      }
    },
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        // Events listeners
        handleAfterChange(event, slick, currentSlide) {
            console.log('handleAfterChange', event, slick, currentSlide);
        },
        handleBeforeChange(event, slick, currentSlide, nextSlide) {
            console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        },
        handleBreakpoint(event, slick, breakpoint) {
            console.log('handleBreakpoint', event, slick, breakpoint);
        },
        handleDestroy(event, slick) {
            console.log('handleDestroy', event, slick);
        },
        handleEdge(event, slick, direction) {
            console.log('handleEdge', event, slick, direction);
        },
        handleInit(event, slick) {
            console.log('handleInit', event, slick);
        },
        handleReInit(event, slick) {
            console.log('handleReInit', event, slick);
        },
        handleSetPosition(event, slick) {
            console.log('handleSetPosition', event, slick);
        },
        handleSwipe(event, slick, direction) {
            console.log('handleSwipe', event, slick, direction);
        },
        handleLazyLoaded(event, slick, image, imageSource) {
            console.log('handleLazyLoaded', event, slick, image, imageSource);
        },
        handleLazeLoadError(event, slick, image, imageSource) {
            console.log('handleLazeLoadError', event, slick, image, imageSource);
        },
    }
}
</script>

<style>
/* .feed_img{
    overflow: hidden;
    width: 100%;
    border-right: 1px solid rgba(0,0,0,.0975);
    position: relative;

} */

#carousel {
}
#carousel .slick-list {
    border-radius: 12px;
}

#carousel .slick-slide {
    float: left;
    height: 100%;
    min-height: 1px;
}

#carousel .slick-slide img{
    width: 100%;
    height: 100%;
}

#carousel .slick-dots {
    list-style-type: none;
    
}

#carousel .slick-dots > li{
    float: left;
    margin: 0 auto;
}

#carousel .slick-dots > li > button {
    height: 100%;
}

</style>