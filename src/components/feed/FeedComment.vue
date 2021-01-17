<template>
    
    <div class="comment_container">
        <div class="comment">
            <span class="nick_name">dongdong2</span>
            <span class="m_text">강아지가 너무 귀여워요~!</span>
        </div>
        <div class="small_heart">
            <div class="sprite_small_heart_icon_outline"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeedComment'

}
</script>

<style scoped>
.comment{
    display: flex;
}

.comment .nick_name {
    float: left;
    margin-left: 20px;
}

.comment .m_text {
    float: left;
    margin-left: 20px;
    overflow: hidden;
}
</style>