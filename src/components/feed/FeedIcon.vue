<template>
    <div class="feed_icons">
        <div class="left_icons">
            <div class="heart_btn">
                <div class="sprite_heart_icon_outline" data-name="heartbeat"></div>
            </div>
            <div class="sprite_bubble_icon"></div>

        </div>
        <div class="right_icon">
            <div class="sprite_bookmark_outline" data-name="bookmark"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeedIcon'
}
</script>

<style>
.feed_icons{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

.feed_icons .left_icons{
    display: flex;
}

.feed_icons .left_icons > div{
    margin-right: 10px;
    cursor: pointer;


}

.feed_icons .left_icons > div.on{

}

.sprite_heart_icon_outline.on{
    background: url('../../imgs/background01.png') no-repeat -26px -261px;
    animation:heart_bounce 1s linear;
}


</style>