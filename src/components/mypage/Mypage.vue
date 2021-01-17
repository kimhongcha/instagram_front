<template>
    <div class="mypage">
        <!-- top -->
        <MypageTop /> 

        <!-- profile pic -->
        <MypageProfilePic />

        <!-- information -->
        <MypageInformation />

        <!-- post navi -->
        <MypagePostNavi />

        <!-- post -->
        <MypagePost />
    </div>
</template>

<script>
import MypageTop from '@/components/mypage/MypageTop.vue'
import MypageProfilePic from '@/components/mypage/MypageProfilePic.vue'
import MypageInformation from '@/components/mypage/MypageInformation.vue'
import MypagePostNavi from '@/components/mypage/MypagePostNavi.vue'
import MypagePost from '@/components/mypage/MypagePost.vue'

export default {
    name:'MypageBoard',
    components: {
        MypageTop,
        MypageProfilePic,
        MypageInformation,
        MypagePostNavi,
        MypagePost
    }

}
</script>

<style>

</style>