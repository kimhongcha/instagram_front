<template>
    <div class="comment_field">
        <section class="comment_section">
            <form action="post" class="comment_form">
                <textarea   class="comment"
                            name="comment" 
                            id="comment"
                            autocomplete="off" 
                            autocorrect="off"
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
    padding: 20px 0px 20px 20px;
}

.comment_section {
    height: 100%;
    width: 100%;
    font-size: 15px;
}

.comment_form {
    display: flex;
    height: inherit;
}

.comment_section  textarea {
    width: 94%;
    max-width: 94%;
    border: 0;
    outline: 0;
    font-size: inherit;
    border-top: 1px solid rgba(var(--ce3,239,239,239),1);
    color: #8e8e8e;
}

.upload_btn {
    border: 0;
    color: #0095f6;
    background-color: #ffffff;
    display: inline;
    padding: 0;
    position: relative;
}
</style>