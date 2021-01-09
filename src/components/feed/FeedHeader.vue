<template>
    <header class="top">
        <div class="user_container">
            <div class="profile_img">
                <img src="../../imgs/thumb.jpeg" alt="프로필 이미지">
            </div>
            <div class="user_name">
                <div class="nick_name m_text">KindTiger</div>
                <div class="country s_text">Seoul, South Korea</div>
            </div>
            
        </div>

        <div class="sprite_more_icon"></div>
    </header>
</template>

<script>
export default {

}
</script>

<style>


.user_container{
    display: flex;
    align-items: center;
}

.user_container .profile_img{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
}

.user_container .profile_img img{
    height: 100%;
    width: 100%;
}

.user_container .user_name{
    color:#262626;
}
.user_container .nick_name{
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
}


</style>