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
        <div class="timer"> {{ getBeforeTime() }}</div>

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
    },
    props: {
        author: {
            type: String,
            required: true
        },
        like: {
            type: Array,
            required: false
        },
        image: {
            type: Array,
            required: true
        },
        comment: {
            type: Array,
            required: false
        },
        createdAt: {
            type: String,
            required: true
        }
    },
    computed: {
        makeTime() {
            return new Date(this.createdAt)
        },
        yearFromMillisec() {
            return  12 * 24 * 3600 * 1000;
        },
        monthFromMillsec() {
            return 30 * 24 * 3600 * 1000;
        },
        dayFromMillisec() {
            return 24 * 3600 * 1000;
        },
        hourFromMillisec() {
            return 3600 * 1000;
        },
        minutesFromMillisec() {
            return 60 * 1000;
        }

    },
    methods: {
        getBeforeTime() {
            let currentTime = new Date()
            let diffTime = currentTime - this.makeTime
            let timeString = ''

            if(diffTime / this.yearFromMillisec >= 1) { // 년단위
                timeString += Math.floor(diffTime / this.yearFromMillisec).toString() + '년'
            }
            else if(diffTime / this.monthFromMillsec >= 1) { // 월단위
                timeString += Math.floor(diffTime / this.monthFromMillsec).toString() + '월'
            }
            else if(diffTime / this.dayFromMillisec >= 1) { // 일단위
                timeString += Math.floor(diffTime / this.dayFromMillisec).toString() + '일'
            }
            else if(diffTime / this.hourFromMillisec >= 1) { // 시단위
                timeString += Math.floor(diffTime / this.hourFromMillisec).toString() + '시간'
            }
            else if(diffTime / this.minutesFromMillisec >= 1) { // 분단위
                timeString += Math.floor(diffTime / this.minutesFromMillisec).toString() + '분'
            }
            else { // 초단위
                timeString += '방금'
            }

            timeString += ' 전'

            return timeString;
        }
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
    margin-bottom: 60px;

}

.timer {
    text-align: left;
}
</style>