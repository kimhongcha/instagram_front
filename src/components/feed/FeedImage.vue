<template>
    <div class="feed_img">
        <div class="trans_inner">
            <div><img src="../../imgs/img_section/img01.jpg" alt="visual01"></div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'FeedImage'
}
</script>

<style>
.feed_img{
    overflow: hidden;
    max-width: 640px;
    border-right: 1px solid rgba(0,0,0,.0975);

}

.contents .feed_img{
    overflow: hidden;
    max-width: 598px;
    border-right: 1px solid rgba(0,0,0,.0975);

}

.feed_img .trans_inner{
    /*width: 2448px;*/
    font-size: 0px;
    margin: 0px auto;
}

.feed_img .trans_inner > div{
    width: 100%;
    display: inline-block;

}

.feed_img .trans_inner img{
    width: 100%;
    height: 100%;
}

</style>