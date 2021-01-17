<template>
    <div class="top">
        <a href="feedboard">
            <svg aria-label="피드" class="go_mypage" fill="#262626" height="22" viewBox="0 0 48 48" width="22">
            <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path>
            </svg>
        </a>
        <a class="space"></a>
        <a href="mypageboard">
            <svg aria-label="마이페이지" class="go_feed" fill="#262626" height="22" viewBox="0 0 32 32" width="22">
                <path d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
            </svg>
        </a>
        <a>
            <input class="search" placeholder="검색"/>
        </a>
        <a href="/">
            <button id="logout" class="logout">로그아웃</button>
        </a>
    </div>
</template>

<script>
export default {
    name: 'Top'
}
</script>

<style scoped>

.top{
    border-bottom: 1px solid #c7c7c7;
    padding: 15px 0px 15px 0px;
}
.space{
    margin-left:22px;
}
.search{
    border: 1px solid #bdbdbd;
    border-radius: 5px;
    text-align: center;
    background: #fafafa;
    padding: 7px 8px 7px 8px;
    margin-left:20%;
    margin-right:20%;
    vertical-align: super;
}
.logout{
    cursor: pointer;
    border: 5px solid #000000;
    border-radius: 30px;
    background: #ffffff;
    color: #000000;
    border-width: 1px;
    line-height: 28px;
    padding: 2px 10px 2px 10px;
    vertical-align: super;
}

</style>