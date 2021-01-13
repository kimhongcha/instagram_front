<template>
    <div class="feed">
        <!-- 피드 헤더 -->
        <FeedHeader /> 

        <!-- 피드 이미지 -->
        <FeedImage />

        <!-- 피드 버튼 -->
        <FeedIcon />

        <!-- 피드 좋아요 -->
        <FeedLike />

        <!-- 피드 댓글 -->
        <FeedComment />

        <!-- 피드 게시 시간 -->
        <div class="timer">1시간 전</div>

        <!-- 피드 댓글 입력 -->
        <FeedInputComment />

    </div>
</template>

<script>
import FeedHeader from '@/components/feed/FeedHeader.vue'
import FeedImage from '@/components/feed/FeedImage.vue'
import FeedIcon from '@/components/feed/FeedIcon.vue'
import FeedLike from '@/components/feed/FeedLike.vue'
import FeedComment from '@/components/feed/FeedComment.vue'
import FeedInputComment from '@/components/feed/FeedInputComment.vue'

export default {
    name: 'FeedBoard',
    components: {
        FeedHeader,
        FeedImage,
        FeedIcon,
        FeedLike,
        FeedComment,
        FeedInputComment
    }

}
</script>

<style>

.feed {
    max-width: 640px;
    display: block;
    border: 1px solid rgba(0,0,0,.0975);
    border-radius: 3px;
    background: #fff;
    margin: 0px auto;

}

.timer {
    text-align: left;
}
</style>