<template>
    <div class="feed_like">
        <div class="feed_like_text">
            <span>홍성표님 외 </span>
            <span class="count">2,346</span>
            <span>명이 좋아합니다</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeedLike'
}
</script>

<style>

.feed_like{
    display: flex;
    font-weight: bold;
    font-size: 14px;
    color:#262626;
    padding: 5px 20px;
}

.feed_like_text {
    float: left;
}
</style>