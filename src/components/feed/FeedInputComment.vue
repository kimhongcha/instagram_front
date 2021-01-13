<template>
    <div class="comment_field">
        <section>
            <form action="post">
                <textarea   class="comment"
                            name="comment" 
                            id="" 
                            cols="30" 
                            rows="1"
                            placeholder="댓글 달기...">

                </textarea>
                <button class="upload_btn m_text">게시</button>

            </form>
        </section>
    </div>
</template>

<script>
export default {
    name: 'FeedInputComment'
}
</script>

<style scoped>
.comment_field {
    display: flex;
    font-size: 20px;
}

.comment {
    height: 100%;
}
</style>